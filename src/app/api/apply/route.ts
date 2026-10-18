import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECEIVER = process.env.EMAIL_RECEIVER || "info@veriton.si";
const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function smtpConfigured() {
  return Boolean(
    (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) ||
      (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD)
  );
}

function createTransport() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const linkedin = String(formData.get("linkedin") || "").trim();
    const github = String(formData.get("github") || "").trim();
    const role = String(formData.get("role") || "AI Engineer").trim();
    const note = String(formData.get("note") || "").trim();
    const cv = formData.get("cv");

    if (!name || !email || !linkedin || !github || !(cv instanceof File)) {
      return NextResponse.json(
        {
          message:
            "Please provide your name, email, LinkedIn, GitHub, and CV.",
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!isHttpUrl(linkedin) || !isHttpUrl(github)) {
      return NextResponse.json(
        { message: "LinkedIn and GitHub must be valid profile URLs." },
        { status: 400 }
      );
    }

    if (cv.size === 0) {
      return NextResponse.json(
        { message: "Please upload a CV file." },
        { status: 400 }
      );
    }

    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { message: "CV must be 5 MB or smaller." },
        { status: 400 }
      );
    }

    const typeOk =
      ALLOWED_CV_TYPES.has(cv.type) ||
      /\.(pdf|doc|docx)$/i.test(cv.name || "");
    if (!typeOk) {
      return NextResponse.json(
        { message: "CV must be a PDF or Word document (.pdf, .doc, .docx)." },
        { status: 400 }
      );
    }

    if (!smtpConfigured()) {
      return NextResponse.json(
        {
          code: "NOT_CONFIGURED",
          message:
            "Email is not configured on the server yet. Please write to info@veriton.si directly.",
        },
        { status: 503 }
      );
    }

    const transport = createTransport();
    const fromUser =
      process.env.SMTP_USER || process.env.EMAIL_USER || RECEIVER;
    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    const safeFilename = (cv.name || "cv.pdf").replace(/[^\w.\-()+ ]/g, "_");

    await transport.sendMail({
      from: `"Veriton Careers" <${fromUser}>`,
      to: RECEIVER,
      replyTo: email,
      subject: `Application — ${role} — ${name}`,
      text: [
        `Role: ${role}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `LinkedIn: ${linkedin}`,
        `GitHub: ${github}`,
        note ? `\nNote:\n${note}` : "",
        `\nCV attached: ${safeFilename}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:sans-serif;line-height:1.5;color:#14181f">
          <p><strong>Role:</strong> ${escapeHtml(role)}</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>LinkedIn:</strong> <a href="${escapeHtml(linkedin)}">${escapeHtml(linkedin)}</a></p>
          <p><strong>GitHub:</strong> <a href="${escapeHtml(github)}">${escapeHtml(github)}</a></p>
          ${
            note
              ? `<p><strong>Note:</strong></p><p>${escapeHtml(note).replace(/\n/g, "<br/>")}</p>`
              : ""
          }
          <p><strong>CV:</strong> ${escapeHtml(safeFilename)} (attached)</p>
        </div>
      `,
      attachments: [
        {
          filename: safeFilename,
          content: cvBuffer,
          contentType: cv.type || "application/octet-stream",
        },
      ],
    });

    return NextResponse.json({ ok: true, message: "Application sent." });
  } catch (err) {
    console.error("[apply]", err);
    return NextResponse.json(
      {
        message:
          "Could not send your application right now. Please email info@veriton.si instead.",
      },
      { status: 500 }
    );
  }
}

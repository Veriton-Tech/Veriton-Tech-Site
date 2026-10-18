import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECEIVER = process.env.EMAIL_RECEIVER || "info@veriton.si";

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

  // Gmail / Google Workspace style
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as Record<string, unknown>;
      name = String(body.name || "").trim();
      email = String(body.email || "").trim();
      message = String(body.message || "").trim();
    } else {
      const formData = await request.formData();
      name = String(formData.get("name") || "").trim();
      email = String(formData.get("email") || "").trim();
      message = String(formData.get("message") || "").trim();
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please fill out all fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
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

    await transport.sendMail({
      from: `"Veriton Contact" <${fromUser}>`,
      to: RECEIVER,
      replyTo: email,
      subject: `Veriton contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;line-height:1.5;color:#14181f">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true, message: "Message sent." });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      {
        message:
          "Could not send your message right now. Please email info@veriton.si instead.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

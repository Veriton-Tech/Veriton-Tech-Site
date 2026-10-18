import { NextResponse } from "next/server";

const RECEIVER =
  process.env.EMAIL_RECEIVER ||
  process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ||
  "info@veriton.si";

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

    const endpoint =
      process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ||
      `https://formsubmit.co/ajax/${RECEIVER}`;

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Veriton contact — ${name}`,
        _template: "table",
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      let detail = text;
      try {
        const parsed = JSON.parse(text) as { message?: string };
        detail = parsed.message || text;
      } catch {
        /* keep raw text */
      }
      return NextResponse.json(
        {
          message:
            detail ||
            "Could not send your message right now. Please email info@veriton.si instead.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Message sent." });
  } catch {
    return NextResponse.json(
      {
        message:
          "Could not send your message right now. Please email info@veriton.si instead.",
      },
      { status: 500 }
    );
  }
}

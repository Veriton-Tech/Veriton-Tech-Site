"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa";

function openMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Project inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );
  window.location.href = `mailto:info@veriton.si?subject=${subject}&body=${body}`;
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get("sent") === "1") {
      setStatus("success");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const raw = await res.text();
      let data: { message?: string; code?: string } = {};
      try {
        data = JSON.parse(raw) as { message?: string; code?: string };
      } catch {
        // Never surface Cloudflare HTML / non-JSON to the UI
        data = {};
      }

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      // SMTP not wired yet — open the user's mail client as a clean fallback
      if (data.code === "NOT_CONFIGURED" || res.status === 503) {
        openMailto(trimmedName, trimmedEmail, trimmedMessage);
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      setErrorMessage(
        data.message ||
          "Could not send your message. Please email info@veriton.si instead."
      );
      setStatus("error");
    } catch {
      openMailto(trimmedName, trimmedEmail, trimmedMessage);
      setErrorMessage(null);
      setStatus("success");
    }
  };

  const inputClass =
    "w-full border border-[#d9dde3] bg-[#f7f6f3] px-4 py-3 text-[#14181f] placeholder:text-[#9aa8b8] transition-colors focus:border-[#12263a] focus:bg-white focus:outline-none";

  return (
    <>
      <form
        className="space-y-5"
        onSubmit={handleSubmit}
        aria-describedby="contact-status"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-[0.8rem] text-[#5e6670]"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-[0.8rem] text-[#5e6670]"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="you@email.com"
              required
              autoComplete="email"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-[0.8rem] text-[#5e6670]"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
            rows={6}
            placeholder="Tell us about your project..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>

      <div id="contact-status" className="mt-4 text-sm" role="status">
        {status === "success" ? (
          <p className="text-[#2c4a6e]">
            Thanks — your message was sent. We&apos;ll get back to you shortly.
          </p>
        ) : status === "error" || errorMessage ? (
          <p className="text-red-700">
            {errorMessage || "Failed to send message."}{" "}
            <a
              href="mailto:info@veriton.si"
              className="underline underline-offset-2"
            >
              Email info@veriton.si
            </a>
          </p>
        ) : null}
      </div>
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="w-full bg-[#f7f6f3]">
      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(44,74,110,0.35),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">Contact</p>
          <h1 className="font-display max-w-2xl text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em]">
            Let&apos;s talk
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.08rem] leading-relaxed text-[#b8c0ca]">
            Share a few details about your project. We&apos;ll get back with a
            clear next step.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-4">
            <p className="section-label mb-3">Reach us</p>
            <h2 className="font-display text-[1.75rem] tracking-[-0.02em] text-[#14181f] mb-6">
              Direct channels
            </h2>

            <div className="space-y-5">
              <div className="border border-[#d9dde3] bg-white p-5">
                <p className="mb-1 text-[0.8rem] text-[#5e6670]">Email</p>
                <a
                  href="mailto:info@veriton.si"
                  className="text-[0.98rem] text-[#14181f] transition-opacity hover:opacity-70 break-all"
                >
                  info@veriton.si
                </a>
              </div>
              <div className="border border-[#d9dde3] bg-white p-5">
                <p className="mb-1 text-[0.8rem] text-[#5e6670]">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/company/veriton-tech"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Veriton on LinkedIn"
                  className="inline-flex items-center gap-2 text-[0.98rem] text-[#14181f] transition-opacity hover:opacity-70"
                >
                  <FaLinkedinIn size={14} aria-hidden />
                  Veriton Tech
                </a>
              </div>
              <div className="border border-[#d9dde3] bg-white p-5">
                <p className="mb-1 text-[0.8rem] text-[#5e6670]">Services</p>
                <Link
                  href="/services"
                  className="text-[0.98rem] text-[#14181f] transition-opacity hover:opacity-70"
                >
                  Browse what we build →
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="border border-[#d9dde3] bg-white p-6 sm:p-8">
              <p className="section-label mb-2">Message</p>
              <h2 className="font-display text-[1.75rem] tracking-[-0.02em] text-[#14181f] mb-6">
                Send a note
              </h2>
              <Suspense fallback={<p className="text-[#5e6670]">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

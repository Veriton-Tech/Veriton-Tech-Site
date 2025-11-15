"use client";
import React, { useState } from "react";

// Supports posting to FormSubmit.co when configured via environment:
// - NEXT_PUBLIC_FORMSUBMIT_ENDPOINT (full endpoint, e.g. https://formsubmit.co/ajax/youremail)
// - NEXT_PUBLIC_FORMSUBMIT_EMAIL (email address; will post to https://formsubmit.co/ajax/{email})
// Falls back to NEXT_PUBLIC_FORMSPREE_ENDPOINT if set, then to local /api/contact.

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const FORM_SUBMIT_ENDPOINT = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT || (process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ? `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL}` : null);
  const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("sending");

    // Choose endpoint precedence: FormSubmit > Formspree > local API
    let endpoint: string;
    if (FORM_SUBMIT_ENDPOINT) endpoint = FORM_SUBMIT_ENDPOINT;
    else if (FORMSPREE) endpoint = FORMSPREE;
    else endpoint = "/api/contact";

    try {
      // Use FormData for FormSubmit.co AJAX endpoint compatibility
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("message", message.trim());

      // For FormSubmit.co AJAX endpoint, they expect a normal POST (FormData) and return JSON
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          // If hitting Formspree or local API which expect JSON, they will still accept FormData on many setups.
          Accept: "application/json",
        } as HeadersInit,
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Try to parse JSON error message if provided
        let text = await res.text();
        try {
          const obj = JSON.parse(text);
          text = obj.message || JSON.stringify(obj);
        } catch {}
        setErrorMessage(text || "Failed to send message. Please try again later.");
        setStatus("error");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message || "Network error");
      setStatus("error");
    }
  };

  const using = FORM_SUBMIT_ENDPOINT ? "FormSubmit.co" : FORMSPREE ? "Formspree" : "Local API";

  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
      <div className="max-w-[700px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">Contact Us</h2>
          <p className="text-base text-black/60 dark:text-white/60">We&apos;d love to hear from you! Reach out for a free consultation or any questions.</p>
        </div>
        <div className="bg-white dark:bg-cyan-900/40 rounded-3xl shadow-xl p-8 sm:p-12 text-lg text-black/80 dark:text-white/80">
          <form className="space-y-6" onSubmit={handleSubmit} aria-describedby="contact-status">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-cyan-700 bg-blue-50 dark:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-cyan-700 bg-blue-50 dark:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-cyan-700 bg-blue-50 dark:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
                placeholder="How can we help you?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow hover:from-blue-700 hover:to-cyan-700 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div id="contact-status" className="mt-4 text-center text-sm" role="status">
            {status === "success" ? (
              <div className="text-green-600">Thanks — your message was sent via {using}. We will get back to you shortly.</div>
            ) : status === "error" ? (
              <div className="text-red-600">{errorMessage || "Failed to send message."}</div>
            ) : errorMessage ? (
              <div className="text-red-600">{errorMessage}</div>
            ) : null}
          </div>

          <div className="mt-8 text-center text-sm text-black/60 dark:text-white/60">
            Or email us at <a href="mailto:veritoninfo@gmail.com" className="text-blue-600 dark:text-cyan-400 underline font-semibold">veritoninfo@gmail.com</a>
          </div>

          <div className="mt-4 text-xs text-neutral-500">Using: <strong>{using}</strong>{FORM_SUBMIT_ENDPOINT ? <span className="block break-all">Endpoint: <code>{FORM_SUBMIT_ENDPOINT}</code></span> : null}</div>
        </div>
      </div>
    </main>
  );
}

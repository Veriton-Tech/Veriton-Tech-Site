"use client";

import React, { useState } from "react";
import Link from "next/link";

type ApplyFormProps = {
  role?: string;
};

const inputClass =
  "w-full border border-[#d9dde3] bg-[#f7f6f3] px-4 py-3 text-[#14181f] placeholder:text-[#9aa8b8] transition-colors focus:border-[#12263a] focus:bg-white focus:outline-none";

export default function ApplyForm({ role = "AI Engineer" }: ApplyFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [note, setNote] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedLinkedin = linkedin.trim();
    const trimmedGithub = github.trim();

    if (!trimmedName || !trimmedEmail || !trimmedLinkedin || !trimmedGithub || !cv) {
      setErrorMessage(
        "Please provide your name, email, LinkedIn, GitHub, and CV."
      );
      return;
    }

    setStatus("sending");

    try {
      const body = new FormData();
      body.set("name", trimmedName);
      body.set("email", trimmedEmail);
      body.set("linkedin", trimmedLinkedin);
      body.set("github", trimmedGithub);
      body.set("role", role);
      body.set("note", note.trim());
      body.set("cv", cv);

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      const raw = await res.text();
      let data: { message?: string; code?: string } = {};
      try {
        data = JSON.parse(raw) as { message?: string; code?: string };
      } catch {
        data = {};
      }

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setLinkedin("");
        setGithub("");
        setNote("");
        setCv(null);
        return;
      }

      setErrorMessage(
        data.message ||
          "Could not send your application. Please email info@veriton.si instead."
      );
      setStatus("error");
    } catch {
      setErrorMessage(
        "Could not send your application. Please email info@veriton.si instead."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-6" role="status">
        <p className="text-[1.05rem] leading-relaxed text-[#14181f]">
          Thanks — your application was sent. We&apos;ll review it and get back
          to you.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/careers" className="btn-primary">
            Back to careers
          </Link>
          <Link
            href="/"
            className="text-[0.9rem] text-[#2c4a6e] underline-offset-4 hover:underline self-center"
          >
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="apply-name"
            className="mb-2 block text-[0.8rem] text-[#5e6670]"
          >
            Name
          </label>
          <input
            id="apply-name"
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
            htmlFor="apply-email"
            className="mb-2 block text-[0.8rem] text-[#5e6670]"
          >
            Email
          </label>
          <input
            id="apply-email"
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
          htmlFor="apply-linkedin"
          className="mb-2 block text-[0.8rem] text-[#5e6670]"
        >
          LinkedIn profile
        </label>
        <input
          id="apply-linkedin"
          type="url"
          name="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className={inputClass}
          placeholder="https://www.linkedin.com/in/…"
          required
        />
      </div>

      <div>
        <label
          htmlFor="apply-github"
          className="mb-2 block text-[0.8rem] text-[#5e6670]"
        >
          GitHub profile
        </label>
        <input
          id="apply-github"
          type="url"
          name="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className={inputClass}
          placeholder="https://github.com/…"
          required
        />
      </div>

      <div>
        <label
          htmlFor="apply-cv"
          className="mb-2 block text-[0.8rem] text-[#5e6670]"
        >
          CV (PDF or Word, max 5 MB)
        </label>
        <input
          id="apply-cv"
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => setCv(e.target.files?.[0] ?? null)}
          className="block w-full text-[0.9rem] text-[#14181f] file:mr-3 file:border-0 file:bg-[#12263a] file:px-3 file:py-2 file:text-[0.85rem] file:font-medium file:text-white"
          required
        />
        {cv ? (
          <p className="mt-2 text-[0.8rem] text-[#5e6670]">{cv.name}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="apply-note"
          className="mb-2 block text-[0.8rem] text-[#5e6670]"
        >
          Short note (optional)
        </label>
        <textarea
          id="apply-note"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={inputClass}
          rows={4}
          placeholder="A few lines about why you're a fit…"
        />
      </div>

      <div id="apply-status" className="text-sm" role="status">
        {errorMessage ? (
          <p className="text-red-700">
            {errorMessage}{" "}
            <a
              href="mailto:info@veriton.si"
              className="underline underline-offset-2"
            >
              Email info@veriton.si
            </a>
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}

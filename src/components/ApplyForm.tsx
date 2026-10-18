"use client";

import React, { useEffect, useId, useRef, useState } from "react";

type ApplyFormProps = {
  role?: string;
  open: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full border border-[#d9dde3] bg-[#f7f6f3] px-4 py-3 text-[#14181f] placeholder:text-[#9aa8b8] transition-colors focus:border-[#12263a] focus:bg-white focus:outline-none";

export default function ApplyForm({
  role = "AI Engineer",
  open,
  onClose,
}: ApplyFormProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 40);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "sending") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, status]);

  const reset = () => {
    setName("");
    setEmail("");
    setLinkedin("");
    setGithub("");
    setNote("");
    setCv(null);
    setErrorMessage(null);
    setStatus("idle");
  };

  const handleClose = () => {
    if (status === "sending") return;
    reset();
    onClose();
  };

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0c1826]/55 backdrop-blur-[2px]"
        aria-label="Close application form"
        onClick={handleClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[min(92vh,780px)] w-full max-w-lg overflow-y-auto border border-[#d9dde3] bg-white shadow-[0_24px_64px_rgba(12,24,38,0.28)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#e8ecf1] px-5 py-4 sm:px-6">
          <div>
            <p className="section-label mb-1">Application</p>
            <h2
              id={titleId}
              className="font-display text-[1.55rem] tracking-[-0.02em] text-[#14181f]"
            >
              Apply — {role}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="mt-1 text-[0.9rem] text-[#5e6670] transition-opacity hover:opacity-70"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="px-5 py-5 sm:px-6 sm:py-6">
          {status === "success" ? (
            <div className="space-y-5" role="status">
              <p className="text-[1.05rem] leading-relaxed text-[#14181f]">
                Thanks — your application was sent. We&apos;ll review it and get
                back to you.
              </p>
              <button type="button" className="btn-primary" onClick={handleClose}>
                Done
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="apply-name"
                    className="mb-2 block text-[0.8rem] text-[#5e6670]"
                  >
                    Name
                  </label>
                  <input
                    ref={firstFieldRef}
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
                  rows={3}
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
          )}
        </div>
      </div>
    </div>
  );
}

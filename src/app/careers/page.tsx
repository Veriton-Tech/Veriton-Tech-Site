import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Veriton",
  alternates: {
    canonical: "https://www.veriton.si/careers",
  },
};

const positions = [
  {
    title: "AI Engineer",
    description:
      "Design and ship practical AI features into real products — from LLM-powered assistants and automation to RAG systems and model integrations. You’ll work closely with product and engineering to turn ideas into reliable, production-ready experiences.",
    responsibilities: [
      "Build and integrate LLM apps, agents, and AI workflows",
      "Implement RAG pipelines with private or product data",
      "Evaluate model quality, cost, latency, and safety",
      "Collaborate on APIs, UX, and deployment for production use",
    ],
  },
];

const values = [
  {
    label: "Innovation",
    desc: "We push thoughtfully — new ideas when they earn their place.",
  },
  {
    label: "Collaboration",
    desc: "Strong work comes from people who build together.",
  },
  {
    label: "Excellence",
    desc: "Quality is our standard, not an exception.",
  },
];

const reasons = [
  {
    title: "Growth opportunities",
    desc: "Advance with challenging projects and continuous learning.",
  },
  {
    title: "Flexible work",
    desc: "Remote or office — arrangements that respect how you work best.",
  },
  {
    title: "Strong culture",
    desc: "Collaborate with people who care about craft and each other.",
  },
  {
    title: "Meaningful impact",
    desc: "Build solutions that make a real difference for businesses.",
  },
];

export default function CareersPage() {
  return (
    <main className="w-full bg-[#f7f6f3]">
      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(44,74,110,0.35),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">Careers</p>
          <h1 className="font-display max-w-2xl text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em]">
            Careers at Veriton
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.08rem] leading-relaxed text-[#b8c0ca]">
            Join a small team shaping careful, reliable technology for real
            businesses.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <p className="section-label mb-3">Culture</p>
            <h2 className="font-display text-[1.9rem] sm:text-[2.35rem] tracking-[-0.02em] text-[#14181f] mb-6">
              Our values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.label} delay={i * 70}>
                <div className="h-full border border-[#d9dde3] bg-white p-7 transition-colors hover:border-[#c5ccd6]">
                  <span className="mb-2 block text-[0.75rem] text-[#7d8b9a]">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[1.4rem] tracking-[-0.02em] text-[#14181f] mb-2">
                    {value.label}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-[#5e6670]">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 sm:mt-20">
            <Reveal>
              <p className="section-label mb-3">Open role</p>
              <h2 className="font-display text-[1.9rem] sm:text-[2.35rem] tracking-[-0.02em] text-[#14181f] mb-6">
                Position we&apos;re hiring for
              </h2>
            </Reveal>
            <Reveal>
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="border border-[#d9dde3] bg-white p-7 sm:p-9"
                >
                  <p className="mb-2 text-[0.8rem] text-[#7d8b9a]">Full-time · Remote-friendly</p>
                  <h3 className="font-display text-[1.75rem] sm:text-[2rem] tracking-[-0.02em] text-[#14181f]">
                    {position.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-[#5e6670]">
                    {position.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {position.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="border border-[#e8ecf1] bg-[#f7f6f3] px-4 py-3 text-[0.9rem] leading-snug text-[#14181f]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:veritoninfo@gmail.com?subject=Application%20-%20AI%20Engineer"
                    className="btn-primary mt-8 inline-flex"
                  >
                    Apply for this role
                  </a>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1826] py-14 sm:py-16 text-white">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <Reveal>
            <p className="mb-3 text-[0.9rem] text-[#9eacbc]">Why Veriton</p>
            <h2 className="font-display text-[1.9rem] sm:text-[2.35rem] tracking-[-0.02em] mb-10">
              Why people join us
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-10">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <div>
                  <h3 className="mb-2 text-[0.95rem] font-medium text-white">
                    {r.title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-[#9eacbc]">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="project-band py-14 sm:py-16">
        <div className="project-band__ornament" aria-hidden />
        <div className="project-band__inner mx-auto max-w-[1120px] px-5 sm:px-8">
          <div>
            <p className="section-label mb-3">Apply</p>
            <h2 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.12] tracking-[-0.03em] text-[#14181f]">
              Ready to make an impact?
            </h2>
            <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[#5e6670]">
              Send your resume and a short introduction. We&apos;d love to hear
              about your skills and ambitions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=veritoninfo@gmail.com&body=Hi%20Veriton%20Team,%0A%0AI%27m%20interested%20in%20joining%20your%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Apply now
            </a>
            <a
              href="mailto:veritoninfo@gmail.com"
              className="text-[0.9rem] text-[#2c4a6e] underline-offset-4 hover:underline"
            >
              or email veritoninfo@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

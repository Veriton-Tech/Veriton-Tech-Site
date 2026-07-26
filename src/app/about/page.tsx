import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us — Veriton",
  description:
    "Learn about Veriton's mission to empower businesses with innovative Android, Shopify, web development, and AI solutions.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "About Veriton",
    "Veriton",
    "Tech Company",
    "Android Development",
    "Shopify Development",
    "Web Development",
    "AI Development",
    "Business Technology",
    "IT Services",
    "Company Mission",
  ],
  openGraph: {
    title: "About Us — Veriton",
    description:
      "Learn about Veriton's mission to empower businesses with innovative technology solutions, including Android, Shopify, web, and AI services.",
    url: "https://atveriton.com/about",
    type: "website",
    siteName: "Veriton",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Veriton",
    description:
      "Learn about Veriton's mission to empower businesses with innovative technology solutions, including Android, Shopify, web, and AI services.",
  },
};

const values = [
  {
    title: "Android & Web",
    desc: "Crafted with modern stacks and disciplined engineering.",
  },
  {
    title: "Shopify Commerce",
    desc: "Stores built for conversion, clarity, and growth.",
  },
  {
    title: "AI Development",
    desc: "Intelligent features shaped to your product — useful, not noisy.",
  },
  {
    title: "Partnership",
    desc: "Clear communication and support that lasts beyond launch.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#f7f6f3]">
      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(44,74,110,0.35),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">About</p>
          <h1 className="font-display max-w-2xl text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em]">
            About Veriton
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.08rem] leading-relaxed text-[#b8c0ca]">
            Thoughtful technology for businesses that want work that holds up —
            not just looks finished.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <Reveal>
            <div className="space-y-6 text-[1.05rem] sm:text-[1.1rem] leading-relaxed text-[#5e6670]">
              <p>
                Veriton provides{" "}
                <span className="font-medium text-[#14181f]">Android</span>,{" "}
                <span className="font-medium text-[#14181f]">Shopify</span>,{" "}
                <span className="font-medium text-[#14181f]">web development</span>
                , and{" "}
                <span className="font-medium text-[#14181f]">AI development</span>.
                Our mission is to help businesses harness technology with clarity
                and craft.
              </p>
              <p>
                With a team of experienced professionals, we deliver modern,
                scalable, and secure solutions — from mobile apps to e-commerce
                platforms and intelligent product features.
              </p>
              <p>
                We believe in innovation, transparency, and long-term
                partnerships. Quality and customer satisfaction are not extras —
                they are the standard.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-14">
              <p className="section-label mb-3">Focus</p>
              <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] tracking-[-0.02em] text-[#14181f] mb-6">
                What guides our work
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {values.map((v, i) => (
                  <div
                    key={v.title}
                    className="border border-[#d9dde3] bg-white p-6 transition-colors hover:border-[#c5ccd6]"
                  >
                    <span className="mb-2 block text-[0.75rem] text-[#7d8b9a]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-[1.35rem] tracking-[-0.02em] text-[#14181f] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-[0.92rem] leading-relaxed text-[#5e6670]">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="project-band py-14 sm:py-16">
        <div className="project-band__ornament" aria-hidden />
        <div className="project-band__inner mx-auto max-w-[1120px] px-5 sm:px-8">
          <div>
            <p className="section-label mb-3">Next step</p>
            <h2 className="font-display text-[2rem] sm:text-[2.5rem] leading-[1.12] tracking-[-0.03em] text-[#14181f]">
              Ready to work together?
            </h2>
            <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[#5e6670]">
              Tell us what you&apos;re building — we&apos;ll reply with a clear
              path forward.
            </p>
          </div>
          <Link href="/contact" className="btn-primary self-start sm:self-end">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}

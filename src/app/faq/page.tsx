import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faqs";
import { faqPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ — Veriton",
  description:
    "Answers about Veriton’s Android, web, Shopify, and AI development services, delivery process, support, and how to get in touch.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ — Veriton",
    description:
      "Straight answers about Veriton’s services, process, and how we work with clients.",
    url: "https://www.veriton.si/faq",
    type: "website",
    siteName: "Veriton",
  },
};

export default function FAQPage() {
  return (
    <main className="w-full bg-[#f7f6f3]">
      <JsonLd data={faqPageJsonLd()} />

      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(44,74,110,0.35),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">FAQ</p>
          <h1 className="font-display max-w-2xl text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em]">
            Frequently asked questions
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.08rem] leading-relaxed text-[#b8c0ca]">
            Straight answers about who Veriton is, what we build, how we work,
            and how to start a project.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          {/* Visible Q&A for crawlers and answer engines; accordion is progressive enhancement */}
          <FaqAccordion items={faqs} />

          <noscript>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h2 className="font-medium text-[#14181f]">{faq.question}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5e6670]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </noscript>

          <div className="mt-12 border border-[#d9dde3] bg-white p-7 sm:p-8">
            <h2 className="font-display text-[1.6rem] tracking-[-0.02em] text-[#14181f]">
              Still have a question?
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5e6670]">
              We&apos;re happy to help — send a note and we&apos;ll get back to
              you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Contact us
              </Link>
              <a
                href="mailto:veritoninfo@gmail.com"
                className="text-[0.9rem] text-[#2c4a6e] underline-offset-4 hover:underline"
              >
                veritoninfo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

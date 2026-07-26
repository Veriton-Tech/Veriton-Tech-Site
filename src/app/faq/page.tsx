"use client";
import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What services does Veriton offer?",
    answer:
      "We provide Android development, web development, Shopify e-commerce solutions, and AI development tailored for businesses and entrepreneurs.",
  },
  {
    question: "How can I contact Veriton?",
    answer:
      "You can reach us via the Contact page or email us at veritoninfo@gmail.com.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes — we specialize in custom technology solutions shaped around your unique business needs.",
  },
  {
    question: "What is your project delivery process?",
    answer:
      "We follow a transparent, collaborative process from consultation to deployment, with clear checkpoints at every step.",
  },
  {
    question: "Can you help with ongoing support?",
    answer:
      "Absolutely. We offer ongoing support and maintenance for all our services after launch.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full bg-[#f7f6f3]">
      <section className="relative overflow-hidden bg-[#0c1826] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(44,74,110,0.35),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="mb-3 text-[0.9rem] text-[#9eacbc]">FAQ</p>
          <h1 className="font-display max-w-2xl text-[2.75rem] sm:text-[3.75rem] leading-[1.05] tracking-[-0.03em]">
            Frequently asked questions
          </h1>
          <div className="mt-5 mb-5 h-px w-14 bg-white/35" />
          <p className="max-w-xl text-[1.08rem] leading-relaxed text-[#b8c0ca]">
            Straight answers about our services, process, and how we work with
            clients.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <div className="border border-[#d9dde3] bg-white px-5 sm:px-7">
            {faqs.map((faq, idx) => {
              const open = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border-b border-[#d9dde3] last:border-b-0 ${
                    open ? "bg-[#fafaf8]" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    aria-expanded={open}
                  >
                    <span className="font-medium text-[#14181f]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center border border-[#d9dde3] text-sm text-[#5e6670] transition-colors ${
                        open ? "border-[#12263a] bg-[#12263a] text-white" : ""
                      }`}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pr-10 text-[0.95rem] leading-relaxed text-[#5e6670]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

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

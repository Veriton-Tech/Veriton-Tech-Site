"use client";

import React, { useState } from "react";
import type { FaqItem } from "@/data/faqs";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border border-[#d9dde3] bg-white px-5 sm:px-7">
      {items.map((faq, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={faq.question}
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
              <span className="font-medium text-[#14181f]">{faq.question}</span>
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
                open ? "max-h-[28rem] pb-5 opacity-100" : "max-h-0 opacity-0"
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
  );
}

"use client";
import React, { useState } from "react";

export default function ServiceAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((it, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className={`border-b border-[#d9dde3] last:border-b-0 ${
              open ? "bg-[#fafaf8]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors focus:outline-none"
              aria-expanded={open}
            >
              <span className="font-medium text-[#14181f]">{it.q}</span>
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
                open ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pr-10 text-[0.92rem] leading-relaxed text-[#5e6670]">
                {it.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

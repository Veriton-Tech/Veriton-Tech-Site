"use client";
import React, { useState } from "react";

export default function ServiceAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="rounded-lg border border-gray-200 dark:border-neutral-800 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-4 py-3 bg-white dark:bg-neutral-900 flex items-center justify-between"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold">{it.q}</span>
            <span className="text-neutral-500">{openIndex === i ? "\u2212" : "+"}</span>
          </button>
          {openIndex === i ? (
            <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-200">{it.a}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

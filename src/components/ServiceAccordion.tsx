"use client";
import React, { useState } from "react";

export default function ServiceAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="rounded-lg border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-4 py-3 bg-white flex items-center justify-between"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-slate-900">{it.q}</span>
            <span className="text-slate-500">{openIndex === i ? "\u2212" : "+"}</span>
          </button>
          {openIndex === i ? (
            <div className="px-4 py-3 bg-slate-50 text-sm text-slate-700">{it.a}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

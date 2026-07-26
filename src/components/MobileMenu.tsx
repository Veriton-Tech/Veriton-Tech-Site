"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
        className="flex h-9 w-9 items-center justify-center text-white"
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      <div className="fixed inset-0 z-[9999] pointer-events-none md:hidden">
        <div
          className={`fixed inset-0 bg-[#0a121c]/55 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`fixed top-0 left-0 z-[10000] flex h-[100vh] w-[min(86vw,20rem)] flex-col bg-[#0c1826] p-7 transition-transform duration-300 ease-out pointer-events-auto ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-display text-[1.75rem] text-white">Veriton</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center text-white/80"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3.5 font-display text-[1.55rem] tracking-[-0.02em] text-[#d5dbe3] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary-light w-full"
            >
              Start a project
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, STAGGER } from "./motion/config";

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
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-0 z-[10040] flex flex-col bg-[#0c1826] md:hidden"
            initial={
              reduced
                ? { opacity: 1 }
                : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
            }
            animate={
              reduced
                ? { opacity: 1 }
                : { clipPath: "inset(0 0 0% 0)", opacity: 1 }
            }
            exit={
              reduced
                ? { opacity: 0 }
                : {
                    clipPath: "inset(0 0 100% 0)",
                    transition: { duration: DURATION.base, ease: EASE },
                  }
            }
            transition={{ duration: DURATION.slow, ease: EASE }}
            style={{ willChange: "clip-path, opacity" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between px-5 pt-4 sm:px-8">
              <span className="font-display text-[1.7rem] tracking-[-0.02em] text-white">
                Veriton
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative z-10 flex flex-1 flex-col px-7 pb-10 pt-10">
              <nav className="flex flex-col">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: DURATION.base,
                      ease: EASE,
                      delay: reduced ? 0 : 0.1 + i * STAGGER.base,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-3.5 font-display text-[1.55rem] tracking-[-0.02em] text-[#d5dbe3] transition-colors hover:text-white focus-visible:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto pt-8"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: DURATION.base,
                  ease: EASE,
                  delay: reduced ? 0 : 0.4,
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary-light w-full"
                >
                  Start a project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="relative z-[10041] flex h-10 w-10 items-center justify-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
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
      {overlay}
    </div>
  );
}

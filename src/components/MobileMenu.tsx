"use client";

import React, { useState } from "react";
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
  const reduced = useReducedMotion();

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
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="relative z-[10001] flex h-9 w-9 items-center justify-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
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

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] md:hidden"
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
                : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
            }
            transition={{ duration: DURATION.slow, ease: EASE }}
            style={{ willChange: "clip-path, opacity" }}
          >
            <div className="absolute inset-0 bg-[#0c1826]" />
            <div className="relative z-10 flex h-full flex-col px-7 pb-10 pt-20">
              <nav className="flex flex-col">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: DURATION.base,
                      ease: EASE,
                      delay: reduced ? 0 : 0.12 + i * STAGGER.base,
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
                  delay: reduced ? 0 : 0.45,
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
      </AnimatePresence>
    </div>
  );
}

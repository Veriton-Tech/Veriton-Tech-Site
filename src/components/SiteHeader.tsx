"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll, useReducedMotion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { DURATION, EASE } from "./motion/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const lastY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    if (reduced) {
      setHidden(false);
      lastY.current = y;
      return;
    }
    const delta = y - lastY.current;
    if (y < 80) setHidden(false);
    else if (delta > 6) setHidden(true);
    else if (delta < -6) setHidden(false);
    lastY.current = y;
  });

  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  return (
    <motion.header
      data-cursor-dark
      className={`site-header sticky top-0 z-50 w-full border-b ${
        scrolled
          ? "is-scrolled border-white/12 bg-[#0c1826]/72 backdrop-blur-xl"
          : "border-white/10 bg-[#0c1826]/75 backdrop-blur-md"
      }`}
      initial={reduced ? false : { y: -24, opacity: 0 }}
      animate={
        reduced
          ? { y: 0, opacity: 1 }
          : {
              y: hidden ? "-110%" : 0,
              opacity: 1,
            }
      }
      transition={{ duration: DURATION.base, ease: EASE }}
      style={{ willChange: "transform, opacity" }}
    >
      <div
        className={`mx-auto flex max-w-[1120px] items-center justify-between px-5 sm:px-8 transition-[height] duration-300 ease-out ${
          scrolled ? "h-14" : "h-[4.25rem]"
        }`}
      >
        <div className="flex items-center gap-3">
          <MobileMenu />
          <Link
            href="/"
            className="font-display text-[1.7rem] leading-none tracking-[-0.02em] text-white transition-opacity duration-300 hover:opacity-80 focus-visible:opacity-80"
          >
            Veriton
          </Link>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-nav-cta ml-2">
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

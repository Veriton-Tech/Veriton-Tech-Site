"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md ${
        scrolled ? "is-scrolled" : "bg-[#0c1826]/75"
      }`}
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
            className="font-display text-[1.7rem] leading-none tracking-[-0.02em] text-white transition-opacity duration-300 hover:opacity-80"
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
    </header>
  );
}

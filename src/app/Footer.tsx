"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import Reveal, { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import LetterReveal from "@/components/motion/LetterReveal";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services/android-development", label: "Android" },
  { href: "/services/web-development", label: "Web" },
  { href: "/services/shopify-development", label: "Shopify" },
  { href: "/services/ai-development", label: "AI" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#d9dde3] bg-[#f7f6f3] text-[#14181f]">
      <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-10 sm:px-8 sm:pt-16">
        <div className="flex flex-col gap-8 border-b border-[#d9dde3] pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-[3rem] sm:text-[3.75rem] leading-none tracking-[-0.035em] text-[#14181f] transition-opacity hover:opacity-70"
            >
              <LetterReveal text="Veriton" delay={0.05} onceOnView />
            </Link>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-[#5e6670]">
                Product & engineering studio — Android, web, Shopify, and AI.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:info@veriton.si"
              className="font-display text-[1.35rem] sm:text-[1.55rem] tracking-[-0.02em] text-[#14181f] underline decoration-[#d9dde3] underline-offset-4 transition-colors hover:decoration-[#14181f]"
            >
              info@veriton.si
            </a>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-[0.9rem] text-[#2c4a6e] transition-opacity hover:opacity-70"
              >
                Start a project →
              </Link>
              <a
                href="https://www.linkedin.com/company/veriton-tech"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Veriton on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center border border-[#d9dde3] text-[#5e6670] transition-colors hover:border-[#14181f] hover:text-[#14181f]"
              >
                <FaLinkedinIn size={13} aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2">
          <RevealItem>
            <p className="mb-4 text-[0.78rem] text-[#5e6670]">Navigate</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.95rem] text-[#14181f] transition-opacity hover:opacity-55"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </RevealItem>

          <RevealItem>
            <p className="mb-4 text-[0.78rem] text-[#5e6670]">Services</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-3">
              {services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.95rem] text-[#14181f] transition-opacity hover:opacity-55"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </RevealItem>
        </RevealStagger>

        <div className="border-t border-[#d9dde3] pt-6">
          <p className="text-[0.8rem] text-[#5e6670]">© Veriton 2026</p>
        </div>
      </div>
    </footer>
  );
}

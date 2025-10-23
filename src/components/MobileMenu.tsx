"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Hide banner and prevent background scroll when menu is open
  React.useEffect(() => {
    const banner = typeof document !== 'undefined' ? document.getElementById('site-banner') : null;
    const mainEl = typeof document !== 'undefined' ? document.querySelector('main') : null;
    const footerEl = typeof document !== 'undefined' ? document.querySelector('footer') : null;
    if (open) {
      // prevent background scroll
      document.body.style.overflow = 'hidden';
      if (banner) {
        banner.style.display = 'none';
        banner.setAttribute('aria-hidden', 'true');
      }
      if (mainEl) {
        // hide main content so sections (including homepage sections) are not visible
        (mainEl as HTMLElement).style.display = 'none';
        (mainEl as HTMLElement).setAttribute('aria-hidden', 'true');
      }
      if (footerEl) {
        (footerEl as HTMLElement).style.display = 'none';
        (footerEl as HTMLElement).setAttribute('aria-hidden', 'true');
      }
    } else {
      document.body.style.overflow = '';
      if (banner) {
        banner.style.display = '';
        banner.removeAttribute('aria-hidden');
      }
      if (mainEl) {
        (mainEl as HTMLElement).style.display = '';
        (mainEl as HTMLElement).removeAttribute('aria-hidden');
      }
      if (footerEl) {
        (footerEl as HTMLElement).style.display = '';
        (footerEl as HTMLElement).removeAttribute('aria-hidden');
      }
    }

    return () => {
      // cleanup on unmount
      document.body.style.overflow = '';
      if (banner) {
        banner.style.display = '';
        banner.removeAttribute('aria-hidden');
      }
      if (mainEl) {
        (mainEl as HTMLElement).style.display = '';
        (mainEl as HTMLElement).removeAttribute('aria-hidden');
      }
      if (footerEl) {
        (footerEl as HTMLElement).style.display = '';
        (footerEl as HTMLElement).removeAttribute('aria-hidden');
      }
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md hover:bg-blue-100 dark:hover:bg-cyan-900/30"
      >
        {open ? (
          <svg className="w-6 h-6 text-blue-700 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-blue-700 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>

      {/* Off-canvas menu */}
      <div className={`fixed inset-0 z-[9999] transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        {/* Opaque backdrop so the previous screen isn't visible when menu is open */}
        <div className="absolute inset-0 bg-black" onClick={() => setOpen(false)}></div>
        <aside className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-blue-800/60 backdrop-blur-xl p-6 z-[10000]">
          <div className="max-w-[320px] h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-extrabold text-blue-700 dark:text-cyan-400">Veriton Tech</div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-blue-100 dark:hover:bg-cyan-900/30">
                <svg className="w-5 h-5 text-blue-700 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="rounded-2xl p-4 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-blue-800/60">
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-cyan-900/20">Home</Link>
                <Link href="/services" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-cyan-900/20">Services</Link>
                <Link href="/about" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-cyan-900/20">About</Link>
                <Link href="/careers" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-cyan-900/20">Careers</Link>
                <Link href="/faq" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-cyan-900/20">FAQ</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="py-2 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-cyan-900/20">Contact Us</Link>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

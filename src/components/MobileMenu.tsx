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
        className="p-2 rounded-lg border border-cyan-500/40 hover:border-cyan-500/70 bg-slate-800/50 transition-all"
      >
        {open ? (
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>

      {/* Off-canvas menu */}
      <div className={`fixed inset-0 z-[9999] transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}></div>
        <aside className="absolute inset-0 p-6 z-[10000] border-r border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-[320px] h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-extrabold text-cyan-400">Veriton</div>
              <button 
                onClick={() => setOpen(false)} 
                aria-label="Close menu" 
                className="p-2 rounded-lg border border-cyan-500/40 hover:border-cyan-500/70 bg-slate-800/50 transition-all"
              >
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <Link 
                href="/" 
                onClick={() => setOpen(false)} 
                className="py-3 px-4 rounded-lg text-gray-300 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 bg-slate-800/50 transition-all hover:bg-cyan-500/10"
              >
                → Home
              </Link>
              <Link 
                href="/services" 
                onClick={() => setOpen(false)} 
                className="py-3 px-4 rounded-lg text-gray-300 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 bg-slate-800/50 transition-all hover:bg-cyan-500/10"
              >
                → Services
              </Link>
              <Link 
                href="/about" 
                onClick={() => setOpen(false)} 
                className="py-3 px-4 rounded-lg text-gray-300 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 bg-slate-800/50 transition-all hover:bg-cyan-500/10"
              >
                → About
              </Link>
              <Link 
                href="/careers" 
                onClick={() => setOpen(false)} 
                className="py-3 px-4 rounded-lg text-gray-300 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 bg-slate-800/50 transition-all hover:bg-cyan-500/10"
              >
                → Careers
              </Link>
              <Link 
                href="/faq" 
                onClick={() => setOpen(false)} 
                className="py-3 px-4 rounded-lg text-gray-300 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 bg-slate-800/50 transition-all hover:bg-cyan-500/10"
              >
                → FAQ
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setOpen(false)} 
                className="py-3 px-4 rounded-lg text-white bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 transition-all font-semibold"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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
      <div className={`fixed inset-0 z-[9999] pointer-events-none md:hidden`}>
        {/* Sidebar Backdrop */}
        <div className={`fixed inset-0 bg-transparent transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)}></div>
        <aside className={`fixed top-0 left-0 h-full w-[80vw] max-w-xs p-6 z-[10000] border-r border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} pointer-events-auto`}>
          <div className="h-full flex flex-col justify-start">
            <div className="flex items-center justify-between mb-8">
              <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">Veriton</div>
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
                className="py-3 px-5 rounded-xl text-cyan-100 hover:text-white font-semibold border border-cyan-400/30 hover:border-pink-400/60 bg-cyan-900/40 hover:bg-cyan-700/40 transition-all shadow-sm"
              >
                <span className="mr-2">🏠</span> Home
              </Link>
              <Link 
                href="/services" 
                onClick={() => setOpen(false)} 
                className="py-3 px-5 rounded-xl text-cyan-100 hover:text-white font-semibold border border-cyan-400/30 hover:border-pink-400/60 bg-cyan-900/40 hover:bg-cyan-700/40 transition-all shadow-sm"
              >
                <span className="mr-2">💡</span> Services
              </Link>
              <Link 
                href="/about" 
                onClick={() => setOpen(false)} 
                className="py-3 px-5 rounded-xl text-cyan-100 hover:text-white font-semibold border border-cyan-400/30 hover:border-pink-400/60 bg-cyan-900/40 hover:bg-cyan-700/40 transition-all shadow-sm"
              >
                <span className="mr-2">👤</span> About
              </Link>
              <Link 
                href="/careers" 
                onClick={() => setOpen(false)} 
                className="py-3 px-5 rounded-xl text-cyan-100 hover:text-white font-semibold border border-cyan-400/30 hover:border-pink-400/60 bg-cyan-900/40 hover:bg-cyan-700/40 transition-all shadow-sm"
              >
                <span className="mr-2">🚀</span> Careers
              </Link>
              <Link 
                href="/faq" 
                onClick={() => setOpen(false)} 
                className="py-3 px-5 rounded-xl text-cyan-100 hover:text-white font-semibold border border-cyan-400/30 hover:border-pink-400/60 bg-cyan-900/40 hover:bg-cyan-700/40 transition-all shadow-sm"
              >
                <span className="mr-2">❓</span> FAQ
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setOpen(false)} 
                className="py-3 px-5 rounded-xl text-white font-bold bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-pink-500 shadow-lg transition-all border-0"
              >
                <span className="mr-2">✉️</span> Contact Us
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}

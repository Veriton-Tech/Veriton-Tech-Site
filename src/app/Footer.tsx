import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative py-16 border-t border-cyan-500/20 overflow-hidden text-white">
      {/* Interactive animated background */}
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #0f172a 100%)' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 z-10"></div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-20">
        {/* Logo & Description */}
        <div className="flex flex-col items-start md:items-start">
          <span className="text-3xl font-extrabold tracking-tight holographic-text mb-3">Veriton</span>
          <p className="text-sm text-cyan-100 mb-6 max-w-xs leading-relaxed">
            Veriton delivers Android, Shopify, web & cloud solutions for modern businesses. Empowering growth with reliable technology and expert support.
          </p>
        </div>
        
        {/* Spacer for separation */}
        <div className="hidden md:block md:w-4"></div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Home</Link></li>
            <li><Link href="/about" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ About</Link></li>
            <li><Link href="/services" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Services</Link></li>
            <li><Link href="/careers" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Careers</Link></li>
            <li><Link href="/contact" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Our Services</h3>
          <ul className="space-y-3">
            <li><a href="#backend" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Android Development</a></li>
            <li><a href="#chat" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Web Development</a></li>
            <li><a href="#cost" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Shopify Development</a></li>
            <li><a href="#outsourcing" className="text-cyan-100 hover:text-white transition-all hover:translate-x-1 inline-block">→ Cloud Services</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Contact Info</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="mailto:veritoninfo@gmail.com" 
                className="text-cyan-100 hover:text-white transition-all inline-flex items-center gap-2 hover:gap-3"
              >
                <span className="text-cyan-300">✉</span> veritoninfo@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/veriton-tech" 
                target="_blank" 
                rel="noreferrer noopener" 
                aria-label="Veriton on LinkedIn" 
                className="pl-2 pr-4 py-2 mt-1 ml-[-8px] rounded-xl bg-gradient-to-r from-cyan-700/30 via-blue-700/30 to-cyan-800/30 border border-cyan-400/40 text-cyan-100 hover:text-white hover:border-cyan-200/80 transition-all hover:shadow-lg hover:shadow-cyan-500/30 group inline-flex items-center gap-2"
              >
                <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-sm text-cyan-100 mt-8 relative z-20">
        <div className="inline-block px-6 py-2">
          Copyright © Veriton 2026. All rights reserved
        </div>
      </div>
    </footer>
  );
}

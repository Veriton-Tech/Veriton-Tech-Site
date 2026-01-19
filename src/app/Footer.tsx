import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative py-16 border-t border-cyan-500/20 mt-20 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {/* Logo, Description & Social Media */}
        <div className="flex flex-col items-start md:items-start">
          <span className="text-3xl font-extrabold tracking-tight holographic-text mb-3">Veriton</span>
          <p className="text-sm text-slate-600 mb-6 max-w-xs leading-relaxed">
            Veriton delivers Android, Shopify, web & cloud solutions for modern businesses. Empowering growth with reliable technology and expert support.
          </p>
          <div className="flex gap-3 mt-2">
            <a 
              href="#" 
              aria-label="Facebook" 
              className="p-3 rounded-lg glassmorphism border border-cyan-500/30 text-slate-600 hover:text-slate-900 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              <FaFacebookF className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter" 
              className="p-3 rounded-lg glassmorphism border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              <FaTwitter className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/company/veriton-tech" 
              target="_blank" 
              rel="noreferrer noopener" 
              aria-label="Veriton on LinkedIn" 
              className="p-3 rounded-lg glassmorphism border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              aria-label="Instagram" 
              className="p-3 rounded-lg glassmorphism border border-cyan-500/30 text-cyan-300 hover:text-cyan-100 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/30 group"
            >
              <FaInstagram className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Spacer for separation */}
        <div className="hidden md:block md:w-4"></div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Home</Link></li>
            <li><Link href="/about" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ About</Link></li>
            <li><Link href="/services" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Services</Link></li>
            <li><Link href="/careers" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Careers</Link></li>
            <li><Link href="/contact" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Our Services</h3>
          <ul className="space-y-3">
            <li><a href="#backend" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Android Development</a></li>
            <li><a href="#chat" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Web Development</a></li>
            <li><a href="#cost" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Shopify Development</a></li>
            <li><a href="#outsourcing" className="text-slate-700 hover:text-cyan-100 transition-all hover:translate-x-1 inline-block">→ Cloud Services</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-5 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Contact Info</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="mailto:veritoninfo@gmail.com" 
                className="text-slate-700 hover:text-cyan-100 transition-all inline-flex items-center gap-2 hover:gap-3"
              >
                <span className="text-cyan-400">✉</span> veritoninfo@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-sm text-slate-600 mt-20 relative z-10">
        <div className="inline-block px-6 py-2">
          Copyright © Veriton 2025. All rights reserved
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
  <footer className="w-full bg-neutral-50 dark:bg-neutral-900 py-10 border-t border-black/10 dark:border-white/10 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo, Description & Social Media */}
        <div className="flex flex-col items-start md:items-start">
          <span className="text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-2">Veriton Tech</span>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4 max-w-xs">Android, Shopify, Web & Cloud Solutions for modern businesses. Empowering growth with reliable technology and expert support.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/veriton-tech" target="_blank" rel="noreferrer noopener" aria-label="Veriton Tech on LinkedIn" className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"><FaInstagram /></a>
          </div>
        </div>
  {/* Spacer for separation (reduced) */}
  <div className="hidden md:block md:w-4"></div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Services</Link></li>
            <li><Link href="/careers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact Us</Link></li>
          </ul>
        </div>
        {/* Our Services - Elegant & Interactive */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">Our Services</h3>
                    <ul className="space-y-2">
            <li><a href="#backend" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Android Developement</a></li>
            <li><a href="#chat" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Web Developement</a></li>
            <li><a href="#cost" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Shopify Developement</a></li>
            <li><a href="#outsourcing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Cloud Services</a></li>
          </ul>

        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">Contact Info</h3>
          <ul className="space-y-2">
            <li><a href="mailto:veritoninfo@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">veritoninfo@gmail.com</a></li>
          </ul>
        </div>
        {/* Copyright & Credits */}
        <div className="flex flex-col justify-between h-full">
          <div></div>
        </div>
      </div>
      <div className="text-center text-sm text-black/70 dark:text-white/70 mt-8">
        Copyright © Veriton 2025. All rights reserved
      </div>
    </footer>
  );
}

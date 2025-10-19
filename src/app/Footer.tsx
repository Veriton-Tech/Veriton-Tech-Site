import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-700/30 py-10 border-t border-black/10 dark:border-white/10 mt-10">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo, Description & Social Media */}
        <div className="flex flex-col items-start md:items-start">
          <span className="text-3xl font-extrabold tracking-tight text-blue-700 dark:text-cyan-400 mb-2">Veriton Tech</span>
          <p className="text-sm text-black/70 dark:text-white/70 mb-4 max-w-xs">Android, Shopify, Web & Cloud Solutions for modern businesses. Empowering growth with reliable technology and expert support.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"><FaInstagram /></a>
          </div>
        </div>
  {/* Spacer for separation (reduced) */}
  <div className="hidden md:block md:w-4"></div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-cyan-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-600 transition">About</a></li>
            <li><a href="/services" className="hover:text-cyan-600 transition">Services</a></li>
            <li><a href="/careers" className="hover:text-cyan-600 transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-cyan-600 transition">Contact Us</a></li>
          </ul>
        </div>
        {/* Our Services - Elegant & Interactive */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-cyan-400">Our Services</h3>
                    <ul className="space-y-2">
            <li><a href="#backend" className="hover:text-cyan-600 transition">Android Developement</a></li>
            <li><a href="#chat" className="hover:text-cyan-600 transition">Web Developement</a></li>
            <li><a href="#cost" className="hover:text-cyan-600 transition">Shopify Developement</a></li>
            <li><a href="#outsourcing" className="hover:text-cyan-600 transition">Cloud Services</a></li>
          </ul>

        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-cyan-400">Contact Info</h3>
          <ul className="space-y-2">
            <li><a href="mailto:Info@veriton.com" className="hover:text-cyan-600 transition">Info@veriton.com</a></li>
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

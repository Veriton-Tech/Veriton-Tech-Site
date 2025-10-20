import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const services = [
  { name: "Android Development", icon: "🤖", desc: "Custom Android apps for business and consumers." },
  { name: "Web Development", icon: "🌐", desc: "Modern, responsive websites and web apps." },
  { name: "Shopify Development", icon: "🛒", desc: "E-commerce solutions built on Shopify." },
  { name: "Cloud Services", icon: "☁️", desc: "Scalable cloud infrastructure and support." },
];

export default function ServicesPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-200 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-blue-800/60 backdrop-blur-xl shadow-lg border-b border-blue-200 dark:border-cyan-700/40">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 drop-shadow">Veriton Tech</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
            <Link href="/" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Home</Link>
            <Link href="/services" className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold shadow">Services</Link>
            <Link href="#about" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">About</Link>
            <Link href="#careers" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Careers</Link>
            <Link href="#faq" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">FAQ</Link>
            <Link href="#contact" className="px-3 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-cyan-900/30 hover:text-blue-700 dark:hover:text-cyan-400 transition">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Our Services Section */}
      <main className="flex-1 py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">Our Services</h2>
            <p className="text-base text-black/60 dark:text-white/60">Explore our expert solutions for your business growth</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {services.map((s) => (
              <div
                key={s.name}
                className="group rounded-3xl border-0 bg-white dark:bg-cyan-900/40 p-10 shadow-xl hover:shadow-2xl transition-all text-center hover:scale-105 relative overflow-hidden ring-2 ring-blue-100 dark:ring-cyan-800 hover:ring-cyan-400 dark:hover:ring-blue-400"
                style={{ position: 'relative' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-t-3xl opacity-20"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3 animate-bounce group-hover:animate-none text-blue-500 dark:text-cyan-400 drop-shadow-lg">{s.icon}</div>
                  <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform">{s.name}</div>
                  <div className="text-base text-black/70 dark:text-white/70 mb-4 max-w-[180px] mx-auto">{s.desc}</div>
                  <span className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold shadow group-hover:from-blue-700 group-hover:to-cyan-700 transition">Learn More</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-b-3xl opacity-10"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

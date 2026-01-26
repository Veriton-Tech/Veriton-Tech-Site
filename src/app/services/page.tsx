
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.atveriton.com/services',
  },
};

const services = [
  { name: "Android Development", icon: "🤖", desc: "Custom Android apps for business and consumers." },
  { name: "Web Development", icon: "🌐", desc: "Modern, responsive websites and web apps." },
  { name: "Shopify Development", icon: "🛒", desc: "E-commerce solutions built on Shopify." },
  { name: "Cloud Services", icon: "☁️", desc: "Scalable cloud infrastructure and support." },
];

export default function ServicesPage() {
  return (
    <main className="font-sans min-h-screen flex flex-col py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-pink-900/40">
      {/* Animated gradient accent (matching contact/about/careers/FAQ) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0 opacity-70 blur-2xl animate-gradient-x"
        style={{background: "linear-gradient(90deg, #a7f3d0 0%, #bae6fd 40%, #fbcfe8 100%)"}} />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-pink-300 mb-2 drop-shadow">Our Services</h2>
          <p className="text-base text-slate-700 dark:text-slate-200/80 mb-2" style={{ letterSpacing: '0.01em' }}>Explore our expert solutions for your business growth</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {services.map((s) => {
            const slug = s.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
            return (
              <div
                key={s.name}
                className="group rounded-3xl border-0 backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 p-10 shadow-xl hover:shadow-2xl transition-all text-center hover:scale-105 relative overflow-hidden ring-2 ring-blue-100 dark:ring-cyan-800 hover:ring-cyan-400 dark:hover:ring-blue-400 text-slate-900 dark:text-white/90"
                style={{ position: 'relative' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-t-3xl opacity-20"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3 animate-bounce group-hover:animate-none bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">{s.icon}</div>
                  <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-blue-700 to-pink-500 dark:from-cyan-300 dark:via-blue-300 dark:to-pink-300 text-2xl mb-2 group-hover:scale-110 transition-transform drop-shadow-sm">{s.name}</div>
                  <div className="text-base text-slate-700 dark:text-slate-200/80 mb-4 max-w-[200px] mx-auto" style={{ letterSpacing: '0.01em' }}>{s.desc}</div>
                  <Link prefetch={false} href={`/services/${slug}`} className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition">Learn More</Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-b-3xl opacity-10"></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Keyframes for animated accent (matching contact/about/careers/FAQ) */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-55%) scale(1.04); }
        }
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite alternate;
        }
      `}</style>
    </main>
  );
}

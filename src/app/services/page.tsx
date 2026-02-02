
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
    <main className="relative w-full overflow-hidden py-16 sm:py-20 bg-white">
      {/* FLOATING GRADIENT BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[26rem] h-[26rem] bg-blue-400/20 rounded-full blur-3xl" />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-2 holographic-text">Our Services</h2>
          <p className="text-base sm:text-xl text-slate-600 mb-2" style={{ letterSpacing: '0.01em' }}>Explore our expert solutions for your business growth</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {services.map((s) => {
            const slug = s.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
            return (
              <div
                key={s.name}
                className="group rounded-3xl border-0 backdrop-blur-xl bg-white p-10 shadow-lg hover:shadow-xl transition-all text-center hover:scale-105 relative overflow-hidden ring-2 ring-slate-200 hover:ring-cyan-400 text-slate-900"
                style={{ position: 'relative' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-t-3xl opacity-20"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3 animate-bounce group-hover:animate-none text-black drop-shadow-lg">{s.icon}</div>
                  <div className="font-extrabold text-slate-800 text-2xl mb-2 group-hover:scale-110 transition-transform drop-shadow-sm">{s.name}</div>
                  <div className="text-base text-slate-600 mb-4 max-w-[200px] mx-auto" style={{ letterSpacing: '0.01em' }}>{s.desc}</div>
                  <Link prefetch={false} href={`/services/${slug}`} className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition">Learn More</Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-b-3xl opacity-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

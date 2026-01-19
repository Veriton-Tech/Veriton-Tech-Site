"use client";
import React, { useState } from "react";
import Link from "next/link";

const banners = [
  {
    interactive: (
      <>
        <span className="text-5xl sm:text-6xl font-extrabold mb-6 block relative">
          <span className="holographic-text">Empower</span> your business with{" "}
          <span className="holographic-text">cutting-edge</span> technology
        </span>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover innovative solutions tailored for your growth. Our team delivers reliability, expertise, and a seamless tech experience.
        </p>
        <div className="flex justify-center gap-6">
          <Link 
            href="/contact" 
            className="relative px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg overflow-hidden group transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link 
            href="/services" 
            className="relative px-10 py-4 rounded-full glassmorphism text-slate-700 font-semibold text-lg border border-cyan-400/40 hover:border-cyan-400/70 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
          >
            Learn More
          </Link>
        </div>
      </>
    ),
  },
  {
    interactive: (
      <>
        <span className="text-5xl sm:text-6xl font-extrabold mb-6 block relative">
          <span className="holographic-text">Connect</span> with experts for{" "}
          <span className="holographic-text">instant</span> support
        </span>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Our dedicated professionals are available 24/7 to resolve your issues and keep your business running smoothly.
        </p>
        <div className="flex justify-center gap-6">
          <Link 
            href="/contact" 
            className="relative px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg overflow-hidden group transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link 
            href="/services" 
            className="relative px-10 py-4 rounded-full glassmorphism text-slate-700 font-semibold text-lg border border-cyan-400/40 hover:border-cyan-400/70 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
          >
            Learn More
          </Link>
        </div>
      </>
    ),
  },
  {
    interactive: (
      <>
        <span className="text-5xl sm:text-6xl font-extrabold mb-6 block relative">
          <span className="holographic-text">Innovate</span> and grow with{" "}
          <span className="holographic-text">Veriton</span> solutions
        </span>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Unlock new opportunities with our advanced technology services. Let us help you transform your vision into reality.
        </p>
        <div className="flex justify-center gap-6">
          <Link 
            href="/contact" 
            className="relative px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg overflow-hidden group transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link 
            href="/services" 
            className="relative px-10 py-4 rounded-full glassmorphism text-slate-700 font-semibold text-lg border border-cyan-400/40 hover:border-cyan-400/70 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
          >
            Learn More
          </Link>
        </div>
      </>
    ),
  },
];

export default function BannerCarousel() {
  const [active, setActive] = useState(0);

  // Automatically slide banners every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative py-24 sm:py-32 overflow-hidden">
      {/* Futuristic animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-purple-900/20 to-blue-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glassmorphism p-12 sm:p-16 scan-line">
          {/* Corner tech accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-500/50"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/50"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50"></div>
          
          <div className="w-full">
            <div className="text-center">
              {banners[active].interactive}
            </div>
            <div className="flex justify-center mt-12 gap-3">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    active === idx 
                      ? "bg-cyan-500 shadow-lg shadow-cyan-500/50 w-8" 
                      : "bg-cyan-500/30 hover:bg-cyan-500/50"
                  }`}
                  aria-label={`Show banner ${idx + 1}`}
                  onClick={() => setActive(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="w-full relative pt-0 pb-6 sm:pb-10 overflow-hidden bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-900/60 dark:via-cyan-900/40 dark:to-pink-900/40 px-0">
      {/* Animated gradient accent (matching all themed pages) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-0 opacity-70 blur-2xl animate-gradient-x"
        style={{background: "linear-gradient(90deg, #a7f3d0 0%, #bae6fd 40%, #fbcfe8 100%)"}} />
            {/* Keyframes for animated accent (matching all themed pages) */}
            <style>{`
              @keyframes gradient-x {
                0%, 100% { transform: translateX(-50%) scale(1); }
                50% { transform: translateX(-55%) scale(1.04); }
              }
              .animate-gradient-x {
                animation: gradient-x 8s ease-in-out infinite alternate;
              }
            `}</style>
      
      <div className="relative z-10 w-full px-0">
        <div className="relative overflow-hidden rounded-none glassmorphism p-3 xs:p-4 sm:p-8 md:p-12 lg:p-16 scan-line w-full">
          {/* Corner tech accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-500/50"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/50"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50"></div>
          
          <div className="w-full">
            <div className="text-center">
              <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight sm:leading-tight md:leading-tight">
                {/* Responsive font size for banner headline */}
                {banners[active].interactive.props.children[0]}
              </span>
              <div className="text-base xs:text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                {banners[active].interactive.props.children[2]}
              </div>
              <div className="flex flex-col xs:flex-row justify-center gap-4 xs:gap-6">
                {banners[active].interactive.props.children[4]}
              </div>
            </div>
            <div className="flex justify-center mt-8 sm:mt-12 gap-2 sm:gap-3">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    active === idx 
                      ? "bg-cyan-500 shadow-lg shadow-cyan-500/50 w-6 sm:w-8" 
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

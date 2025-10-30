"use client";
import React, { useState } from "react";

const banners = [
  {
    interactive: (
      <>
        <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 block">
          <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">Empower</span> your business with <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">cutting-edge</span> technology.
        </span>
        <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
          Discover innovative solutions tailored for your growth. Our team delivers reliability, expertise, and a seamless tech experience.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="rounded-full px-8 py-3 bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition text-lg">Contact Us</a>
          <a href="#readmore" className="rounded-full px-8 py-3 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white font-semibold shadow hover:bg-black/5 dark:hover:bg-white/10 transition text-lg">Read More</a>
        </div>
      </>
    ),
  },
  {
    interactive: (
      <>
        <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 block">
          <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">Connect</span> with experts for <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">instant</span> support.
        </span>
        <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
          Our dedicated professionals are available 24/7 to resolve your issues and keep your business running smoothly.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="rounded-full px-8 py-3 bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition text-lg">Contact Us</a>
          <a href="#readmore" className="rounded-full px-8 py-3 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white font-semibold shadow hover:bg-black/5 dark:hover:bg-white/10 transition text-lg">Read More</a>
        </div>
      </>
    ),
  },
  {
    interactive: (
      <>
        <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 block">
          <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">Innovate</span> and grow with <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">Veriton Tech</span> solutions.
        </span>
        <p className="text-lg sm:text-xl text-black/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
          Unlock new opportunities with our advanced technology services. Let us help you transform your vision into reality.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="rounded-full px-8 py-3 bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition text-lg">Contact Us</a>
          <a href="#readmore" className="rounded-full px-8 py-3 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white font-semibold shadow hover:bg-black/5 dark:hover:bg-white/10 transition text-lg">Read More</a>
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
  <section className="w-full relative py-15 sm:py-15 border-b border-black/10 dark:border-white/10 overflow-hidden">
      {/* Gradient Overlay */}
  <div className="absolute inset-0 z-0 bg-neutral-50 dark:bg-neutral-900" />
      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 z-0 backdrop-blur-2xl" />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">
  <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white/80 dark:bg-neutral-900/50 p-12">
          <div className="w-full">
            <div className="text-center">
              {banners[active].interactive}
            </div>
            <div className="flex justify-center mt-8 gap-3">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-4 h-4 rounded-full border ${active === idx ? "bg-indigo-600 border-indigo-600" : "bg-neutral-200 dark:bg-neutral-700 border-transparent"} shadow transition-all hover:scale-110`}
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

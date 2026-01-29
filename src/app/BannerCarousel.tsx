"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const banners = [
  {
    title: (
      <>
        <span className="holographic-text">Empower</span> your business with{" "}
        <span className="holographic-text">cutting-edge</span> technology
      </>
    ),
    description:
      "Discover innovative solutions tailored for your growth. Our team delivers reliability, expertise, and a seamless tech experience.",
  },
  {
    title: (
      <>
        <span className="holographic-text">Connect</span> with experts for{" "}
        <span className="holographic-text">instant</span> support
      </>
    ),
    description:
      "Our dedicated professionals are available 24/7 to resolve your issues and keep your business running smoothly.",
  },
  {
    title: (
      <>
        <span className="holographic-text">Innovate</span> and grow with{" "}
        <span className="holographic-text">Veriton</span> solutions
      </>
    ),
    description:
      "Unlock new opportunities with our advanced technology services. Let us help you transform your vision into reality.",
  },
];

export default function BannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % banners.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 bg-white">
      {/* FLOATING GRADIENT BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-purple-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[26rem] h-[26rem] bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl border border-slate-200">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
              {banners[active].title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
              {banners[active].description}
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold text-sm sm:text-base hover:from-cyan-700 hover:to-cyan-600 transition-all shadow-lg shadow-cyan-500/30"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-100 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-10 gap-3">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`rounded-full transition-all duration-300 ${
                  active === idx
                    ? "w-6 h-3 bg-cyan-500 shadow-md shadow-cyan-500/40"
                    : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Show banner ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

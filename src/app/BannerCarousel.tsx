"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const SLIDE_MS = 6000;

const banners = [
  {
    headline: "Software with clarity and care.",
    description:
      "Android, web, Shopify, and AI — built by people who sweat the details and stay after launch.",
  },
  {
    headline: "Partners for the long run.",
    description:
      "From first brief to shipping day, we work beside you with clear process and honest communication.",
  },
  {
    headline: "Technology that feels considered.",
    description:
      "Products and systems that are reliable under pressure and pleasant to use every day.",
  },
];

export default function BannerCarousel() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % banners.length);
      setTick((t) => t + 1);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (idx: number) => {
    setActive(idx);
    setTick((t) => t + 1);
  };

  return (
    <section className="relative flex min-h-[86vh] w-full flex-col justify-end overflow-hidden text-white sm:min-h-[88vh]">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 15% 20%, #1c3550 0%, transparent 55%), linear-gradient(165deg, #0c1826 0%, #12263a 48%, #0a121c 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(44,74,110,0.25),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-8 pb-16 pt-28 sm:pb-24 sm:pt-32">
        <p className="animate-fade-up mb-5 text-[0.9rem] text-[#9eacbc]">
          Product & engineering studio
        </p>

        <h1 className="animate-fade-up delay-100 font-display text-[clamp(3.4rem,10vw,6.75rem)] leading-[0.92] tracking-[-0.03em] text-white">
          Veriton
        </h1>

        <div className="animate-draw-line delay-200 mt-7 mb-9 h-px w-14 bg-white/35" />

        <div key={`${active}-${tick}`} className="max-w-xl min-h-[7.5rem]">
          <h2 className="animate-slide-crossfade font-display text-[1.65rem] sm:text-[2.05rem] italic font-normal leading-[1.25] tracking-[-0.02em] text-[#e8ecf0]">
            {banners[active].headline}
          </h2>
          <p className="animate-slide-crossfade delay-100 mt-4 text-[1.05rem] leading-relaxed text-[#9eacbc]">
            {banners[active].description}
          </p>
        </div>

        <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-primary-light">
            Start a project
          </Link>
          <Link href="/services" className="btn-outline-light">
            View services
          </Link>
        </div>

        <div className="animate-fade-up delay-400 mt-12 flex items-center gap-2.5">
          {banners.map((_, idx) => (
            <button
              key={active === idx ? `${idx}-${tick}` : `dot-${idx}`}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`hero-indicator ${active === idx ? "is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

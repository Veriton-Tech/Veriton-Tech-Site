"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import LetterReveal from "@/components/motion/LetterReveal";
import Magnetic from "@/components/motion/Magnetic";
import { DURATION, EASE } from "@/components/motion/config";

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
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 80]);
  const kenBurns = useSpring(1, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    kenBurns.set(1);
    const id = window.setTimeout(() => kenBurns.set(1.08), 40);
    return () => window.clearTimeout(id);
  }, [active, tick, kenBurns, reduced]);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % banners.length);
      setTick((t) => t + 1);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, active, tick, reduced]);

  const goTo = (idx: number) => {
    setActive(idx);
    setTick((t) => t + 1);
  };

  return (
    <section
      className="relative flex min-h-[86vh] w-full flex-col justify-end overflow-hidden text-white sm:min-h-[88vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          y: reduced ? 0 : parallaxY,
          scale: reduced ? 1 : kenBurns,
          willChange: "transform",
          background:
            "radial-gradient(ellipse 90% 70% at 15% 20%, #1c3550 0%, transparent 55%), linear-gradient(165deg, #0c1826 0%, #12263a 48%, #0a121c 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(44,74,110,0.25),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-5 sm:px-8 pb-16 pt-28 sm:pb-24 sm:pt-32">
        <motion.p
          className="mb-5 text-[0.9rem] text-[#9eacbc]"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.base, ease: EASE, delay: 0.35 }}
        >
          Product & engineering studio
        </motion.p>

        <h1 className="font-display text-[clamp(3.4rem,10vw,6.75rem)] leading-[0.92] tracking-[-0.03em] text-white">
          <LetterReveal text="Veriton" delay={0.4} />
        </h1>

        <motion.div
          className="mt-7 mb-9 h-px w-14 origin-left bg-white/35"
          initial={reduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: DURATION.slow, ease: EASE, delay: 0.75 }}
        />

        <div className="relative max-w-xl min-h-[7.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${tick}`}
              initial={
                reduced
                  ? { opacity: 1 }
                  : { opacity: 0, clipPath: "inset(0 0 0 100%)" }
              }
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
              exit={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, clipPath: "inset(0 100% 0 0%)" }
              }
              transition={{ duration: DURATION.base, ease: EASE }}
              style={{ willChange: "clip-path, opacity" }}
            >
              <h2 className="font-display text-[1.65rem] sm:text-[2.05rem] italic font-normal leading-[1.25] tracking-[-0.02em] text-[#e8ecf0]">
                {banners[active].headline}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-[#9eacbc]">
                {banners[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.base, ease: EASE, delay: 0.95 }}
        >
          <Magnetic strength={8}>
            <Link href="/contact" className="btn-primary-light magnetic-sheen">
              Start a project
            </Link>
          </Magnetic>
          <Magnetic strength={6}>
            <Link href="/services" className="btn-outline-light magnetic-sheen">
              View services
            </Link>
          </Magnetic>
        </motion.div>

        <div className="mt-12 flex items-center gap-2.5">
          {banners.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`hero-indicator relative overflow-hidden ${
                active === idx ? "is-active" : ""
              }`}
            >
              {active === idx && !reduced && (
                <span
                  key={tick}
                  className={`hero-indicator__fill ${paused ? "is-paused" : ""}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.a
        href="#about-veriton"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[0.75rem] tracking-wide text-white/55"
        aria-label="Scroll to content"
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={
          reduced
            ? undefined
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <span className="block h-8 w-px bg-white/35 mx-auto" />
      </motion.a>
    </section>
  );
}

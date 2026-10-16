"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";

/** Infinite marquee that speeds slightly with scroll velocity; pauses on hover. */
export default function VelocityMarquee({
  children,
  className = "",
  baseSpeed = 40,
}: {
  children: React.ReactNode;
  className?: string;
  baseSpeed?: number;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const velocityBoost = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScrollY.current);
      lastScrollY.current = y;
      velocityBoost.current = Math.min(2.2, delta / 18);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  useAnimationFrame((_, delta) => {
    if (reduced || paused || !trackRef.current) return;
    const width = trackRef.current.scrollWidth / 2;
    if (!width) return;
    const speed = baseSpeed * (1 + velocityBoost.current);
    velocityBoost.current *= 0.92;
    let next = x.get() - (speed * delta) / 1000;
    if (Math.abs(next) >= width) next += width;
    x.set(next);
  });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max"
        style={{ x, willChange: "transform" }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

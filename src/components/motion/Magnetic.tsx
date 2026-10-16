"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { EASE } from "./config";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
};

/** Soft magnetic pull toward the cursor (desktop). Transform-only. */
export default function Magnetic({
  children,
  className = "",
  strength = 8,
  as = "div",
}: MagneticProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(dx, dy) || 1;
    const pull = Math.min(1, strength / dist);
    x.set(dx * pull * 0.35);
    y.set(dy * pull * 0.35);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={{ ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Primary/CTA button with magnetic wrap + sheen sweep on hover. */
export function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Magnetic className="relative inline-flex overflow-hidden" strength={8}>
      <span
        className={`magnetic-sheen relative inline-flex ${className}`}
        onClick={onClick}
      >
        {children}
      </span>
    </Magnetic>
  );
}

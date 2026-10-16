"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { DURATION, EASE, REVEAL_Y, STAGGER } from "./config";

type RevealVariant = "up" | "fade" | "left" | "scale" | "clip";

const variantsFor = (variant: RevealVariant, reduced: boolean): Variants => {
  if (reduced) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }

  switch (variant) {
    case "fade":
      return {
        hidden: { opacity: 0, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: DURATION.base, ease: EASE },
        },
      };
    case "left":
      return {
        hidden: { opacity: 0, x: -28, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: DURATION.base, ease: EASE },
        },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: DURATION.base, ease: EASE },
        },
      };
    case "clip":
      return {
        hidden: { opacity: 0, clipPath: "inset(12% 0 12% 0)" },
        visible: {
          opacity: 1,
          clipPath: "inset(0% 0 0% 0)",
          transition: { duration: DURATION.slow, ease: EASE },
        },
      };
    case "up":
    default:
      return {
        hidden: { opacity: 0, y: REVEAL_Y, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: DURATION.base, ease: EASE },
        },
      };
  }
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms (matches prior API) or seconds if ≤ 10 */
  delay?: number;
  variant?: RevealVariant;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const delaySec = delay > 10 ? delay / 1000 : delay;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variantsFor(variant, !!reduced)}
      transition={{ delay: reduced ? 0 : delaySec }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className = "",
  stagger = STAGGER.base,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={variantsFor("up", !!reduced)}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

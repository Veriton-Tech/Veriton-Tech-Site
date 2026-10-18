"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, STAGGER } from "./config";

/** Split heading into letters that rise from a mask. Visible on first paint for LCP. */
export default function LetterReveal({
  text,
  className = "",
  delay = 0.15,
  onceOnView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** When true, letters animate when scrolled into view (footer). */
  onceOnView?: boolean;
}) {
  const reduced = useReducedMotion();
  const letters = text.split("");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (reduced || onceOnView) return;
    // Paint visible text first, then run transform-only animation.
    const id = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(id);
  }, [reduced, onceOnView]);

  if (reduced) {
    return (
      <span className={className} aria-hidden="true">
        {text}
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-hidden="true">
      {letters.map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="inline-block overflow-hidden leading-none"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={onceOnView ? { y: "110%" } : false}
            {...(onceOnView
              ? {
                  whileInView: { y: "0%" },
                  viewport: { once: true, amount: 0.6 },
                }
              : play
                ? { animate: { y: ["18%", "0%"] } }
                : { animate: { y: "0%" } })}
            transition={{
              duration: DURATION.slow,
              ease: EASE,
              delay: delay + i * STAGGER.tight,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Word-by-word reveal for headings. */
export function WordReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: DURATION.base,
              ease: EASE,
              delay: i * STAGGER.base,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE, STAGGER } from "./config";

/** Split heading into letters that rise from a mask. */
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

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {letters.map((char, i) => (
        <span key={`${char}-${i}`} className="inline-block overflow-hidden leading-none" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...(onceOnView
              ? {
                  whileInView: { y: "0%" },
                  viewport: { once: true, amount: 0.6 },
                }
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
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
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

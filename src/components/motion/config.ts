/** Shared motion tokens — keep every animation on this curve. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.45,
  base: 0.65,
  slow: 0.85,
  intro: 0.9,
} as const;

export const STAGGER = {
  tight: 0.05,
  base: 0.08,
  loose: 0.12,
} as const;

export const REVEAL_Y = 24;

export const motionTransition = {
  duration: DURATION.base,
  ease: EASE,
} as const;

export const revealVariants = {
  hidden: {
    opacity: 0,
    y: REVEAL_Y,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: motionTransition,
  },
} as const;

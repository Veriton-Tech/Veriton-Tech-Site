"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";
import { DURATION, EASE, REVEAL_Y } from "./config";

type Step = { step: string; title: string; desc: string };

function CountUpNumber({ to, play }: { to: number; play: boolean }) {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setN(to);
      return;
    }
    if (!play) return;
    const controls = animate(0, to, {
      duration: DURATION.base,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [play, to, reduced]);

  return <span>{n || to}</span>;
}

function ProcessStep({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const threshold = (index + 0.35) / total;
  const opacity = useTransform(progress, [threshold - 0.15, threshold], [0.35, 1]);
  const y = useTransform(progress, [threshold - 0.15, threshold], [REVEAL_Y, 0]);
  const [reached, setReached] = useState(false);

  useMotionValueEvent(progress, "change", (v) => {
    if (v >= threshold - 0.05) setReached(true);
  });

  if (reduced) {
    return (
      <div ref={ref} className="process-step">
        <span className="process-num font-display text-[2.75rem] leading-none text-white/25">
          {step.step}
        </span>
        <h3 className="mt-4 font-display text-[1.55rem] tracking-[-0.02em]">{step.title}</h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-[#9eacbc]">{step.desc}</p>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="process-step"
      style={{ opacity, y, willChange: "transform, opacity" }}
    >
      <span className="process-num font-display text-[2.75rem] leading-none text-white/25">
        <CountUpNumber to={Number(step.step)} play={inView || reached} />
      </span>
      <h3 className="mt-4 font-display text-[1.55rem] tracking-[-0.02em]">{step.title}</h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-[#9eacbc]">{step.desc}</p>
    </motion.div>
  );
}

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14 border-t border-white/10 pt-12">
      <div
        className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px md:block"
        aria-hidden
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <motion.div
          className="absolute left-0 top-0 h-px w-full origin-left bg-white/55"
          style={{
            scaleX: reduced ? 1 : lineScale,
            willChange: "transform",
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        {steps.map((s, idx) => (
          <ProcessStep
            key={s.step}
            step={s}
            index={idx}
            total={steps.length}
            progress={progress}
          />
        ))}
      </div>
    </div>
  );
}

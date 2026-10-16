"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  useReducedMotion,
} from "framer-motion";
import { DURATION, EASE } from "./motion/config";

const team = [
  {
    name: "Kamran Basheer",
    role: "Founder & CEO",
    bio: "Visionary leader driving Veriton to deliver innovative solutions.",
    image: "/Kamran Basheer.jpeg",
    linkedin: "https://www.linkedin.com/in/kamran-basheer/",
  },
  {
    name: "Faizan Basheer",
    role: "Full Stack Developer",
    bio: "Develops end-to-end web applications using modern full stack technologies, delivering secure, scalable, and user-centric solutions",
    image: "/Faizan Basheer.png",
    linkedin: "https://www.linkedin.com/in/faizan-basheer-433026322/",
  },
  {
    name: "Hur Ali",
    role: "MERN Developer",
    bio: "Builds scalable web applications with modern JavaScript frameworks.",
    image: "/Hur Ali.png",
    linkedin: "https://www.linkedin.com/in/syed-hur-ali-rizvi-23ab45212/",
  },
  {
    name: "Laiba Khan",
    role: "Creative Technologist",
    bio: "Bridges design and technology to craft thoughtful, engaging digital experiences.",
    image: "/Laiba Khan.svg",
    linkedin: "https://www.linkedin.com/in/laibakhan8/",
  },
];

const AUTOPLAY_MS = 4000;

export default function TeamCarousel({
  animateOnView = false,
}: {
  animateOnView?: boolean;
}) {
  const [sectionRef, inView] = useSectionInView(0.2);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const wasInView = useRef(false);
  const reduced = useReducedMotion();

  const [index, setIndex] = useState(0);
  const stride = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);
  const velocity = useRef(0);
  const lastMoveX = useRef(0);
  const lastMoveT = useRef(0);

  const offsetMV = useMotionValue(0);
  const offsetSpring = useSpring(offsetMV, { stiffness: 180, damping: 26, mass: 0.55 });

  const updatePosition = (i: number, withInertia = false) => {
    if (!wrapperRef.current || !cardRef.current || !trackRef.current) return;

    const wrapperW = wrapperRef.current.offsetWidth;
    const cardW = cardRef.current.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(trackRef.current).gap || "16");
    stride.current = cardW + gap;
    const centerOffset = (wrapperW - cardW) / 2;
    const target = centerOffset - i * stride.current;

    if (reduced || !withInertia) {
      offsetMV.set(target);
      return;
    }
    animate(offsetMV, target, { type: "spring", stiffness: 160, damping: 22, mass: 0.6 });
  };

  useEffect(() => {
    updatePosition(index);
    const onResize = () => updatePosition(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  useEffect(() => {
    if (inView && !wasInView.current) {
      wasInView.current = true;
      setIndex(0);
      updatePosition(0);
    }
    if (!inView) wasInView.current = false;
  }, [inView]);

  useEffect(() => {
    if (!inView || reduced) return;
    const id = setInterval(() => {
      if (isDragging.current) return;
      setIndex((current) => {
        const next = (current + 1) % team.length;
        updatePosition(next, true);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [inView, index, reduced]);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startOffset.current = offsetMV.get();
    lastMoveX.current = e.clientX;
    lastMoveT.current = performance.now();
    velocity.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastMoveT.current);
    velocity.current = ((e.clientX - lastMoveX.current) / dt) * 16;
    lastMoveX.current = e.clientX;
    lastMoveT.current = now;
    offsetMV.set(startOffset.current + (e.clientX - startX.current));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    const projected = offsetMV.get() + velocity.current * 12;
    const newIndex = Math.round(
      ((wrapperRef.current!.offsetWidth - cardRef.current!.offsetWidth) / 2 - projected) /
        stride.current
    );
    const clamped = Math.max(0, Math.min(newIndex, team.length - 1));
    setIndex(clamped);
    updatePosition(clamped, true);
  };

  return (
    <div className="flex w-full flex-col items-center py-1" ref={sectionRef}>
      <div
        ref={wrapperRef}
        className="relative w-full max-w-[360px] overflow-hidden sm:max-w-[320px] md:max-w-[360px]"
      >
        <motion.div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex cursor-grab gap-4 active:cursor-grabbing"
          style={{ x: offsetSpring, willChange: "transform" }}
        >
          {team.map((m, i) => {
            const dist = Math.abs(i - index);
            const scale = reduced ? 1 : Math.max(0.92, 1 - dist * 0.05);
            const opacity = reduced ? 1 : Math.max(0.55, 1 - dist * 0.28);
            const animate = animateOnView && inView;

            return (
              <motion.div
                key={m.name}
                ref={i === 0 ? cardRef : null}
                className="group h-[380px] w-full flex-shrink-0 cursor-pointer overflow-hidden border border-[#d8dee8] bg-white sm:w-[320px] md:h-[420px] md:w-[360px]"
                style={{ scale, opacity, willChange: "transform, opacity" }}
                initial={
                  reduced
                    ? false
                    : { clipPath: "inset(8% 8% 8% 8%)", opacity: 0 }
                }
                animate={
                  animate || !animateOnView
                    ? { clipPath: "inset(0% 0% 0% 0%)", opacity }
                    : undefined
                }
                transition={{
                  duration: DURATION.slow,
                  ease: EASE,
                  delay: reduced ? 0 : i * 0.08,
                }}
                onClick={() =>
                  m.linkedin &&
                  window.open(m.linkedin, "_blank", "noopener,noreferrer")
                }
              >
                <div className="flex h-full flex-col">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      priority={i === 0}
                      {...(i === 0 ? {} : { loading: dist <= 1 ? "eager" : "lazy" })}
                      className={`team-photo ${
                        i === 2 ? "object-cover" : "object-top object-cover"
                      } bg-neutral-100`}
                      sizes="(max-width: 640px) 100vw, 360px"
                      unoptimized
                    />
                  </div>

                  <div className="border-t border-[#d9dde3] p-6">
                    <h3 className="font-display text-[1.2rem] tracking-[-0.02em] text-[#14181f]">
                      {m.name}
                    </h3>
                    <p className="mb-2 text-[0.9rem] text-[#2c4a6e]">{m.role}</p>
                    <p className="text-[0.92rem] leading-relaxed text-[#5e6670]">{m.bio}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-6 flex gap-2">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              updatePosition(i, true);
            }}
            aria-label={`Show team member ${i + 1}`}
            className="relative h-px overflow-hidden bg-[#b8c0ca]"
          >
            <motion.span
              className="absolute inset-0 bg-[#12263a]"
              animate={{ width: i === index ? 32 : 16 }}
              transition={{ duration: DURATION.fast, ease: EASE }}
              style={{ display: "block", height: 1 }}
            />
            <span
              className="block"
              style={{ width: i === index ? 32 : 16, height: 1 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

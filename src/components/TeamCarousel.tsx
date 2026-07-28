"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import Image from "next/image";

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

export default function TeamCarousel({
  animateOnView = false,
}: {
  animateOnView?: boolean;
}) {
  const [sectionRef, inView] = useSectionInView(0.3);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const stride = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);

  const updatePosition = (i: number) => {
    if (!wrapperRef.current || !cardRef.current || !trackRef.current) return;

    const wrapperW = wrapperRef.current.offsetWidth;
    const cardW = cardRef.current.offsetWidth;

    const gap = parseFloat(
      window.getComputedStyle(trackRef.current).gap || "16"
    );

    stride.current = cardW + gap;

    const centerOffset = (wrapperW - cardW) / 2;
    setOffset(centerOffset - i * stride.current);
  };

  useEffect(() => {
    updatePosition(index);
    const onResize = () => updatePosition(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => {
      if (isDragging.current) return;
      const next = (index + 1) % team.length;
      setIndex(next);
      updatePosition(next);
    }, 4000);
    return () => clearInterval(id);
  }, [index]);

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startOffset.current = offset;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setOffset(startOffset.current + (e.clientX - startX.current));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    const newIndex = Math.round(
      ((wrapperRef.current!.offsetWidth - cardRef.current!.offsetWidth) / 2 -
        offset) /
        stride.current
    );

    const clamped = Math.max(0, Math.min(newIndex, team.length - 1));
    setIndex(clamped);
    updatePosition(clamped);
  };

  return (
    <div
      className="flex w-full flex-col items-center py-1"
      ref={animateOnView ? sectionRef : undefined}
    >
      <div
        ref={wrapperRef}
        className="relative w-full max-w-[360px] overflow-hidden sm:max-w-[320px] md:max-w-[360px]"
      >
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex cursor-grab gap-4 active:cursor-grabbing"
          style={{
            transform: `translateX(${offset}px)`,
            transition: isDragging.current
              ? "none"
              : "transform 450ms cubic-bezier(.2,.9,.2,1)",
          }}
        >
          {team.map((m, i) => {
            const animate = animateOnView && inView;
            return (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className={
                  `h-[380px] w-full flex-shrink-0 cursor-pointer overflow-hidden border border-[#d8dee8] bg-white transition-shadow hover:shadow-lg hover:shadow-[#12263a]/10 sm:w-[320px] md:h-[420px] md:w-[360px] ` +
                  (animate
                    ? `animate-fade-in-up opacity-100`
                    : animateOnView
                      ? "opacity-0"
                      : "")
                }
                style={{
                  transitionDelay: animate ? `${i * 120}ms` : undefined,
                }}
                onClick={() =>
                  m.linkedin &&
                  window.open(m.linkedin, "_blank", "noopener,noreferrer")
                }
              >
                <div className="flex h-full flex-col">
                  <div className="relative h-full w-full">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className={`${i == 2 ? "object-cover" : "object-top object-cover"} bg-neutral-100 grayscale-[30%]`}
                      sizes="(max-width: 640px) 100vw, 360px"
                      unoptimized
                    />
                  </div>

                  <div className="border-t border-[#d9dde3] p-6">
                    <h3 className="font-display text-[1.2rem] tracking-[-0.02em] text-[#14181f]">
                      {m.name}
                    </h3>
                    <p className="mb-2 text-[0.9rem] text-[#2c4a6e]">
                      {m.role}
                    </p>
                    <p className="text-[0.92rem] leading-relaxed text-[#5e6670]">{m.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              updatePosition(i);
            }}
            aria-label={`Show team member ${i + 1}`}
            className={`h-px transition-all duration-300 ${
              i === index
                ? "w-8 bg-[#12263a]"
                : "w-4 bg-[#b8c0ca] hover:bg-[#7d8b9a]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
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
    role: "Android Developer",
    bio: "Builds performant and user-friendly Android applications with modern practices.",
    image: "/Faizan Basheer.jpeg",
    linkedin: "https://www.linkedin.com/in/faizan-basheer-433026322/",
  },
  {
    name: "Hur Ali",
    role: "MERN Developer",
    bio: "Builds scalable web applications with modern JavaScript frameworks.",
    image: "/Hur Ali.png",
    linkedin: "https://www.linkedin.com/in/syed-hur-ali-rizvi-23ab45212/",
  },
];

export default function TeamCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const stride = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);

  /* ---------- CORE POSITION LOGIC ---------- */
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

  /* ---------- INITIAL + RESIZE ---------- */
  useEffect(() => {
    updatePosition(index);
    const onResize = () => updatePosition(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  /* ---------- AUTOPLAY ---------- */
  useEffect(() => {
    const id = setInterval(() => {
      if (isDragging.current) return;
      const next = (index + 1) % team.length;
      setIndex(next);
      updatePosition(next);
    }, 4000);
    return () => clearInterval(id);
  }, [index]);

  /* ---------- DRAG ---------- */
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
      ((wrapperRef.current!.offsetWidth -
        cardRef.current!.offsetWidth) /
        2 -
        offset) /
        stride.current
    );

    const clamped = Math.max(0, Math.min(newIndex, team.length - 1));
    setIndex(clamped);
    updatePosition(clamped);
  };

  return (
    <div className="w-full py-1 flex flex-col items-center">
      {/* WRAPPER */}
      <div
        ref={wrapperRef}
        className="relative w-full max-w-[360px] sm:max-w-[320px] md:max-w-[360px] overflow-hidden"
      >
        {/* TRACK */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(${offset}px)`,
            transition: isDragging.current
              ? "none"
              : "transform 450ms cubic-bezier(.2,.9,.2,1)",
          }}
        >
          {team.map((m, i) => (
            <div
              key={i}
              ref={i === 0 ? cardRef : null}
              className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] h-[380px] md:h-[420px] rounded-3xl overflow-hidden bg-white border border-white-400 transition-transform sm:hover:scale-99 cursor-pointer"
              onClick={() =>
                m.linkedin &&
                window.open(m.linkedin, "_blank", "noopener,noreferrer")
              }
            >
              <div className="flex flex-col h-full">
                <div className="relative w-full h-[100%]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className={`${i == 2 ? "object-cover" : "object-top object-cover"} bg-slate-100`}
                    sizes="(max-width: 640px) 100vw, 360px"
                    unoptimized
                  />
                </div>

                <div className="p-6 border-t border-blue-300/50">
                  <h3 className="font-extrabold text-lg text-slate-800">
                    {m.name}
                  </h3>
                  <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {m.role}
                  </p>
                  <p className="text-sm text-slate-600">{m.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="mt-6 flex gap-3">
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              updatePosition(i);
            }}
            className={`rounded-full transition-all ${
              i === index
                ? "w-6 h-3 bg-cyan-500 shadow-lg shadow-cyan-500/50"
                : "w-3 h-3 bg-cyan-300/60 hover:bg-cyan-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

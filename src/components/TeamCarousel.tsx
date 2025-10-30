"use client";
import React, { useEffect, useRef, useState } from "react";

const team = [
  { name: "Kamran Basheer", role: "Founder & CEO", bio: "Visionary leader driving Veriton Tech to deliver innovative solutions.", avatar: "🧑‍💼" },
  { name: "Faizan Basheer", role: "Android Developer", bio: "Builds performant and user-friendly Android applications with modern practices.", avatar: "🤖" },
];

export default function TeamCarousel() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startOffset = useRef(0);
  const stride = useRef(0);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState<number | null>(null);
  const snapTimer = useRef<number | null>(null);

  useEffect(() => {
    currentIndexRef.current = index;
  }, [index]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (isDown.current) return;
      setIndex((prev) => {
        const next = (prev + 1) % team.length;
        currentIndexRef.current = next;
        scrollToIndex(next);
        return next;
      });
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    return () => {
      if (snapTimer.current) window.clearTimeout(snapTimer.current);
    };
  }, []);

  const measureStride = () => {
    if (!cardRef.current || !trackRef.current) return;
    const w = cardRef.current.offsetWidth;
    setCardWidth(w);
    const cs = window.getComputedStyle(trackRef.current as Element);
    let gap = 24;
    if (cs) {
      // Prefer reading via getPropertyValue to avoid relying on typed properties
      const gapStr = cs.getPropertyValue("column-gap") || cs.getPropertyValue("gap");
      const g = parseFloat(gapStr);
      if (!Number.isNaN(g)) {
        gap = g;
      }
    }
    stride.current = Math.round(w + gap);
    setOffset(-currentIndexRef.current * stride.current);
  };

  useEffect(() => {
    measureStride();
    const onR = () => measureStride();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  const scrollToIndex = (i: number) => {
    const w = stride.current || 0;
    const clamped = Math.min(Math.max(i, 0), team.length - 1);
    currentIndexRef.current = clamped;
    setIndex(clamped);
    setOffset(-clamped * w);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const t = trackRef.current;
    if (!t) return;
    isDown.current = true;
    startX.current = e.clientX;
    startOffset.current = offset;
    try {
      (e.target as Element).setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDown.current) return;
    const dx = e.clientX - startX.current;
    setOffset(startOffset.current + dx);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDown.current) return;
    isDown.current = false;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
    if (snapTimer.current) window.clearTimeout(snapTimer.current);
    snapTimer.current = window.setTimeout(() => {
      const w = stride.current || 1;
      const newIndex = Math.round(-offset / w);
      const clamped = Math.min(Math.max(newIndex, 0), team.length - 1);
      scrollToIndex(clamped);
    }, 50);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[900px] w-full">
        <div className="relative flex justify-center py-6 px-4 md:px-8">
          <div ref={wrapperRef} className="overflow-hidden" style={cardWidth ? { width: `${cardWidth}px` } : undefined}>
            <div
              ref={trackRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="flex gap-7 items-stretch"
              style={{ transform: `translateX(${offset}px)`, transition: isDown.current ? "none" : "transform 450ms cubic-bezier(.2,.9,.2,1)" }}
            >
              {team.map((m, i) => (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className="flex-shrink-0 w-[320px] md:w-[360px] h-[520px] rounded-3xl shadow-sm overflow-hidden transform transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md border border-black/5 dark:border-white/10"
                >
                  <div className="h-[70%] flex items-center justify-center">
                    <div className="text-6xl">{m.avatar}</div>
                  </div>
                  <div className="h-[30%] p-5 flex flex-col justify-center">
                    <div className="font-extrabold text-lg text-neutral-900 dark:text-white">{m.name}</div>
                    <div className="text-sm text-neutral-700 dark:text-white/70">{m.role}</div>
                    <div className="mt-2 text-neutral-600 dark:text-white/80 text-sm">{m.bio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
      {team.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-indigo-600 shadow" : "bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

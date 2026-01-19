"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const team = [
  { name: "Kamran Basheer", role: "Founder & CEO", bio: "Visionary leader driving Veriton Tech to deliver innovative solutions.", avatar: "🧑‍💼", image: "/Kamran Basheer.jpeg", linkedin: "https://www.linkedin.com/in/kamran-basheer/" },
  { name: "Faizan Basheer", role: "Android Developer", bio: "Builds performant and user-friendly Android applications with modern practices.", avatar: "🤖", image: "/Faizan Basheer.jpeg", linkedin: "https://www.linkedin.com/in/faizan-basheer-433026322/" },
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
    const cs = window.getComputedStyle(trackRef.current as Element);
    let gap = 24;
    if (cs) {
      const gapStr = cs.getPropertyValue("column-gap") || cs.getPropertyValue("gap");
      const g = parseFloat(gapStr);
      if (!Number.isNaN(g)) gap = g;
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
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[900px] w-full">
        <div className="relative flex justify-center py-6 px-2 sm:px-4 md:px-8">
          <div ref={wrapperRef} className="box-border w-full max-w-[90vw] sm:w-[320px] md:w-[360px] overflow-hidden">
            <div
              ref={trackRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="flex gap-4 sm:gap-7 items-stretch px-2 sm:px-0"
              style={{ transform: `translateX(${offset}px)`, transition: isDown.current ? "none" : "transform 450ms cubic-bezier(.2,.9,.2,1)" }}
            >
              {team.map((m, i) => (
                <div
                  key={i}
                  ref={i === 0 ? cardRef : null}
                  className="flex-shrink-0 w-[90vw] sm:w-[320px] md:w-[360px] h-[420px] md:h-[520px] rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-4 cursor-pointer bg-white backdrop-blur-md border border-cyan-200"
                  role={m.linkedin ? "link" : undefined}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && m.linkedin) {
                      window.open(m.linkedin, "_blank", "noopener,noreferrer");
                    }
                  }}
                  onClick={() => {
                    if (m.linkedin) {
                      window.open(m.linkedin, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <div className="flex flex-col h-full">
                    {m.image ? (
                      <div className="relative w-full h-[55%] sm:h-[70%] overflow-hidden">
                        <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(max-width: 640px) 90vw, 360px" unoptimized />
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-center p-6">
                        <div className="text-6xl sm:text-7xl">{m.avatar}</div>
                      </div>
                    )}
                    <div className="p-5 flex flex-col justify-center">
                      <div className="font-extrabold text-lg text-slate-800">{m.name}</div>
                      <div className="text-sm text-slate-600">{m.role}</div>
                      <div className="mt-2 text-slate-700 text-sm">{m.bio}</div>
                    </div>
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
              className={`w-3 h-3 rounded-full transition-colors ${i === index ? "bg-blue-400" : "bg-white/40"}`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

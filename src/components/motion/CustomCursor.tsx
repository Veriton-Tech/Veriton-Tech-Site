"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CursorMode = "default" | "hover" | "text" | "label" | "magnetic";

const LERP = 0.18;
const SCALE_LERP = 0.22;
const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
const HOVER_SEL =
  'a, button, [role="button"], [data-cursor="hover"], .btn-primary, .btn-primary-light, .btn-outline, .btn-outline-light, .btn-nav-cta, .service-tile';

/**
 * Single rAF-driven custom cursor. Dot tracks mouse exactly; ring lerps to the
 * same centre so they feel like one polished pointer.
 */
export default function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const prev = useRef({ x: -100, y: -100 });
  const ringScale = useRef({ x: 1, y: 1 });
  const ringSize = useRef(36);
  const dotScale = useRef(1);
  const visible = useRef(false);
  const pressed = useRef(false);
  const mode = useRef<CursorMode>("default");
  const labelText = useRef("");
  const magneticRect = useRef<DOMRect | null>(null);
  const magneticEl = useRef<HTMLElement | null>(null);
  const isDark = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    if (reduced) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const setVisible = (v: boolean) => {
      visible.current = v;
      const root = rootRef.current;
      if (root) root.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible.current) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const onDown = () => {
      pressed.current = true;
    };
    const onUp = () => {
      pressed.current = false;
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t?.closest) return;

      isDark.current = !!t.closest("[data-cursor-dark]");

      const labeled = t.closest("[data-cursor-label]") as HTMLElement | null;
      if (labeled) {
        mode.current = "label";
        labelText.current = labeled.getAttribute("data-cursor-label") || "View";
        magneticEl.current = null;
        magneticRect.current = null;
        return;
      }

      if (t.closest('input, textarea, select, [contenteditable="true"]')) {
        mode.current = "text";
        labelText.current = "";
        magneticEl.current = null;
        magneticRect.current = null;
        return;
      }

      const magnetic = t.closest(
        '[data-cursor="magnetic"], .magnetic-sheen'
      ) as HTMLElement | null;
      if (magnetic) {
        mode.current = "magnetic";
        labelText.current = "";
        magneticEl.current = magnetic;
        magneticRect.current = magnetic.getBoundingClientRect();
        return;
      }

      if (t.closest(HOVER_SEL)) {
        mode.current = "hover";
        labelText.current = "";
        magneticEl.current = null;
        magneticRect.current = null;
        return;
      }

      mode.current = "default";
      labelText.current = "";
      magneticEl.current = null;
      magneticRect.current = null;
    };

    const refreshMagnetic = () => {
      if (magneticEl.current) {
        magneticRect.current = magneticEl.current.getBoundingClientRect();
      }
    };

    const tick = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      let targetX = mx;
      let targetY = my;
      const mag = magneticRect.current;
      if (mode.current === "magnetic" && mag) {
        targetX = mag.left + mag.width / 2;
        targetY = mag.top + mag.height / 2;
      }

      // Velocity for stretch
      const dx = mx - prev.current.x;
      const dy = my - prev.current.y;
      prev.current.x = mx;
      prev.current.y = my;
      const speed = Math.min(1, Math.hypot(dx, dy) / 28);
      const angle = Math.atan2(dy, dx) || 0;

      // Target visual scales / size
      let targetDot = 1;
      let targetSize = 36;
      let targetStretchX = 1 + speed * 0.25;
      let targetStretchY = Math.max(0.85, 1 - speed * 0.15);
      let targetPress = pressed.current ? 0.85 : 1;

      if (mode.current === "hover") {
        targetSize = 64;
        targetDot = 0;
        targetStretchX = 1;
        targetStretchY = 1;
      } else if (mode.current === "label") {
        targetSize = 80;
        targetDot = 0;
        targetStretchX = 1;
        targetStretchY = 1;
      } else if (mode.current === "text") {
        targetSize = 22;
        targetDot = 0;
        targetStretchX = 1;
        targetStretchY = 1;
        targetPress = 1;
      } else if (mode.current === "magnetic" && mag) {
        targetSize = Math.max(mag.width, mag.height) + 12;
        targetDot = 0;
        targetStretchX = 1;
        targetStretchY = 1;
      }

      if (pressed.current && mode.current === "default") {
        targetDot = 1.4;
      }

      // Lerp ring position + visual state (no layout reads)
      ringPos.current.x += (targetX - ringPos.current.x) * LERP;
      ringPos.current.y += (targetY - ringPos.current.y) * LERP;
      ringSize.current += (targetSize - ringSize.current) * SCALE_LERP;
      ringScale.current.x +=
        (targetStretchX * targetPress - ringScale.current.x) * SCALE_LERP;
      ringScale.current.y +=
        (targetStretchY * targetPress - ringScale.current.y) * SCALE_LERP;
      dotScale.current += (targetDot - dotScale.current) * SCALE_LERP;

      const dark = isDark.current;
      const rx = ringPos.current.x;
      const ry = ringPos.current.y;

      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%) scale(${dotScale.current})`;
        dot.style.background = dark ? "#ffffff" : "#12263a";
        dot.style.boxShadow = dark
          ? "0 0 14px rgba(255,255,255,0.5)"
          : "0 0 12px rgba(18,38,58,0.4)";
      }

      const ringEl = ringRef.current;
      if (ringEl) {
        const size = ringSize.current;
        if (mode.current === "text") {
          ringEl.style.width = "2px";
          ringEl.style.height = `${size}px`;
          ringEl.style.borderRadius = "2px";
          ringEl.style.border = "none";
          ringEl.style.background = dark ? "rgba(255,255,255,0.9)" : "#12263a";
          ringEl.style.backdropFilter = "none";
          ringEl.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
        } else {
          ringEl.style.width = `${size}px`;
          ringEl.style.height = `${size}px`;
          ringEl.style.borderRadius = "9999px";
          ringEl.style.border = dark
            ? "1.5px solid rgba(255,255,255,0.42)"
            : "1.5px solid rgba(18,38,58,0.35)";
          ringEl.style.background =
            mode.current === "default"
              ? dark
                ? "rgba(255,255,255,0.06)"
                : "rgba(18,38,58,0.04)"
              : dark
                ? "rgba(255,255,255,0.14)"
                : "rgba(18,38,58,0.1)";
          ringEl.style.backdropFilter = "blur(4px)";
          ringEl.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) rotate(${angle}deg) scale(${ringScale.current.x}, ${ringScale.current.y})`;
        }
      }

      const label = labelRef.current;
      if (label) {
        const show = mode.current === "label";
        label.textContent = labelText.current;
        label.style.opacity = show ? "1" : "0";
        label.style.color = dark ? "#fff" : "#12263a";
        label.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      }

      if (rootRef.current) {
        rootRef.current.style.mixBlendMode = dark ? "difference" : "normal";
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("scroll", refreshMagnetic, { passive: true });
    window.addEventListener("resize", refreshMagnetic, { passive: true });

    return () => {
      cancelAnimationFrame(raf.current);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("scroll", refreshMagnetic);
      window.removeEventListener("resize", refreshMagnetic);
    };
  }, [reduced]);

  if (!enabled || reduced) return null;

  return (
    <div
      ref={rootRef}
      className="veriton-cursor"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10050,
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 0.25s ease",
      }}
    >
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "9999px",
          background: "#12263a",
          boxShadow: "0 0 12px rgba(18,38,58,0.4)",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "9999px",
          border: "1.5px solid rgba(18,38,58,0.35)",
          background: "rgba(18,38,58,0.04)",
          backdropFilter: "blur(4px)",
          willChange: "transform",
        }}
      />
      <span
        ref={labelRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          opacity: 0,
          willChange: "transform, opacity",
          transition: `opacity 0.3s ${EASE_CSS}`,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      />
    </div>
  );
}

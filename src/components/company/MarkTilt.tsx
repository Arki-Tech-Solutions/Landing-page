"use client";

import { animate, motion, useMotionValue } from "motion/react";
import { useRef } from "react";

const MARK =
  "M36.34 15.55L54.7 47.51A5 5 0 0 1 50.36 55L13.64 55A5 5 0 0 1 9.3 47.51L27.66 15.55A5 5 0 0 1 36.34 15.55ZM32 25.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0 -17Z";

/**
 * Layered 3D Arki mark that tilts while dragged and springs back on release
 * (the reference hero's draggable layered logo).
 */
export function MarkTilt() {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const start = useRef<{ x: number; y: number } | null>(null);

  const release = () => {
    start.current = null;
    animate(rx, 0, { type: "spring", stiffness: 120, damping: 12 });
    animate(ry, 0, { type: "spring", stiffness: 120, damping: 12 });
  };

  return (
    <div
      className="w-[280px] sm:w-[380px] xl:w-[480px] cursor-grab active:cursor-grabbing max-w-full touch-none select-none"
      style={{ perspective: 800 }}
      onPointerDown={(e) => {
        start.current = { x: e.clientX, y: e.clientY };
        (e.target as Element).setPointerCapture?.(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!start.current) return;
        ry.set(Math.max(-40, Math.min(40, (e.clientX - start.current.x) / 4)));
        rx.set(Math.max(-40, Math.min(40, -(e.clientY - start.current.y) / 4)));
      }}
      onPointerUp={release}
      onPointerCancel={release}
      aria-hidden
    >
      <motion.div className="relative w-full aspect-square" style={{ transformStyle: "preserve-3d", rotateX: rx, rotateY: ry }}>
        <svg className="w-full h-full absolute inset-0 text-primary" viewBox="0 0 64 64" style={{ transform: "translateZ(-40px)", filter: "blur(18px)", opacity: 0.25 }}>
          <path d={MARK} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg className="w-full h-full absolute inset-0 text-primary" viewBox="0 0 64 64" style={{ transform: "translateZ(-20px)", filter: "blur(8px)", opacity: 0.35 }}>
          <path d={MARK} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg
          className="w-full h-full relative text-primary"
          viewBox="0 0 64 64"
          style={{ transform: "translateZ(0px)", filter: "drop-shadow(0 4px 12px color-mix(in oklab, var(--color-primary) 35%, transparent))" }}
        >
          <defs>
            <linearGradient id="arki-mark-face" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--color-primary-light)" />
              <stop offset="0.55" stopColor="var(--color-primary)" />
              <stop offset="1" stopColor="var(--color-primary-dark)" />
            </linearGradient>
          </defs>
          <path d={MARK} fill="url(#arki-mark-face)" fillRule="evenodd" />
        </svg>
        <svg className="w-full h-full absolute inset-0 text-white" viewBox="0 0 64 64" style={{ transform: "translateZ(15px)" }}>
          <path d={MARK} fill="none" stroke="currentColor" strokeOpacity={0.45} strokeWidth={0.6} fillRule="evenodd" />
        </svg>
        <svg className="w-full h-full absolute inset-0 pointer-events-none text-accent" viewBox="0 0 64 64" style={{ transform: "translateZ(25px)" }}>
          <circle cx="32" cy="34" r="3.2" fill="currentColor" />
        </svg>
        <svg className="w-full h-full absolute inset-0 pointer-events-none text-primary-light" viewBox="0 0 64 64" style={{ transform: "translateZ(5px)" }}>
          <circle cx="32" cy="34" r="8.5" fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={0.5} />
        </svg>
      </motion.div>
    </div>
  );
}

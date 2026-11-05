"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Mouse depth for the hero artwork. Sets --mx / --my (-1 to 1, from the centre of the
 * screen) on its box; children with the `depth` class shift by their own --d distance,
 * and the whole piece tilts slightly. Only on devices with a mouse, and not for
 * visitors who prefer reduced motion.
 */
export function HeroParallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ok = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!ok.matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className={`hero-tilt ${className ?? ""}`}>
      {children}
    </div>
  );
}

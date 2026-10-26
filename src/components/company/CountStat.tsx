"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Number that counts up from 0 the first time it scrolls into view. `display` shows fixed text instead. */
export function CountStat({ value, suffix = "", display }: { value: number; suffix?: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || display) return;
    const c = animate(0, value, { duration: 2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value, display]);
  return (
    <span ref={ref} className="inline-block">
      {display ?? `${n}${suffix}`}
    </span>
  );
}

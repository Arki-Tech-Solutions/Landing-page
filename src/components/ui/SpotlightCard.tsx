"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Card with a 1.5px gradient-ish frame, lift on hover and a radial "spotlight"
 * that follows the cursor (as on the reference site's service and industry cards).
 */
export function SpotlightCard({ children, radius = "rounded-2xl", padding = "p-8" }: { children: ReactNode; radius?: string; padding?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative flex flex-col h-full ${radius} p-[1.5px] cursor-pointer transition-all duration-500 ease-out lg:active:scale-100 active:scale-[0.98]`}
      style={{
        background: hover ? "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 35%, transparent), transparent 60%)" : "transparent",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover ? "0 20px 40px -12px color-mix(in oklab, var(--color-primary) 18%, transparent)" : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className={`relative flex flex-col h-full ${radius} ${padding} overflow-hidden transition-all duration-500`} style={{ border: "1px solid rgb(243 244 246)", backgroundColor: "white" }}>
        <div
          className={`absolute inset-0 ${radius} pointer-events-none transition-opacity duration-400`}
          style={{
            opacity: hover ? 1 : 0,
            background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--color-primary) 8%, transparent), transparent 55%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}

/** Square icon tile used at the top of spotlight cards. Rotates/scales the icon on card hover. */
export function IconTile({ children, size = "w-15 h-15" }: { children: ReactNode; size?: string }) {
  return (
    <div className={`relative z-10 mb-8 ${size} rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden ring-1 ring-gray-100 bg-gray-50 group-hover:bg-primary-soft group-hover:ring-primary/20`}>
      <div className="transition-all duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110 text-indigo-950 group-hover:text-primary">{children}</div>
    </div>
  );
}

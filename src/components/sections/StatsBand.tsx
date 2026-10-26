"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GridBeams } from "@/components/ui/GridBeams";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Stat = { value: number; suffix?: string; label: string };

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="inline-block">
      {n}
      {suffix}
    </span>
  );
}

/** Dark "by the numbers" band with beams and animated counters. */
export function StatsBand({ title, highlight, description, items }: { title: string; highlight: string; description?: string; items: Stat[] }) {
  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      <GridBeams cell={64} variant="dark" showGrid={false} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading title={title} highlight={highlight} description={description} center dark />
        </Reveal>
        <div className="flex flex-col md:flex-row w-full justify-between gap-y-12 md:gap-y-0">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="flex-1 flex">
              <div className={`flex flex-col items-center justify-start w-full text-center px-2 lg:px-6 border-white/10 group cursor-default transition-all duration-300 hover:-translate-y-2 ${i > 0 ? "md:border-l" : ""}`}>
                <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tighter mb-2 !whitespace-nowrap w-max transition-all duration-300 group-hover:text-primary-light group-hover:drop-shadow-[0_0_20px_color-mix(in_oklab,var(--color-primary-light)_60%,transparent)]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </h3>
                <p className="text-white/70 font-medium text-sm md:text-base leading-snug transition-colors duration-300 group-hover:text-white">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

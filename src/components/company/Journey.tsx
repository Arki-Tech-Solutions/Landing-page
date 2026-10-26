"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ourStory } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";
import { Slide } from "./Slide";

/** Branded stand-in for a phase photo (same 16:10 box). TODO(confirm): swap for real photos. */
function PhaseVisual({ icon, years }: { icon: string; years: string }) {
  return (
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] group bg-slate-900">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[radial-gradient(circle_at_25%_30%,color-mix(in_oklab,var(--color-primary)_45%,transparent),transparent_55%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--color-accent)_30%,transparent),transparent_50%)]">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-primary-light">
            <CompanyIcon name={icon} className="w-9 h-9" strokeWidth={1.6} />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">{years}</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

/** "Three steps. One direction." black timeline with a scroll-driven progress rail. */
export function Journey() {
  const j = ourStory.journey;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        <div className="mb-20">
          <Reveal>
            <div className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4">{j.eyebrow}</div>
            <SectionHeading
              dark
              title={j.title}
              highlight={
                <>
                  <span className="text-primary-light">{j.highlight}</span>
                  <span className="text-white">.</span>
                </>
              }
              description={j.description}
            />
          </Reveal>
        </div>
        <div ref={ref} className="relative mt-24 max-w-7xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 -translate-x-1/2 z-0" />
          <motion.div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[3px] bg-primary -translate-x-1/2 z-0 origin-top" style={{ scaleY }} />
          <div className="space-y-24 relative z-10">
            {j.phases.map((p, i) => {
              const even = i % 2 === 0;
              return (
                <div key={p.title} className="relative">
                  <div className={`flex flex-col lg:flex-row items-start lg:items-center ${even ? "lg:flex-row-reverse" : ""}`}>
                    <div className="w-full lg:w-1/2 px-8 lg:px-12">
                      <Slide from={even ? "right" : "left"}>
                        <div className={`flex flex-col text-left group ${even ? "lg:items-start" : "lg:items-end lg:text-right"}`}>
                          <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">{p.title}</h4>
                          <p className="text-slate-400 text-[17px] leading-relaxed max-w-xl">{p.text}</p>
                        </div>
                      </Slide>
                    </div>
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-0 lg:top-auto flex items-center justify-center">
                      <Reveal>
                        <div className="w-16 h-16 bg-indigo-950 border-2 border-slate-900 text-white rounded-xl shadow-[0_0_20px_color-mix(in_oklab,var(--color-primary)_15%,transparent)] flex items-center justify-center relative z-20 group">
                          <span className="text-[11px] font-bold tracking-widest leading-none text-center px-1">{p.years}</span>
                          <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Reveal>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 lg:px-6 mt-12 lg:mt-0">
                      <Slide from={even ? "left" : "right"}>
                        <PhaseVisual icon={p.icon} years={p.years} />
                      </Slide>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Reveal className="mt-40 text-center relative z-20">
            <div className="inline-flex flex-col items-center gap-8">
              <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent mb-4" />
              <p className="text-white font-bold text-2xl tracking-tight">{j.cta.prompt}</p>
              <Link
                href={j.cta.href}
                className="inline-flex items-center px-12 py-4 rounded-full border-2 border-primary-light text-primary-light font-bold text-lg hover:bg-primary hover:border-primary hover:text-white transition-all bg-black shadow-[0_0_30px_color-mix(in_oklab,var(--color-primary)_20%,transparent)] hover:scale-105 active:scale-95 duration-300"
              >
                {j.cta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

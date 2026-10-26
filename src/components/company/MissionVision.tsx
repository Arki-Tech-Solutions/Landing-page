"use client";

import { motion } from "motion/react";
import { GridBeams } from "@/components/ui/GridBeams";
import { ourStory } from "@/content/company";
import { Slide } from "./Slide";

const paths = [
  { d: "M 1000 50 H 500 V 150 H 0", w: 1, o: 0.2 },
  { d: "M 1000 150 H 100", w: 2, o: 0.6 },
  { d: "M 1000 250 H 600 V 150 H 0", w: 1, o: 0.3 },
];

function Circuit({ flip = false }: { flip?: boolean }) {
  return (
    <svg className={`w-full h-full overflow-visible text-accent ${flip ? "translate-x-[-100%] scale-x-[-1]" : ""}`} viewBox="0 0 1000 300" fill="none">
      {paths.map((p, i) => (
        <motion.path
          key={p.d}
          d={p.d}
          stroke="currentColor"
          strokeWidth={p.w}
          opacity={p.o}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.4 + i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

function Dot() {
  return (
    <motion.div
      className="w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_color-mix(in_oklab,var(--color-accent)_80%,transparent)] relative z-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
    />
  );
}

/** Dark beam-grid section with the MISSION / VISION statements and drawn circuit lines. */
export function MissionVision() {
  const mv = ourStory.missionVision;
  return (
    <section className="py-32 bg-navy relative overflow-hidden min-h-[900px] flex items-center">
      <div className="absolute inset-0 z-0">
        <GridBeams cell={60} variant="dark" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy z-10 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-20">
        <div className="relative">
          <div className="relative mb-48 max-w-3xl">
            <Slide from="right">
              <div className="flex items-center gap-6 mb-8 relative">
                <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter uppercase select-none">Mission</span>
                <div className="relative">
                  <Dot />
                  <div className="absolute left-1/2 top-1/2 w-[80vw] h-[300px] pointer-events-none hidden lg:block overflow-visible">
                    <Circuit />
                  </div>
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/50 to-transparent hidden lg:block" />
              </div>
              <p className="text-2xl md:text-4xl text-slate-300 font-medium leading-relaxed tracking-tight max-w-2xl">{mv.mission}</p>
            </Slide>
          </div>
          <div className="relative mt-20 ml-auto max-w-3xl text-right">
            <Slide from="left">
              <div className="flex items-center justify-end gap-6 mb-8 relative">
                <div className="h-[2px] flex-1 bg-gradient-to-l from-accent/50 to-transparent hidden lg:block" />
                <div className="relative">
                  <Dot />
                  <div className="absolute right-1/2 top-1/2 w-[80vw] h-[300px] pointer-events-none hidden lg:block overflow-visible">
                    <Circuit flip />
                  </div>
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter uppercase select-none">Vision</h2>
              </div>
              <p className="text-2xl md:text-4xl text-white font-bold leading-relaxed tracking-tight max-w-2xl ml-auto">{mv.vision}</p>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
}

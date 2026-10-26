"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CircleCheck } from "lucide-react";
import { CaseCover } from "@/components/sections/CaseCover";
import { caseStudies } from "@/content/case-studies";

const featured = caseStudies.slice(0, 3);

/** Auto-rotating spotlight of the first three projects (pauses on hover), with pill indicators. */
export function FeaturedCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % featured.length), 2000);
    return () => clearInterval(id);
  }, [paused]);

  const cs = featured[active];

  return (
    <section className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-center justify-end gap-8">
            <div className="flex items-center gap-3">
              {featured.map((f, i) => (
                <button key={f.slug} type="button" onClick={() => setActive(i)} className="group relative flex items-center justify-center p-2" aria-label={`Show project ${i + 1}`}>
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "w-10 bg-primary" : "w-4 bg-slate-100 group-hover:bg-slate-200"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Link href={`/case-studies/${cs.slug}`} className="group block outline-none">
                  <div className="relative rounded-[40px] bg-white border border-slate-200 p-8 lg:p-14 overflow-hidden transition-all duration-700 group-hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-7 relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                          <span className="text-6xl font-black text-slate-100 group-hover:text-primary/10 transition-colors tabular-nums font-heading">
                            0{active + 1}
                          </span>
                          <div className="h-12 w-px bg-slate-100" />
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.25em] leading-none mb-3">{cs.industry}</span>
                            <h3 className="text-2xl md:text-5xl font-extrabold text-indigo-950 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">{cs.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium">{cs.summary}</p>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Stack</span>
                            <span className="text-sm font-bold text-indigo-950 transition-colors uppercase">{cs.tech}</span>
                          </div>
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Status</span>
                            <span className="text-sm font-bold text-indigo-950">{cs.status}</span>
                          </div>
                          <div className="flex-col gap-3 hidden lg:flex">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Engagement</span>
                            <span className="text-sm font-black text-primary uppercase tracking-tight">{cs.meta.engagement}</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto h-full min-h-[300px] md:min-h-[380px] rounded-[36px] overflow-hidden bg-slate-50 border border-slate-100 transition-all duration-700">
                        <div className="absolute inset-4 md:inset-8 lg:inset-12 flex items-center justify-start lg:justify-center">
                          <div className="relative w-full h-full">
                            <CaseCover cs={cs} className="group-hover:scale-105 transition-transform duration-1000 ease-out" />
                          </div>
                        </div>
                        <div className="absolute top-8 right-8 z-20">
                          <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-sm border border-slate-100">
                            <CircleCheck size={24} aria-hidden />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

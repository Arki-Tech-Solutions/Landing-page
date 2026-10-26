"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { life } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";

const scenes = [
  "radial-gradient(circle at 70% 40%, color-mix(in oklab, var(--color-primary) 55%, transparent), transparent 55%), radial-gradient(circle at 20% 80%, color-mix(in oklab, var(--color-accent) 30%, transparent), transparent 50%)",
  "radial-gradient(circle at 60% 50%, color-mix(in oklab, var(--color-primary-light) 30%, transparent), transparent 50%)",
  "radial-gradient(circle at 75% 30%, color-mix(in oklab, var(--color-accent) 45%, transparent), transparent 55%), radial-gradient(circle at 30% 70%, color-mix(in oklab, var(--color-primary) 35%, transparent), transparent 50%)",
  "radial-gradient(circle at 65% 60%, color-mix(in oklab, var(--color-primary) 50%, transparent), transparent 55%), radial-gradient(circle at 85% 15%, color-mix(in oklab, var(--color-primary-light) 30%, transparent), transparent 45%)",
];

/** Branded stand-in for a desk photo. TODO(confirm): replace with real photos. */
function Scene({ i, icon, big = false }: { i: number; icon: string; big?: boolean }) {
  return (
    <div className="absolute inset-0 bg-slate-950" aria-hidden>
      <div className="absolute inset-0" style={{ background: scenes[i % scenes.length] }} />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: big ? "64px 64px" : "16px 16px" }} />
      <div className={`absolute ${big ? "right-[12%] top-1/2 -translate-y-1/2" : "inset-0 flex items-center justify-center"}`}>
        <CompanyIcon name={icon} className={big ? "w-[22vw] max-w-[320px] h-auto text-white/15" : "w-8 h-8 text-white/30"} strokeWidth={big ? 0.8 : 1.5} />
      </div>
    </div>
  );
}

/** "How Arki engineers work": full-bleed scene with thumbnails that switch the active setup (auto-advances). */
export function DeskSetups() {
  const d = life.desks;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % d.items.length), 6000);
    return () => clearInterval(t);
  }, [paused, d.items.length]);
  const cur = d.items[active];
  const others = d.items.map((it, i) => ({ ...it, i })).filter((x) => x.i !== active);

  return (
    <section
      className="relative w-full h-fit md:h-[100vh] min-h-[600px] md:min-h-[700px] overflow-hidden mt-20 md:mt-32 bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 z-10 hidden md:block">
        <AnimatePresence>
          <motion.div key={active} className="absolute inset-0" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Scene i={active} icon={cur.icon} big />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 z-0 md:hidden bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_70%)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-20 pointer-events-none hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/90 z-20 pointer-events-none hidden md:block" />
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative z-30 h-full flex flex-col py-12 md:py-16">
        <div className="mb-8 md:mb-0">
          <span className="inline-block rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 md:mb-6">{d.badge}</span>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-slate-300">{d.title}</h2>
        </div>
        <div className="hidden md:flex flex-grow items-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="max-w-xl" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white/50 font-mono text-sm">{String(active + 1).padStart(2, "0")}</div>
                <div className="h-[1px] w-12 bg-white/20" />
              </div>
              <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-8">{cur.title}</h3>
              <p className="text-xl font-light text-slate-300 leading-relaxed border-l-2 border-primary-light/50 pl-6">{cur.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="md:hidden flex flex-col gap-12 mb-20">
          {d.items.map((it, i) => (
            <div key={it.title} className="relative w-full">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Scene i={i} icon={it.icon} />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute top-6 left-8">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-primary-light font-bold">SEC. {String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="relative mx-auto -mt-10 w-[85%] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/40">
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">{it.title}</h3>
                <div className="w-8 h-[2px] bg-primary-light mb-4" />
                <p className="text-xs font-light text-slate-400 leading-relaxed italic">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block absolute bottom-8 right-0 z-40 pr-6 lg:pr-8">
          <div className="flex items-end justify-end gap-2 lg:gap-4 overflow-visible">
            {others.map((it, k) => (
              <button
                key={it.title}
                type="button"
                onClick={() => setActive(it.i)}
                aria-label={`View ${it.title}`}
                className={`relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900 focus:outline-none transition-all duration-700 w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-44 xl:w-36 xl:h-52 hover:-translate-y-2 ${k === 0 ? "translate-y-2 lg:translate-y-0" : ""}`}
              >
                <div className="absolute inset-0 opacity-60">
                  <Scene i={it.i} icon={it.icon} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-widest text-primary-light block mb-0.5 opacity-70">{String(it.i + 1).padStart(2, "0")}</span>
                  <span className="text-[10px] xl:text-[11px] font-bold leading-tight text-white/80 line-clamp-1 uppercase">{it.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

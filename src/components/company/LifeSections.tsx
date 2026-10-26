import Link from "next/link";
import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { life } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";

const container = "container mx-auto px-5 md:px-10 lg:px-20";

export function LifeHero() {
  const h = life.hero;
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-indigo-950 pt-20 text-center text-white">
      {/* Animated brand composition in place of the reference's background video. TODO(confirm): office video/photo. */}
      <div className="absolute inset-0 z-0 opacity-50" aria-hidden>
        <div className="absolute -left-[10%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-primary blur-[120px] animate-pulse" />
        <div className="absolute right-[-5%] bottom-[5%] h-[50vh] w-[50vh] rounded-full bg-accent/70 blur-[120px] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-indigo-950/20 to-primary/20" />
      </div>
      <div className={`relative z-10 ${container} mt-10`}>
        <span className="inline-block rounded-full border border-primary-light/50 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md">{h.badge}</span>
        <h1 className="mt-6 text-5xl font-black uppercase tracking-tight text-white drop-shadow-xl md:text-7xl lg:text-8xl">{h.title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl font-medium text-white/90 drop-shadow-md">
          {h.lead}
          <br className="hidden md:block" /> <span className="font-normal opacity-90">{h.text}</span>
        </p>
      </div>
    </section>
  );
}

const tileBgs = [
  "from-primary to-primary-dark",
  "from-accent to-accent-dark",
  "from-primary-dark to-ink",
  "from-primary-light to-primary",
];

/** Polaroid card. The photo is a branded tile until real photos exist (TODO(confirm)). */
function Polaroid({ icon, caption, rotate, i }: { icon: string; caption: string; rotate: string; i: number }) {
  return (
    <div className={`group relative flex w-full max-w-[18rem] flex-col bg-white p-3 shadow-lg transition-transform duration-300 hover:z-10 hover:scale-105 ${rotate}`}>
      <div className="relative aspect-square w-full overflow-hidden border border-slate-100 bg-slate-100">
        <div className={`absolute inset-0 bg-gradient-to-br ${tileBgs[i % tileBgs.length]} transition-transform duration-700 group-hover:scale-110 flex items-center justify-center`}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
          <CompanyIcon name={icon} className="relative w-16 h-16 text-white/85" strokeWidth={1.4} />
        </div>
      </div>
      <div className="mt-4 flex h-12 items-center justify-center px-2 text-center text-[10px] font-bold uppercase tracking-wider text-indigo-950">{caption}</div>
    </div>
  );
}

export function FunStuff() {
  const f = life.funStuff;
  return (
    <section className="mt-32 overflow-hidden py-10">
      <div className={container}>
        <h2 className="mb-12 text-3xl font-extrabold uppercase tracking-tight text-indigo-950 md:text-4xl">{f.title}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {f.items.map((it, i) => (
            <Polaroid key={it.caption} {...it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function OtherSide() {
  const o = life.otherSide;
  return (
    <section className="mt-32 relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-24">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className={`relative z-10 ${container}`}>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between mb-20">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-6">{o.badge}</span>
            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl">{o.title}</h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-slate-400 font-light md:text-right">{o.text}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {o.items.map((it, i) => (
            <div key={it.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-primary/20 hover:border-white/10">
              <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${it.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <span className="absolute top-4 right-6 text-[80px] font-black text-white/[0.03] leading-none select-none">{String(i + 1).padStart(2, "0")}</span>
              <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl ${it.tint} transition-transform duration-500 group-hover:scale-110`}>
                <CompanyIcon name={it.icon} className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-extrabold uppercase tracking-wide text-white">{it.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-400 font-light">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cylinder() {
  const c = life.carousel;
  return (
    <section className="relative mt-32 flex w-full min-h-screen flex-col items-center justify-center overflow-hidden bg-black py-16 px-0 text-center">
      <style>{`
        @keyframes arkiSpinInside { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        .arki-cylinder { animation: arkiSpinInside 90s linear infinite; transform-style: preserve-3d; }
        @media (prefers-reduced-motion: reduce) { .arki-cylinder { animation: none; } }
      `}</style>
      <div className="mb-8 md:mb-12 relative z-30 flex flex-col items-center justify-center px-5">
        <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-normal tracking-wide text-white drop-shadow-md leading-[1.1]">{c.title}</h2>
        <p className="mt-4 max-w-md text-[14px] md:text-[15px] text-gray-400 font-light leading-relaxed text-center">
          {c.lines[0]}
          <br className="hidden md:block" /> {c.lines[1]}
        </p>
      </div>
      <div className="relative w-full flex items-center justify-center" style={{ perspective: 800, height: 480 }}>
        <div className="absolute left-1/2 top-0 z-20 h-full w-[2px] -translate-x-1/2 bg-primary-light shadow-[0_0_40px_12px_color-mix(in_oklab,var(--color-primary-light)_50%,transparent)] pointer-events-none mix-blend-screen" />
        <div className="absolute left-1/2 top-1/2 z-0 h-[400px] w-[900px] md:h-[600px] md:w-[1800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-primary-light/15 blur-[120px] md:blur-[200px] pointer-events-none" />
        <div className="scale-[0.55] sm:scale-100" style={{ transformStyle: "preserve-3d" }}>
        <div className="arki-cylinder relative" style={{ width: 280, height: 440 }}>
          {c.tiles.map((icon, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[1.2rem] shadow-2xl shadow-black/60 group"
              style={{ transform: `rotateY(${i * 30}deg) translateZ(-565px)`, backfaceVisibility: "hidden" }}
            >
              <div className={`h-full w-full bg-gradient-to-br ${tileBgs[i % tileBgs.length]} flex items-center justify-center transition-all duration-500 md:grayscale md:group-hover:grayscale-0`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <CompanyIcon name={icon} className="relative w-20 h-20 text-white/80" strokeWidth={1.2} />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="relative z-30 mt-12 grid w-full max-w-[1000px] grid-cols-1 gap-12 px-5 md:grid-cols-3 md:gap-8 lg:px-0">
        {c.points.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center">
            <h3 className="text-[17px] font-medium text-white mb-3">{p.title}</h3>
            <p className="text-[13px] text-gray-400 max-w-[240px] leading-relaxed font-light">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Scrapbook() {
  const s = life.scrapbook;
  return (
    <section className="mt-32 bg-indigo-950 py-24 text-white">
      <div className={`${container} overflow-hidden`}>
        <div className="mb-16 inline-block bg-primary px-6 py-2">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight md:text-5xl">{s.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {s.items.map((it, i) => (
            <div key={it.caption} className="flex justify-center">
              <Polaroid {...it} i={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stories() {
  const s = life.stories;
  return (
    <section className={`mt-32 ${container}`}>
      <div className="flex flex-col items-center justify-between gap-12 rounded-[2rem] bg-slate-900 p-8 shadow-2xl md:p-16 lg:flex-row shadow-primary/20">
        <div className="max-w-lg lg:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-semibold text-primary-light">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {s.badge}
          </span>
          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-5xl">
            {s.title} <span className="text-primary-light">{s.highlight}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">{s.text}</p>
          <div className="mt-10">
            <Link href={s.cta.href} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30">
              <FileText className="h-5 w-5" />
              {s.cta.label}
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Link href={s.cta.href} className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-slate-800 shadow-2xl" aria-label={s.cta.label}>
            <div className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--color-primary)_55%,transparent),transparent_60%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--color-accent)_40%,transparent),transparent_55%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-20 items-center justify-center rounded-xl bg-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-bold text-white">{s.featured}</p>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                <span>Arki Tech blog</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyAddis() {
  const w = life.whyAddis;
  return (
    <section className="mt-32 relative overflow-hidden bg-black py-32 text-white">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className={`relative z-10 ${container}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-7">
            <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-8">{w.badge}</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8">{w.title}</h2>
            <p className="text-xl md:text-2xl font-light text-slate-300 mb-10 border-l-2 border-primary-light/30 pl-8 leading-relaxed">{w.lead}</p>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12">{w.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {w.points.map((p, i) => (
                <div key={p.title} className="group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-primary-light/30">
                  <div className="text-primary-light font-mono text-sm mb-3">{`${String(i + 1).padStart(2, "0")} //`}</div>
                  <h4 className="font-bold text-white text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <Link href={w.cta.href} className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full transition-transform hover:scale-105 active:scale-95">
              {w.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-12 xl:col-span-5 relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 bg-[radial-gradient(circle_at_40%_40%,var(--color-primary),transparent_60%),radial-gradient(circle_at_80%_80%,var(--color-accent),transparent_50%)] bg-ink flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white/70" strokeWidth={1.3} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-2 block">{w.panelTag}</span>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <p className="text-white text-xs font-bold uppercase tracking-widest">{w.panelLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsideArki() {
  const v = life.vibe;
  return (
    <section className={`mt-32 ${container} overflow-hidden`}>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:gap-8 mb-16">
        <h2 className="text-4xl font-extrabold uppercase tracking-tight text-indigo-950 md:text-5xl">{v.title}</h2>
        <div className="hidden h-1 flex-grow bg-indigo-950 md:block" />
        <span className="text-xl font-bold italic text-primary">{v.tag}</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {v.items.map((it) => (
          <div key={it.title} className="group relative cursor-default">
            <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-50 blur transition duration-300 group-hover:opacity-100 ${it.gradient}`} />
            <div className="relative flex aspect-video w-full flex-col justify-end overflow-hidden rounded-xl bg-slate-900 p-4">
              <div className="absolute inset-0 flex items-center justify-center opacity-60 transition-opacity group-hover:opacity-80">
                <CompanyIcon name={it.icon} className="w-12 h-12 text-white/40" strokeWidth={1.3} />
              </div>
              <h3 className="relative z-10 text-sm font-bold text-white drop-shadow-md">{it.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AlwaysLearning() {
  const g = life.growth;
  return (
    <section className={`mt-40 ${container} relative overflow-hidden`}>
      <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-neutral-950 px-8 py-16 text-center shadow-2xl md:px-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-block bg-primary/15 border border-primary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-light shadow-[0_0_20px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]">{g.badge}</span>
          <h2 className="mt-8 text-3xl font-black uppercase tracking-tight text-white md:text-6xl drop-shadow-lg flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="text-primary-light">&lt; &gt;</span>
            {g.title}
            <span className="text-primary-light">&lt;/ &gt;</span>
          </h2>
          <p className="mt-4 text-[15px] max-w-2xl font-light text-slate-400">{g.text}</p>
          <div className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((it, i) => (
              <div key={it.title} className="group relative flex flex-col bg-slate-900 border border-white/5 p-6 text-left transition-all duration-300 hover:border-primary-light/50 hover:bg-slate-800 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl font-black text-primary-light group-hover:opacity-30 transition-opacity">{i + 1}</div>
                <h3 className="mb-2 text-lg font-bold text-white">{it.title}</h3>
                <p className="text-[13px] text-slate-400">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Careers block. The footer's "Careers" link points at #careers. */
export function Careers() {
  const c = life.careers;
  return (
    <section id="careers" className={`mt-32 ${container} text-center overflow-hidden scroll-mt-24`}>
      <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-950 px-8 py-16 shadow-2xl md:px-16">
        <h2 className="text-3xl font-extrabold uppercase text-white md:text-5xl">{c.title}</h2>
        <p className="mt-6 text-lg font-medium text-slate-300">{c.text}</p>
        <ul className="mt-10 space-y-3 text-left">
          {c.roles.map((r, i) => (
            <li key={i} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
              <span className="font-bold text-white">{r.title}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-light text-right">{r.meta}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-400">{c.note}</p>
        <div className="mt-10">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Application: Arki Tech Solutions")}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
          >
            <Mail className="h-5 w-5" />
            {c.cta}
          </a>
          <p className="mt-4 text-sm text-slate-400">{site.email}</p>
        </div>
      </div>
    </section>
  );
}

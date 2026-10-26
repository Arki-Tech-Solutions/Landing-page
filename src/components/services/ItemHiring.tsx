import Link from "next/link";
import { ArrowRight, CircleCheck, ShieldCheck, Star, Target, UserPlus, Zap } from "lucide-react";
import { ContactBand } from "@/components/sections/ContactBand";
import { Reveal } from "@/components/ui/Reveal";
import { itemShared, phases, serviceCta } from "@/content/services";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { Blueprint, ItemFaq } from "./ItemShared";
import type { ItemProps } from "./ItemPage";
import { fill } from "./utils";
import { WordReveal } from "./WordReveal";

/** Item layout for software engineering and team services: centered word-reveal hero, context, scope, path, why, blueprint. */
export function ItemHiring({ sub, item, crumbs }: ItemProps & { crumbs: Crumb[] }) {
  const h = itemShared.hiring;
  const [ctx1, ctx2] = (sub.context ?? ["", ""]).map((c) => fill(c, item.label));
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 overflow-hidden">
      <section className="relative pt-16 pb-20 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary-soft/60 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80828508_1px,transparent_1px),linear-gradient(to_bottom,#80828508_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        <Breadcrumb items={crumbs} />
        <div className="w-full mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center max-w-5xl">
          <Reveal from="none" className="w-full">
            <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 p-1 pr-4 shadow-xl backdrop-blur-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <UserPlus className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-dark">{sub.badge}</span>
              <span className="h-4 w-px bg-primary/25 mx-1" />
              <span className="text-[11px] font-bold text-primary/80">Available now</span>
            </div>
          </Reveal>
          <WordReveal text={item.heroTitle} className="font-heading text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] text-indigo-950 tracking-tight mb-8" />
          <Reveal>
            <p className="max-w-3xl text-xl text-slate-600/90 leading-relaxed font-medium mb-12 lg:text-2xl">{item.description}</p>
          </Reveal>
          <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link
              href={serviceCta.href}
              className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-indigo-950 px-10 py-5 text-sm font-black text-white shadow-2xl transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.2em]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative flex items-center justify-center gap-3">
                {serviceCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
          <div className="mt-20 flex flex-wrap justify-center gap-3 max-w-3xl">
            {item.kpis.map((k, i) => (
              <Reveal key={k} delay={i * 0.05}>
                <div className="flex items-center gap-2 rounded-xl border border-white bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all hover:shadow-md hover:-translate-y-1">
                  <CircleCheck className="h-4 w-4 text-primary" />
                  <span className="text-[12px] font-bold text-slate-700 sm:whitespace-nowrap">{k}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex items-center justify-center gap-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              <ShieldCheck className="h-3 w-3" />
              {h.trust[0]}
            </div>
            <div className="h-px w-8 bg-slate-200" />
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              <Star className="h-3 w-3" />
              {h.trust[1]}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <article className="group rounded-[32px] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:shadow-lg flex flex-col justify-center">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:scale-110 transition-transform">
                <Target className="h-5 w-5" />
              </div>
              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">Business context</p>
              <h3 className="mb-6 text-2xl font-extrabold text-slate-900 leading-tight">Roles aligned to how you deliver</h3>
              <div className="space-y-4">
                <p className="text-base text-slate-600 leading-relaxed font-medium">{ctx1}</p>
                <p className="text-base text-slate-600 leading-relaxed font-medium">{ctx2}</p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-[32px] border border-primary/30 bg-primary-dark hover:bg-primary p-8 lg:p-10 shadow-xl transition-colors duration-300 text-white flex flex-col justify-center">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-transform duration-500 group-hover:scale-150" />
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary-light">Execution timeline</p>
                <h3 className="mb-4 text-2xl font-extrabold text-white">Typical ramp-up</h3>
                <p className="text-lg text-white/85 leading-relaxed font-medium">
                  {item.label} engineers usually contribute within the first sprint, once scope and technical access are confirmed.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto mb-12 text-center">
            <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-4 block text-center">Process</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl text-center">Scope highlights</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {item.focus.map((f, i) => (
              <article key={f} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-1 flex items-center gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-[12px] font-black text-primary-dark group-hover:bg-primary group-hover:text-white transition-all">0{i + 1}</span>
                <span className="text-slate-800 text-sm font-bold leading-snug line-clamp-2">{f}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-slate-100/50 border-y border-slate-200/60 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mx-auto mb-8 text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Execution path</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            <div className="absolute top-8 h-0.5 bg-gradient-to-r from-primary/10 via-primary/25 to-primary/10 hidden lg:block" style={{ left: "12.5%", right: "12.5%" }} />
            {phases.map((p, i) => (
              <div key={p} className="group relative flex flex-col items-center text-center py-4">
                <div className="relative z-10 mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] border-4 border-white bg-slate-50 text-base font-black text-primary shadow-lg shadow-slate-200 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:-translate-y-1">
                  {i + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-700 leading-tight md:px-2 group-hover:text-primary-dark transition-colors line-clamp-2">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent)] pointer-events-none" />
        <div className="container relative mx-auto px-6 max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-black tracking-tight md:text-5xl">Why choose us</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {h.why.map((w) => (
              <article key={w.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-primary-light/50 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary-light group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <h3 className="mb-2 text-base font-extrabold text-white">{w.title}</h3>
                <p className="text-[13px] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-4">{w.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-primary-light/20 bg-primary/10 p-6 backdrop-blur-md max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-base font-medium text-slate-200">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary-light mr-2 shrink-0">Prerequisites:</span>
                {itemShared.prerequisites.map((p, i) => (
                  <span key={p} className="flex items-center gap-4">
                    {i > 0 ? <span className="text-slate-500">•</span> : null}
                    <span>{p}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blueprint hiring tag="Overview" coreTeam={h.coreTeam} models={h.models} />
      <ItemFaq item={item} />
      <ContactBand />
    </div>
  );
}

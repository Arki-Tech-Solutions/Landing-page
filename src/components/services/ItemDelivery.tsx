import Link from "next/link";
import { ArrowRight, Compass, Gauge, Layers, Rocket, Sparkles, Target, TrendingUp } from "lucide-react";
import { ContactBand } from "@/components/sections/ContactBand";
import { itemShared, phases, serviceCta } from "@/content/services";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { Blueprint, ItemFaq } from "./ItemShared";
import type { ItemProps } from "./ItemPage";
import { VerifiedMark } from "./VerifiedMark";

const kpiIcons = [Rocket, Gauge, Target, TrendingUp];

/** Item layout for AI and cloud services: KPI card hero, timeline + phases, deliverables, outcomes, blueprint. */
export function ItemDelivery({ group, sub, item, crumbs }: ItemProps & { crumbs: Crumb[] }) {
  const d = itemShared.delivery;
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] overflow-hidden">
      <section className="relative pt-16 pb-24 lg:pb-32 bg-gradient-to-br from-primary-soft/50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-soft/20 via-primary-soft/20 to-transparent" />
        <Breadcrumb items={crumbs} />
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative pt-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft/80 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark shadow-sm backdrop-blur-md">
                  <Sparkles className="h-3 w-3" />
                  {group.label}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft/80 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark shadow-sm backdrop-blur-md">
                  Delivery &amp; execution
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl drop-shadow-sm">{item.heroTitle}</h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 font-medium">{item.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={serviceCta.href}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95"
                >
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                  {serviceCta.label}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light rounded-[40px] blur-3xl opacity-20" />
              <div className="relative rounded-[32px] border border-white bg-white/60 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl lg:p-10">
                <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8 border-b border-slate-200/60 pb-4">Key Performance Indicators</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.kpis.map((k, i) => {
                    const I = kpiIcons[i % kpiIcons.length];
                    return (
                      <div key={k} className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/25">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                          <I className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-bold text-slate-700 leading-snug pt-1">{k}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-black tracking-tight text-slate-900 md:text-5xl lg:leading-tight">
              Plan the work, hit the milestones, measure the <span className="text-primary">outcomes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            <article className="lg:col-span-5 group rounded-[32px] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:shadow-lg hover:border-primary/25 flex flex-col justify-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary group-hover:scale-110 transition-transform">
                <Compass className="h-7 w-7" />
              </div>
              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">Timeline</p>
              <h3 className="mb-4 text-2xl font-extrabold text-slate-900">Expected timeline</h3>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">
                {item.label} engagements usually deliver their first production increment within the first release cycle, once scope and data access are confirmed.
              </p>
            </article>
            <article className="lg:col-span-7 rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary-soft to-white p-8 lg:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Layers className="h-32 w-32 text-primary -rotate-12" />
              </div>
              <p className="mb-6 text-[9px] font-black uppercase tracking-[0.2em] text-primary-dark relative z-10">Delivery phases</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {phases.map((p, i) => (
                  <div key={p} className="group relative rounded-[20px] border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-md transition-all hover:shadow-md hover:-translate-y-1 hover:border-primary/30 flex items-center gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-base font-black text-primary-dark group-hover:bg-primary group-hover:text-white transition-colors">{i + 1}</div>
                    <p className="text-sm font-bold leading-tight text-slate-800 group-hover:text-primary-dark line-clamp-2">{p}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-primary)_40%,transparent),transparent_60%)]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-primary-light">Deliverables</p>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4">What we hand over</h3>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto text-base opacity-80">{d.deliverablesIntro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {item.focus.map((f, i) => (
              <div key={f} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-primary-light/30">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-primary-light group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="font-black text-xs">0{i + 1}</span>
                </div>
                <p className="text-base font-bold text-slate-200 leading-tight">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-slate-500 mb-4 shadow-sm">What we measure</span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Expected outcomes</h3>
          </div>
          <div className="mx-auto max-w-4xl space-y-3">
            {d.outcomes(`${sub.label} work`).map((o, i) => (
              <div key={o} className="group relative flex items-center justify-between gap-6 px-6 py-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md hover:-translate-y-0.5">
                <div className="flex-1 flex items-center gap-8">
                  <span className="text-2xl font-light text-slate-200 group-hover:text-primary transition-colors duration-500 font-mono italic">0{i + 1}</span>
                  <p className="text-lg font-bold leading-tight text-slate-800 group-hover:text-primary-dark transition-colors duration-300">{o}</p>
                </div>
                <VerifiedMark />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Blueprint tag="Strategic Integration" coreTeam={d.coreTeam} models={d.models} />

      <section id="get-started" className="py-24 lg:py-32 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 via-slate-900 to-primary-dark/50" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-white">
            Let&apos;s build something <span className="text-primary-light">that lasts</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-300">
            End-to-end delivery of {item.label} within {sub.label}, with milestones tied to measurable accuracy and performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={serviceCta.href} className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 active:scale-95">
              {serviceCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ItemFaq item={item} />
      <ContactBand />
    </div>
  );
}

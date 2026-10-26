import Link from "next/link";
import { Activity, ArrowRight, Cpu, Layers, Network, Settings, ShieldCheck } from "lucide-react";
import { ContactBand } from "@/components/sections/ContactBand";
import { itemShared, phases, serviceCta } from "@/content/services";
import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { ItemFaq } from "./ItemShared";
import type { ItemProps } from "./ItemPage";
import { fill } from "./utils";
import { WordReveal } from "./WordReveal";

function Eyebrow({ children }: { children: string }) {
  return <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-3 block text-center">{children}</span>;
}

/** Item layout for modernization and emerging-tech services: transition roadmap, scope, governance, risks, engagement. */
export function ItemTransition({ sub, item, crumbs }: ItemProps & { crumbs: Crumb[] }) {
  const t = itemShared.transition;
  const [ctx1, ctx2] = (sub.context ?? ["", ""]).map((c) => fill(c, item.label));
  const engage = [
    { icon: Layers, title: "Core team", items: t.coreTeam, tone: "primary" },
    { icon: ShieldCheck, title: "Prerequisites", items: itemShared.prerequisites, tone: "primary" },
    { icon: Settings, title: "Engagement models", items: t.models, tone: "accent" },
  ] as const;
  return (
    <div className="flex min-h-screen flex-col bg-[#fdfdfd] overflow-hidden">
      <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 min-h-[90vh] flex items-center bg-gradient-to-br from-primary-soft/50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] max-w-full rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] max-w-full -ml-32 -mb-32 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-8 inset-x-0 z-40 w-full text-left">
          <Breadcrumb items={crumbs} />
        </div>
        <div className="container relative mx-auto px-6 max-w-7xl z-10 text-center pt-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft/50 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary-dark shadow-sm backdrop-blur-md">
              <Activity className="h-4 w-4" />
              {sub.badge}
            </div>
            <WordReveal
              text={item.heroTitle}
              className="mb-8 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-[72px] drop-shadow-sm"
              highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark"
            />
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-600 font-medium">{item.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={serviceCta.href}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 active:scale-95"
              >
                {serviceCta.label}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
            {item.kpis.map((k) => (
              <div key={k} className="group relative rounded-3xl border border-primary/10 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/25">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-soft to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-3xl" />
                <p className="relative text-sm font-bold leading-snug text-slate-700">{k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="container relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:sticky lg:top-32">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm">
                <Network className="h-7 w-7" />
              </div>
              <h2 className="mb-6 text-3xl font-black leading-[1.1] text-slate-900 md:text-5xl">Transition strategy</h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-600 font-medium">
                <p>{ctx1}</p>
                <p>{ctx2}</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/40 lg:p-10">
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <h3 className="text-xl font-extrabold text-slate-900 shrink-0">Programme roadmap</h3>
                  <span className="rounded-full border border-primary/15 bg-primary-soft px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary-dark">
                    {item.label} runs in phases with exit criteria and tested fallbacks.
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-px bg-primary/15" />
                  <ul className="space-y-6 relative">
                    {phases.map((p, i) => (
                      <li key={p} className="group flex items-start gap-5 cursor-default">
                        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-primary/15 bg-white text-xs font-black text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                          0{i + 1}
                        </span>
                        <div className="pt-1.5">
                          <p className="text-base font-bold leading-relaxed text-slate-800 transition-colors group-hover:text-primary-dark">{p}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-[600px] max-w-full h-[600px] bg-primary-soft/30 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-12 text-center">
            <Eyebrow>Execution</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl text-center">Scope of work</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {item.focus.map((f, i) => (
              <div key={f} className="flex gap-4 items-center rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm transition-all hover:bg-white hover:shadow-lg hover:border-primary/15">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-[12px] font-black text-primary border border-primary/15">0{i + 1}</span>
                <span className="text-slate-800 text-sm font-bold leading-tight line-clamp-2">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm transition-all hover:shadow-lg hover:border-primary/25 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-40 blur-3xl" />
              <div className="mb-8 flex items-center justify-between gap-4 relative z-10">
                <h3 className="text-2xl font-black text-slate-900">Deliverables</h3>
                <span className="rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary-dark">Outputs</span>
              </div>
              <ul className="grid grid-cols-1 gap-4 relative z-10">
                {t.deliverables.map((d) => (
                  <li key={d} className="group flex gap-4 items-center">
                    <div className="h-3 w-3 shrink-0 rounded-full bg-primary-light group-hover:scale-125 transition-transform" />
                    <span className="text-base font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-8 lg:p-10 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-8 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-white">Governance</h3>
                <span className="rounded-full border border-primary-light/30 bg-primary-light/10 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary-light">Management</span>
              </div>
              <ul className="space-y-6 mt-10">
                {t.governance.map((g) => (
                  <li key={g} className="flex gap-5 items-start">
                    <ShieldCheck className="h-6 w-6 text-primary-light shrink-0" />
                    <span className="text-base font-medium leading-relaxed text-slate-300">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-rose-100 bg-white p-8 lg:p-10 shadow-sm transition-all hover:shadow-lg hover:border-rose-200">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Risks &amp; mitigations</h3>
              </div>
              <div className="space-y-4">
                {t.risks.map((r) => (
                  <div key={r.risk} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors hover:bg-white hover:border-slate-200 hover:shadow-sm">
                    <p className="text-sm font-extrabold text-slate-900 mb-2">Risk: {r.risk}</p>
                    <p className="text-[13px] font-medium text-primary pl-4 border-l-2 border-primary-light pt-0.5">Control: {r.control}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-primary/15 bg-gradient-to-br from-primary-soft/50 to-white p-8 lg:p-10 shadow-sm transition-all hover:shadow-lg hover:border-primary/25 flex flex-col">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Target outcomes</h3>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-3">
                {t.outcomes.map((o, i) => (
                  <div key={o} className="group relative overflow-hidden rounded-xl border border-white bg-white/80 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/25">
                    <p className="text-base font-bold text-slate-700 group-hover:text-primary-dark transition-colors flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary shrink-0 text-xs font-black">{i + 1}</span>
                      {o}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12 text-center">
            <Eyebrow>Collaboration</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl text-center">How we engage</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {engage.map((c) => (
              <div key={c.title} className={`group rounded-[32px] border bg-white p-7 lg:p-9 transition-all hover:shadow-xl hover:-translate-y-1 ${c.tone === "accent" ? "border-accent/20" : "border-primary/15"}`}>
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[20px] ${c.tone === "accent" ? "bg-accent/10 text-accent-dark" : "bg-primary-soft text-primary"}`}>
                  <c.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-6">{c.title}</h4>
                <ul className="space-y-4">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-4">
                      <span className={`h-2 w-2 rounded-full shrink-0 mt-2 shadow-sm ${c.tone === "accent" ? "bg-accent" : "bg-primary"}`} />
                      <span className="text-sm font-medium text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors tracking-tight">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-12 self-start mb-4">
              <div className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-4">
                <div className="h-px w-8 bg-primary" />
                Our advantage
                <div className="h-px w-8 bg-primary" />
              </div>
              <h2 className="mb-0 text-center text-3xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl text-balance">
                Why partner with us for <span className="text-primary">{item.label}</span>?
              </h2>
            </div>
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {t.advantages.map((a, i) => (
                <div key={a.title} className="group relative flex flex-col gap-4 border border-slate-100 bg-slate-50/50 p-6 rounded-3xl transition-all hover:bg-white hover:border-primary/15 hover:shadow-xl">
                  <span className="text-4xl font-light text-slate-200 group-hover:text-primary transition-colors duration-500 font-mono tracking-tighter leading-none">0{i + 1}</span>
                  <div>
                    <h3 className="mb-2 text-lg font-black text-slate-900 group-hover:text-primary transition-colors">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 font-medium">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" className="py-24 lg:py-36 relative overflow-hidden bg-white text-center flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-white to-primary-soft" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] max-w-full rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="container relative mx-auto px-6 max-w-4xl z-10">
          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-7xl drop-shadow-sm text-slate-900">
            Begin your <span className="text-primary">{item.label}</span> journey
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-medium leading-relaxed text-slate-600">
            End-to-end support for {item.label} within {sub.label}, with agreed acceptance criteria, weekly status updates and phased milestones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={serviceCta.href} className="group inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 active:scale-95">
              {serviceCta.label}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ItemFaq item={item} />
      <ContactBand />
    </div>
  );
}

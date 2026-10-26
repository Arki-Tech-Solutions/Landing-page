import Link from "next/link";
import { ArrowRight, CircleCheck, Gauge, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whyArkiPage as w } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";
import { Crumbs } from "./Crumbs";
import { ProgressBar } from "./ProgressBar";
import { Slide } from "./Slide";

export function WhyHero() {
  const h = w.hero;
  const b = w.blueprint;
  return (
    <section className="relative pt-16 overflow-hidden bg-white">
      <Crumbs label={w.breadcrumb} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-70px] h-64 w-64 rounded-full bg-primary-light/30 blur-3xl" />
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10 pb-16 pt-5 sm:pb-20 sm:pt-7 lg:pb-24 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {h.badge}
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-6 font-heading text-[clamp(2.6rem,11vw,4.25rem)] sm:text-[clamp(4rem,6vw,5rem)] font-extrabold leading-[0.96] tracking-tight text-slate-950">
                {h.titleA}
                <span className="block text-primary">{h.titleB}</span>
                {h.titleC}
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{h.description}</p>
            </Reveal>
            <Reveal>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={h.primary.href} className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary">
                  {h.primary.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href={h.secondary.href} className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:border-primary/50 hover:text-primary">
                  {h.secondary.label}
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {h.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{s.label}</p>
                    <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{s.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal from="right">
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] sm:p-7">
                <div className="absolute right-6 top-6 rounded-full bg-primary-soft px-3 py-1 text-[11px] font-bold text-primary-dark">{b.badge}</div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">{b.label}</p>
                <div className="relative mt-6 pl-8">
                  <div className="absolute left-3 top-2 h-[calc(100%-12px)] w-[2px] bg-gradient-to-b from-primary/60 to-primary-light" />
                  {b.steps.map((s, i) => (
                    <Slide key={s.title} from="right" distance={16} delay={0.2 + i * 0.15} className="relative mb-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <span className="absolute -left-[29px] top-5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">{i + 1}</span>
                      <div className="flex items-center gap-2">
                        <CompanyIcon name={s.icon} className="h-4 w-4 text-primary" />
                        <p className="text-sm font-bold text-slate-900">{s.title}</p>
                      </div>
                      <p className="mt-2 text-xs leading-6 text-slate-600">{s.text}</p>
                    </Slide>
                  ))}
                  <Slide from="right" distance={16} delay={0.5} className="relative rounded-2xl bg-slate-900 p-4 text-white">
                    <span className="absolute -left-[29px] top-5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-light text-[10px] font-bold text-slate-900">3</span>
                    <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                      <span>{b.bar.label}</span>
                      <span>{b.bar.value}</span>
                    </div>
                    <ProgressBar percent={100} />
                    <p className="mt-3 text-sm font-semibold">{b.bar.text}</p>
                  </Slide>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyPillars() {
  const p = w.pillars;
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(var(--color-ink) 0.8px, transparent 0.8px)", backgroundSize: "26px 26px" }} />
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-primary">{p.eyebrow}</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{p.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{p.description}</p>
          </div>
        </Reveal>
        <div className="space-y-7 lg:space-y-8">
          {p.items.map((it, i) => (
            <Reveal key={it.title}>
              <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_70px_-30px_color-mix(in_oklab,var(--color-primary)_35%,transparent)] sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 grid gap-7 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-7">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                        <CompanyIcon name={it.icon} className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">Pillar {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{it.title}</h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">{it.tag}</p>
                    <p className="mt-5 text-base leading-8 text-slate-600">{it.text}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Impact for your team</p>
                      <p className="mt-4 text-base font-semibold leading-7 text-slate-700">{it.impact}</p>
                      <div className="mt-6 border-t border-slate-200 pt-5">
                        <div className="flex items-start gap-3">
                          <Gauge className="mt-0.5 h-5 w-5 text-primary" />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Measured signal</p>
                            <p className="mt-1 text-lg font-extrabold text-slate-900">{it.signal}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyOrbit() {
  const o = w.orbit;
  const n = o.items.length;
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">{o.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-indigo-950 leading-[1.15]">
              {o.title} <span className="text-primary">{o.highlight}</span> →
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="hidden lg:block relative mx-auto" style={{ width: 800, height: 800 }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-center shadow-[0_0_60px_color-mix(in_oklab,var(--color-primary)_25%,transparent),inset_0_0_30px_rgba(255,255,255,0.1)] z-10 px-6">
              <p className="text-white font-extrabold text-lg leading-tight">{o.center}</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-dashed border-primary/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-primary/[0.06]" />
            {o.items.map((it, i) => {
              const a = (i / n) * 2 * Math.PI - Math.PI / 2;
              const x = Math.round(Math.cos(a) * 340 * 100) / 100;
              const y = Math.round(Math.sin(a) * 340 * 100) / 100;
              return (
                <div key={it.title} className="absolute group cursor-default" style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)`, transform: "translate(-50%, -50%)", width: 170 }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-2.5 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                      <CompanyIcon name={it.icon} className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-[13px] font-extrabold text-indigo-950 leading-tight mb-0.5 group-hover:text-primary transition-colors">{it.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-snug font-medium">{it.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
        <div className="lg:hidden grid grid-cols-2 gap-5">
          {o.items.map((it) => (
            <Reveal key={it.title}>
              <div className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary transition-all duration-500">
                  <CompanyIcon name={it.icon} className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-[13px] font-extrabold text-indigo-950 leading-tight mb-1">{it.title}</h4>
                <p className="text-[11px] text-gray-400 leading-snug font-medium">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyCompare() {
  const c = w.compare;
  return (
    <section className="bg-indigo-950 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-bold text-sm tracking-widest uppercase mb-4 block">{c.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              {c.title} <span className="text-primary-light">{c.highlight}</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-medium">{c.description}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="hidden lg:block overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <table className="w-full text-left">
              <thead>
                <tr>
                  {c.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`px-7 py-5 text-[11px] font-bold uppercase tracking-[0.15em] border-b border-white/[0.06] ${i === 3 ? "text-primary-light bg-primary/[0.12]" : "text-white/30"}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.aspect} className="border-b border-white/[0.04] last:border-0 group transition-colors hover:bg-white/[0.02]">
                    <td className="px-7 py-5 text-white font-bold text-[15px]">{r.aspect}</td>
                    <td className="px-7 py-5 text-white/35 text-[14px] leading-relaxed">{r.agency}</td>
                    <td className="px-7 py-5 text-white/35 text-[14px] leading-relaxed">{r.local}</td>
                    <td className="px-7 py-5 bg-primary/[0.08] group-hover:bg-primary/[0.14] transition-colors">
                      <div className="flex items-start gap-2.5">
                        <CircleCheck className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                        <span className="text-white font-semibold text-[14px] leading-relaxed">{r.arki}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:hidden space-y-4">
            {c.rows.map((r) => (
              <div key={r.aspect} className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-white font-bold text-lg mb-6 pb-4 border-b border-white/[0.06]">{r.aspect}</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{c.columns[1]}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{r.agency}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{c.columns[2]}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{r.local}</p>
                  </div>
                  <div className="rounded-xl bg-primary/[0.12] border border-primary/30 p-4 space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary-light">{c.columns[3]}</p>
                    <div className="flex items-start gap-3">
                      <CircleCheck className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                      <p className="text-white font-bold text-sm leading-relaxed">{r.arki}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyClosing() {
  const c = w.closing;
  const btn = "group flex w-full items-center justify-between rounded-2xl border px-6 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1";
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-navy p-8 sm:p-10 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">{c.title}</h2>
              </Reveal>
              <Reveal>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{c.text}</p>
              </Reveal>
              <Reveal>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-primary-light rounded-full" />
                  <p className="font-semibold text-white">{c.note}</p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="flex w-full flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
                <Reveal className="w-full sm:flex-1 lg:w-full lg:max-w-[320px]">
                  <Link href={c.primary.href} className={`${btn} border-primary bg-primary text-white hover:bg-primary-dark shadow-[0_8px_20px_-6px_color-mix(in_oklab,var(--color-primary)_50%,transparent)]`}>
                    <span>{c.primary.label}</span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 bg-white/20 group-hover:bg-white/30">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
                <Reveal className="w-full sm:flex-1 lg:w-full lg:max-w-[320px]">
                  <Link href={c.secondary.href} className={`${btn} border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.08]`}>
                    <span>{c.secondary.label}</span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 bg-white/10 group-hover:bg-white/20">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

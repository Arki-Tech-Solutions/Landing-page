import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { engagement } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";
import { Crumbs } from "./Crumbs";

export function EngagementHero() {
  const h = engagement.hero;
  return (
    <section className="relative flex min-h-[100dvh] min-h-svh w-full flex-col items-stretch overflow-hidden text-white pt-16">
      <Crumbs label={engagement.breadcrumb} dark />
      {/* Abstract fluid light forms (CSS stand-in for the reference's stock photo). */}
      <div className="absolute inset-0 z-0 bg-navy" aria-hidden>
        <div className="absolute -left-[10%] top-[35%] h-[70%] w-[80%] rounded-[45%] bg-primary blur-[90px] rotate-[-12deg]" />
        <div className="absolute right-[-15%] top-[-10%] h-[70%] w-[60%] rounded-[40%] bg-accent/70 blur-[110px] rotate-[18deg]" />
        <div className="absolute left-[30%] bottom-[-20%] h-[50%] w-[55%] rounded-full bg-primary-light/50 blur-[100px]" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-primary/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/55" />
        <div className="absolute top-0 right-0 h-[min(42vw,280px)] w-[min(42vw,280px)] translate-x-[12%] -translate-y-[18%] rounded-full bg-primary/12 blur-[56px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[min(70vw,560px)] w-[min(70vw,560px)] -translate-x-1/3 translate-y-1/4 rounded-full bg-primary/15 blur-[90px] pointer-events-none" />
      </div>
      <div className="relative z-10 flex-1 w-full mx-auto px-6 lg:px-8 max-w-[1400px] flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center gap-8 max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-heading">
              {h.titleA} {h.titleB} <span className="text-primary-light">{h.highlight}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">{h.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href={h.cta.href} className="px-10 py-4 bg-primary text-white font-bold rounded-full transition-all hover:bg-primary-dark hover:scale-[1.02] shadow-lg shadow-primary/20 font-heading">
              {h.cta.label}
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-4 pt-8 sm:pt-10 border-t border-white/10 max-w-fit mx-auto">
            {h.points.map((p) => (
              <div key={p} className="flex min-h-[44px] sm:min-h-[48px] items-center justify-start gap-2.5 text-slate-200">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-light shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] font-heading leading-[1.25] text-left">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const iconBubble =
  "flex shrink-0 items-center justify-center rounded-full bg-primary/[0.09] text-primary/60 transition-colors duration-200";

export function EngagementModels() {
  const m = engagement.models;
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950 mb-5 sm:mb-6 tracking-tight font-heading">{m.title}</h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans">{m.description}</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {m.items.map((it) => (
            <div key={it.title} className="bg-slate-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/25 group">
              <div className={`mb-6 h-12 w-12 ${iconBubble} group-hover:bg-primary group-hover:text-white group-hover:shadow-sm group-hover:ring-2 group-hover:ring-primary/25`}>
                <CompanyIcon name={it.icon} className="h-[22px] w-[22px]" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-3 tracking-tight font-heading transition-colors duration-300 group-hover:text-primary">{it.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed font-sans text-sm">{it.text}</p>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-heading">Best for</h4>
                <ul className="space-y-2">
                  {it.bestFor.map((b) => (
                    <li key={b} className="text-slate-700 text-sm font-sans flex gap-2">
                      <span className="text-primary font-bold shrink-0">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngagementCompare() {
  const c = engagement.comparison;
  const fields = ["structure", "start", "flexibility", "control"] as const;
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 id="engagement-comparison-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-950 mb-4 tracking-tight font-heading">
            {c.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-sans">{c.description}</p>
        </div>
        <div className="md:hidden grid gap-4">
          {c.rows.map((r) => (
            <article key={r.model} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className={`h-9 w-9 ${iconBubble}`}>
                  <CompanyIcon name={r.icon} className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-indigo-950 font-heading text-base">{r.model}</h3>
              </div>
              <dl className="space-y-2 text-sm">
                {fields.map((f, i) => (
                  <div key={f} className="flex items-start justify-between gap-4">
                    <dt className="text-slate-500 font-medium">{c.columns[i + 1]}</dt>
                    <dd className="text-slate-700 text-right">{r[f]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <div className="hidden md:block rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md hover:border-slate-300">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left border-collapse" aria-labelledby="engagement-comparison-heading">
              <thead>
                <tr className="border-b border-slate-200">
                  {c.columns.map((col) => (
                    <th key={col} className="px-4 py-4 md:px-6 md:py-5 text-xs font-bold uppercase tracking-wider text-slate-600 font-heading bg-white">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.model} className="border-b border-slate-100 last:border-b-0 group/row transition-colors duration-200 hover:bg-primary/[0.05]">
                    <td className="px-4 py-4 md:px-6 md:py-5 align-middle">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`h-10 w-10 ${iconBubble} group-hover/row:bg-primary group-hover/row:text-white group-hover/row:shadow-sm group-hover/row:ring-2 group-hover/row:ring-primary/25`}>
                          <CompanyIcon name={r.icon} className="h-[17px] w-[17px]" />
                        </div>
                        <span className="font-semibold text-indigo-950 font-heading text-sm md:text-base transition-colors duration-200 group-hover/row:text-primary">{r.model}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 md:px-6 md:py-5 align-middle">
                      <span className="inline-flex px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-sans whitespace-nowrap transition-all duration-200 group-hover/row:bg-primary/15 group-hover/row:shadow-sm">
                        {r.structure}
                      </span>
                    </td>
                    {(["start", "flexibility", "control"] as const).map((f) => (
                      <td key={f} className="px-4 py-4 md:px-6 md:py-5 text-slate-600 text-sm md:text-base font-sans align-middle transition-colors duration-200 group-hover/row:text-slate-800">
                        {r[f]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngagementSteps() {
  const s = engagement.howWeWork;
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950 mb-4 tracking-tight font-heading">{s.title}</h2>
          <p className="text-slate-500 text-base sm:text-lg font-sans">{s.description}</p>
        </div>
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 h-px bg-slate-300" />
          <div className="grid grid-cols-5 gap-6">
            {s.steps.map((st, i) => (
              <article key={st.title} className="relative text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white text-lg font-bold font-heading ring-4 ring-white">{i + 1}</div>
                <h3 className="mb-2 min-h-[52px] max-w-[200px] text-[18px] leading-[1.15] text-indigo-950 font-heading mx-auto">{st.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans max-w-[220px] mx-auto">{st.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {s.steps.map((st, i) => (
            <article key={st.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white text-sm font-bold font-heading">{i + 1}</div>
                <h3 className="text-lg leading-tight text-indigo-950 font-heading">{st.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">{st.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommercialAlignment() {
  const c = engagement.commercial;
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-indigo-950 text-white overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight font-heading">{c.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {c.items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-lg font-bold text-white mb-3 font-heading">{it.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed font-sans">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngagementServices() {
  const s = engagement.services;
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-950 mb-4 tracking-tight font-heading">{s.title}</h2>
          <p className="text-slate-600 text-base sm:text-lg font-sans">{s.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {s.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group/cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold font-heading transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] shadow-lg shadow-primary/15"
            >
              {l.label}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

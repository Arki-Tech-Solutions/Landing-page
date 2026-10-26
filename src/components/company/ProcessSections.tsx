import Link from "next/link";
import { process } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";
import { Crumbs } from "./Crumbs";

export function ProcessHero() {
  const h = process.hero;
  return (
    <section className="relative bg-black text-white min-h-screen pt-16 flex flex-col items-stretch overflow-hidden">
      <Crumbs label={process.breadcrumb} dark />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="relative w-full mx-auto px-6 lg:px-8 max-w-[1400px] flex-1 flex flex-col items-center justify-center text-center py-20">
        <div className="flex flex-col items-center gap-8 max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] font-heading">
              {h.title} <span className="text-primary-light">{h.highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">{h.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href={h.cta.href} className="px-10 py-4 bg-primary text-white font-bold rounded-full transition-all hover:bg-primary-dark hover:scale-[1.02] shadow-lg shadow-primary/20 font-heading">
              {h.cta.label}
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 pt-8 border-t border-white/10 w-full">
            {h.points.map((p) => (
              <div key={p} className="flex items-center justify-center gap-2.5 text-slate-300">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-light shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] font-heading">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeanAgile() {
  const l = process.lean;
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-6 tracking-tight font-heading">{l.title}</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-sans">
            {l.lines[0]} {l.lines[1]}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-heading">
          {l.roles.map((r) => (
            <div key={r} className="px-6 py-3 rounded-full bg-primary-soft border border-primary/15 text-indigo-950 font-semibold tracking-wide text-sm md:text-base whitespace-nowrap uppercase">
              {r}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScrumEvents() {
  const e = process.events;
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4 tracking-tight font-heading">{e.title}</h2>
          <p className="text-slate-600 text-lg font-sans">{e.description}</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {e.items.map((it) => (
            <div key={it.title} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <CompanyIcon name={it.icon} className="w-6 h-6" />
                </div>
                <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-full tracking-wider font-heading">{it.duration}</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-950 mb-3 tracking-tight font-heading">{it.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed min-h-[3rem] font-sans text-sm">{it.text}</p>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-heading">Key Focus</h4>
                  <ul className="flex flex-wrap gap-2">
                    {it.focus.map((f) => (
                      <li key={f} className="bg-slate-50 border border-slate-200 text-slate-600 text-[13px] font-medium px-2.5 py-1 rounded-md font-sans">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SprintLifecycle() {
  const l = process.lifecycle;
  return (
    <section className="py-20 lg:py-28 bg-indigo-950 text-white overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-16 lg:mb-20 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-heading">{l.title}</h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-sans">{l.description}</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 pl-4 sm:pt-4 sm:pl-4">
            {l.steps.map((s, i) => (
              <div key={s} className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary transition-colors">
                <span className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-sm sm:text-xl font-black shadow-lg text-white font-heading">{i + 1}</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-2 leading-snug font-heading tracking-tight">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CustomerBenefits() {
  const b = process.benefits;
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6 tracking-tight font-heading">{b.title}</h2>
          <p className="text-slate-600 text-lg font-sans">{b.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {b.items.map((it) => (
            <div key={it.title} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                <CompanyIcon name={it.icon} className="w-6 h-6" />
              </div>
              <div className="flex items-center">
                <h3 className="text-[17px] font-bold text-indigo-950 leading-tight tracking-tight font-heading group-hover:text-primary transition-colors">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Outcomes() {
  const o = process.outcomes;
  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 mb-6 tracking-tight leading-tight font-heading">
            {o.title} <span className="text-primary italic">{o.highlight}</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-sans">{o.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {o.items.map((it) => (
            <div key={it.title} className="group relative p-8 sm:p-10 rounded-2xl sm:rounded-[2rem] bg-slate-50 border border-slate-200 hover:bg-white hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                  <CompanyIcon name={it.icon} className="w-10 h-10 text-primary group-hover:animate-pulse" />
                </div>
                <div className="space-y-4">
                  <h3 className="block text-2xl lg:text-3xl font-bold text-indigo-950 tracking-tight group-hover:text-primary transition-colors font-heading">{it.title}</h3>
                  <p className="text-sm font-medium text-slate-500 line-clamp-2 font-sans">{it.text}</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

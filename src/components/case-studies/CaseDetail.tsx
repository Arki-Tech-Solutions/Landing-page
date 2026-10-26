/* eslint-disable @next/next/no-img-element -- technology logos are remote SVGs from jsDelivr */
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight, Award, Briefcase, Building2, CircleCheckBig, Clock, Code, CodeXml, Globe, Layers, MapPin, Microscope,
  ShieldCheck, Target, TrendingUp, Users,
} from "lucide-react";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { CaseCover } from "@/components/sections/CaseCover";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";
import { techCategories } from "@/content/technologies";
import { ScreenMock } from "./CaseVisual";

const techIcons = new Map<string, string>();
for (const cat of techCategories) for (const t of cat.items) if (!techIcons.has(t.name.toLowerCase())) techIcons.set(t.name.toLowerCase(), t.icon);

function TechLogo({ name }: { name: string }) {
  const src = techIcons.get(name.toLowerCase());
  if (!src) return <Code className="w-7 h-7 shrink-0 text-primary-light opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden />;
  // simple-icons are black glyphs: invert them on the dark band.
  const mono = src.includes("simple-icons") ? "invert" : "";
  return <img src={src} alt="" className={`w-7 h-7 object-contain shrink-0 opacity-80 group-hover:opacity-100 transition-opacity ${mono}`} loading="lazy" />;
}

function PrimaryButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Link
      href={site.bookingHref}
      className={`inline-flex items-center gap-3 bg-primary text-white rounded-full font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" aria-hidden />
    </Link>
  );
}

/** Every section of a case study page, in the reference order (contact band is added by the route). */
export function CaseDetail({ cs }: { cs: CaseStudy }) {
  const meta = [
    { icon: Building2, text: cs.meta.sector },
    { icon: Globe, text: cs.meta.industry },
    { icon: MapPin, text: cs.meta.location },
    { icon: Clock, text: cs.meta.duration },
    { icon: Briefcase, text: cs.meta.engagement },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 min-h-screen flex flex-col items-stretch overflow-hidden">
        <Breadcrumb items={[{ label: "Resources" }, { label: "Case Studies", href: "/case-studies" }, { label: cs.title }]} />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-soft/40" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="relative flex-1 flex flex-col justify-center max-w-[1400px] w-full mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              {cs.sample ? (
                <span className="inline-flex items-center px-3 py-1 mb-5 rounded-full bg-primary-soft border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  Sample project · illustrative
                </span>
              ) : null}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-950 mb-6 leading-[1.08] tracking-tight">{cs.headline}</h1>
              <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-xl">{cs.intro}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 py-5 border-y border-gray-100 text-sm font-semibold text-gray-500 mb-8">
                {meta.map(({ icon: I, text }) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <I className="w-4 h-4 text-primary" aria-hidden />
                    {text}
                  </span>
                ))}
              </div>
              <PrimaryButton className="px-8 py-4">Book a 30-min call</PrimaryButton>
            </Reveal>
            <Reveal from="none">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group bg-gray-50 border border-gray-100 flex items-center justify-start lg:justify-center p-4 sm:p-8">
                <div className="relative w-full h-full">
                  <CaseCover cs={cs} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Metrics band */}
      <section className="bg-indigo-950 py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,color-mix(in_oklab,var(--color-primary-light)_8%,transparent),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-16">
            {cs.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="text-center lg:text-left">
                <p className="text-xl md:text-2xl font-extrabold text-white tracking-tight mb-1">{m.value}</p>
                <p className="text-xs font-bold text-primary-light uppercase tracking-wider">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & scope */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-12 tracking-tight">Challenge &amp; Scope</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 mb-8 flex items-center gap-3">
                <Microscope className="w-6 h-6 text-primary" aria-hidden />
                Requirements
              </h3>
              <div className="space-y-0">
                {cs.requirements.map((r, i) => (
                  <Reveal key={r} delay={i * 0.05} from="none">
                    <div className={`flex items-start gap-4 py-4 group ${i < cs.requirements.length - 1 ? "border-b border-gray-100" : ""}`}>
                      <span className="text-sm font-black text-primary/40 mt-0.5 tabular-nums group-hover:text-primary transition-colors shrink-0">0{i + 1}</span>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed group-hover:text-indigo-950 transition-colors">{r}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-950 mb-8 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" aria-hidden />
                Strategic Objectives
              </h3>
              <blockquote className="text-xl md:text-2xl font-bold text-indigo-950 leading-relaxed mb-8 pl-6 border-l-2 border-primary/20">{cs.objective}</blockquote>
              <div>
                <h4 className="text-base font-bold text-primary mb-4">Key Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {cs.deliverables.map((d) => (
                    <span key={d} className="px-4 py-2 bg-gray-50 text-sm font-semibold text-gray-600 border border-gray-100 rounded-lg hover:border-primary/20 hover:bg-primary/5 transition-colors">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical execution */}
      <section id="solutions" className="py-16 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-12 tracking-tight flex items-center gap-3">
            <Layers className="w-7 h-7 text-primary" aria-hidden />
            Technical Execution
          </h2>
          <div className="max-w-4xl">
            {cs.execution.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="flex gap-6 group">
                  <div className="flex flex-col items-center shrink-0 pt-1">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-sm font-black text-gray-400 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all">0{i + 1}</div>
                    <div className="w-px flex-1 bg-gray-200 mt-2 group-hover:bg-primary/20 transition-colors" />
                  </div>
                  <div className="pb-12">
                    <h4 className="text-lg md:text-xl font-extrabold text-indigo-950 mb-3">{s.title}</h4>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical stack */}
      <section className="bg-indigo-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-primary-light)_6%,transparent),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-12 flex items-center gap-3">
            <CodeXml className="w-7 h-7 text-primary-light" aria-hidden />
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {cs.stack.map((g) => (
              <div key={g.group} className="space-y-5">
                <h4 className="text-primary-light font-bold text-sm pb-3 border-b border-white/10">{g.group}</h4>
                <div className="space-y-4">
                  {g.items.map((t) => (
                    <div key={t} className="flex items-center gap-3 group">
                      <TechLogo name={t} />
                      <p className="text-base text-white/70 group-hover:text-white transition-colors">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-14 bg-gradient-to-r from-primary/5 via-white to-primary-soft/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-bold text-primary mb-2">Similar Project?</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-indigo-950 leading-tight">Let&apos;s build your next platform together.</h3>
          </div>
          <PrimaryButton className="px-10 py-5 shrink-0">Get in Touch</PrimaryButton>
        </div>
      </section>

      {/* Features & benefits */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-8 tracking-tight">Features &amp; Outcomes</h2>
              <div className="divide-y divide-gray-100">
                {cs.features.map((f, i) => (
                  <Reveal key={f.title} from="none" delay={i * 0.05}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5 group">
                      <p className="text-base font-bold text-indigo-950 group-hover:text-primary transition-colors">{f.title}</p>
                      <div className="flex items-start gap-3">
                        <CircleCheckBig className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden />
                        <p className="text-base text-gray-500 leading-relaxed">{f.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-8 tracking-tight">Client Benefits</h2>
              <div className="space-y-0">
                {cs.benefits.map((b) => (
                  <div key={b} className="flex gap-4 items-start py-4 border-b border-gray-50 last:border-0 group hover:pl-2 transition-all">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden />
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed group-hover:text-indigo-950 transition-colors">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic outcomes */}
      <section className="py-16 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-10 tracking-tight flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-primary" aria-hidden />
            Strategic Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl">
            {cs.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 0.05}>
                <div className={`flex gap-4 items-start py-3 group ${i < cs.outcomes.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-100 transition-colors">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" aria-hidden />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-indigo-950 transition-colors">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* System interfaces */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-10 tracking-tight">System Interfaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cs.screens.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-start lg:justify-center p-2 group">
                  <div className="relative w-full h-full">
                    <ScreenMock icon={s.icon} label={s.label} className="group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-bold text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md">Module {i + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project team */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-12 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" aria-hidden />
            Project Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cs.team.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Award className="w-5 h-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-indigo-950 font-bold text-base flex items-center gap-2">{m.role}</p>
                      <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{m.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed italic pl-14">{m.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

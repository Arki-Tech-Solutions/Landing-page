import Link from "next/link";
import {
  ChevronRight,
  CircleCheck,
  ClipboardList,
  CodeXml,
  DollarSign,
  Eye,
  FilePen,
  Globe,
  Headset,
  Key,
  LayoutTemplate,
  RotateCw,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { industryTemplate as t, type IndustryPage } from "@/content/industries";
import { contact } from "@/content/home";
import { Breadcrumb } from "./Breadcrumb";

/** The reference cycles one icon list across the hero highlights and the capability cards. */
const cycleIcons: LucideIcon[] = [Shield, Zap, Eye, Users, DollarSign, CircleCheck, Key];
const whyIcons: LucideIcon[] = [CodeXml, LayoutTemplate, ShieldCheck, Smartphone, Globe, Settings];

const h2 = "text-3xl lg:text-[40px] font-bold leading-[1.15] mb-4 tracking-tight";

export function IndustryHero({ industry }: { industry: IndustryPage }) {
  const { menu, content } = industry;
  return (
    <section className="relative bg-white min-h-[100dvh] min-h-svh flex flex-col pt-16 overflow-hidden">
      <Container className="pt-8 mb-8 relative z-20">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: menu.label }]} />
      </Container>
      <div className="flex-1 flex flex-col justify-center py-12 lg:py-20">
        <Container className="text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-slate-500 mb-12 sm:mb-6">{menu.label}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold text-slate-900 leading-[1.05] mb-14 sm:mb-8 tracking-tight max-w-5xl mx-auto">
            <span className="text-primary">{content.heroHighlight}</span> {content.heroTitle}
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-20 sm:mb-12">{content.heroDescription}</p>
          <Link
            href={t.heroCta.href}
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-base shadow-sm active:scale-95"
          >
            {t.heroCta.label}
          </Link>
        </Container>
        <Container className="mt-24 lg:mt-32">
          <div className="border-t border-slate-100 pt-12" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {content.highlights.map((h, i) => {
              const I = cycleIcons[i % cycleIcons.length];
              return (
                <div key={h} className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-soft border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <I className="w-6 h-6" />
                  </div>
                  <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider leading-snug m-0 group-hover:text-slate-900 transition-colors">{h}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

export function IndustryCapabilities({ industry }: { industry: IndustryPage }) {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <Container>
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">{industry.menu.label}</p>
        <h2 className={`${h2} text-slate-900`}>{t.cardsTitle}</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-14">{t.cardsDescription}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industry.content.cards.map((c, i) => {
            const I = cycleIcons[(i + 3) % cycleIcons.length];
            return (
              <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-8 lg:p-10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary-soft border border-primary/15 flex items-center justify-center text-primary mb-6">
                  <I className="w-6 h-6" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{c.description}</p>
                <ul className="space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-slate-700 font-medium text-[15px]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ChallengeTile({ text }: { text: string }) {
  return (
    <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-slate-800/80 border border-slate-700/50 rounded-2xl flex flex-col items-center justify-center text-center p-4 sm:p-5 hover:bg-slate-800 transition-all duration-500 group/item">
      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary-light/30 flex items-center justify-center mb-4 transition-all duration-500 group-hover/item:bg-primary group-hover/item:border-primary">
        <CircleCheck className="w-4 h-4 text-primary-light group-hover/item:text-white transition-colors" />
      </div>
      <p className="text-white/90 text-[13px] font-medium leading-snug m-0 group-hover/item:text-white transition-colors">{text}</p>
    </div>
  );
}

export function IndustryConsultBand({ industry }: { industry: IndustryPage }) {
  const [a, b, c] = industry.content.challenges;
  return (
    <section className="bg-slate-900 py-20 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-0 w-full">
          <div className="lg:w-[50%] flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-3xl lg:text-[40px] font-bold text-white leading-[1.2] mb-8 tracking-tighter">{t.consultTitle}</h2>
            <Link
              href={t.consultCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 text-base"
            >
              {t.consultCta.label}
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 justify-self-center">
                <ChallengeTile text={a} />
              </div>
              <div>
                <ChallengeTile text={b} />
              </div>
              <div>
                <ChallengeTile text={c} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function NicheSolutions({ industry }: { industry: IndustryPage }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <h2 className={`${h2} text-slate-900`}>{t.nicheTitle}</h2>
        <p className="text-lg text-primary/80 font-medium mb-12">{t.nicheDescription}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
          {industry.content.niche.map((n) => (
            <div key={n} className="flex items-center gap-3 py-2">
              <CircleCheck className="w-6 h-6 text-primary shrink-0" />
              <span className="text-slate-800 font-medium text-[15px]">{n}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Four plain stat columns. Values reuse the site-wide placeholder stats in home.ts. */
export function IndustryStats() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <Container>
        <h2 className={`${h2} text-slate-900 text-center`}>{t.statsTitle}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {contact.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-primary mb-2 m-0">{s.value}</p>
              <p className="text-slate-600 font-medium text-sm lg:text-base m-0">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CaseSnapshot({ industry }: { industry: IndustryPage }) {
  const cs = industry.content.caseStudy;
  const cols = [
    { label: t.caseLabels.challenge, text: cs.challenge, border: "border-red-500/60", pill: "bg-red-500/10 text-red-400" },
    { label: t.caseLabels.solution, text: cs.solution, border: "border-primary-light/60", pill: "bg-primary-light/10 text-primary-light" },
    { label: t.caseLabels.result, text: cs.result, border: "border-emerald-500/60", pill: "bg-emerald-500/10 text-emerald-400" },
  ];
  return (
    <section className="bg-slate-900 py-20 lg:py-28 border-t border-white/5">
      <Container>
        <div className="mb-14 max-w-[800px]">
          <h2 className="text-3xl lg:text-[40px] font-bold text-white leading-[1.2] mb-4 tracking-tight">{t.caseTitle}</h2>
          <p className="text-lg text-white/60 leading-relaxed mb-0 font-light">{t.caseDescription}</p>
        </div>
        <div className="mb-10 pb-6 border-b border-white/10">
          <p className="text-primary-light text-xs font-bold tracking-[0.2em] uppercase mb-2">{t.caseLabels.client}</p>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">{cs.client}</h3>
          <p className="text-white/50 text-base font-light m-0">{cs.context}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cols.map((c) => (
            <div key={c.label} className={`border-l-[3px] ${c.border} bg-white/[0.03] p-6 lg:p-8 rounded-r-xl h-full flex flex-col`}>
              <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-4 ${c.pill}`}>{c.label}</span>
              <p className="text-white/80 leading-relaxed text-[15px] font-light m-0">{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StageBox({ icon: I, label, wide, green, relaxed }: { icon: LucideIcon; label: string; wide?: boolean; green?: boolean; relaxed?: boolean }) {
  return (
    <div
      className={`w-full ${wide ? "lg:w-[380px]" : "lg:w-[300px]"} h-[140px] bg-black/60 backdrop-blur-md border border-white/20 rounded-xl ${green ? "p-8" : "p-6"} flex flex-col items-center justify-center hover:bg-white/5 transition-colors cursor-default relative`}
    >
      <I className={`w-6 h-6 ${green ? "text-emerald-400 mb-4" : "text-primary-light mb-3"}`} />
      <h3 className={`text-white font-bold tracking-widest text-sm uppercase text-center ${relaxed ? "leading-relaxed" : ""}`}>{label}</h3>
    </div>
  );
}

function StageArrow({ reverse }: { reverse?: boolean }) {
  return (
    <div className="w-full lg:flex-1 h-12 lg:h-auto px-4 flex items-center justify-center relative">
      <div className="h-full w-[1px] lg:w-full lg:h-[2px] bg-white/10 relative">
        <div
          className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-2 h-2 border-white/20 rotate-45 ${
            reverse ? "left-0 border-b-2 border-l-2" : "right-0 border-t-2 border-r-2"
          }`}
        />
        <div className="block lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white/20 rotate-45" />
      </div>
      <span className="hidden lg:block absolute -top-6 text-xs text-white/40 tracking-wider">{t.method.arrow}</span>
      <span className="block lg:hidden bg-black px-3 absolute left-1/2 mt-1 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[10px] uppercase font-bold text-white/40 tracking-wider">
        {t.method.arrow}
      </span>
    </div>
  );
}

export function LeanAgileMethod() {
  const m = t.method;
  const roleIcons = [Users, UserCheck];
  return (
    <section className="bg-black py-20 lg:py-28 relative overflow-hidden border-t border-white/5">
      <Container>
        <h2 className="text-3xl lg:text-[40px] font-bold text-white leading-[1.2] mb-3 tracking-tight">{t.methodTitle}</h2>
        <p className="text-lg text-white/60 mb-16 font-light">{t.methodDescription}</p>
        <div className="relative border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 overflow-hidden bg-white/[0.01]">
          <div className="w-full flex flex-col gap-12 lg:gap-16 relative z-10 px-0 sm:px-4">
            <div className="block lg:hidden absolute top-10 bottom-10 left-1/2 -translate-x-[0.5px] w-[1px] bg-white/10 -z-10" />
            <div className="flex flex-col lg:flex-row justify-between items-center px-0 lg:px-12 gap-8 lg:gap-0">
              <StageBox icon={Search} label={m.analysis} />
              <StageArrow />
              <StageBox icon={FilePen} label={m.poc} wide relaxed />
            </div>
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-8 lg:p-10 relative lg:ml-[5%] lg:w-[90%] w-full shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
              <h4 className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-white/30 tracking-widest text-[10px] font-bold uppercase whitespace-nowrap">
                {m.loop}
              </h4>
              <h4 className="block lg:hidden text-center text-white/30 tracking-widest text-xs font-bold uppercase mb-10 w-full bg-black/50 py-1 rounded">{m.loop}</h4>
              <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-y-12 lg:gap-y-0 px-0 lg:px-8">
                {m.roles.map((r, i) => {
                  const I = roleIcons[i];
                  return (
                    <div key={r} className="text-center flex flex-col items-center">
                      <I className="w-6 h-6 text-primary mb-3 mx-auto" />
                      <span className="text-[11px] lg:text-xs font-medium text-white/50 tracking-wider uppercase">{r}</span>
                    </div>
                  );
                })}
                <div className="text-center col-span-2 lg:col-span-1 mx-auto">
                  <div className="w-28 h-28 border-[3px] border-primary rounded-full flex flex-col items-center justify-center font-bold text-white relative shadow-[0_0_20px_color-mix(in_oklab,var(--color-primary)_30%,transparent)] bg-black">
                    <RotateCw className="w-6 h-6 absolute -top-3 -right-3 text-primary-light animate-[spin_8s_linear_infinite]" />
                    <span className="text-lg">{m.sprint.length}</span>
                    <span className="text-xs font-normal text-primary-light/80 uppercase tracking-wider lg:normal-case lg:tracking-normal lg:text-sm mt-0.5 lg:mt-0">{m.sprint.label}</span>
                  </div>
                </div>
                <div className="text-center col-span-2 lg:col-span-1 flex flex-col items-center">
                  <ClipboardList className="w-6 h-6 text-primary mb-3 mx-auto" />
                  <span className="text-[11px] lg:text-xs font-medium text-white/50 tracking-wider uppercase">{m.review}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-0 lg:px-12 gap-8 lg:gap-0">
              <StageBox icon={ShieldCheck} label={m.secure} green />
              <StageArrow reverse />
              <StageBox icon={Headset} label={m.support} wide green />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Client logo grid. TODO(confirm): placeholders until real client logos (with permission) are added. */
export function ClientLogos() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <Container>
        <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.2] mb-16 tracking-tight text-center">{t.clientsTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 md:gap-x-24 md:gap-y-16 max-w-4xl mx-auto items-center justify-items-center">
          {t.clientLogos.map((name, i) => (
            <div key={i} className="h-16 md:h-20 flex items-center gap-3 text-slate-300" aria-label={`${name} logo placeholder`}>
              <span className="h-10 w-10 md:h-14 md:w-14 shrink-0 rounded-xl border-2 border-dashed border-slate-300" />
              <span className="text-sm md:text-xl font-extrabold uppercase tracking-wider leading-tight">{name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href={t.clientsCta.href} className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors uppercase text-sm tracking-wide">
            {t.clientsCta.label}
            <ChevronRight className="w-6 h-6 ml-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function WhyChooseUs({ industry }: { industry: IndustryPage }) {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`${h2} text-slate-900`}>{t.whyTitle}</h2>
          <p className="text-lg text-slate-600">{t.whyDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {industry.content.whyUs.map((w, i) => {
            const I = whyIcons[i % whyIcons.length];
            return (
              <div key={w} className="flex flex-col gap-5 p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl border border-primary/15 bg-primary-soft text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <I className="w-6 h-6" />
                </div>
                <p className="text-slate-700 font-medium text-[15px] leading-relaxed m-0 group-hover:text-slate-900 transition-colors">{w}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

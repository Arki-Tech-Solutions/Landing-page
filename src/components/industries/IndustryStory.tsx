import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { industryStory as s, industryTemplate, type IndustryPage } from "@/content/industries";
import { Breadcrumb } from "./Breadcrumb";

/**
 * Industry page sections, "problem → solution" layout:
 * hero (light, lines) → the challenge (dark) → what we build (light) → how we deliver
 * (dark, lines) → why Arki (light). FAQ and the contact card follow on the page.
 * The previous mereb-style sections are still in IndustrySections.tsx.
 */

const wrap = "relative mx-auto max-w-[1400px] px-6 lg:px-8";
const eyebrowCls = "text-[13px] font-semibold uppercase tracking-[0.25em]";
const h2Cls = "mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl";

function Heading({ eyebrow, title, highlight, text, dark }: { eyebrow: string; title: string; highlight?: string; text?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`${eyebrowCls} ${dark ? "text-primary-light" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`${h2Cls} ${dark ? "text-white" : "text-ink"}`}>
        {title} {highlight ? <span className={dark ? "text-primary-light" : "text-primary"}>{highlight}</span> : null}
      </h2>
      {text ? <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "font-medium text-muted"}`}>{text}</p> : null}
    </div>
  );
}

/** Hero: headline and buttons on the left, a card with the industry's focus areas on the right. */
export function IndustryStoryHero({ industry }: { industry: IndustryPage }) {
  const { menu, content } = industry;
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      <div className={`${wrap} pb-20 pt-8 sm:pb-24`}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: menu.label }]} />
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className={`${eyebrowCls} text-primary`}>{menu.label}</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[64px]">
              {content.heroTitle} <span className="text-primary">{content.heroHighlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">{content.heroDescription}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href={industryTemplate.heroCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark"
              >
                {industryTemplate.heroCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#what-we-build" className="group inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
                {s.heroSecondary}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-white/90 p-7 shadow-[0_30px_60px_-30px_rgba(15,36,25,0.25)] backdrop-blur sm:p-8">
              <p className={`${eyebrowCls} text-muted`}>{s.focusTitle}</p>
              <ul className="mt-6 grid gap-4">
                {content.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="font-semibold text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** The challenge: the industry's three hardest problems, numbered, on navy. */
export function IndustryChallenges({ industry }: { industry: IndustryPage }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className={wrap}>
        <Reveal>
          <Heading dark eyebrow={s.challengeEyebrow} title={s.challengeTitle} highlight={industry.menu.menuLabel ?? industry.menu.label} text={s.challengeText} />
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {industry.content.challenges.map((c, i) => (
            <li key={c}>
              <Reveal delay={0.08 * i} className="border-t border-white/15 pt-6">
                <span className="font-mono text-sm font-bold text-primary-light">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-heading text-2xl font-bold leading-snug tracking-[-0.02em] text-white">{c}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** What we build: one card per offering, each linking to its page. */
export function IndustryOfferings({ industry }: { industry: IndustryPage }) {
  const n = industry.offerings.length;
  return (
    <section id="what-we-build" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow={s.buildEyebrow} title={s.buildTitle} highlight={industry.menu.menuLabel ?? industry.menu.label} text={s.buildText} />
        </Reveal>
        {/* No lonely last card: 4 offerings sit in one row; 5 split 2 + 3 (on a 6-column grid). */}
        <div className={`mt-14 grid gap-5 sm:grid-cols-2 ${n === 4 ? "lg:grid-cols-4" : n === 5 ? "lg:grid-cols-6" : "lg:grid-cols-3"}`}>
          {industry.offerings.map((o, i) => (
            <Reveal
              key={o.href}
              delay={0.06 * i}
              className={`h-full ${n % 2 === 1 && i === n - 1 ? "sm:col-span-2" : ""} ${n === 5 ? (i < 2 ? "lg:col-span-3" : "lg:col-span-2") : n % 2 === 1 ? "lg:col-span-1" : ""}`}
            >
              <Link
                href={o.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(19,122,78,0.45)]"
              >
                <span className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-ink">{o.label}</h3>
                {o.description ? <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{o.description}</p> : null}
                <span className="mt-6 text-sm font-bold text-primary">{s.buildLink}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** How we deliver: five steps on a timeline, on navy with contour lines. */
export function IndustryDelivery() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <ContourLines dark />
      <div className={wrap}>
        <Reveal>
          <Heading dark eyebrow={s.deliverEyebrow} title={s.deliverTitle} highlight={s.deliverHighlight} text={s.deliverText} />
        </Reveal>
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-white/15 lg:hidden" />
          <span aria-hidden className="absolute left-5 right-5 top-5 hidden h-px bg-white/15 lg:block" />
          {s.steps.map((st, i) => (
            <li key={st.title} className="relative">
              <Reveal delay={0.08 * i} className="flex gap-5 lg:block">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary-light bg-navy font-mono text-sm font-bold text-primary-light">
                  {i + 1}
                </span>
                <div className="lg:mt-6 lg:pr-4">
                  <h3 className="font-heading text-lg font-bold text-white">{st.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/60">{st.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Why Arki: six short points for this industry. */
export function IndustryWhy({ industry }: { industry: IndustryPage }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <ContourLines />
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow={s.whyEyebrow} title={s.whyTitle} highlight={s.whyHighlight} text={s.whyText} />
        </Reveal>
        <ul className="mt-14 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {industry.content.whyUs.map((w, i) => (
            <li key={w}>
              <Reveal delay={0.05 * i} className="flex h-full items-start gap-4 rounded-2xl border border-border bg-white/90 p-6 backdrop-blur">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Check className="h-[18px] w-[18px]" strokeWidth={2.5} />
                </span>
                <span className="pt-1.5 font-semibold leading-snug text-ink">{w}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

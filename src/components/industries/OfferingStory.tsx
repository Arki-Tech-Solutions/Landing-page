import { ArrowLeft, ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import Link from "next/link";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { offeringStory as s, offeringTemplate, type OfferingPage } from "@/content/industries";
import { Breadcrumb } from "./Breadcrumb";

/**
 * Offering page sections, "before → after" layout:
 * hero (light, lines) → today vs. with Arki (dark) → how we build it (light, sticky title)
 * → who it's for (dark, lines). FAQ, "more in this industry" and the contact card follow.
 * The previous mereb-style sections are still in OfferingSections.tsx.
 */

const wrap = "relative mx-auto max-w-[1400px] px-6 lg:px-8";
const eyebrowCls = "text-[13px] font-semibold uppercase tracking-[0.25em]";
const h2Cls = "mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl";

const shortLabel = (o: OfferingPage) => o.industry.menu.menuLabel ?? o.industry.menu.label;

/** Hero: back link to the industry, title, intro and button; "what's inside" tags on the right. */
export function OfferingStoryHero({ offering }: { offering: OfferingPage }) {
  const { menu, industry, content } = offering;
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      <div className={`${wrap} pb-20 pt-8 sm:pb-24`}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Industries" },
            { label: industry.menu.label, href: industry.menu.href },
            { label: menu.label },
          ]}
        />
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Link href={industry.menu.href} className={`${eyebrowCls} group inline-flex items-center gap-2 text-primary`}>
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {shortLabel(offering)}
            </Link>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[60px]">
              {menu.label}
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">{content.intro}</p>
            <Link
              href={offeringTemplate.heroCta.href}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark"
            >
              {offeringTemplate.heroCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-white/90 p-7 shadow-[0_30px_60px_-30px_rgba(15,36,25,0.25)] backdrop-blur sm:p-8">
              <p className={`${eyebrowCls} text-muted`}>{s.insideTitle}</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {content.practices.map((p) => (
                  <li key={p} className="rounded-full border border-primary/20 bg-primary-soft px-4 py-2 text-sm font-semibold text-primary-dark">
                    {p}
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

/** Before → after: today's problems next to what changes with Arki, on navy. */
export function OfferingBeforeAfter({ offering }: { offering: OfferingPage }) {
  const { challenges, outcomes } = offering.content;
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className={wrap}>
        <Reveal>
          <div className="max-w-2xl">
            <p className={`${eyebrowCls} text-primary-light`}>{s.changeEyebrow}</p>
            <h2 className={`${h2Cls} text-white`}>
              {s.changeTitle} <span className="text-primary-light">{s.changeHighlight}</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <p className={`${eyebrowCls} text-white/50`}>{s.beforeLabel}</p>
              <ul className="mt-7 space-y-5">
                {challenges.map((c) => (
                  <li key={c} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/50">
                      <X className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-lg leading-snug text-white/70">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-3xl border border-primary-light/25 bg-primary/15 p-7 sm:p-9">
              <p className={`${eyebrowCls} text-primary-light`}>{s.afterLabel}</p>
              <ul className="mt-7 space-y-5">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-navy">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-lg font-semibold leading-snug text-white">{o}</span>
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

/** How we build it: sticky heading on the left, numbered steps on the right. */
export function OfferingSteps({ offering }: { offering: OfferingPage }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20`}>
        <div>
          <Reveal className="lg:sticky lg:top-28">
            <p className={`${eyebrowCls} text-primary`}>{s.stepsEyebrow}</p>
            <h2 className={`${h2Cls} text-ink`}>
              {s.stepsTitle} <span className="text-primary">{s.stepsHighlight}</span>
            </h2>
            <p className="mt-5 max-w-md text-lg font-medium leading-relaxed text-muted">{s.stepsText}</p>
          </Reveal>
        </div>
        <ol className="relative">
          <span aria-hidden className="absolute bottom-8 left-[23px] top-8 w-px bg-border" />
          {offering.content.phases.map((p, i) => (
            <li key={p} className="relative pb-12 last:pb-0">
              <Reveal delay={0.06 * i} className="flex gap-6">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-mono text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2.5">
                  <p className={`${eyebrowCls} text-[11px] text-muted`}>{s.stepLabel} {i + 1}</p>
                  <p className="mt-2 font-heading text-xl font-bold leading-snug text-ink">{p}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Who it's for: three audience cards on navy with contour lines. */
export function OfferingAudiences({ offering }: { offering: OfferingPage }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <ContourLines dark />
      <div className={wrap}>
        <Reveal>
          <div className="max-w-2xl">
            <p className={`${eyebrowCls} text-primary-light`}>{s.fitEyebrow}</p>
            <h2 className={`${h2Cls} text-white`}>
              {s.fitTitle} <span className="text-primary-light">{s.fitHighlight}</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {offering.content.audiences.map((a, i) => (
            <Reveal key={a.title} delay={0.08 * i} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-navy/70 p-7 backdrop-blur">
                <span className="font-mono text-sm font-bold text-primary-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-heading text-xl font-bold text-white">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The industry's other offerings, as a row of links. */
export function OfferingSiblings({ offering }: { offering: OfferingPage }) {
  const others = offering.industry.offerings.filter((o) => o.slug !== offering.slug);
  if (others.length === 0) return null;
  return (
    <section className="border-t border-border bg-white py-16">
      <div className={wrap}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-3xl">
            {s.moreTitle} <span className="text-primary">{shortLabel(offering)}</span>
          </h2>
          <Link href={offering.industry.menu.href} className="group inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
            {s.moreAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border px-5 py-4 font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
              >
                {o.label}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

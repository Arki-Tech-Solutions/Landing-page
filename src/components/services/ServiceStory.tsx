import { ArrowDown, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { HomeContact } from "@/components/home/HomeContact";
import { Faq } from "@/components/sections/Faq";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { faqIntro, serviceCta, serviceStory as s, type ServiceLanding } from "@/content/services";
import { Breadcrumb } from "@/components/industries/Breadcrumb";
import { TechIcon } from "./TechIcon";

/**
 * Main service page (/services/<landing>), "overview + index" layout:
 * hero with an index of what we offer (light, lines) → what we offer (light) → how we work
 * (dark, lines) → tools (light) → where it fits (dark) → FAQ → contact card.
 * The previous mereb-style template is still in CategoryPage.tsx.
 */

const wrap = "relative mx-auto max-w-[1400px] px-6 lg:px-8";
const eyebrowCls = "text-[13px] font-semibold uppercase tracking-[0.25em]";
const h2Cls = "mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl";

/** Sector names that have an industry page of their own. */
const sectorLinks: Record<string, string> = {
  Healthcare: "/industries/healthcare-solutions",
  Fintech: "/industries/fintech-solutions",
  "Banking & Fintech": "/industries/fintech-solutions",
  Retail: "/industries/e-commerce-solutions",
  "E-Commerce": "/industries/e-commerce-solutions",
  EdTech: "/industries/edtech-solutions",
};

const offerId = (i: number) => `offer-${i + 1}`;

function Heading({ eyebrow, title, highlight, text, dark }: { eyebrow: string; title: string; highlight: string; text?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`${eyebrowCls} ${dark ? "text-primary-light" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`${h2Cls} ${dark ? "text-white" : "text-ink"}`}>
        {title} <span className={dark ? "text-primary-light" : "text-primary"}>{highlight}</span>
      </h2>
      {text ? <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "font-medium text-muted"}`}>{text}</p> : null}
    </div>
  );
}

function Hero({ l }: { l: ServiceLanding }) {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      <div className={`${wrap} pb-20 pt-8 sm:pb-24`}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: l.crumb }]} />
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className={`${eyebrowCls} text-primary`}>{l.crumb}</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[60px]">
              {l.headline} <span className="text-primary">{l.headlineHighlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">{l.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href={serviceCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark"
              >
                {serviceCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#what-we-offer" className="group inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
                {s.heroSecondary}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <nav aria-label={s.indexTitle} className="relative overflow-hidden rounded-3xl bg-navy p-7 shadow-[0_30px_60px_-30px_rgba(11,18,33,0.6)] sm:p-8">
              <ContourLines dark />
              <p className={`relative ${eyebrowCls} text-primary-light`}>{s.indexTitle}</p>
              <ol className="relative mt-5 divide-y divide-white/10">
                {l.offerings.map((o, i) => (
                  <li key={o.title}>
                    <a href={`#${offerId(i)}`} className="group flex items-center gap-4 py-3.5 text-white/80 transition-colors hover:text-white">
                      <span className="font-mono text-xs font-bold text-primary-light">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-semibold">{o.title}</span>
                      <ArrowDown className="h-4 w-4 text-white/30 transition-colors group-hover:text-primary-light" />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Offerings({ l }: { l: ServiceLanding }) {
  return (
    <section id="what-we-offer" className="scroll-mt-20 border-t border-border bg-white py-20 sm:py-24">
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow={s.offerEyebrow} title={s.offerTitle} highlight={l.offeringsHighlight} text={s.offerText} />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {l.offerings.map((o, i) => (
            <Reveal key={o.title} delay={0.05 * i} className="h-full">
              <article id={offerId(i)} className="h-full scroll-mt-28 rounded-2xl border border-border bg-white p-7 transition-colors hover:border-primary/40">
                <span className="font-mono text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-ink">{o.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{o.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork({ l }: { l: ServiceLanding }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <ContourLines dark />
      <div className={wrap}>
        <Reveal>
          <Heading dark eyebrow={s.howEyebrow} title={s.howTitle} highlight={s.howHighlight} text={l.approach.description} />
        </Reveal>
        <ol className="mt-14">
          {l.approach.items.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={0.08 * i} className="grid gap-3 border-t border-white/15 py-8 md:grid-cols-[90px_1fr_1.4fr] md:gap-8">
                <span className="font-mono text-sm font-bold text-primary-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-2xl font-bold tracking-[-0.02em] text-white">{a.title}</h3>
                <p className="text-lg leading-relaxed text-white/60">{a.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Tools({ l }: { l: ServiceLanding }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow={s.toolsEyebrow} title={s.toolsTitle} highlight={s.toolsHighlight} text={l.tech.description} />
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {l.tech.groups.map((g, i) => (
            <Reveal key={g.title} delay={0.05 * i}>
              <h3 className="border-b border-border pb-3 font-heading text-lg font-bold text-ink">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((t) => (
                  <li key={t.name} className="flex items-center gap-2.5 rounded-full border border-border bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-body">
                    <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-surface [&_img]:h-[18px] [&_img]:w-[18px] [&>span]:h-7 [&>span]:w-7 [&>span]:text-xs">
                      <TechIcon tile={t} />
                    </span>
                    {t.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhereItFits({ l }: { l: ServiceLanding }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className={wrap}>
        <Reveal>
          <Heading dark eyebrow={s.fitEyebrow} title={s.fitTitle} highlight={s.fitHighlight} text={l.sectors.description} />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {l.sectors.items.map((sec, i) => {
            const href = sectorLinks[sec.title];
            return (
              <Reveal key={sec.title} delay={0.08 * i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <h3 className="font-heading text-xl font-bold text-white">{sec.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{sec.text}</p>
                  <p className="mt-5 flex flex-1 items-start gap-2.5 text-sm font-semibold leading-snug text-primary-light">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                    {sec.note}
                  </p>
                  {href ? (
                    <Link href={href} className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-primary-light">
                      {s.fitLink}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** /services/<landing>, redesigned. */
export function ServicePage({ landing }: { landing: ServiceLanding }) {
  return (
    <>
      <Hero l={landing} />
      <Offerings l={landing} />
      <HowWeWork l={landing} />
      <Tools l={landing} />
      <WhereItFits l={landing} />
      {landing.faq ? (
        <Faq title={s.faqTitle} highlight={s.faqHighlight} highlightFirst={false} description={faqIntro} items={landing.faq.items} />
      ) : null}
      <HomeContact />
    </>
  );
}

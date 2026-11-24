import { ArrowRight, Check, FileDown } from "lucide-react";
import Link from "next/link";
import { HomeContact } from "@/components/home/HomeContact";
import { Breadcrumb } from "@/components/industries/Breadcrumb";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { clientList, kindLabels, portfolioCopy as c, projects, type Project } from "@/content/portfolio";
import { ProjectGrid, projectHref } from "./ProjectCard";
import { ProjectVisual, StatusBadge } from "./ProjectVisual";

/**
 * /portfolio: hero with counts (light, lines) → featured projects in alternating rows (light)
 * → more work grid (dark) → clients and partners (light) → contact card.
 */

const wrap = "relative mx-auto max-w-[1400px] px-6 lg:px-8";
const eyebrowCls = "text-[13px] font-semibold uppercase tracking-[0.25em]";
const h2Cls = "mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl";

function Heading({ eyebrow, title, highlight, dark }: { eyebrow: string; title: string; highlight: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`${eyebrowCls} ${dark ? "text-primary-light" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`${h2Cls} ${dark ? "text-white" : "text-ink"}`}>
        {title} <span className={dark ? "text-primary-light" : "text-primary"}>{highlight}</span>
      </h2>
    </div>
  );
}

/** Counts shown in the hero, worked out from the project list. */
function counts() {
  const sectors = new Set(projects.map((p) => p.sector)).size;
  const own = projects.filter((p) => p.kind === "product" || p.kind === "open-source").length;
  const clients = projects.filter((p) => p.kind === "client" || p.kind === "partnership").length;
  return [
    { value: String(projects.length), label: "Projects" },
    { value: String(clients), label: "Client & partner projects" },
    { value: String(own), label: "Products of our own" },
    { value: String(sectors), label: "Sectors" },
  ];
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      <div className={`${wrap} pb-20 pt-8 sm:pb-24`}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: c.crumb }]} />
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className={`${eyebrowCls} text-primary`}>{c.eyebrow}</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[60px]">
              {c.title} <span className="text-primary">{c.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">{c.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href={c.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark"
              >
                {c.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={c.profile.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
                <FileDown className="h-4 w-4" />
                {c.profile.label}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border">
              {counts().map((s) => (
                <div key={s.label} className="bg-white/95 p-6 backdrop-blur sm:p-7">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-heading text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">{s.value}</span>
                    <span className="mt-2 block text-sm font-semibold text-muted">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedRow({ p, i }: { p: Project; i: number }) {
  const flip = i % 2 === 1;
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <Link href={projectHref(p)} className="block transition-transform duration-300 hover:-translate-y-1" aria-label={p.name}>
          <ProjectVisual project={p} sizes="(min-width: 1024px) 640px, 100vw" />
        </Link>
      </Reveal>
      <Reveal delay={0.1}>
        <p className={`${eyebrowCls} text-[12px] text-primary`}>
          {String(i + 1).padStart(2, "0")} · {kindLabels[p.kind]} · {p.sector}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <h3 className="font-heading text-3xl font-extrabold tracking-[-0.025em] text-ink sm:text-4xl">{p.name}</h3>
          <StatusBadge status={p.status} />
        </div>
        <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-6 space-y-3">
          {p.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-3 text-body">
              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
              <span className="leading-snug">{f}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-7 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
          <div>
            <dt className="font-semibold uppercase tracking-[0.18em] text-muted text-[11px]">{p.client ? "Client" : "Type"}</dt>
            <dd className="mt-1.5 font-semibold text-ink">{p.client ?? kindLabels[p.kind]}</dd>
          </div>
          <div>
            <dt className="font-semibold uppercase tracking-[0.18em] text-muted text-[11px]">Period</dt>
            <dd className="mt-1.5 font-semibold text-ink">{p.period}</dd>
          </div>
        </dl>
        <Link href={projectHref(p)} className="group mt-8 inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
          {c.view}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </article>
  );
}

function Featured({ items }: { items: Project[] }) {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-24">
      <div className={wrap}>
        <Reveal>
          <Heading eyebrow={c.featuredEyebrow} title={c.featuredTitle} highlight={c.featuredHighlight} />
        </Reveal>
        <div className="mt-16 space-y-20 lg:space-y-28">
          {items.map((p, i) => (
            <FeaturedRow key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function More({ items }: { items: Project[] }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <ContourLines dark />
      <div className={wrap}>
        <Reveal className="mb-14">
          <Heading dark eyebrow={c.moreEyebrow} title={c.moreTitle} highlight={c.moreHighlight} />
        </Reveal>
        <ProjectGrid projects={items} dark />
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20`}>
        <Reveal>
          <Heading eyebrow={c.clientsEyebrow} title={c.clientsTitle} highlight={c.clientsHighlight} />
        </Reveal>
        <ul className="grid gap-px self-start overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {clientList.map((name, i) => (
            <li key={name} className="bg-white">
              <Reveal delay={0.04 * i} className="flex h-full items-center gap-4 px-6 py-6">
                <Check className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="font-heading text-lg font-bold leading-snug text-ink">{name}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <>
      <Hero />
      <Featured items={featured} />
      <More items={rest} />
      <Clients />
      <HomeContact />
    </>
  );
}

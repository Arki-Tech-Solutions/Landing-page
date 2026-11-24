import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/industries/Breadcrumb";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { getProject } from "@/content/portfolio";

/** Shared building blocks for the redesigned company pages (about, why, process, ways to work). */

export const wrap = "relative mx-auto max-w-[1400px] px-6 lg:px-8";
export const eyebrowCls = "text-[13px] font-semibold uppercase tracking-[0.25em]";

export function Heading({
  eyebrow,
  title,
  highlight,
  text,
  dark,
  center,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`${eyebrowCls} ${dark ? "text-primary-light" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        {title} {highlight ? <span className={dark ? "text-primary-light" : "text-primary"}>{highlight}</span> : null}
      </h2>
      {text ? <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "font-medium text-muted"}`}>{text}</p> : null}
    </div>
  );
}

/** A full-width band: light (white, contour lines) or dark (navy, soft glow or lines). */
export function Band({
  dark,
  lines,
  id,
  className = "",
  children,
}: {
  dark?: boolean;
  lines?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden py-20 sm:py-24 ${dark ? "bg-navy" : "bg-white"} ${className}`}>
      {lines ? <ContourLines dark={dark} /> : null}
      {dark && !lines ? <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" /> : null}
      <div className={wrap}>{children}</div>
    </section>
  );
}

type Action = { label: string; href: string };

/** Page hero: breadcrumb, headline and two actions on the left, a card (`aside`) on the right. */
export function PageHero({
  crumb,
  eyebrow,
  title,
  highlight,
  text,
  primary,
  secondary,
  aside,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  primary: Action;
  secondary: Action;
  aside: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      <div className={`${wrap} pb-20 pt-8 sm:pb-24`}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Company" }, { label: crumb }]} />
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className={`${eyebrowCls} text-primary`}>{eyebrow}</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[60px]">
              {title} <span className="text-primary">{highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">{text}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href={primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={secondary.href} className="group inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
                {secondary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>{aside}</Reveal>
        </div>
      </div>
    </section>
  );
}

/** White card used on the right side of the heroes. */
export function HeroCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-white/90 p-7 shadow-[0_30px_60px_-30px_rgba(15,36,25,0.25)] backdrop-blur sm:p-8">
      <p className={`${eyebrowCls} text-muted`}>{title}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/** Small links to portfolio projects, by slug ("See it in: Fewes Pharmacy OS · Serviy"). */
export function ProjectLinks({ slugs, dark, label }: { slugs: string[]; dark?: boolean; label?: string }) {
  const items = slugs.map(getProject).filter((p): p is NonNullable<typeof p> => !!p);
  if (items.length === 0) return null;
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      {label ? <span className={dark ? "text-white/45" : "text-muted"}>{label}</span> : null}
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/portfolio/${p.slug}`}
          className={`group inline-flex items-center gap-1 font-semibold transition-colors ${dark ? "text-primary-light hover:text-white" : "text-primary hover:text-primary-dark"}`}
        >
          {p.name}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      ))}
    </p>
  );
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { resourceMenu, whyArkiLink } from "@/content/navigation";
import { techMenuCategories as techCategories } from "@/content/technologies";
import { site } from "@/content/site";
import { headerIndustries, headerServices, techHref } from "./data";
import { MenuIcon, subcategoryIcons } from "./icons";

/*
 * Desktop mega-menu panels: every category visible at once in columns, with a dark
 * feature card on the right that carries the panel's call to action.
 */

/** The Arki mark (public/brand/arki-mark.svg): a rounded triangle with the aperture set high. */
const MARK_PATH =
  "M36.34 15.55L54.7 47.51A5 5 0 0 1 50.36 55L13.64 55A5 5 0 0 1 9.3 47.51L27.66 15.55A5 5 0 0 1 36.34 15.55ZM32 25.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0 -17Z";

type Feature = { eyebrow: string; title: string; text: string; cta: { label: string; href: string } };

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-xl bg-ink p-7 text-white">
      <svg viewBox="0 0 64 64" className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-[0.12]" aria-hidden>
        <path d={MARK_PATH} fill="var(--color-primary-light)" fillRule="evenodd" />
      </svg>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-light">{feature.eyebrow}</p>
      <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight">{feature.title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-white/65">{feature.text}</p>
      <div className="relative mt-auto flex flex-col gap-4 pt-8">
        <Link
          href={feature.cta.href}
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
        >
          {feature.cta.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
        <Link href={whyArkiLink.href} className="text-[13px] font-semibold text-white/70 transition-colors hover:text-white">
          {whyArkiLink.label}
        </Link>
      </div>
    </aside>
  );
}

/** Two-part panel: the columns on the left, the feature card on the right. */
function Panel({ children, feature }: { children: ReactNode; feature: Feature }) {
  return (
    <div className="grid grid-cols-[1fr_300px] gap-6 p-6">
      <div className="min-w-0 px-2 py-2">{children}</div>
      <FeatureCard feature={feature} />
    </div>
  );
}

/** Small uppercase column heading that links to the category page. */
function ColumnHeading({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group mb-3 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
    >
      {children}
      <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
    </Link>
  );
}

/** Icon + title + one line: the main link style used across the panels. */
function ItemLink({ href, icon, title, text }: { href: string; icon: ReactNode; title: string; text?: string }) {
  return (
    <Link href={href} className="group -mx-3 flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-primary-soft/60">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[14.5px] font-bold leading-snug text-ink transition-colors group-hover:text-primary">{title}</span>
        {text ? <span className="mt-0.5 text-[12.5px] leading-snug text-muted line-clamp-2">{text}</span> : null}
      </span>
    </Link>
  );
}

/* ---------------------------------- Services ---------------------------------- */

export function ServicesPanel() {
  return (
    <Panel
      feature={{
        eyebrow: "Not sure where to start?",
        title: "Tell us the problem. We'll suggest the right team.",
        text: "A free 30-minute call with an engineer: no sales pitch, just an honest view of what we would build.",
        cta: { label: "Book a 30-min call", href: site.bookingHref },
      }}
    >
      <div className="grid grid-cols-3 gap-x-8 gap-y-7">
        {headerServices.map((cat) => (
          <div key={cat.id} className="min-w-0">
            <ColumnHeading href={cat.href}>{cat.label}</ColumnHeading>
            <ul className="space-y-1">
              {cat.subcategories.map((sub) => (
                <li key={sub.id}>
                  <ItemLink
                    href={sub.href}
                    icon={<MenuIcon name={subcategoryIcons[sub.id]} size={17} strokeWidth={2} />}
                    title={sub.label}
                    text={sub.entries.map((e) => e.label).join(" · ")}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link
          href="/#services"
          className="group flex flex-col justify-center rounded-xl border border-dashed border-border px-5 py-4 transition-colors hover:border-primary hover:bg-primary-soft/50"
        >
          <span className="text-[14.5px] font-bold text-ink transition-colors group-hover:text-primary">See all services</span>
          <span className="mt-1 text-[12.5px] leading-snug text-muted">Everything we build, from AI to cloud, in one place.</span>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
            Explore
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </Link>
      </div>
    </Panel>
  );
}

/* -------------------------------- Technologies -------------------------------- */

export function TechnologiesPanel() {
  return (
    <Panel
      feature={{
        eyebrow: "Looking for a specific stack?",
        title: "Meet an engineer who has shipped with it.",
        text: "Tell us the technology and the problem, and we'll connect you with someone who knows it well.",
        cta: { label: "Talk to an engineer", href: site.bookingHref },
      }}
    >
      <div className="grid grid-cols-3 gap-x-6 gap-y-2">
        {techCategories.map((cat) => (
          <Link
            key={cat.id}
            href={techHref(cat.id)}
            className="group -mx-1 flex flex-col rounded-lg px-3 py-3 transition-colors hover:bg-primary-soft/60"
          >
            <span className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <MenuIcon name={cat.icon} size={16} strokeWidth={2} />
              </span>
              <span className="text-[14.5px] font-bold text-ink transition-colors group-hover:text-primary">{cat.title}</span>
            </span>
            <span className="mt-2.5 flex items-center gap-1.5" aria-hidden>
              {cat.items.slice(0, 5).map((item) => (
                <span key={item.slug} className="flex h-7 w-7 items-center justify-center rounded-md bg-white p-1.5 ring-1 ring-border/80">
                  {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG logos, no optimization needed */}
                  <img src={item.icon} alt="" width={16} height={16} loading="lazy" className="h-4 w-4 object-contain" />
                </span>
              ))}
              {cat.items.length > 5 && <span className="pl-1 text-[11.5px] font-semibold text-muted">+{cat.items.length - 5}</span>}
            </span>
          </Link>
        ))}
      </div>
    </Panel>
  );
}

/* --------------------------------- Industries --------------------------------- */

export function IndustriesPanel() {
  return (
    <Panel
      feature={{
        eyebrow: "Your sector isn't listed?",
        title: "The engineering is often the same.",
        text: "Payments, records, logistics, AI assistants: tell us about your users and we'll tell you honestly if we're a fit.",
        cta: { label: "Contact us", href: site.bookingHref },
      }}
    >
      <div className="grid grid-cols-3 gap-x-8 gap-y-7">
        {headerIndustries.map((cat) => (
          <div key={cat.id} className="min-w-0">
            <Link href={cat.href} className="group mb-3 flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <MenuIcon name={cat.icon} size={16} strokeWidth={2} />
              </span>
              <span className="text-[14.5px] font-bold text-ink transition-colors group-hover:text-primary">{cat.label}</span>
            </Link>
            <ul className="space-y-1.5 border-l border-border pl-4 ml-4">
              {cat.entries.map((entry) => (
                <li key={entry.href}>
                  <Link href={entry.href} className="text-[13.5px] leading-snug text-body transition-colors hover:text-primary">
                    {entry.label}
                  </Link>
                </li>
              ))}
              {cat.moreCount > 0 && (
                <li>
                  <Link href={cat.href} className="text-[13px] font-semibold text-primary hover:text-primary-dark">
                    View all →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* --------------------------------- Resources ---------------------------------- */

export function ResourcesPanel() {
  return (
    <Panel
      feature={{
        eyebrow: "Arki · to see, satisfying",
        title: resourceMenu.featured.headline,
        text: resourceMenu.featured.subheadline,
        cta: { label: "Read our story", href: resourceMenu.featured.href },
      }}
    >
      <div className="grid grid-cols-3 gap-x-8">
        {resourceMenu.categories.map((cat) => (
          <div key={cat.id} className="min-w-0">
            <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-muted">{cat.title}</p>
            <ul className="space-y-1">
              {cat.entries.map((entry) => (
                <li key={entry.href}>
                  <ItemLink href={entry.href} icon={<MenuIcon name={entry.icon} size={17} strokeWidth={2} />} title={entry.label} text={entry.description} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  );
}

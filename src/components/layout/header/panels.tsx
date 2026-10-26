"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { readMoreLabel, resourceMenu, serviceMenu, whyArkiLink, type ServiceMenuCategory } from "@/content/navigation";
import { techMenuCategories as techCategories } from "@/content/technologies";
import { Logo } from "@/components/ui/Logo";
import { headerIndustries, techHref } from "./data";
import { MenuIcon, subcategoryIcons } from "./icons";

type PanelProps = { activeCategoryId: string; setActiveCategoryId: (id: string) => void };

const footerLinkClass =
  "text-[15px] font-semibold uppercase leading-[1.55] tracking-wide text-indigo-950 transition-colors hover:text-primary";

function Chevron({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/** Grey footer bar shared by the Services, Industries and Resources panels. */
function PanelFooter({ readMoreHref, borderClass }: { readMoreHref: string; borderClass: string }) {
  return (
    <footer className={`flex items-center justify-between gap-4 rounded-b-2xl border-t ${borderClass} bg-[#e8ebe8] px-5 py-[18px]`}>
      <Link href={whyArkiLink.href} className={footerLinkClass}>
        {whyArkiLink.label}
      </Link>
      <Link
        href={readMoreHref}
        className="group/read inline-flex items-center gap-1.5 text-[15px] font-semibold uppercase leading-[1.55] tracking-wide text-indigo-950 transition-colors hover:text-primary"
      >
        {readMoreLabel}
        <span className="text-indigo-950 transition-colors group-hover/read:text-primary" aria-hidden>
          →
        </span>
      </Link>
    </footer>
  );
}

/* ---------------------------------- Services ---------------------------------- */

function ServiceSubcategory({ sub }: { sub: ServiceMenuCategory["subcategories"][number] }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <MenuIcon name={subcategoryIcons[sub.id]} size={17} strokeWidth={2.2} />
          </span>
          <div className="min-w-0 flex-1">
            <Link
              href={sub.href}
              className="group flex min-w-0 max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 text-[19px] font-bold leading-[1.35] text-slate-900 transition-colors hover:text-primary"
            >
              <span className="min-w-0 break-words leading-[1.35]">{sub.label}</span>
              <span
                className="flex h-[1.35em] shrink-0 items-center justify-center text-[22px] font-normal leading-none text-slate-400 transition group-hover:text-primary -translate-y-[0.2em]"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
      {sub.entries.length > 0 && (
        <ul className="grid grid-cols-2 gap-x-14 gap-y-3 pl-[2.625rem]">
          {sub.entries.map((entry) => (
            <li key={entry.href}>
              <Link href={entry.href} className="text-[15px] font-medium leading-[1.55] text-slate-700 transition-colors hover:text-primary">
                {entry.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ServicesPanel({ activeCategoryId, setActiveCategoryId }: PanelProps) {
  const active = serviceMenu.find((c) => c.id === activeCategoryId) ?? serviceMenu[0];
  return (
    <>
      <div className="grid grid-cols-[minmax(300px,380px)_1fr] min-h-[480px] overflow-hidden rounded-t-2xl">
        <aside className="border-r border-slate-200 bg-slate-50/80 p-5 overflow-y-auto max-h-[600px]">
          <ul className="space-y-0.5">
            {serviceMenu.map((cat) => {
              const isActive = cat.id === active.id;
              return (
                <li key={cat.id}>
                  <div
                    role="presentation"
                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                    className={[
                      "flex w-full cursor-default items-center justify-between rounded-full px-3 py-3 text-left transition-colors group",
                      isActive ? "bg-primary/10 text-indigo-950 shadow-sm" : "text-indigo-950 hover:bg-white",
                    ].join(" ")}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-2.5">
                      <div
                        className={[
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200",
                          isActive
                            ? "bg-primary text-white shadow-sm ring-2 ring-primary/25"
                            : "bg-primary/[0.09] text-primary/50 group-hover:bg-primary/15 group-hover:text-primary/80",
                        ].join(" ")}
                      >
                        <MenuIcon name={cat.icon} size={17} strokeWidth={isActive ? 2.5 : 2.2} />
                      </div>
                      <Link
                        href={cat.href}
                        className="truncate text-[15px] font-semibold leading-[1.55] tracking-[0.045em] text-indigo-950 transition-colors hover:text-primary group-hover:text-primary"
                      >
                        {cat.label}
                      </Link>
                    </div>
                    <Chevron className={["h-4 w-4 shrink-0 transition-opacity", isActive ? "opacity-100 text-primary" : "opacity-0"].join(" ")} />
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
        <section className="relative overflow-y-auto bg-white px-8 py-8 pr-10 max-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div>
                {active.subcategories.map((sub) => (
                  <ServiceSubcategory key={sub.id} sub={sub} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
      <PanelFooter readMoreHref={active.href} borderClass="border-slate-200/80" />
    </>
  );
}

/* -------------------------------- Technologies -------------------------------- */

export function TechnologiesPanel({ activeCategoryId, setActiveCategoryId }: PanelProps) {
  const active = techCategories.find((c) => c.id === activeCategoryId) ?? techCategories[0];
  return (
    <>
      <div className="grid grid-cols-[minmax(260px,300px)_1fr] min-h-[480px] overflow-hidden rounded-t-2xl">
        <aside className="border-r border-slate-200 bg-slate-50/80 p-4">
          <ul className="space-y-1">
            {techCategories.map((cat) => {
              const isActive = cat.id === active.id;
              return (
                <li key={cat.id}>
                  <Link
                    href={techHref(cat.id)}
                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                    className={[
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-full transition-colors text-left cursor-pointer group",
                      isActive ? "bg-primary/10 text-indigo-950 shadow-sm" : "text-indigo-950 hover:bg-white",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "h-5 w-5 rounded-full flex items-center justify-center transition-colors text-[9px] font-bold shrink-0",
                          isActive ? "bg-primary/15 text-primary" : "bg-primary/5 text-primary",
                        ].join(" ")}
                      >
                        <MenuIcon name={cat.icon} size={12} strokeWidth={isActive ? 3 : 2.5} />
                      </div>
                      <span className="text-[15px] font-semibold tracking-tight truncate">{cat.label}</span>
                    </div>
                    <Chevron className={["w-4 h-4 shrink-0 transition-opacity", isActive ? "opacity-100" : "opacity-0"].join(" ")} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <section className="bg-white p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={active.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              <div className="mb-8 overflow-hidden">
                <p className="text-[14px] text-slate-500 font-medium leading-[1.6]">{active.menu}</p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {active.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={techHref(active.id, item.slug)}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all duration-200"
                  >
                    <div className="relative h-10 w-10 shrink-0 rounded-lg bg-slate-50 p-2 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG logos, no optimization needed */}
                      <img src={item.icon} alt={item.name} width={24} height={24} loading="lazy" style={{ width: "auto", height: "auto" }} className="object-contain" />
                    </div>
                    <span className="text-[14px] font-bold text-slate-700 group-hover:text-primary transition-colors">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
      <footer className="flex items-center justify-between gap-10 bg-[#e8ebe8] border-t border-slate-200 px-10 py-5 rounded-b-2xl">
        <Link href={whyArkiLink.href} className={footerLinkClass}>
          {whyArkiLink.label}
        </Link>
        <Link
          href={techHref(active.id)}
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-indigo-950 hover:text-primary transition-colors uppercase tracking-wider"
        >
          {readMoreLabel}
          <span className="text-primary" aria-hidden>
            →
          </span>
        </Link>
      </footer>
    </>
  );
}

/* --------------------------------- Industries --------------------------------- */

export function IndustriesPanel({ activeCategoryId, setActiveCategoryId }: PanelProps) {
  const active = headerIndustries.find((c) => c.id === activeCategoryId) ?? headerIndustries[0];
  return (
    <>
      <div className="grid min-h-[520px] grid-cols-[minmax(260px,300px)_1fr] gap-x-10 overflow-hidden rounded-t-2xl bg-white lg:grid-cols-[minmax(280px,320px)_1fr] lg:gap-x-12">
        <aside className="border-r border-slate-200/90 bg-white p-5">
          <ul className="space-y-0.5">
            {headerIndustries.map((cat) => {
              const isActive = cat.id === active.id;
              return (
                <li key={cat.id}>
                  <div
                    role="presentation"
                    onMouseEnter={() => setActiveCategoryId(cat.id)}
                    className={[
                      "flex w-full cursor-default items-center justify-between rounded-full px-3 py-2.5 text-left transition-colors group",
                      isActive ? "bg-primary/10 text-slate-900 shadow-sm" : "text-slate-800 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-2.5">
                      <div
                        className={[
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200",
                          isActive ? "bg-primary text-white shadow-sm" : "bg-primary/10 text-primary group-hover:bg-primary/15",
                        ].join(" ")}
                      >
                        <MenuIcon name={cat.icon} size={14} strokeWidth={isActive ? 2.5 : 2.2} />
                      </div>
                      <Link
                        href={cat.href}
                        className="truncate text-[14px] font-semibold leading-snug tracking-wide text-slate-900 transition-colors hover:text-primary group-hover:text-primary"
                      >
                        {cat.label}
                      </Link>
                    </div>
                    <Chevron className={["h-4 w-4 shrink-0 transition-opacity", isActive ? "text-primary opacity-100" : "opacity-0"].join(" ")} />
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
        <section className="relative flex flex-col justify-between overflow-hidden bg-white py-8 pl-2 pr-8 sm:py-10 sm:pr-10 lg:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex-1"
            >
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {active.entries.map((entry, i) => (
                  <li key={`${entry.href}-${i}`} className="min-w-0">
                    <Link
                      href={entry.href}
                      className="group/card flex h-full min-h-[10.5rem] flex-col overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-[0_2px_12px_-4px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_12px_36px_-12px_color-mix(in_oklab,var(--color-primary)_18%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                    >
                      <div className="flex items-center gap-3 border-b border-slate-100/90 bg-primary/[0.07] px-3.5 py-3 sm:px-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-primary/10">
                          <MenuIcon name={active.icon} size={16} strokeWidth={2.25} />
                        </span>
                        <span className="flex min-w-0 flex-1 items-center gap-1.5">
                          <span className="min-w-0 text-[14px] font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover/card:text-primary">
                            {entry.label}
                          </span>
                          <span className="shrink-0 text-[13px] font-normal leading-none text-primary/70 transition-colors group-hover/card:text-primary" aria-hidden>
                            →
                          </span>
                        </span>
                      </div>
                      {entry.description ? (
                        <p className="m-0 flex-1 px-3.5 py-3.5 text-[12px] font-normal leading-relaxed text-slate-600 sm:px-4 sm:py-4 sm:text-[13px] sm:leading-relaxed">
                          {entry.description}
                        </p>
                      ) : (
                        <div className="flex-1" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
      <PanelFooter readMoreHref={active.href} borderClass="border-slate-200" />
    </>
  );
}

/* --------------------------------- Resources ---------------------------------- */

export function ResourcesPanel() {
  return (
    <>
      <div className="flex flex-col min-h-[400px] rounded-t-2xl overflow-hidden bg-white">
        <div className="flex flex-1 py-10 pl-10 pr-8 lg:pl-12 lg:pr-10 gap-10 lg:gap-14">
          <div className="flex-1 grid grid-cols-3 gap-10 lg:gap-14 min-w-0">
            {resourceMenu.categories.map((cat) => (
              <div key={cat.id} className="flex flex-col min-w-0">
                <div className="-mx-3 px-3">
                  <h3 className="text-[20px] font-extrabold leading-tight tracking-tight text-slate-800">{cat.title}</h3>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {cat.entries.map((entry) => {
                    return (
                      <li key={entry.href}>
                        <Link
                          href={entry.href}
                          className="group -mx-3 flex items-start gap-3 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-primary-soft/70 focus-visible:bg-primary-soft/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2"
                        >
                          <span
                            className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors group-hover:bg-primary/15"
                            aria-hidden
                          >
                            <MenuIcon name={entry.icon} className="h-5 w-5" strokeWidth={2} />
                          </span>
                          <span className="min-w-0 flex-1 text-left">
                            <span className="block text-[16px] font-bold leading-snug tracking-tight text-slate-900">{entry.label}</span>
                            {entry.description ? (
                              <span className="mt-1 block w-full min-w-0 text-xs font-light leading-snug text-slate-500 line-clamp-2">{entry.description}</span>
                            ) : null}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-[240px] shrink-0 pl-10 flex items-center justify-center border-l border-slate-100">
            <Logo className="w-48 h-auto opacity-80 transition-transform duration-500 hover:scale-[1.03]" />
          </div>
        </div>
      </div>
      <PanelFooter readMoreHref={resourceMenu.featured.href} borderClass="border-slate-200/80" />
    </>
  );
}

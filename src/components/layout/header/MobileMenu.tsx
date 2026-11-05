"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { readMoreLabel, resourceMenu } from "@/content/navigation";
import { techMenuCategories as techCategories } from "@/content/technologies";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { headerIndustries, headerServices, techHref } from "./data";
import { MenuIcon } from "./icons";

/** The Technologies section of the menu, hidden for now (the desktop menu hides it too). */
const SHOW_TECH_MENU = false;

const containerClass ="w-full mx-auto px-6 lg:px-8 max-w-[1400px]";

function Section({ label, open, onToggle, children, bodyClass = "py-2 pl-2 space-y-2" }: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  bodyClass?: string;
}) {
  return (
    <>
      <button
        type="button"
        className="flex w-full items-center justify-between border-b border-slate-100 py-4 text-left text-base font-bold text-slate-900"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{label}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className={bodyClass}>{children}</div>}
    </>
  );
}

function Group({ open, onToggle, header, children }: { open: boolean; onToggle: () => void; header: ReactNode; children: ReactNode }) {
  return (
    <div className="border-b border-slate-50 last:border-0 pb-2">
      <button type="button" className="flex w-full items-center justify-between py-3 text-left" onClick={onToggle} aria-expanded={open}>
        {header}
        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && children}
    </div>
  );
}

function ReadMore({ href, onNavigate, className }: { href: string; onNavigate: () => void; className: string }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 text-sm font-bold text-primary ${className}`} onClick={onNavigate}>
      {readMoreLabel} <ChevronRight size={14} />
    </Link>
  );
}

type SectionId = "services" | "technologies" | "industries" | "resources";

/** Full-screen mobile navigation (below 992px) with nested accordions. */
export function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSections, setOpenSections] = useState<Record<SectionId, boolean>>({
    services: false,
    technologies: false,
    industries: false,
    resources: false,
  });
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggleSection = (id: SectionId) => setOpenSections((s) => ({ ...s, [id]: !s[id] }));
  const toggleGroup = (id: string) => setExpanded((cur) => (cur === id ? null : id));

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white text-indigo-950 min-[992px]:hidden">
      <div className={`${containerClass} flex h-16 shrink-0 items-center justify-between border-b border-slate-200`}>
        <span onClick={onClose}>
          <Logo />
        </span>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-indigo-950"
          aria-label="Close navigation menu"
          onClick={onClose}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        className={`${containerClass} flex-1 overflow-y-auto pt-4 pb-24 touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
      >
        <Section label="Services" open={openSections.services} onToggle={() => toggleSection("services")}>
          {headerServices.map((cat) => (
            <Group
              key={cat.id}
              open={expanded === cat.id}
              onToggle={() => toggleGroup(cat.id)}
              header={
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <ChevronRight size={18} />
                  </div>
                  <span className="font-bold text-indigo-950">{cat.label}</span>
                </div>
              }
            >
              <div className="pl-12 space-y-4 py-2">
                {cat.subcategories.map((sub) => (
                  <div key={sub.id} className="space-y-2">
                    <Link href={sub.href} className="flex items-center justify-between text-[15px] font-bold text-indigo-950" onClick={onClose}>
                      <span>{sub.label}</span>
                      <ChevronRight size={14} className="text-primary" />
                    </Link>
                    <ul className="space-y-2 pl-1">
                      {sub.entries.map((entry) => (
                        <li key={entry.href}>
                          <Link href={entry.href} className="text-[14px] text-slate-500 hover:text-primary" onClick={onClose}>
                            {entry.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <ReadMore href={cat.href} onNavigate={onClose} className="pt-2" />
              </div>
            </Group>
          ))}
        </Section>

        {SHOW_TECH_MENU ? (
        <Section label="Technologies" open={openSections.technologies} onToggle={() => toggleSection("technologies")}>
          {techCategories.map((cat) => {
            const isOpen = expanded === cat.id;
            return (
              <Group
                key={cat.id}
                open={isOpen}
                onToggle={() => toggleGroup(cat.id)}
                header={
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <MenuIcon name={cat.icon} fallback="Smartphone" size={18} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-indigo-950">{cat.label}</span>
                  </div>
                }
              >
                <div className="pl-12 py-2">
                  <p className="text-[13px] text-slate-400 mb-4 leading-relaxed font-medium">{cat.menu}</p>
                  <ul className="grid grid-cols-1 gap-y-3">
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={techHref(cat.id, item.slug)}
                          className="flex items-center gap-3 text-[14px] font-medium text-slate-500 hover:text-primary transition-colors"
                          onClick={onClose}
                        >
                          <div className="h-7 w-7 rounded-lg bg-slate-50 p-1.5 flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG logos, no optimization needed */}
                            <img src={item.icon} alt={item.name} width={16} height={16} loading="lazy" style={{ width: "auto", height: "auto" }} className="object-contain opacity-70" />
                          </div>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ReadMore href={techHref(cat.id)} onNavigate={onClose} className="pt-4" />
                </div>
              </Group>
            );
          })}
        </Section>
        ) : null}

        <Section label="Industries" open={openSections.industries} onToggle={() => toggleSection("industries")}>
          {headerIndustries.map((cat) => {
            const isOpen = expanded === cat.id;
            return (
              <Group
                key={cat.id}
                open={isOpen}
                onToggle={() => toggleGroup(cat.id)}
                header={
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <MenuIcon name={cat.icon} size={18} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-indigo-950">{cat.label}</span>
                  </div>
                }
              >
                <div className="pl-12 py-2">
                  <ul className="grid grid-cols-1 gap-y-4">
                    {cat.entries.map((entry, i) => (
                      <li key={`${entry.href}-${i}`}>
                        <Link href={entry.href} className="flex gap-3 text-left" onClick={onClose}>
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-[14px] font-semibold text-slate-800 hover:text-primary">{entry.label}</span>
                            <span className="mt-1 block text-[12px] font-medium leading-relaxed text-slate-500">{entry.description}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ReadMore href={cat.href} onNavigate={onClose} className="pt-4" />
                </div>
              </Group>
            );
          })}
        </Section>

        <Section
          label="Company"
          open={openSections.resources}
          onToggle={() => toggleSection("resources")}
          bodyClass="py-2 pl-2 space-y-2 border-b border-slate-100"
        >
          {resourceMenu.categories.map((cat) => {
            const isOpen = expanded === cat.id;
            return (
              <Group key={cat.id} open={isOpen} onToggle={() => toggleGroup(cat.id)} header={<span className="font-bold text-indigo-950 text-sm">{cat.title}</span>}>
                <div className="pl-4 py-2">
                  <ul className="grid grid-cols-1 gap-y-4">
                    {cat.entries.map((entry, i) => (
                      <li key={`${entry.href}-${i}`}>
                        <Link href={entry.href} className="flex gap-3 text-left" onClick={onClose}>
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-[14px] font-semibold text-slate-800 hover:text-primary">{entry.label}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Group>
            );
          })}
        </Section>

        <div className="mt-auto pt-6 flex flex-col gap-4">
          <Link
            href={site.bookingHref}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-primary bg-primary/10 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/15"
            onClick={onClose}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

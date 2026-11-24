"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown, Mail, MapPin, Phone, Shield } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/content/navigation";
import { site } from "@/content/site";
import { SocialIcon } from "./SocialIcons";

/*
 * Footer: one row of five columns (brand · Company · Work With Us · Services · Get in touch),
 * then the bottom bar. The contact details have their own column with small inline icons, so
 * the brand column stays short and every column is about the same height.
 */

const footerBlurb = "Software and AI engineering from Addis Ababa. We see the problem clearly first, then build software that satisfies.";

const wrap = "w-full mx-auto px-6 lg:px-8 max-w-[1400px]";
const tel = (p: string) => `tel:${p.replace(/\s+/g, "")}`;
const [office] = site.locations;

/** Contact lines: icon + text, styled like the other footer links. */
const contactLines: { icon: ReactNode; text: string; href: string; external?: boolean }[] = [
  ...[site.emails.info, site.emails.support].map((e) => ({ icon: <Mail className="h-4 w-4" />, text: e, href: `mailto:${e}` })),
  ...site.phones.map((p) => ({ icon: <Phone className="h-4 w-4" />, text: p, href: tel(p) })),
  { icon: <MapPin className="h-4 w-4" />, text: "Kirkos, Addis Ababa", href: office.mapUrl, external: true },
];

const headingCls = "text-base font-semibold text-white";
const linkCls = "text-slate-400 transition-colors hover:text-white";

function ContactList() {
  return (
    <ul className="space-y-3 text-sm">
      {contactLines.map((l) => (
        <li key={l.text}>
          <a
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`group inline-flex items-center gap-2.5 ${linkCls}`}
          >
            <span className="shrink-0 text-primary-light transition-colors group-hover:text-white">{l.icon}</span>
            <span className="break-all">{l.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Brand() {
  return (
    <div>
      <Logo variant="dark" className="h-[38px] w-auto max-w-[176px]" />
      <p className="mt-5 max-w-[260px] leading-relaxed text-slate-400">{footerBlurb}</p>
    </div>
  );
}

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const socials = [
    { name: "facebook" as const, href: site.social.facebook, label: "Facebook" },
    { name: "x" as const, href: site.social.x, label: "X" },
    { name: "linkedin" as const, href: site.social.linkedin, label: "LinkedIn" },
    { name: "youtube" as const, href: site.social.youtube, label: "YouTube" },
  ].filter((s) => s.href); // icons without a real link stay hidden

  return (
    <footer data-site-footer className="border-t border-slate-800/90 bg-black text-white">
      <div className={`${wrap} py-12 min-[992px]:py-16`}>
        {/* Mobile: brand, the link columns as accordions, then the contact list */}
        <div className="flex flex-col gap-10 min-[992px]:hidden">
          <Brand />
          <div className="border-t border-slate-800/80">
            {footerColumns.map((col) => {
              const isOpen = open === col.heading;
              return (
                <div key={col.heading} className="border-b border-slate-800/80">
                  <button type="button" onClick={() => setOpen(isOpen ? null : col.heading)} className="flex w-full items-center justify-between py-4 text-left" aria-expanded={isOpen}>
                    <span className={headingCls}>{col.heading}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
                    <ul className="space-y-3 text-sm">
                      {col.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className={linkCls}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h4 className={`mb-5 ${headingCls}`}>Get in touch</h4>
            <ContactList />
          </div>
        </div>

        {/* Desktop: five columns of about the same height */}
        <div className="hidden min-[992px]:grid min-[992px]:grid-cols-[1.35fr_1fr_1fr_1.1fr_1.2fr] min-[992px]:gap-8 xl:gap-12">
          <Brand />
          {footerColumns.map((col) => (
            <div key={col.heading} className="min-w-0">
              <h4 className={`mb-5 ${headingCls}`}>{col.heading}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="min-w-0">
            <h4 className={`mb-5 ${headingCls}`}>Get in touch</h4>
            <ContactList />
          </div>
        </div>
      </div>

      <div className={wrap}>
        <div className="grid grid-cols-1 items-center gap-y-6 border-t border-slate-800/90 py-8 min-[992px]:grid-cols-3">
          <p className="text-center text-xs text-white/50 sm:text-sm min-[992px]:text-left">
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:flex-row sm:gap-x-4">
            <Link href={legalLinks[0].href} className="whitespace-nowrap transition-colors hover:text-white">
              {legalLinks[0].label}
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />
            <Link href={legalLinks[1].href} className="whitespace-nowrap transition-colors hover:text-white">
              {legalLinks[1].label}
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />
            <Link href={legalLinks[2].href} className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-primary-light">
              <Shield className="h-3.5 w-3.5" />
              {legalLinks[2].label}
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 min-[992px]:justify-end">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={`${site.shortName} on ${s.label}`} className="text-slate-400 transition-colors hover:text-primary-light">
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

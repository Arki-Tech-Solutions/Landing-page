"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Shield } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerColumns, legalLinks } from "@/content/navigation";
import { site } from "@/content/site";
import { SocialIcon } from "./SocialIcons";

const footerBlurb = "Software and AI engineering from Addis Ababa, Ethiopia. Senior teams that see clearly and deliver work that satisfies.";

function MailIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PinIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function EmailLink({ iconSize }: { iconSize: string }) {
  return (
    <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-2.5 text-sm text-slate-400 transition-all hover:text-white">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/50 text-primary-light transition-colors group-hover:bg-primary group-hover:text-white">
        <MailIcon className={iconSize} />
      </div>
      <span className="font-medium underline decoration-slate-800 underline-offset-4 transition-colors group-hover:decoration-primary">{site.email}</span>
    </a>
  );
}

function Locations({ box, icon }: { box: string; icon: string }) {
  return (
    <ul className="space-y-3 text-sm">
      {site.locations.map((l) => (
        <li key={l.label}>
          <a href={l.mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-slate-400 transition-all hover:text-white">
            <div className={`mt-0.5 flex ${box} shrink-0 items-center justify-center rounded-lg bg-slate-800/50 text-primary-light transition-colors group-hover:bg-primary group-hover:text-white`}>
              <PinIcon className={icon} />
            </div>
            <div className="leading-relaxed">
              <div className="font-medium">{l.label}</div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const socials = [
    { name: "facebook" as const, href: site.social.facebook, label: "Facebook" },
    { name: "x" as const, href: site.social.x, label: "X" },
    { name: "linkedin" as const, href: site.social.linkedin, label: "LinkedIn" },
    { name: "youtube" as const, href: site.social.youtube, label: "YouTube" },
  ];

  return (
    <footer data-site-footer className="bg-black pb-0 text-white border-t border-slate-800/90">
      <div className="py-8 sm:py-10 min-[992px]:py-12">
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
          {/* Mobile */}
          <div className="flex flex-col gap-10 min-[992px]:hidden">
            <div>
              <div className="mb-4">
                <Logo variant="dark" className="h-[38px] w-auto max-w-[176px]" />
              </div>
              <p className="max-w-xs font-normal leading-relaxed text-slate-400">{footerBlurb}</p>
              <div className="mt-4">
                <EmailLink iconSize="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="space-y-0 border-t border-slate-800/80">
              {footerColumns.map((col) => {
                const isOpen = open === col.heading;
                return (
                  <div key={col.heading} className="border-b border-slate-800/80">
                    <button type="button" onClick={() => setOpen(isOpen ? null : col.heading)} className="flex w-full items-center justify-between py-4 text-left" aria-expanded={isOpen}>
                      <span className="text-base font-semibold text-white">{col.heading}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
                      <ul className="space-y-2.5 text-sm">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="text-slate-400 transition-colors hover:text-white">
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
              <h4 className="mb-5 text-base font-semibold text-white">Our Location</h4>
              <Locations box="h-9 w-9" icon="h-5 w-5" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden min-[992px]:grid min-[992px]:grid-cols-5 min-[992px]:gap-8 xl:gap-10">
            <div className="min-w-0">
              <div className="mb-4">
                <Logo variant="dark" className="h-[38px] w-auto max-w-[176px]" />
              </div>
              <p className="max-w-[220px] font-normal leading-relaxed text-slate-400">{footerBlurb}</p>
              <div className="mt-5">
                <EmailLink iconSize="h-4.5 w-4.5" />
              </div>
            </div>
            {footerColumns.map((col) => (
              <div key={col.heading} className="min-w-0">
                <h4 className="mb-4 text-base font-semibold text-white">{col.heading}</h4>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-slate-400 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="min-w-0 lg:col-span-1">
              <h4 className="mb-5 text-base font-semibold text-white">Our Location</h4>
              <Locations box="h-8 w-8" icon="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] border-t border-slate-800/90">
          <div className="grid grid-cols-1 gap-y-6 py-10 min-[992px]:grid-cols-3 items-center">
            <p className="text-xs text-white/50 sm:text-sm text-center min-[992px]:text-left">
              © {site.copyrightYear} {site.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest sm:flex-row sm:gap-x-4">
              <Link href={legalLinks[0].href} className="hover:text-white transition-colors whitespace-nowrap">
                {legalLinks[0].label}
              </Link>
              <span className="h-1 w-1 rounded-full bg-slate-800 hidden sm:block" />
              <Link href={legalLinks[1].href} className="hover:text-white transition-colors whitespace-nowrap">
                {legalLinks[1].label}
              </Link>
              <span className="h-1 w-1 rounded-full bg-slate-800 hidden sm:block" />
              <Link href={legalLinks[2].href} className="hover:text-primary-light transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <Shield className="w-3.5 h-3.5" />
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
      </div>
    </footer>
  );
}

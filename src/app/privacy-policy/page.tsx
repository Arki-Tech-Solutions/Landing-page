import type { Metadata } from "next";
import Link from "next/link";
import { LegalToc } from "@/components/legal/LegalToc";
import { ContactBand } from "@/components/sections/ContactBand";
import { Reveal } from "@/components/ui/Reveal";
import { legalMeta, privacyPolicy as p } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal data.`,
};

const h2 = "text-3xl font-bold text-indigo-950 mb-6";
const h2Rule = "text-3xl font-bold text-indigo-950 mb-8 border-b border-gray-100 pb-4";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 bg-white">
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white border-b border-gray-100">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <Reveal>
            <div className="mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo */}
              <img src={site.logo.light} alt={site.name} className="h-12 w-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl lg:text-6xl font-bold text-indigo-950 mb-6 tracking-tight">{p.title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg lg:text-xl text-gray-500 max-w-2xl font-medium mb-8">{p.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                Last Updated: {legalMeta.lastUpdated}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                Version: {legalMeta.privacyVersion}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-64 shrink-0 lg:sticky lg:top-32 h-fit">
            <div className="border-l-2 border-gray-100 pl-6 py-2">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-950 mb-8">Table of contents</p>
              <LegalToc items={p.toc} variant="privacy" />
            </div>
          </aside>
          <div className="flex-1 max-w-4xl text-gray-600 text-base leading-relaxed font-sans [&_p+p]:mt-5">
            <div id="introduction" className="mb-16 scroll-mt-32">
              <h2 className={h2}>{p.introTitle}</h2>
              {p.intro.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>

            <div id="data-collection" className="mb-16 scroll-mt-32">
              <h2 className={h2Rule}>{p.collection.title}</h2>
              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-indigo-950 flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">1</span>
                    {p.collection.provided.title}
                  </h3>
                  <p className="mb-4">{p.collection.provided.lead}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {p.collection.provided.items.map((i) => (
                      <li key={i.label}>
                        <strong className="text-indigo-950">{i.label}:</strong> {i.text}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-indigo-950 flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs">2</span>
                    {p.collection.automatic.title}
                  </h3>
                  <p className="mb-4">
                    {p.collection.automatic.text}{" "}
                    <Link href="/cookie-policy" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>

            <div id="types-of-data" className="mb-16 scroll-mt-32">
              <h2 className={h2Rule}>{p.types.title}</h2>
              <div className="space-y-6">
                {p.types.items.map((i) => (
                  <section key={i.title}>
                    <h3 className="text-xl font-bold text-indigo-950 mb-4">{i.title}</h3>
                    <p>{i.text}</p>
                  </section>
                ))}
              </div>
            </div>

            <div id="use-of-data" className="mb-16 scroll-mt-32">
              <h2 className={h2}>{p.use.title}</h2>
              <p className="mb-4">{p.use.lead}</p>
              <ul className="list-disc pl-6 space-y-2 mb-5">
                {p.use.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p>{p.use.basis}</p>
            </div>

            <div id="third-party-services" className="mb-16 scroll-mt-32">
              <h2 className={h2Rule}>{p.thirdParty.title}</h2>
              <p className="mb-6">{p.thirdParty.lead}</p>
              <div className="grid gap-6">
                {p.thirdParty.items.map((i) => (
                  <div key={i.name} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-indigo-950 mb-2">{i.name}</h4>
                    <p className="text-sm text-gray-600">{i.text}</p>
                    {i.href ? (
                      <a href={i.href} className="mt-3 text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                        View Privacy Policy <span className="text-xs">→</span>
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div id="user-rights" className="mb-16 scroll-mt-32">
              <h2 className={h2}>{p.rights.title}</h2>
              <p className="mb-6">{p.rights.lead}</p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {p.rights.items.map((i) => (
                  <div key={i.title} className="bg-primary-soft/50 p-6 rounded-2xl border border-primary/15">
                    <h4 className="font-bold text-indigo-950 mb-3 uppercase tracking-wider text-xs">{i.title}</h4>
                    <p className="text-sm text-gray-600">{i.text}</p>
                  </div>
                ))}
              </div>
              <p>{p.rights.complaint}</p>
            </div>

            <div id="security-measures" className="mb-16 scroll-mt-32">
              <h2 className={h2}>{p.security.title}</h2>
              <p>{p.security.text}</p>
            </div>

            <div id="contact-information" className="mb-16 scroll-mt-32">
              <h2 className={h2}>{p.contact.title}</h2>
              <p className="mb-8">{p.contact.lead}</p>
              <div className="inline-flex flex-col gap-2">
                <a href={`mailto:${site.email}`} className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors break-all">
                  {site.email}
                </a>
                <p className="text-gray-400 font-medium">
                  {site.legalName}, {legalMeta.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </div>
  );
}

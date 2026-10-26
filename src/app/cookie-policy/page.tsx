import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChartColumn, Check, Minus, Shield } from "lucide-react";
import { LegalToc } from "@/components/legal/LegalToc";
import { ContactBand } from "@/components/sections/ContactBand";
import { cookieCategories, cookiePolicy as c, legalMeta } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How the ${site.name} website uses cookies and browser storage.`,
};

const h2 = "text-4xl font-medium mb-8 text-slate-900";
const body = "space-y-6 text-slate-600 leading-relaxed text-lg";

export default function CookiePolicyPage() {
  const rows = cookieCategories.flatMap((cat) => cat.cookies);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white text-slate-900 flex-1 pt-32 pb-20">
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl font-medium mb-6 text-slate-900 tracking-tight">{c.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">{c.intro}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-16">
              <aside className="lg:w-64 shrink-0">
                <div className="sticky top-32">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6">{c.tocTitle}</p>
                  <LegalToc items={c.toc} variant="cookie" />
                </div>
              </aside>
              <div className="flex-1 space-y-24 max-w-3xl min-w-0">
                <section id="what-are-cookies" className="scroll-mt-32">
                  <h2 className={h2}>What are cookies?</h2>
                  <div className={body}>
                    {c.what.paragraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-6 mt-8">
                    {c.what.kinds.map((k) => (
                      <div key={k.title} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <div>
                          <strong className="text-slate-900 block mb-1">{k.title}</strong>
                          <p className="text-base text-slate-500">{k.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="how-use-cookies" className="scroll-mt-32">
                  <h2 className={h2}>How do we use cookies?</h2>
                  <p className="text-lg text-slate-600 mt-6">{c.how.lead}</p>
                  <ul className="space-y-8 mt-8 mb-10">
                    {c.how.categories.map((cat) => (
                      <li key={cat.title} className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-primary">
                          {cat.icon === "shield" ? <Shield className="w-6 h-6" /> : <ChartColumn className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">{cat.title}</h4>
                          <p className="text-base text-slate-600">{cat.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          {c.how.tableHeaders.map((h) => (
                            <th key={h} className="p-4 font-bold text-slate-900">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {rows.map((r) => (
                          <tr key={r.name}>
                            <td className="p-4 font-mono text-xs text-primary font-bold">{r.name}</td>
                            <td className="p-4 text-sm">{r.category}</td>
                            <td className="p-4 text-sm">{r.provider}</td>
                            <td className="p-4 text-sm">{r.purpose}</td>
                            <td className="p-4 text-sm whitespace-nowrap">{r.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="consent-comparison" className="scroll-mt-32">
                  <h2 className={h2}>Consent Comparison</h2>
                  <div className="mt-10">
                    <p className="text-lg text-slate-600 mb-12">{c.comparison.lead}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {c.comparison.options.map((o) => (
                        <div
                          key={o.id}
                          className={`p-8 rounded-[32px] border bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] ${
                            o.id === "all" ? "border-primary/20" : "border-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-3 h-3 rounded-full ${o.id === "all" ? "bg-primary" : "bg-slate-400"}`} />
                            <h4 className="text-xl font-bold text-slate-900">{o.label}</h4>
                          </div>
                          <p className="text-slate-500 text-base mb-8 leading-relaxed">{o.text}</p>
                          <div className="space-y-4">
                            {o.features.map((f) => (
                              <div key={f.label} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                                <span className={`text-[15px] ${f.included ? "text-slate-700 font-medium" : "text-slate-400"}`}>{f.label}</span>
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    f.included ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-300"
                                  }`}
                                >
                                  {f.included ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : <Minus className="w-3.5 h-3.5" strokeWidth={3} />}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="your-rights" className="scroll-mt-32">
                  <h2 className={h2}>Your Rights</h2>
                  <div className={body}>
                    {c.rights.paragraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  <div className="space-y-12 mt-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">{legalMeta.lawName}</h4>
                      <div className="grid grid-cols-1 gap-6">
                        {c.rights.items.map((r) => (
                          <div key={r.title} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                            <h5 className="font-bold text-slate-900 mb-2">{r.title}</h5>
                            <p className="text-base text-slate-600">{r.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section id="gpc-policy" className="scroll-mt-32">
                  <h2 className={h2}>Global Privacy Control</h2>
                  <div className={body}>
                    {c.gpc.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </section>

                <section id="minors" className="scroll-mt-32">
                  <h2 className={h2}>Protection of Minors</h2>
                  <div className={body}>
                    {c.minors.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                </section>

                <section id="third-party-cookies" className="scroll-mt-32">
                  <h2 className={h2}>Third-party services</h2>
                  <div className={body}>
                    {c.thirdParty.paragraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 my-8">
                    <p className="text-base text-slate-700 italic">&ldquo;{c.thirdParty.quote}&rdquo;</p>
                  </div>
                </section>

                <section id="manage-cookies" className="scroll-mt-32">
                  <h2 className={h2}>How can you manage cookies?</h2>
                  <div className={body}>
                    <p>{c.manage.lead}</p>
                  </div>
                  <div className="space-y-8 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900">{c.manage.browserTitle}</h4>
                      <p className="text-base text-slate-600">{c.manage.browserText}</p>
                      <div className="flex flex-wrap gap-3">
                        {c.manage.browsers.map((b) => (
                          <a
                            key={b.label}
                            href={b.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-1"
                          >
                            {b.label}
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {c.manage.cards.map((k) => (
                        <div key={k.title} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
                          <h5 className="font-bold text-slate-900 mb-3">{k.title}</h5>
                          <p className="text-sm text-slate-600">{k.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-base pt-6 border-t border-slate-100 text-slate-600">
                      {c.manage.footer}{" "}
                      <Link href="/privacy-choices" className="text-primary font-bold hover:underline">
                        {c.manage.footerLink}
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="contact-information" className="scroll-mt-32">
                  <h2 className={h2}>Contact Information</h2>
                  <div className={body}>
                    {c.contact.paragraphs.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  <div className="mt-8 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-primary">{c.contact.cardTitle}</h4>
                      <p className="text-slate-500 text-base">{c.contact.cardText}</p>
                    </div>
                    <a
                      href={`mailto:${site.email}`}
                      className="px-8 py-3.5 rounded-2xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-all text-[15px] shadow-lg shadow-primary/10 whitespace-nowrap"
                    >
                      {site.email}
                    </a>
                  </div>
                </section>

                <div className="pt-12 border-t border-slate-100 text-slate-400 text-sm flex flex-col sm:flex-row justify-between gap-4">
                  <p>
                    Policy Version: <span className="text-slate-600 font-medium">{legalMeta.cookieVersion}</span>
                  </p>
                  <p>
                    Last Updated: <span className="text-slate-600 font-medium">{legalMeta.lastUpdated}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactBand />
    </div>
  );
}

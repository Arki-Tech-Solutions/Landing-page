import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Layers, Rocket, Sparkles, Target, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { offeringTemplate as t, type OfferingPage } from "@/content/industries";
import { Breadcrumb } from "./Breadcrumb";

const practiceIcons: LucideIcon[] = [Layers, Sparkles, Target];
const audienceIcons: LucideIcon[] = [Building2, Briefcase, Rocket];
const pad = (n: number) => String(n).padStart(2, "0");

/** Small pill label above section titles. */
function Badge({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full border px-5 py-2 text-[10px] font-black uppercase tracking-[0.15em] mb-6 ${
        dark ? "border-primary-light/20 bg-primary-light/10 text-primary-light" : "border-slate-200 bg-slate-50 text-slate-500 shadow-sm"
      }`}
    >
      {children}
    </span>
  );
}

export function OfferingHero({ offering }: { offering: OfferingPage }) {
  const { menu, industry, content } = offering;
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full border border-primary/15 opacity-40 pointer-events-none" />
      <div className="absolute -right-28 top-24 h-[400px] w-[400px] rounded-full border border-primary/10 opacity-30 pointer-events-none" />
      <Container className="pt-8 mb-8 relative z-20">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: industry.menu.label, href: industry.menu.href }, { label: menu.label }]}
        />
      </Container>
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <Link
              href={industry.menu.href}
              className="mb-8 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary-dark"
            >
              <span className="h-px w-6 bg-primary inline-block" />
              {industry.menu.label}
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.04] tracking-tight text-slate-900 max-w-2xl">{menu.label}</h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-primary/80">{menu.description}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">{content.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={t.heroCta.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                {t.heroCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-primary via-primary-light to-primary-soft" />
              <div className="pl-8 space-y-8">
                {content.outcomes.slice(0, 4).map((o, i) => (
                  <div key={o} className="group">
                    <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-primary/50 mb-1.5">
                      {t.outcomeLabel} {i + 1}
                    </span>
                    <p className="text-[15px] font-bold leading-snug text-slate-700 group-hover:text-slate-900 transition-colors">{o}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pl-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">{t.focusLabel}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {industry.menu.label} · {menu.label}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
          {content.practices.slice(0, 5).map((p) => (
            <span
              key={p}
              className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500 transition-colors hover:border-primary/30 hover:text-primary hover:bg-primary-soft"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function OfferingChallenges({ offering }: { offering: OfferingPage }) {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]" />
      <div className="relative w-full mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <Badge dark>{t.challengesBadge}</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white">{t.challengesTitle}</h2>
          <p className="text-white/40 font-medium max-w-lg mx-auto text-lg mt-6">{t.challengesDescription}</p>
        </div>
        <div className="space-y-4">
          {offering.content.challenges.map((c, i) => (
            <div
              key={c}
              className="group flex items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-6 backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.08] hover:border-primary-light/25"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-light font-black text-sm border border-primary-light/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                {pad(i + 1)}
              </span>
              <p className="text-base lg:text-lg font-semibold leading-relaxed text-white/70 group-hover:text-white/90 transition-colors">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferingOutcomes({ offering }: { offering: OfferingPage }) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="w-full mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <Badge>{t.outcomesBadge}</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">{t.outcomesTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offering.content.outcomes.map((o, i) => (
            <div
              key={o}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-8 lg:p-10 pl-10 lg:pl-12">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-primary transition-colors duration-500 font-mono leading-none">{pad(i + 1)}</span>
                  <div className="h-px flex-1 bg-slate-100 group-hover:bg-primary/15 transition-colors duration-500" />
                </div>
                <p className="text-lg lg:text-xl font-bold leading-relaxed text-slate-700 group-hover:text-slate-900 transition-colors">{o}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferingStack({ offering }: { offering: OfferingPage }) {
  return (
    <section className="py-24 lg:py-40 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="w-full mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{t.stackBadge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 leading-[1.1]">
              {t.stackTitle}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">{t.stackHighlight}</span>
            </h2>
            <div className="max-w-md space-y-6">
              <p className="text-lg text-slate-500 font-medium leading-relaxed">{t.stackDescription}</p>
              <div className="pt-8 border-t border-slate-200 flex items-center gap-8">
                {t.stackStats.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    {i > 0 && <div className="h-8 w-px bg-slate-200" />}
                    <div>
                      <p className="text-2xl font-black text-slate-900 leading-none mb-2">{s.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {offering.content.practices.map((p, i) => {
                const I = practiceIcons[i % practiceIcons.length];
                return (
                  <div
                    key={p}
                    className="group flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-400 border border-slate-100 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      <I className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-primary transition-colors">#{pad(i + 1)}</span>
                      </div>
                      <h3 className="text-sm lg:text-base font-bold text-slate-800 group-hover:text-slate-950 transition-colors truncate">{p}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-[2s] group-hover:scale-125" />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light mb-2">{t.focusLabel}</p>
                  <h4 className="text-xl font-bold">{t.stackFocusTitle}</h4>
                </div>
                <Link
                  href={t.stackFocusCta.href}
                  className="px-6 py-3 bg-white text-primary rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-soft transition-colors self-start md:self-center"
                >
                  {t.stackFocusCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliveryPath({ offering }: { offering: OfferingPage }) {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 -ml-32 -mt-32 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]" />
      <div className="absolute bottom-0 right-0 -mr-32 -mb-32 h-[400px] w-[400px] rounded-full bg-primary-light/8 blur-[100px]" />
      <div className="relative w-full mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <Badge dark>{t.deliveryBadge}</Badge>
          <h2 className="text-3xl md:text-5xl font-black">{t.deliveryTitle}</h2>
          <p className="text-white/40 font-medium max-w-xl mx-auto text-lg mt-6">{t.deliveryDescription}</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-light/50 via-primary-light/30 to-transparent -translate-x-0.5" />
          <div className="space-y-8 lg:space-y-0">
            {offering.content.phases.map((p, i) => {
              const left = i % 2 === 0;
              const card = (
                <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-primary-light/20">
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-black">{pad(i + 1)}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light">
                      {t.phaseLabel} {i + 1}
                    </span>
                  </div>
                  <p className="hidden lg:block text-[10px] font-black uppercase tracking-[0.2em] text-primary-light mb-3">
                    {t.phaseLabel} {i + 1}
                  </p>
                  <p className="text-base font-semibold leading-relaxed text-white/80">{p}</p>
                </div>
              );
              return (
                <div key={p} className="relative lg:flex lg:items-center lg:min-h-[160px]">
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-black text-sm shadow-lg shadow-primary/30 border-4 border-slate-900">
                    {pad(i + 1)}
                  </div>
                  {left ? (
                    <>
                      <div className="lg:w-1/2 lg:pr-16">{card}</div>
                      <div className="lg:w-1/2 lg:pl-16 hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="lg:w-1/2 lg:pr-16 hidden lg:block" />
                      <div className="lg:w-1/2 lg:pl-16">{card}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfferingAudience({ offering }: { offering: OfferingPage }) {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 rounded-full bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t.fitBadge}</span>
            <div className="h-1 w-10 rounded-full bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">{t.fitTitle}</h2>
          <p className="text-slate-500 font-medium max-w-lg mx-auto text-lg mt-6">{t.fitDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offering.content.audiences.map((a, i) => {
            const I = audienceIcons[i % audienceIcons.length];
            return (
              <div key={a.title} className="group relative">
                <div className="relative z-10 h-full p-8 rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">{a.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const plusPattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export function OfferingCta({ offering }: { offering: OfferingPage }) {
  const { industry, menu } = offering;
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-navy">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: plusPattern }} />
      <div className="relative w-full mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">{t.ctaTitle(menu.label)}</h2>
        <p className="text-lg text-white/70 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">{t.ctaDescription}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={t.ctaPrimary.href}
            className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-black text-white shadow-2xl transition-all hover:-translate-y-1 hover:shadow-primary/30 hover:bg-primary-dark"
          >
            {t.ctaPrimary.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href={industry.menu.href}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-10 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/50"
          >
            {t.ctaSecondary(industry.menu.label)}
          </Link>
        </div>
      </div>
    </section>
  );
}

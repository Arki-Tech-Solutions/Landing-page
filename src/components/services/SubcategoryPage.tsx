import Link from "next/link";
import { ArrowRight, ChevronRight, CircleCheck, Sparkles } from "lucide-react";
import { ContactBand } from "@/components/sections/ContactBand";
import { Faq } from "@/components/sections/Faq";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { faqIntro, serviceCta, type ServiceGroup, type ServiceSubcategory } from "@/content/services";
import { site } from "@/content/site";
import { Breadcrumb } from "./Breadcrumb";
import { SvcIcon } from "./icons";
import { splitTitle } from "./utils";

function Hero({ group, sub }: { group: ServiceGroup; sub: ServiceSubcategory }) {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex flex-col items-stretch pt-10 border-b border-slate-200 bg-slate-950">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Replaces the reference's photo: soft grid + brand glows. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_60%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,color-mix(in_oklab,var(--color-primary)_42%,transparent),transparent_44%),radial-gradient(circle_at_82%_14%,color-mix(in_oklab,var(--color-primary-light)_30%,transparent),transparent_40%),radial-gradient(circle_at_60%_95%,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_45%)]" />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>
      <Breadcrumb
        dark
        items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: group.label, href: `/services/${group.id}` }, { label: sub.label }]}
      />
      <Container className="relative z-10 pt-6 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[74px] font-bold text-white leading-[1.05] mb-6 tracking-tighter mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-primary-light">{sub.heroTitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light max-w-3xl mx-auto mb-8">{sub.description}</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href={serviceCta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 text-lg shadow-xl shadow-primary/20 hover:scale-[1.03]"
              >
                Talk to an {site.shortName} Engineer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/why-arki"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg border border-white/45 shadow-lg shadow-black/10 hover:shadow-white/5 active:scale-95"
              >
                <Sparkles className="mr-2.5 w-5 h-5 text-primary-light group-hover:text-white transition-colors" />
                Why Choose Us
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 lg:mt-20 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-5 max-w-3xl mx-auto shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-soft mb-4 text-center">Snapshot</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {sub.snapshot.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/20 bg-slate-950/35 p-3 text-center overflow-hidden">
                  <div className="text-xl font-black text-white truncate">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-200 truncate">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Pillars({ sub }: { sub: ServiceSubcategory }) {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 tracking-tight">
            Capability <span className="text-primary">pillars</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">Each pillar is a concrete set of skills and habits this team brings to your project.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-6xl">
          {sub.pillars.map((p, i) => (
            <article key={p.title} className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 lg:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-soft text-primary-dark text-xs font-bold tracking-[0.2em] uppercase mb-6">Pillar {i + 1}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-7 tracking-tight">{p.title}</h3>
              <div className="space-y-5">
                {p.points.map((pt) => (
                  <div key={pt.title} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                      <CircleCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{pt.title}</h4>
                      <p className="text-slate-500 text-[15px] leading-relaxed m-0">{pt.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why({ sub }: { sub: ServiceSubcategory }) {
  return (
    <section className="py-24 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold tracking-[0.2em] uppercase text-primary-dark mb-5">Why {site.shortName}</span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-5 tracking-tight">
            Why choose {site.shortName} for <span className="text-primary">{sub.label}</span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">Architecture before code, milestones you can check, and full visibility from kickoff to scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sub.why.map((w) => (
            <article key={w.title} className="rounded-2xl border border-slate-200 bg-white p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-5">
                <SvcIcon name={w.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 break-words hyphens-auto">{w.title}</h3>
              <p className="text-slate-600 leading-relaxed m-0">{w.text}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href={serviceCta.href} className="inline-flex items-center text-primary-dark font-bold hover:text-primary transition-colors">
            {serviceCta.label}
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** /services/<group>/<sub> — subcategory template. */
export function SubcategoryPage({ group, sub }: { group: ServiceGroup; sub: ServiceSubcategory }) {
  const [head, rest] = splitTitle(sub.label);
  const faqs = [
    sub.faq,
    { q: `How soon can a ${sub.label} engagement start?`, a: "Most engagements begin within two weeks of a discovery call and an agreed scope." },
    { q: "Will this work with the systems we already run?", a: "Yes. We map your current stack and integration constraints before writing code, so hand-offs are clean from the first day." },
  ];
  return (
    <>
      <Hero group={group} sub={sub} />
      <Pillars sub={sub} />
      <Why sub={sub} />
      <Faq highlight={head} title={`${rest ? `${rest} ` : ""}FAQs`} description={faqIntro} items={faqs} />
      <ContactBand />
    </>
  );
}

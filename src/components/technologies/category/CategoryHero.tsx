import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { TechCategory } from "@/content/technologies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";
import { site } from "@/content/site";
import { Breadcrumb } from "../Breadcrumb";
import { techIcons } from "../icons";

const copy = techTemplateCopy.category;

/** Category hero: breadcrumb, mono badge, oversized headline and a SPEC_0x timeline. */
export function CategoryHero({ category, detail }: { category: TechCategory; detail: CategoryDetail }) {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pb-32 flex flex-col items-stretch overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(var(--color-ink) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--color-ink) 0.5px, transparent 0.5px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-[20%] left-[-5%] w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px]" />
      </div>
      <Container className="pt-8 mb-8 relative z-20">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Technologies" }, { label: category.label }]} />
      </Container>
      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-slate-100 mb-10 rounded-sm shadow-sm">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 font-mono">
                {copy.expertiseLabel} / {category.title}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black text-slate-950 leading-[0.96] mb-10 tracking-tighter text-balance">
              <span className="text-primary inline-block drop-shadow-sm">{detail.heroHighlight}</span> {detail.heroRest}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-14 font-light">{detail.heroLead}</p>
            <div className="flex flex-wrap gap-6">
              <Link
                href={site.bookingHref}
                className="group flex items-center justify-center px-10 py-4.5 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 text-xs tracking-widest uppercase shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                {copy.primaryCta}
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href={copy.secondaryCta.href}
                className="group flex items-center justify-center px-10 py-4.5 bg-white text-primary font-bold rounded-full border border-primary/15 hover:border-primary hover:bg-primary-soft/50 transition-all duration-300 text-xs tracking-widest uppercase"
              >
                {copy.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="hidden lg:block absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary via-primary/25 to-transparent ml-6" aria-hidden />
            <div className="space-y-12">
              {detail.specs.map((s, i) => {
                const I = techIcons[s.icon];
                return (
                  <div key={s.text} className="flex items-start gap-8 relative lg:pl-6 group text-left">
                    <div className="hidden lg:block absolute top-1.5 left-0 -ml-[4px] w-2 h-2 rounded-full border-2 border-slate-900 bg-white group-hover:bg-primary transition-colors z-30" />
                    <div className="flex-1 flex items-start gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl border border-slate-100 bg-white flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                        <I className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-primary/50 block mb-1 group-hover:text-primary transition-colors">
                          SPEC_{String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-lg font-bold text-slate-900 leading-none mb-1.5">{s.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

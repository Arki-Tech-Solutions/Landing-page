import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import type { TechCategory, TechItem } from "@/content/technologies";
import { techTemplateCopy, type CategoryDetail, type TechDetail } from "@/content/technology-details";
import { Breadcrumb } from "../Breadcrumb";
import { TechLogo } from "../TechLogo";

const copy = techTemplateCopy.tech;

/** Technology hero: badge, "<Name> Development Services" headline and a logo + stats card. */
export function TechHero({ category, item, detail, catDetail }: { category: TechCategory; item: TechItem; detail: TechDetail; catDetail: CategoryDetail }) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-soft/30 pt-16 pb-20 lg:pb-28 overflow-hidden flex flex-col items-stretch">
      <Container className="pt-8 mb-8 relative z-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Technologies" },
            { label: category.label, href: `/technologies/${category.id}` },
            { label: item.name },
          ]}
        />
      </Container>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-soft/40 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-soft/50 rounded-full blur-[80px] pointer-events-none" aria-hidden />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black tracking-[0.15em] uppercase mb-8">
              <Award className="w-3.5 h-3.5" />
              {category.title} {copy.solutions}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.1] mb-7 tracking-tight">
              {item.name} <span className="text-primary">{copy.development}</span> {copy.tagline}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">{detail.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href={site.bookingHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-[0_8px_30px_color-mix(in_oklab,var(--color-primary)_25%,transparent)] hover:shadow-[0_8px_40px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]"
              >
                {catDetail.techCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-primary/25 hover:bg-primary-soft/50 transition-all duration-300"
              >
                {copy.exploreServices}
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 w-full max-w-md">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-soft border border-primary/15 flex items-center justify-center p-3">
                  <TechLogo item={item} />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-400 font-medium">{copy.cardSubtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {catDetail.stats.map((s) => (
                  <div key={s.label} className="text-center p-4 bg-slate-50 rounded-2xl">
                    <p className="text-2xl lg:text-3xl font-black text-primary mb-1">{s.value}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

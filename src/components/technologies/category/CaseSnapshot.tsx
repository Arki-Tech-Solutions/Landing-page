import Link from "next/link";
import { Shield, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/content/case-studies";
import type { TechCategory } from "@/content/technologies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";

const copy = techTemplateCopy.category;

/** "Case Study Snapshot": challenge/innovation copy beside a highlighted metric card. */
export function CaseSnapshot({ category, detail }: { category: TechCategory; detail: CategoryDetail }) {
  const sp = detail.spotlight;
  const cs = caseStudies.find((c) => c.slug === sp.slug);
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-soft/50 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase font-mono mb-10">
              <Star className="w-3.5 h-3.5" />
              {copy.snapshotTag}
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-8 text-left text-balance">{copy.snapshotTitle}</h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 text-left">
              {copy.snapshotIntro(category.title)}{" "}
              <span className="text-slate-900 font-semibold underline decoration-primary/30 underline-offset-8">{cs?.title ?? "a sample project"}</span>
              {cs?.sample ? " (sample project)." : "."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <p className="text-primary text-xs font-black tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">The Challenge</p>
                <p className="text-slate-600 leading-relaxed font-medium m-0 text-left">{sp.challenge}</p>
              </div>
              <div className="group">
                <p className="text-emerald-600 text-xs font-black tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">The Innovation</p>
                <p className="text-slate-600 leading-relaxed font-medium m-0 text-left">{sp.solution}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative group/metric">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-500 rounded-[3rem] blur opacity-10 group-hover/metric:opacity-20 transition duration-1000" aria-hidden />
              <div className="relative bg-white border border-slate-100 rounded-[3rem] p-10 lg:p-14 overflow-hidden shadow-2xl shadow-slate-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] group-hover/metric:scale-110 transition-transform" aria-hidden />
                <div className="mb-12 relative">
                  <p className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">{copy.impactLabel}</p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-[0_15px_30px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]">
                      <Shield className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-1">{sp.metric.value}</p>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest m-0">{sp.metric.label}</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 italic font-medium text-left">&quot;{sp.result}&quot;</p>
                <Link
                  href="/case-studies"
                  className="flex items-center justify-center w-full py-5 rounded-2xl bg-primary text-white font-black text-sm tracking-[0.1em] uppercase hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
                >
                  {copy.readAll}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseCover } from "@/components/sections/CaseCover";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/case-studies";
import { RevealLeft } from "./RevealLeft";

/** "Full project portfolio": heading row and a 3-column grid of project cards. */
export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 mb-20 border-b border-slate-200 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <RevealLeft className="max-w-2xl">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] block mb-4">Full Project Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 tracking-tight font-heading leading-tight mb-4">
                Every project, <span className="text-primary italic">in view.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-xl">
                Browse the scope, architecture and delivery approach behind each engagement, from payments and health records to AI in local languages.
              </p>
            </RevealLeft>
          </div>
        </div>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.slug} className="group relative flex flex-col bg-white rounded-[32px] border border-slate-200 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-950/5 hover:-translate-y-2 hover:border-primary/20">
              <Link href={`/case-studies/${cs.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/11] bg-slate-50 overflow-hidden border-b border-slate-100">
                  <div className="absolute inset-4 flex items-center justify-start md:justify-center">
                    <CaseCover cs={cs} className="scale-[0.8] transition-transform duration-1000 ease-out group-hover:scale-[0.85]" />
                  </div>
                  <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="text-[9px] font-black tracking-widest text-indigo-950 uppercase">{cs.category}</div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-8 lg:p-10">
                  <h3 className="text-2xl font-extrabold text-indigo-950 tracking-tight leading-tight mb-4 font-heading group-hover:text-primary transition-colors duration-300">{cs.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm mb-10 line-clamp-3">{cs.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-2 mb-8">
                    {[cs.industry, cs.tech].map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary md:text-indigo-950 uppercase tracking-[0.2em] md:group-hover:text-primary transition-colors">Read Case Study</span>
                    <div className="w-10 h-10 rounded-full bg-primary text-white border-primary md:bg-slate-50 md:border-slate-200 md:text-slate-400 md:group-hover:bg-primary md:group-hover:text-white md:group-hover:border-primary transition-all duration-500 flex items-center justify-center">
                      <ArrowUpRight size={20} aria-hidden />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute inset-0 block group-hover:bg-primary/[0.02] pointer-events-none transition-colors duration-500" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

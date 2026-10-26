import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseCover } from "@/components/sections/CaseCover";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/case-studies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";

const copy = techTemplateCopy.category;

/** Split "INDUSTRY, X / PLATFORM" tags into two short facts for the card footer. */
function facts(tags: string) {
  const [left, platform = ""] = tags.split("/").map((s) => s.trim());
  const industry = left.split(",")[0].trim();
  const cap = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();
  return [
    { value: cap(industry), label: "Industry" },
    { value: cap(platform.split(",")[0].trim() || "Web"), label: "Platform" },
  ];
}

/** "Real-world mastery at work": alternating large case cards (sample projects). */
export function ProjectArchive({ detail }: { detail: CategoryDetail }) {
  const items = detail.caseStudySlugs.map((s) => caseStudies.find((c) => c.slug === s)).filter((c) => c !== undefined);
  return (
    <section className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-16 lg:mb-24 relative z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-white border border-slate-100 mb-8 rounded-sm shadow-sm">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 font-mono">{copy.archiveTag}</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-950 leading-[0.95] tracking-tighter">{copy.archiveTitle}</h2>
        </div>
        <div className="space-y-12 lg:space-y-16">
          {items.map((cs, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={cs.slug}>
                <div
                  className={`group/card relative bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-700 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-20 items-center p-6 sm:p-8 lg:p-12 ${reverse ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="w-full lg:w-3/5 group">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100/50 shadow-md group-hover:shadow-xl transition-all duration-700">
                      <CaseCover cs={cs} className="group-hover:scale-105 transition-transform duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className={`absolute top-6 z-20 ${reverse ? "left-6" : "right-6"}`}>
                        <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
                          <span className="text-[9px] font-black text-slate-950 uppercase tracking-widest leading-none">{cs.tags}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 flex flex-col items-start px-4">
                    <div className="mb-4 flex items-center gap-4 text-slate-300 font-mono text-[10px] tracking-[0.2em] uppercase">
                      <span>Ref: CASE_{i + 1}</span>
                      <span className="w-6 h-px bg-slate-200" />
                      {cs.sample && <span className="text-accent-dark">Sample</span>}
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-950 leading-[0.95] tracking-tighter mb-4 text-balance group-hover/card:text-primary transition-colors">{cs.title}</h2>
                    <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">{cs.summary}</p>
                    <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full pt-8 border-t border-slate-100 mb-10">
                      {facts(cs.tags).map((f) => (
                        <div key={f.label}>
                          <div className="text-2xl font-black text-slate-950 mb-0.5 leading-none">{f.value}</div>
                          <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest font-mono">{f.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group relative flex items-center gap-4 px-8 py-4 bg-primary text-white font-black rounded-full overflow-hidden hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform active:scale-95 shadow-lg shadow-primary/20"
                    >
                      <span className="relative z-10 text-[10px] tracking-[0.2em] uppercase">{copy.caseCta}</span>
                      <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-20 flex justify-center pb-2">
          <Link
            href="/case-studies"
            className="group relative flex items-center gap-4 px-12 py-5 bg-primary-soft text-primary border border-primary/25 font-extrabold rounded-full transition-all duration-300 transform hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl shadow-primary/10"
          >
            <span className="relative z-10 text-[11px] tracking-[0.2em] uppercase">{copy.viewAll}</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

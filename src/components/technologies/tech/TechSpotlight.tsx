import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/content/case-studies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";

const copy = techTemplateCopy.tech;

/** Dark "Case Study: <project>" band with challenge / solution / result columns. */
export function TechSpotlight({ detail }: { detail: CategoryDetail }) {
  const sp = detail.spotlight;
  const cs = caseStudies.find((c) => c.slug === sp.slug);
  return (
    <section className="bg-slate-900 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent)] pointer-events-none" aria-hidden />
      <Container>
        <div className="max-w-5xl mx-auto relative">
          <p className="text-primary-light text-sm font-black tracking-[0.2em] uppercase mb-4">{copy.spotlightTag}</p>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-white leading-[1.15] mb-12 tracking-tight">
            {copy.spotlightPrefix} <span className="text-primary-light">{cs?.title}</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl">
              <p className="text-primary-light text-xs font-black tracking-widest uppercase mb-4">The Challenge</p>
              <p className="text-white/70 leading-relaxed text-sm">{sp.challenge}</p>
            </div>
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-2xl">
              <p className="text-cyan-400 text-xs font-black tracking-widest uppercase mb-4">Our Solution</p>
              <p className="text-white/70 leading-relaxed text-sm">{sp.solution}</p>
            </div>
            <div className="p-8 bg-primary/10 border border-primary-light/20 rounded-2xl">
              <p className="text-emerald-400 text-xs font-black tracking-widest uppercase mb-4">The Result</p>
              <p className="text-white/90 leading-relaxed text-sm font-medium">{sp.result}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

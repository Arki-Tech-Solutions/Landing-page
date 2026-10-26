import { CircleCheck, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";

const copy = techTemplateCopy.category;

/** "Platform Capabilities / Engineered for scale." with a 2x2 grid of the first four solutions. */
export function CapabilitiesBand({ detail }: { detail: CategoryDetail }) {
  return (
    <section className="bg-slate-50 py-20 lg:py-24 relative overflow-hidden border-t border-slate-100">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,color-mix(in_oklab,var(--color-primary)_5%,transparent),transparent)] pointer-events-none" aria-hidden />
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase font-mono mb-8">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              {copy.capabilitiesTag}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-950 leading-[0.95] mb-8 tracking-tighter text-balance">{copy.capabilitiesTitle}</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-xl">{copy.capabilitiesDescription}</p>
          </div>
          <div className="lg:w-2/5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.solutions.slice(0, 4).map((s) => (
                <div
                  key={s.title}
                  className="p-4 md:p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 transition-all duration-500 group shadow-lg shadow-slate-200/50 flex items-center md:flex-col md:items-start gap-4 md:gap-0"
                >
                  <div className="w-10 h-10 md:w-8 md:h-8 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center text-primary md:mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <CircleCheck className="w-4 h-4" />
                  </div>
                  <p className="text-slate-900 text-sm font-black leading-tight m-0 tracking-tight line-clamp-2 break-words hyphens-auto">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

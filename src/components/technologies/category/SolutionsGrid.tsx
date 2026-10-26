import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { TechCategory } from "@/content/technologies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";
import { shadowLift } from "../icons";

const copy = techTemplateCopy.category;

/** "Full Spectrum / Solutions we deliver": eight soft cards in a 3-column grid. */
export function SolutionsGrid({ category, detail }: { category: TechCategory; detail: CategoryDetail }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="mb-16">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 font-mono mb-4">{copy.solutionsTag}</p>
          <h2 className="text-4xl lg:text-[52px] font-black text-slate-950 leading-[0.95] tracking-tighter mb-4 text-balance">{copy.solutionsTitle}</h2>
          <p className="text-xl text-slate-600/80 font-light max-w-2xl leading-relaxed">{copy.solutionsDescription(category.title)}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {detail.solutions.map((s) => (
            <div
              key={s.title}
              className={`group relative flex flex-col gap-5 p-8 bg-slate-50/50 border border-slate-100 rounded-3xl hover:bg-white hover:border-primary/15 ${shadowLift} transition-all duration-500`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <CircleCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-slate-950 font-black text-xl mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors line-clamp-2 break-words hyphens-auto">{s.title}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-light">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

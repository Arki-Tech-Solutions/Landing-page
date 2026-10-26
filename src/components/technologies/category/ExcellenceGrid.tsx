import { Container } from "@/components/ui/Container";
import type { TechCategory } from "@/content/technologies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";
import { shadowLift, techIcons } from "../icons";

const copy = techTemplateCopy.category;

/** "Engineering Excellence": four split cards (icon + title | text + bullet list). */
export function ExcellenceGrid({ category, detail }: { category: TechCategory; detail: CategoryDetail }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-soft/50 rounded-full blur-[120px] pointer-events-none" aria-hidden />
      <Container>
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 font-mono mb-4">{copy.excellenceTag}</p>
          <h2 className="text-4xl lg:text-[52px] font-black text-slate-950 leading-[0.95] mb-6 tracking-tighter text-balance">{copy.excellenceTitle}</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">{copy.excellenceDescription(category.title)}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {detail.expertise.map((e) => {
            const I = techIcons[e.icon];
            return (
              <div
                key={e.title}
                className={`flex flex-col md:flex-row gap-8 bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-primary/15 rounded-[2rem] p-8 lg:p-10 transition-all duration-500 ${shadowLift} group`}
              >
                <div className="md:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-950 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <I className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-2 leading-tight group-hover:text-primary transition-colors break-words hyphens-auto">{e.title}</h3>
                </div>
                <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-8">
                  <p className="text-slate-600 leading-relaxed mb-8 text-[15px] font-medium text-left">{e.text}</p>
                  <div className="grid grid-cols-1 gap-y-4">
                    {e.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-125 transition-all" />
                        <span className="text-slate-700 font-semibold text-[15px] tracking-tight">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

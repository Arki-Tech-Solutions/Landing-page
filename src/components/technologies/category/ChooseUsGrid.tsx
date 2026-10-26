import { Container } from "@/components/ui/Container";
import type { TechCategory } from "@/content/technologies";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";
import { techIcons } from "../icons";

const copy = techTemplateCopy.category;

/** Bordered 3x2 grid of reasons ("Choose us because"). */
export function ChooseUsGrid({ category, detail }: { category: TechCategory; detail: CategoryDetail }) {
  const items = detail.chooseUs;
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.15] mb-4 tracking-tight">{copy.chooseTitle}</h2>
          <p className="text-lg text-slate-600">{copy.chooseDescription(category.title)}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto rounded-xl border border-gray-200 overflow-hidden bg-white">
          {items.map((c, i) => {
            const I = techIcons[c.icon];
            const cls = [
              "border-gray-100",
              i >= 1 ? "border-t" : "",
              i >= 2 ? "md:border-t" : "md:border-t-0",
              i >= 3 ? "lg:border-t" : "lg:border-t-0",
              i % 2 === 0 ? "md:border-r" : "md:border-r-0",
              i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0",
            ].join(" ");
            return (
              <div key={c.title} className={`flex items-center gap-5 p-8 lg:px-10 hover:bg-slate-50 transition-colors ${cls}`}>
                <div className="w-10 h-10 rounded-full border border-primary/15 bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <I className="w-5 h-5" />
                </div>
                <p className="text-slate-800 font-medium text-[15px] leading-snug m-0">{c.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

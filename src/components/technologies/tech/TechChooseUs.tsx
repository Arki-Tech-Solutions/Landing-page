import { Container } from "@/components/ui/Container";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";
import { shadowCard, techIcons } from "../icons";

const copy = techTemplateCopy.tech;

/** "What makes us a perfect partner": six icon cards. */
export function TechChooseUs({ name, detail }: { name: string; detail: CategoryDetail }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-4">{copy.chooseTag}</p>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            {copy.chooseTitle} <span className="text-primary">{copy.chooseHighlight}</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{copy.chooseDescription(name)}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detail.chooseUs.map((c) => {
            const I = techIcons[c.icon];
            return (
              <div key={c.title} className={`group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-primary/15 ${shadowCard} transition-all duration-500`}>
                <div className="w-14 h-14 rounded-2xl bg-primary-soft border border-primary/15 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                  <I className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

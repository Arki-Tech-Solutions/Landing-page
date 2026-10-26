import { CodeXml, Layers, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { TechItem } from "@/content/technologies";
import { techTemplateCopy, type TechDetail } from "@/content/technology-details";
import { shadowCard } from "../icons";

const copy = techTemplateCopy.tech;
const icons = [CodeXml, Layers, Zap];

/** "Our <Name> services at engineering excellence": three feature cards. */
export function TechServices({ item, detail }: { item: TechItem; detail: TechDetail }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-4">{copy.servicesTag}</p>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            {copy.servicesTitle[0]} {item.name} {copy.servicesTitle[1]} <span className="text-primary">{copy.servicesHighlight}</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{detail.usage}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detail.features.map((f, i) => {
            const I = icons[i];
            return (
              <div key={f.title} className={`group p-8 bg-white border border-slate-100 rounded-2xl hover:border-primary/15 ${shadowCard} transition-all duration-500`}>
                <div className="w-14 h-14 rounded-2xl bg-primary-soft border border-primary/15 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                  <I className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

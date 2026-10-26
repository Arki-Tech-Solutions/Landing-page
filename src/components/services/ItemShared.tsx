import { ListChecks, Settings, UserPlus } from "lucide-react";
import { Faq } from "@/components/sections/Faq";
import { faqIntro, itemShared, type ServiceItem } from "@/content/services";
import { splitTitle } from "./utils";

/** "Engagement Blueprint" card used by the delivery and hiring item layouts. */
export function Blueprint({ tag, coreTeam, models, hiring = false }: { tag: string; coreTeam: string[]; models: string[]; hiring?: boolean }) {
  const cols = [
    { icon: UserPlus, title: "Core team", items: coreTeam },
    { icon: ListChecks, title: "Prerequisites", items: itemShared.prerequisites },
    { icon: Settings, title: "Engagement models", items: models },
  ];
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`rounded-[32px] border border-slate-200 bg-slate-50/50 shadow-sm ${hiring ? "pt-10 pb-12 px-8 lg:p-12" : "p-8 lg:p-12"}`}>
          <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-slate-900 md:text-4xl">Engagement Blueprint</h3>
              <p className="mt-2 text-slate-500 font-medium text-base">{itemShared.blueprintIntro}</p>
            </div>
            <span className="rounded-full border border-primary/25 bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary-dark shadow-sm">{tag}</span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title} className={`group border border-slate-200 bg-white transition-all hover:shadow-lg hover:border-primary/25 ${hiring ? "rounded-[24px] p-7" : "rounded-2xl p-6"}`}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary border border-primary/10">
                  <c.icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 mb-5">{c.title}</h4>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className={`flex gap-3 text-[13px] leading-relaxed text-slate-500 group-hover:text-slate-800 transition-colors ${hiring ? "font-medium" : "font-semibold"}`}>
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${hiring ? "bg-primary-light" : "bg-primary"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** "<Item> FAQs" accordion shared by every item layout. */
export function ItemFaq({ item }: { item: ServiceItem }) {
  const [head, rest] = splitTitle(item.label);
  return <Faq highlight={head} title={`${rest ? `${rest} ` : ""}FAQs`} description={faqIntro} items={item.faqs} />;
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { TechCategory } from "@/content/technologies";
import { getTechDetail, techTemplateCopy } from "@/content/technology-details";
import { shadowSoft } from "../icons";
import { TechLogo } from "../TechLogo";

const copy = techTemplateCopy.category;

/** Category "Tools & technologies we use": 12 logo cards with one-line descriptions. */
export function ToolsGrid({ category }: { category: TechCategory }) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-gray-100">
      <Container>
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 font-mono mb-4">{copy.toolsTag}</p>
        <h2 className="text-3xl lg:text-[40px] font-black text-slate-950 leading-[0.95] tracking-tighter mb-4 text-balance">{copy.toolsTitle}</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-14">{copy.toolsDescription}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {category.items.map((item) => (
            <Link
              key={item.slug}
              href={`/technologies/${category.id}/${item.slug}`}
              className={`bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/15 ${shadowSoft} transition-all duration-500`}
            >
              <div className="w-14 h-14 mb-5 relative flex items-center justify-center">
                <TechLogo item={item} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{item.name}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{getTechDetail(category.id, item.slug)?.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

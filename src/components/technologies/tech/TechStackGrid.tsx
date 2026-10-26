import Link from "next/link";
import type { TechCategory } from "@/content/technologies";
import { getTechDetail, techTemplateCopy } from "@/content/technology-details";
import { TechLogo } from "../TechLogo";

const copy = techTemplateCopy.tech;

/** "Tools & technologies we use" on technology pages: 6-column logo grid of the category. */
export function TechStackGrid({ category, current }: { category: TechCategory; current: string }) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-4">{copy.stackTag}</p>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            Tools &amp; <span className="text-primary">technologies</span> we use
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{copy.stackDescription}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {category.items.map((item) => (
            <Link
              key={item.slug}
              href={`/technologies/${category.id}/${item.slug}`}
              aria-current={item.slug === current ? "page" : undefined}
              className={`bg-white border p-6 rounded-2xl flex flex-col items-center text-center transition-colors ${item.slug === current ? "border-primary/30" : "border-slate-100 hover:border-primary/15"}`}
            >
              <div className="w-14 h-14 mb-5 relative">
                <TechLogo item={item} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">{item.name}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{getTechDetail(category.id, item.slug)?.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

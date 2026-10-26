"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techCategories } from "@/content/technologies";

/** Sticky category list on the left, one card per category on the right, with scroll-spy. */
export function TechStackSection({ title, highlight, description }: { title: string; highlight: string; description: string }) {
  const [active, setActive] = useState(techCategories[0].id);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id.replace("tech-", ""));
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5] },
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32 self-start pb-12">
            <Reveal>
              <SectionHeading highlight={highlight} title={title} highlightFirst description={description} />
            </Reveal>
            <ul className="mt-2 border-l border-gray-200 hidden lg:block">
              {techCategories.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => refs.current[c.id]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className={`block w-full text-left py-3.5 pl-6 text-[15px] font-medium transition-all duration-150 border-l-2 -ml-[1px] ${
                      active === c.id ? "border-primary text-primary font-semibold" : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                    }`}
                  >
                    {c.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-10">
            {techCategories.map((c) => (
              <div key={c.id} id={`tech-${c.id}`} ref={(el) => { refs.current[c.id] = el; }} className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden scroll-mt-32">
                <div className="p-8 md:p-12">
                  <Reveal>
                    <h3 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-4 tracking-tight leading-snug">
                      <span className="text-primary font-black">{c.hl}</span> {c.rest}
                    </h3>
                  </Reveal>
                  <Reveal>
                    <h4 className="text-[17px] font-bold text-gray-900 mb-6">{c.subtitle}</h4>
                  </Reveal>
                  <Reveal>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-10 max-w-2xl">{c.description}</p>
                  </Reveal>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-10 items-start">
                    {c.items.map((t, i) => (
                      <Reveal key={t.slug} delay={i * 0.03}>
                        <Link href={`/technologies/${c.id}/${t.slug}`} className="flex flex-col items-center gap-3 group">
                          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-primary/5 transition-all duration-300 border border-transparent group-hover:border-primary/10 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                            <div className="relative w-full h-full flex items-center justify-center p-2.5">
                              {/* eslint-disable-next-line @next/next/no-img-element -- external SVG logo from icon CDN */}
                              <img src={t.icon} alt={t.name} className="w-full h-full object-contain transition-all duration-300" loading="lazy" />
                            </div>
                          </div>
                          <span className="text-[11px] text-gray-500 font-bold text-center leading-tight group-hover:text-primary transition-colors uppercase tracking-wider">{t.name}</span>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

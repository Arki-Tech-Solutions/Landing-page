"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = { title: string; highlight: string; highlightFirst?: boolean; description?: string; items: { q: string; a: string }[]; bg?: string };

/** Accordion FAQ; first item open by default, plus icon rotates into an x. */
export function Faq({ title, highlight, highlightFirst = true, description, items, bg = "bg-white" }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Reveal>
      <section className={`${bg} py-16 sm:py-20`}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title={title} highlight={highlight} highlightFirst={highlightFirst} description={description} center />
            <div className="mt-10 space-y-3">
              {items.map((it, i) => {
                const isOpen = open === i;
                return (
                  <div key={it.q} className={`rounded-xl border transition-colors duration-200 ${isOpen ? "border-primary/30 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}>
                    <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex items-center justify-between w-full px-6 py-5 text-left">
                      <span className={`text-base font-semibold pr-4 leading-snug ${isOpen ? "text-primary" : "text-indigo-950"}`}>{it.q}</span>
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-primary border-primary text-white" : "border-gray-300 text-gray-400"}`}>
                        <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] pb-5" : "max-h-0"}`}>
                      <p className="px-6 text-[15px] text-gray-500 leading-relaxed">{it.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}

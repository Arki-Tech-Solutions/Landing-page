"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/case-studies";
import { CaseCover } from "./CaseCover";
import { SliderArrows, SliderDots } from "./SliderControls";

type Props = {
  title?: string;
  highlight?: string;
  description?: string;
};

/** "Case study: Our portfolio of success" — stacked desktop carousel + mobile snap list. */
export function CaseStudyCarousel({
  title = "Case study:",
  highlight = "Our portfolio of success",
  description = "See how careful engineering turns client ideas into dependable products, from first workshop to production.",
}: Props) {
  const n = caseStudies.length;
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + n) % n);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <Container>
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-indigo-950 mb-6 font-heading">
              {title} <span className="text-primary font-bold">{highlight}</span>
            </h2>
            <p className="text-[17px] text-gray-500 max-w-3xl leading-relaxed mx-auto">{description}</p>
          </div>
        </Reveal>

        {/* Mobile / tablet */}
        <Reveal className="lg:hidden mt-10 w-full pb-4">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-6 -mx-6 pb-8 scrollbar-decorative items-stretch">
            {caseStudies.map((cs) => (
              <div key={cs.slug} className="w-[85vw] sm:w-[400px] shrink-0 snap-center bg-white rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col relative">
                <div className="relative aspect-[4/3] sm:aspect-video w-full bg-slate-50/50 p-6 flex flex-col items-center justify-center border-b border-slate-100">
                  <div className="relative w-full h-full">
                    <CaseCover cs={cs} className="scale-75" />
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase bg-primary-soft px-3 py-1 rounded-full self-start mb-4 border border-primary/10">{cs.tags}</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 leading-tight mb-3 font-heading">{cs.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-medium mb-8 flex-1">{cs.summary}</p>
                  <div className="mt-auto border-t border-gray-50 pt-5">
                    <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-[14px] hover:gap-3 transition-all">
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Desktop stacked carousel */}
        <Reveal className="hidden lg:block relative">
          <div className="relative h-[580px] w-full flex items-center justify-center pt-8">
            <div className="relative w-full h-full lg:-left-15 xl:-left-5 2xl:left-0">
              {caseStudies.map((cs, i) => {
                let off = i - active;
                if (off > n / 2) off -= n;
                if (off < -n / 2) off += n;
                const visible = Math.abs(off) <= 1;
                const isActive = off === 0;
                return (
                  <div
                    key={cs.slug}
                    onClick={() => !isActive && setActive(i)}
                    className="absolute left-1/2 top-0 w-[900px] xl:w-[1000px] 2xl:w-[1100px] bg-white rounded-[32px] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden cursor-pointer h-full transition-all duration-700 ease-out"
                    style={{
                      zIndex: isActive ? 10 : 5 - Math.abs(off),
                      opacity: visible ? (isActive ? 1 : 0.55) : 0,
                      pointerEvents: visible ? "auto" : "none",
                      transform: `translateX(calc(${off * 12}% - 50%)) scale(${isActive ? 1 : 0.9})`,
                      filter: isActive ? "none" : "grayscale(0.6)",
                    }}
                  >
                    <div className="flex flex-col md:grid md:grid-cols-[1fr_1.3fr] h-full items-stretch">
                      <div className="order-1 md:order-2 relative md:h-full bg-slate-50/50 overflow-hidden group shrink-0 flex items-center p-4">
                        <CaseCover cs={cs} className="group-hover:scale-[1.03] transition-transform duration-700" />
                      </div>
                      <div className={`order-2 md:order-1 p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`}>
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-4">
                            <span className="text-primary font-bold text-xs tracking-widest uppercase bg-primary-soft px-3 py-1 rounded-full">{cs.tags}</span>
                          </div>
                          <h3 className="text-4xl font-extrabold text-indigo-950 leading-tight tracking-tight font-heading">{cs.title}</h3>
                          <p className="text-[17px] text-gray-500 leading-relaxed font-medium">{cs.summary}</p>
                          <div className="space-y-4 mt-2">
                            <div className="flex items-start gap-4">
                              <div className="w-1.5 h-10 bg-primary/20 rounded-full shrink-0 mt-0.5" />
                              <p className="text-[15px] font-semibold text-gray-700">
                                <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px] block mb-1">Core Technology</span>
                                {cs.tech}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-[17px] hover:gap-4 transition-all group mt-6" tabIndex={isActive ? 0 : -1}>
                          View details <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal className="hidden lg:block mt-16 px-4 max-w-[1240px] mx-auto">
          <div className="flex items-center gap-12 justify-between w-full">
            <SliderDots count={n} active={active} onSelect={setActive} />
            <SliderArrows onPrev={() => go(-1)} onNext={() => go(1)} label="case study" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

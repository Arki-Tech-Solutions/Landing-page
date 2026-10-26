"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { SliderArrows, SliderDots } from "./SliderControls";

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg width="48" height="36" viewBox="0 0 48 36" className={`text-white fill-current ${className}`} aria-hidden>
      <path d="M0 36V22.2C0 9.6 6.6 2.2 19.8 0l1.8 4.2C14.4 6 10.8 10 10.2 16.2H19.8V36H0zm27.6 0V22.2C27.6 9.6 34.2 2.2 47.4 0l.6 4.2c-7.2 1.8-10.8 5.8-11.4 12H46.2V36H27.6z" />
    </svg>
  );
}

function Card({ t, large }: { t: Testimonial; large?: boolean }) {
  return (
    <div className={`bg-primary ${large ? "rounded-[32px]" : "rounded-[28px] sm:rounded-[32px] p-6 sm:p-8"} border border-white/20 overflow-hidden h-full flex flex-col shadow-2xl shadow-primary/30 relative`}>
      <div className={`absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 ${large ? "w-[400px] h-[400px] blur-[80px]" : "w-[300px] h-[300px] blur-[60px]"} bg-white/20 rounded-full pointer-events-none`} />
      {large ? <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full pointer-events-none" /> : null}
      <div className={`${large ? "w-full h-full p-8 md:p-10 lg:p-12" : ""} flex-1 flex flex-col relative z-10`}>
        <div className="flex-1">
          <div className="mb-6 opacity-40">
            <QuoteMark />
          </div>
          <p className={`text-white ${large ? "text-[16px] md:text-lg lg:text-[19px]" : "text-[16px] sm:text-lg"} leading-relaxed mb-8 font-medium italic`}>&quot;{t.quote}&quot;</p>
        </div>
        <div className={`${large ? "mt-4 pt-6" : "mt-auto pt-5 sm:pt-6"} border-t border-white/20`}>
          <h4 className={`${large ? "text-lg md:text-xl" : "text-lg"} font-bold text-white mb-1`}>{t.name}</h4>
          <p className={`text-white/70 font-medium ${large ? "text-xs md:text-sm" : "text-sm"}`}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}

type Props = { title: string; highlight: string; description: string; items?: Testimonial[]; showLinks?: boolean };

/** "Valued feedback from our clients": 80%-wide slides on desktop, snap list on mobile. */
export function TestimonialCarousel({ title, highlight, description, items = testimonials, showLinks = true }: Props) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + n) % n);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading title={title} highlight={highlight} description={description} />
        </Reveal>

        <Reveal className="lg:hidden mt-10">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 px-6 -mx-6 scrollbar-decorative">
            {items.map((t, i) => (
              <div key={i} className="w-[85vw] sm:w-[80vw] shrink-0 snap-center">
                <Card t={t} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hidden lg:block relative">
          <div className="mt-12 max-w-[1240px] mx-auto overflow-hidden relative">
            <div className="flex gap-6 items-stretch py-4 transition-transform duration-700 ease-out" style={{ transform: `translateX(calc(10% - ${active} * (80% + 1.5rem)))` }}>
              {items.map((t, i) => (
                <div key={i} className={`w-[80%] shrink-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-50"}`} style={{ minWidth: "80%" }}>
                  <Card t={t} large />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 lg:mt-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-20 max-w-[1240px] mx-auto px-4">
          {showLinks ? (
            <div className="hidden md:flex items-center gap-10">
              <ArrowLink href="/all-testimonials">View all testimonials</ArrowLink>
              <div className="h-4 w-px bg-gray-200" />
              <ArrowLink href="/all-clients">View all clients</ArrowLink>
            </div>
          ) : (
            <div />
          )}
          <div className="hidden lg:flex items-center gap-6 sm:gap-12 w-full md:w-auto justify-between md:justify-end md:gap-12">
            <SliderDots count={n} active={active} onSelect={setActive} />
            <SliderArrows onPrev={() => go(-1)} onNext={() => go(1)} label="testimonial" />
          </div>
          {showLinks ? (
            <div className="flex md:hidden items-center gap-6">
              <Link href="/all-testimonials" className="text-sm font-bold text-primary">View all testimonials</Link>
              <Link href="/all-clients" className="text-sm font-bold text-primary">View all clients</Link>
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

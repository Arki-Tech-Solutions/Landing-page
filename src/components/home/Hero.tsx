import Link from "next/link";
import { GridBeams } from "@/components/ui/GridBeams";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/home";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <GridBeams cell={70} variant="light" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white pointer-events-none" />
      <div className="h-32 sm:h-40 shrink-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-10">
        <Reveal>
          <p className="text-[14px] font-medium tracking-[0.3em] text-gray-500 uppercase">{hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <h1 className="font-heading text-[clamp(1.75rem,8vw,4rem)] font-bold leading-[1.1] text-indigo-950 tracking-tight">
            <span className="text-primary">{hero.titleA}</span> {hero.titleJoin} <span className="text-primary">{hero.titleB}</span>
            <br className="hidden lg:block" />{" "}
            <span className="font-heading text-[clamp(1.5rem,8vw,3.5rem)] font-bold leading-[1.1] text-indigo-950 tracking-tight">{hero.titleLine2}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-medium text-base sm:text-[17px] max-w-4xl text-gray-500 leading-relaxed px-4">{hero.description}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href={hero.cta.href}
            className="mt-6 sm:mt-10 inline-flex items-center px-10 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-base hover:bg-primary hover:text-white transition-colors bg-white shadow-sm hover:scale-105 active:scale-95 duration-300"
          >
            {hero.cta.label}
          </Link>
        </Reveal>
      </div>
      <div className="relative z-10 w-full pb-12 sm:pb-20 pt-10 overflow-hidden">
        <Reveal>
          <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">{hero.marqueeLabel}</p>
          </div>
        </Reveal>
        <TechMarquee />
      </div>
    </section>
  );
}

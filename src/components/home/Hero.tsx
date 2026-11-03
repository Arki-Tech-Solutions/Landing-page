import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import { ApertureRings } from "@/components/ui/ApertureRings";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/home";
import { HeroCode } from "./HeroCode";
import { HeroOrbit } from "./HeroOrbit";
import { HeroRoadmap } from "./HeroRoadmap";
import { TechMarquee } from "./TechMarquee";

/**
 * Right-side artwork candidates; pick one by name below. "none" gives a single centred
 * column of text, which is what the hero uses now.
 */
const visuals: Record<string, ComponentType | null> = { orbit: HeroOrbit, roadmap: HeroRoadmap, code: HeroCode, none: null };
const HeroVisual = visuals.none;

/** Hero background candidates while we compare them; pick one by name below. */
const backgrounds = { aperture: ApertureRings, contours: ContourLines };
const HeroBackground = backgrounds.contours;

/** The moving "Technologies We Build With" logo strip under the hero. Hidden for now: the orbit already shows the stack. */
const SHOW_TECH_STRIP = false;

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      <div className="h-28 sm:h-32 shrink-0" />
      <div
        className={`relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 grid items-center gap-14 ${HeroVisual ? "lg:grid-cols-[1.05fr_1fr] lg:gap-10" : ""}`}
      >
        {/* The message: left column with artwork, or a single centred column without. */}
        <div
          className={`flex flex-col items-center gap-7 text-center ${HeroVisual ? "lg:items-start lg:text-left" : "gap-8"}`}
        >
          <Reveal>
            <Link
              href={hero.badge.href}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white/80 py-1 pl-1 pr-4 text-[13px] font-semibold text-body shadow-[0_1px_2px_rgba(15,36,25,0.04)] backdrop-blur transition-colors hover:border-primary/40 hover:text-ink"
            >
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                {hero.badge.tag}
              </span>
              {hero.badge.label}
              <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className={`font-heading font-extrabold ${HeroVisual ? "text-[clamp(2rem,4.2vw,3.6rem)]" : "text-[clamp(2rem,3.7vw,3.75rem)]"} leading-[1.1] text-ink tracking-[-0.035em] text-balance`}
            >
              <span className="block">
                <span className="text-primary">{hero.titleA}</span> {hero.titleJoin}{" "}
                <span className="text-primary">{hero.titleB}</span>
              </span>{" "}
              <span className="mt-3 block text-[0.82em] text-ink">{hero.titleLine2}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`font-medium text-base sm:text-lg text-muted leading-relaxed ${HeroVisual ? "max-w-xl" : "max-w-2xl"}`}>
              {hero.description}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className={`mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 ${HeroVisual ? "lg:justify-start" : ""}`}>
              <Link
                href={hero.cta.href}
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-white font-bold text-base hover:bg-primary-dark transition-colors shadow-[0_12px_30px_-10px_rgba(19,122,78,0.6)]"
              >
                {hero.cta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 font-bold text-base text-ink hover:text-primary transition-colors"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right: the artwork, when one is picked. */}
        {HeroVisual ? (
          <Reveal delay={0.2} from="none" className="flex justify-center px-2 sm:px-10 lg:px-0 lg:justify-end">
            <HeroVisual />
          </Reveal>
        ) : null}
      </div>
      {SHOW_TECH_STRIP ? (
        <div className="relative z-10 w-full pb-12 sm:pb-16 pt-14 overflow-hidden">
          <Reveal>
            <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">{hero.marqueeLabel}</p>
            </div>
          </Reveal>
          <TechMarquee />
        </div>
      ) : (
        <div className="h-16 sm:h-20 shrink-0" />
      )}
    </section>
  );
}

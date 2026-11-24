import { ArrowRight } from "lucide-react";
import { CompanyIcon } from "@/components/company/CompanyIcon";
import { Reveal } from "@/components/ui/Reveal";
import { howWeWork as p } from "@/content/company-story";
import { Band, eyebrowCls, Heading, HeroCard, PageHero } from "./kit";

/**
 * /process: hero with the first two weeks (light) → five steps with what you get (dark)
 * → a normal week (light) → quality checks (dark, lines). FAQ and contact follow.
 */

export function ProcessHero() {
  const h = p.hero;
  return (
    <PageHero
      crumb={p.crumb}
      eyebrow={h.eyebrow}
      title={h.title}
      highlight={h.highlight}
      text={h.text}
      primary={h.primary}
      secondary={h.secondary}
      aside={
        <HeroCard title={h.cardTitle}>
          <ol className="grid gap-5">
            {p.steps.items.slice(0, 3).map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft font-mono text-sm font-bold text-primary">{i + 1}</span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.15em] text-primary">{s.when}</span>
                  <span className="mt-0.5 block font-semibold text-ink">{s.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{s.gets}</span>
                </span>
              </li>
            ))}
          </ol>
        </HeroCard>
      }
    />
  );
}

/** The five steps as rows: when, what happens, and what you get at the end of it. */
export function ProcessSteps() {
  const s = p.steps;
  return (
    <Band dark>
      <Reveal>
        <Heading dark eyebrow={s.eyebrow} title={s.title} highlight={s.highlight} text={s.text} />
      </Reveal>
      <ol className="mt-14 border-t border-white/15">
        {s.items.map((it, i) => (
          <li key={it.title} className="border-b border-white/15">
            <Reveal delay={0.05 * i} className="grid gap-5 py-8 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr_300px] lg:items-center lg:gap-10">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary-light text-primary-light">
                  <CompanyIcon name={it.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-xs font-bold text-white/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="block font-heading text-lg font-bold text-primary-light">{it.when}</span>
                </span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-[-0.02em] text-white">{it.title}</h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/60">{it.text}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 md:col-start-2 lg:col-start-auto">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">{s.youGet}</p>
                <p className="mt-1 font-semibold leading-snug text-white">{it.gets}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Band>
  );
}

/** A normal week: four beats, left to right. */
export function ProcessWeek() {
  const w = p.week;
  return (
    <Band lines>
      <Reveal>
        <Heading eyebrow={w.eyebrow} title={w.title} highlight={w.highlight} text={w.text} />
      </Reveal>
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {w.items.map((it, i) => (
          <li key={it.title} className="relative">
            <Reveal delay={0.06 * i} className="h-full rounded-2xl border border-border bg-white/90 p-7 backdrop-blur">
              <p className={`${eyebrowCls} text-primary`}>{it.day}</p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-ink">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{it.text}</p>
            </Reveal>
            {i < w.items.length - 1 ? (
              <span aria-hidden className="absolute -right-[18px] top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary lg:flex">
                <ArrowRight className="h-4 w-4" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </Band>
  );
}

/** Quality checks that run on every project. */
export function ProcessQuality() {
  const q = p.quality;
  return (
    <Band dark lines>
      <Reveal>
        <Heading dark eyebrow={q.eyebrow} title={q.title} highlight={q.highlight} text={q.text} />
      </Reveal>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {q.items.map((it, i) => (
          <li key={it.title}>
            <Reveal delay={0.05 * i} className="h-full rounded-2xl border border-white/10 bg-navy/60 p-7 backdrop-blur">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                <CompanyIcon name={it.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">{it.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Band>
  );
}

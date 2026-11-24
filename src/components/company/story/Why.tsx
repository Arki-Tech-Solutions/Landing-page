import { Check, Minus } from "lucide-react";
import { CompanyIcon } from "@/components/company/CompanyIcon";
import { Reveal } from "@/components/ui/Reveal";
import { why as w } from "@/content/company-story";
import { clientList } from "@/content/portfolio";
import { Band, Heading, HeroCard, PageHero, ProjectLinks } from "./kit";

/**
 * /why-arki: hero with the organisations we've worked with (light) → six reasons, each
 * with proof (dark) → honest fit (light) → commitments (dark, lines). Contact follows.
 */

export function WhyHero() {
  const h = w.hero;
  return (
    <PageHero
      crumb={w.crumb}
      eyebrow={h.eyebrow}
      title={h.title}
      highlight={h.highlight}
      text={h.text}
      primary={h.primary}
      secondary={h.secondary}
      aside={
        <HeroCard title="Organisations we've worked with">
          <ul className="grid gap-3.5">
            {clientList.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="font-semibold leading-snug text-ink">{c}</span>
              </li>
            ))}
          </ul>
        </HeroCard>
      }
    />
  );
}

export function WhyReasons() {
  const r = w.reasons;
  return (
    <Band dark>
      <Reveal>
        <Heading dark eyebrow={r.eyebrow} title={r.title} highlight={r.highlight} text={r.text} />
      </Reveal>
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {r.items.map((it, i) => (
          <li key={it.title}>
            <Reveal delay={0.05 * i} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <span className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                  <CompanyIcon name={it.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm font-bold text-white/30">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="mt-6 font-heading text-xl font-bold leading-snug text-white">{it.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/60">{it.text}</p>
              {it.proof.length ? (
                <div className="mt-6 border-t border-white/10 pt-4">
                  <ProjectLinks dark label={r.proofLabel} slugs={it.proof} />
                </div>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ul>
    </Band>
  );
}

export function WhyFit() {
  const f = w.fit;
  return (
    <Band lines>
      <Reveal>
        <Heading eyebrow={f.eyebrow} title={f.title} highlight={f.highlight} text={f.text} />
      </Reveal>
      <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="h-full rounded-3xl border border-primary/25 bg-primary-soft p-8 sm:p-10">
          <h3 className="font-heading text-xl font-bold text-ink">{f.goodTitle}</h3>
          <ul className="mt-6 grid gap-4">
            {f.good.map((g) => (
              <li key={g} className="flex items-start gap-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="pt-0.5 font-semibold leading-snug text-ink">{g}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="h-full rounded-3xl border border-border bg-white/90 p-8 backdrop-blur sm:p-10">
          <h3 className="font-heading text-xl font-bold text-ink">{f.notTitle}</h3>
          <ul className="mt-6 grid gap-4">
            {f.not.map((n) => (
              <li key={n} className="flex items-start gap-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted">
                  <Minus className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="pt-0.5 font-medium leading-snug text-muted">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Band>
  );
}

export function WhyPromises() {
  const p = w.promises;
  return (
    <Band dark lines>
      <Reveal>
        <Heading dark eyebrow={p.eyebrow} title={p.title} highlight={p.highlight} />
      </Reveal>
      <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {p.items.map((it, i) => (
          <li key={it.title}>
            <Reveal delay={0.05 * i} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-light/40 text-primary-light">
                <CompanyIcon name={it.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-heading text-lg font-bold text-white">{it.title}</span>
                <span className="mt-1.5 block text-[15px] leading-relaxed text-white/60">{it.text}</span>
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </Band>
  );
}

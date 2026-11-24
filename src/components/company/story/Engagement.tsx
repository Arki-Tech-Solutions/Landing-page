import { ArrowRight, Check } from "lucide-react";
import { CompanyIcon } from "@/components/company/CompanyIcon";
import { Reveal } from "@/components/ui/Reveal";
import { ways as e } from "@/content/company-story";
import { Band, Heading, HeroCard, PageHero } from "./kit";

/**
 * /engagement-model: hero with the three options (light) → the three models in detail (dark)
 * → quick guide by situation (light) → what never changes (dark, lines). FAQ and contact follow.
 */

export function WaysHero() {
  const h = e.hero;
  return (
    <PageHero
      crumb={e.crumb}
      eyebrow={h.eyebrow}
      title={h.title}
      highlight={h.highlight}
      text={h.text}
      primary={h.primary}
      secondary={h.secondary}
      aside={
        <HeroCard title="The three options">
          <ul className="grid gap-4">
            {e.models.items.map((m) => (
              <li key={m.name}>
                <a href="#models" className="group flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <CompanyIcon name={m.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink transition-colors group-hover:text-primary">{m.name}</span>
                    <span className="block text-sm text-muted">{m.tagline}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-primary-soft p-5">
            <p className="font-semibold text-ink">{h.noteTitle}</p>
            <p className="mt-1 text-sm leading-relaxed text-body">{h.note}</p>
          </div>
        </HeroCard>
      }
    />
  );
}

export function WaysModels() {
  const m = e.models;
  return (
    <Band dark id="models">
      <Reveal>
        <Heading dark eyebrow={m.eyebrow} title={m.title} highlight={m.highlight} text={m.text} />
      </Reveal>
      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {m.items.map((it, i) => (
          <li key={it.name}>
            <Reveal delay={0.08 * i} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <CompanyIcon name={it.icon} className="h-6 w-6" />
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-primary-light">{it.tagline}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-[-0.02em] text-white">{it.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">{it.text}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-white/10 py-5">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">{m.priceLabel}</dt>
                  <dd className="mt-1 font-semibold leading-snug text-white">{it.price}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">{m.startLabel}</dt>
                  <dd className="mt-1 font-semibold leading-snug text-white">{it.start}</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm font-bold text-white">Best for</p>
              <ul className="mt-3 grid gap-2.5">
                {it.bestFor.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </Band>
  );
}

/** "Which one fits you?": your situation on the left, the model on the right. */
export function WaysPick() {
  const p = e.pick;
  return (
    <Band lines>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <Heading eyebrow={p.eyebrow} title={p.title} highlight={p.highlight} text={p.text} />
        </Reveal>
        <ul className="grid gap-3">
          {p.items.map((it, i) => (
            <li key={it.situation}>
              <Reveal
                delay={0.06 * i}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-white/90 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
              >
                <span className="font-semibold leading-snug text-ink">{it.situation}</span>
                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary-soft px-4 py-2 text-sm font-bold text-primary sm:self-auto">
                  <ArrowRight className="h-4 w-4" />
                  {it.answer}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}

export function WaysSame() {
  const s = e.same;
  return (
    <Band dark lines>
      <Reveal>
        <Heading dark eyebrow={s.eyebrow} title={s.title} highlight={s.highlight} />
      </Reveal>
      <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((it, i) => (
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

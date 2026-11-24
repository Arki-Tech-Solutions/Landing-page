import { CompanyIcon } from "@/components/company/CompanyIcon";
import { Reveal } from "@/components/ui/Reveal";
import { about as a } from "@/content/company-story";
import { clientList, projects } from "@/content/portfolio";
import { Band, eyebrowCls, Heading, HeroCard, PageHero, ProjectLinks } from "./kit";

/**
 * /ourstories: hero (light) → the name (dark) → our story with numbers (light)
 * → journey (dark, lines) → beliefs, mission and vision (light). The team (dark) and
 * the contact card follow on the page.
 */

export function AboutHero() {
  const h = a.hero;
  return (
    <PageHero
      crumb={a.crumb}
      eyebrow={h.eyebrow}
      title={h.title}
      highlight={h.highlight}
      text={h.text}
      primary={h.primary}
      secondary={h.secondary}
      aside={
        <HeroCard title={h.factsTitle}>
          <dl className="divide-y divide-border">
            {h.facts.map((f) => (
              <div key={f.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-muted">{f.label}</dt>
                <dd className="font-semibold leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </HeroCard>
      }
    />
  );
}

/** The two meanings of "Arki", set large, then the line that ties them to how we work. */
export function AboutName() {
  const n = a.name;
  return (
    <Band dark>
      <Reveal>
        <p className={`${eyebrowCls} text-primary-light`}>{n.eyebrow}</p>
      </Reveal>
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-0">
        {n.meanings.map((m, i) => (
          <Reveal key={m.language} delay={0.08 * i} className={i === 1 ? "md:border-l md:border-white/15 md:pl-12" : "md:pr-12"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">{m.language}</p>
            <p className="mt-3 font-heading text-5xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
              {m.word} <span className="text-white/35">=</span> <span className="text-primary-light">{m.meaning}</span>
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-14 max-w-3xl border-t border-white/15 pt-8 font-heading text-2xl font-bold leading-snug tracking-[-0.02em] text-white sm:text-3xl">
          {n.line}
        </p>
      </Reveal>
    </Band>
  );
}

/** Numbers worked out from the portfolio, so they stay true as projects are added. */
function numbers() {
  const own = projects.filter((p) => p.kind === "product" || p.kind === "open-source").length;
  const sectors = new Set(projects.map((p) => p.sector)).size;
  return [
    { value: projects.length, label: "Projects built or in build" },
    { value: clientList.length, label: "Organisations we've worked with" },
    { value: own, label: "Products of our own" },
    { value: sectors, label: "Sectors" },
  ];
}

export function AboutStory() {
  const s = a.story;
  return (
    <Band lines>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <Reveal>
          <Heading eyebrow={s.eyebrow} title={s.title} highlight={s.highlight} />
          <dl className="mt-12 grid grid-cols-2 gap-4">
            {numbers().map((n) => (
              <div key={n.label} className="rounded-2xl border border-border bg-white/90 p-5 backdrop-blur">
                <dt className="sr-only">{n.label}</dt>
                <dd>
                  <span className="block font-heading text-4xl font-extrabold tracking-[-0.03em] text-primary">{n.value}</span>
                  <span className="mt-1 block text-sm font-semibold leading-snug text-muted">{n.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-body lg:pt-10">
          {s.paragraphs.map((p, i) => (
            <p key={i} className={i === s.paragraphs.length - 1 ? "font-semibold text-ink" : undefined}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </Band>
  );
}

/** Real milestones on a timeline, each linking to the projects behind it. */
export function AboutJourney() {
  const j = a.journey;
  return (
    <Band dark lines>
      <Reveal>
        <Heading dark eyebrow={j.eyebrow} title={j.title} highlight={j.highlight} text={j.text} />
      </Reveal>
      <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
        <span aria-hidden className="absolute bottom-6 left-[7px] top-2 w-px bg-white/15 lg:hidden" />
        <span aria-hidden className="absolute left-2 right-2 top-[7px] hidden h-px bg-white/15 lg:block" />
        {j.steps.map((st, i) => (
          <li key={st.title} className="relative pl-9 lg:pl-0">
            <Reveal delay={0.08 * i}>
              <span aria-hidden className="absolute left-0 top-0.5 h-4 w-4 rounded-full border-2 border-primary-light bg-navy lg:static lg:block" />
              <p className="font-mono text-sm font-bold text-primary-light lg:mt-6">{st.years}</p>
              <h3 className="mt-2 font-heading text-xl font-bold text-white">{st.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">{st.text}</p>
              <div className="mt-4">
                <ProjectLinks dark slugs={st.slugs} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Band>
  );
}

/** Three beliefs, then mission and vision side by side. */
export function AboutBeliefs() {
  const b = a.beliefs;
  return (
    <Band>
      <Reveal>
        <Heading eyebrow={b.eyebrow} title={b.title} highlight={b.highlight} text={b.text} />
      </Reveal>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {b.items.map((it, i) => (
          <li key={it.title}>
            <Reveal delay={0.08 * i} className="h-full border-t-2 border-primary pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <CompanyIcon name={it.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-ink">{it.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{it.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {[b.mission, b.vision].map((m, i) => (
          <Reveal key={m.label} delay={0.08 * i} className={`h-full rounded-3xl p-8 sm:p-10 ${i === 0 ? "bg-primary text-white" : "bg-primary-soft text-ink"}`}>
            <p className={`${eyebrowCls} ${i === 0 ? "text-white/70" : "text-primary"}`}>{m.label}</p>
            <p className="mt-4 font-heading text-2xl font-bold leading-snug tracking-[-0.02em]">{m.text}</p>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}

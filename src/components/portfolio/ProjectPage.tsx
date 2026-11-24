import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HomeContact } from "@/components/home/HomeContact";
import { Breadcrumb } from "@/components/industries/Breadcrumb";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { kindLabels, portfolioCopy as c, projects, type Project } from "@/content/portfolio";
import { projectHref } from "./ProjectCard";
import { BrowserShot, ProjectVisual, StatusBadge } from "./ProjectVisual";

/**
 * /portfolio/<project>: hero with facts card (light, lines) → screenshots or cover (light)
 * → the problem and what we built (dark, lines) → stack and live links (light) → next project → contact card.
 */

const wrap = "relative mx-auto max-w-[1400px] px-6 lg:px-8";
const eyebrowCls = "text-[13px] font-semibold uppercase tracking-[0.25em]";
const primaryBtn =
  "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark";
const textBtn = "group inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-primary";

function facts(p: Project) {
  return [
    { label: "Type", value: kindLabels[p.kind] },
    ...(p.client ? [{ label: "Client", value: p.client }] : []),
    { label: "Sector", value: p.sector },
    { label: "Period", value: p.period },
    ...(p.facts ?? []),
  ];
}

function Hero({ p }: { p: Project }) {
  const live = p.links?.[0];
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <ContourLines />
      <div className={`${wrap} pb-16 pt-8 sm:pb-20`}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: c.crumb, href: "/portfolio" }, { label: p.name }]} />
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Link href="/portfolio" className={`${eyebrowCls} group inline-flex items-center gap-2 text-primary`}>
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {c.allWork}
            </Link>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[60px]">
              {p.name}
            </h1>
            <div className="mt-5">
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              {live ? (
                <>
                  <a href={live.href} target="_blank" rel="noreferrer" className={primaryBtn}>
                    {c.liveEyebrow}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <Link href={c.cta.href} className={textBtn}>
                    {c.similar}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </>
              ) : (
                <Link href={c.cta.href} className={primaryBtn}>
                  {c.similar}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="relative overflow-hidden rounded-3xl bg-navy p-7 shadow-[0_30px_60px_-30px_rgba(11,18,33,0.6)] sm:p-8">
              <ContourLines dark />
              <div className="relative divide-y divide-white/10">
                {facts(p).map((f) => (
                  <div key={f.label} className="grid grid-cols-[96px_1fr] gap-4 py-3.5 first:pt-0 last:pb-0">
                    <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-light">{f.label}</dt>
                    <dd className="font-semibold leading-snug text-white">{f.value}</dd>
                  </div>
                ))}
                {p.partner ? (
                  <div className="grid grid-cols-[96px_1fr] gap-4 py-3.5 last:pb-0">
                    <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-light">Partner</dt>
                    <dd className="font-semibold leading-snug text-white">
                      {p.partner.href ? (
                        <a href={p.partner.href} target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-4 hover:decoration-primary-light">
                          {p.partner.name}
                        </a>
                      ) : (
                        p.partner.name
                      )}
                    </dd>
                  </div>
                ) : null}
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Visuals({ p }: { p: Project }) {
  const gallery = p.gallery ?? [];
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className={wrap}>
        {gallery.length > 2 ? (
          // Many screens: the first one large, the rest two per row.
          <div className="space-y-12">
            <Reveal className="mx-auto max-w-5xl">
              <figure>
                <BrowserShot src={gallery[0].src} alt={gallery[0].caption} sizes="(min-width: 1024px) 1024px, 100vw" priority />
                <figcaption className="mt-4 text-sm font-medium text-muted">{gallery[0].caption}</figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
              {gallery.slice(1).map((g, i) => (
                <Reveal key={g.src} delay={0.08 * (i % 2)}>
                  <figure>
                    <BrowserShot src={g.src} alt={g.caption} sizes="(min-width: 1024px) 660px, 100vw" />
                    <figcaption className="mt-4 text-sm font-medium text-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        ) : gallery.length > 1 ? (
          <div className="grid gap-8 lg:grid-cols-2">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={0.08 * i}>
                <figure>
                  <BrowserShot src={g.src} alt={g.caption} url={p.links?.[i]?.href} sizes="(min-width: 1024px) 660px, 100vw" priority={i === 0} />
                  <figcaption className="mt-4 text-sm font-medium text-muted">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto max-w-5xl">
            <ProjectVisual project={p} sizes="(min-width: 1024px) 1024px, 100vw" priority />
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Walkthrough video (Tumsa). Nothing downloads until the visitor presses play. */
function Video({ p }: { p: Project }) {
  if (!p.video) return null;
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <div className={wrap}>
        <Reveal className="max-w-2xl">
          <p className={`${eyebrowCls} text-primary`}>{c.videoEyebrow}</p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            {c.videoTitle} <span className="text-primary">{c.videoHighlight}</span>
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-muted">{p.video.caption}</p>
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-5xl">
          <video
            controls
            playsInline
            preload="none"
            poster={p.video.poster}
            className="aspect-video w-full rounded-2xl bg-navy shadow-[0_30px_60px_-30px_rgba(11,18,33,0.6)]"
          >
            <source src={p.video.src} type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemAndBuild({ p }: { p: Project }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <ContourLines dark />
      <div className={`${wrap} grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20`}>
        <Reveal>
          <p className={`${eyebrowCls} text-primary-light`}>{c.problemEyebrow}</p>
          <p className="mt-6 font-heading text-2xl font-bold leading-snug tracking-[-0.015em] text-white sm:text-3xl">{p.challenge}</p>
        </Reveal>
        <div>
          <Reveal>
            <p className={`${eyebrowCls} text-primary-light`}>{c.builtEyebrow}</p>
          </Reveal>
          <ol className="mt-6">
            {p.features.map((f, i) => (
              <li key={f}>
                <Reveal delay={0.06 * i} className="grid grid-cols-[56px_1fr] gap-4 border-t border-white/15 py-6">
                  <span className="font-mono text-sm font-bold text-primary-light">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-semibold leading-snug text-white">{f}</span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StackAndLinks({ p }: { p: Project }) {
  const hasStack = !!p.stack?.length;
  const hasLinks = !!p.links?.length;
  if (!hasStack && !hasLinks) return null;
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className={`${wrap} grid gap-12 md:grid-cols-2`}>
        {hasStack ? (
          <Reveal>
            <h2 className="border-b border-border pb-3 font-heading text-lg font-bold text-ink">{c.stackEyebrow}</h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {p.stack!.map((t) => (
                <li key={t} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-body">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
        {hasLinks ? (
          <Reveal delay={0.08}>
            <h2 className="border-b border-border pb-3 font-heading text-lg font-bold text-ink">{c.liveEyebrow}</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {p.links!.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-4 py-2 text-sm font-bold text-primary-dark transition-colors hover:border-primary"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function NextProject({ p }: { p: Project }) {
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];
  return (
    <section className="border-t border-border bg-white py-16">
      <div className={wrap}>
        <Link
          href={projectHref(next)}
          className="group flex flex-col gap-6 rounded-3xl border border-border p-7 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <span>
            <span className={`${eyebrowCls} block text-[12px] text-primary`}>{c.next}</span>
            <span className="mt-3 block font-heading text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-3xl">{next.name}</span>
            <span className="mt-2 block max-w-2xl leading-relaxed text-muted">{next.summary}</span>
          </span>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <Hero p={project} />
      <Visuals p={project} />
      <ProblemAndBuild p={project} />
      <Video p={project} />
      <StackAndLinks p={project} />
      <NextProject p={project} />
      <HomeContact />
    </>
  );
}

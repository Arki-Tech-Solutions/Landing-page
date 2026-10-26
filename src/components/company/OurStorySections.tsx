import Link from "next/link";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile, SpotlightCard } from "@/components/ui/SpotlightCard";
import { ourStory } from "@/content/company";
import { CompanyIcon } from "./CompanyIcon";
import { CountStat } from "./CountStat";
import { Crumbs } from "./Crumbs";
import { MarkTilt } from "./MarkTilt";
import { Slide } from "./Slide";

const btnFocus = "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:outline-none";

export function StoryHero() {
  const h = ourStory.hero;
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-surface flex flex-col">
      <div className="absolute top-16 left-0 w-full z-30">
        <Crumbs label={ourStory.breadcrumb} />
      </div>
      <div className="absolute right-[-10%] top-[10%] w-[800px] h-[800px] pointer-events-none opacity-80 mix-blend-multiply z-0">
        <div
          className="w-full h-full"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--color-border) 90%, transparent) 0%, transparent 70%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "rotate(-5deg)",
          }}
        />
      </div>
      <div className="flex-1 flex items-center relative z-10 w-full pt-16 lg:pt-0">
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <Reveal>
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary-soft text-primary rounded-full">{h.eyebrow}</div>
            </Reveal>
            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-950 mb-6 leading-[1.1] tracking-tight">{h.title}</h1>
            </Reveal>
            <Reveal>
              <p className="text-body text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-10">{h.description}</p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={h.primary.href} className={`inline-flex items-center px-10 py-3.5 rounded-full bg-indigo-950 text-white font-bold text-base hover:bg-primary-dark transition-colors shadow-sm hover:scale-105 active:scale-95 duration-300 ${btnFocus}`}>
                  {h.primary.label}
                </Link>
                <Link href={h.secondary.href} className={`inline-flex items-center px-10 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-base hover:bg-primary hover:text-white transition-colors bg-white shadow-sm hover:scale-105 active:scale-95 duration-300 ${btnFocus}`}>
                  {h.secondary.label}
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:flex items-center justify-center relative w-full h-full">
            <Reveal from="right">
              <MarkTilt />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Where the name comes from": the reference's team-photo band, rebuilt as a branded composition. */
export function StoryBand() {
  const s = ourStory.story;
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full min-h-[700px] lg:min-h-[800px]">
        {/* TODO(confirm): replace this composition with a real team photo. */}
        <div className="absolute inset-0 bg-ink" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,color-mix(in_oklab,var(--color-primary)_55%,transparent),transparent_55%),radial-gradient(circle_at_90%_90%,color-mix(in_oklab,var(--color-accent)_35%,transparent),transparent_45%)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <svg className="absolute right-[-6%] top-1/2 -translate-y-1/2 h-[120%] text-white/10" viewBox="0 0 64 64">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={0.4}
              fillRule="evenodd"
              d="M36.34 15.55L54.7 47.51A5 5 0 0 1 50.36 55L13.64 55A5 5 0 0 1 9.3 47.51L27.66 15.55A5 5 0 0 1 36.34 15.55ZM32 25.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0 -17Z"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-950/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1240px] h-full flex items-center py-24">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[3px] bg-primary-light rounded-full" />
                <span className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase">{s.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">{s.title}</h2>
            </Reveal>
            {s.paragraphs.map((p) => (
              <Reveal key={p.slice(0, 24)}>
                <p className="text-white/75 text-[16px] leading-[1.85] mb-5">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoryStats() {
  return (
    <section className="py-16 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px] relative z-10">
        <Reveal>
          <div className="grid grid-cols-2 md:flex md:flex-nowrap md:flex-row items-center justify-center gap-y-12 gap-x-4 md:gap-0">
            {ourStory.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center px-4 md:px-8 py-4 border-slate-200 cursor-default shrink-0 min-w-fit md:border-r last:border-r-0 ${i % 2 === 0 ? "border-r" : ""}`}
              >
                <h3 className="text-3xl md:text-5xl font-bold text-indigo-950 tracking-tighter mb-2 !whitespace-nowrap flex flex-row items-center justify-center">
                  <CountStat value={s.value} suffix={s.suffix} display={s.display} />
                </h3>
                <span className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Blobs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-soft/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-surface/60 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
    </div>
  );
}

function PrincipleCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <Slide from="left" distance={20} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-200/40 transition-shadow duration-500 group">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary-soft text-primary mb-8 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-950 group-hover:text-white">
        <CompanyIcon name={icon} className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-indigo-950 mb-4 tracking-tight leading-snug">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-light text-base">{text}</p>
    </Slide>
  );
}

function Pill({ children, tone = "slate" }: { children: string; tone?: "slate" | "primary" }) {
  return (
    <div className={`inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase rounded-full ${tone === "primary" ? "bg-primary-soft text-primary" : "bg-slate-100 text-slate-600"}`}>
      {children}
    </div>
  );
}

export function StoryPrinciples() {
  const p = ourStory.principles;
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-neutral-50">
      <Blobs />
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px] relative z-10">
        <Reveal className="mb-16 md:mb-20 text-center">
          <Pill>{p.eyebrow}</Pill>
          <SectionHeading title={p.title} description={p.description} center />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {p.items.map((it) => (
            <PrincipleCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryValues() {
  const v = ourStory.values;
  return (
    <section className="py-24 bg-white relative overflow-hidden text-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-20">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{v.eyebrow}</div>
            <SectionHeading title={v.title} highlight={v.highlight} center />
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-8 mt-16 max-w-6xl mx-auto">
          {v.items.map((it) => (
            <Reveal key={it.title} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
              <SpotlightCard>
                <IconTile>
                  <CompanyIcon name={it.icon} className={`w-7 h-7 ${it.color}`} strokeWidth={1.6} />
                </IconTile>
                <h3 className="relative z-10 text-[1.4rem] font-extrabold text-indigo-950 mb-4 tracking-tight leading-snug transition-colors duration-300 group-hover:text-primary">{it.title}</h3>
                <p className="relative z-10 text-gray-500 leading-relaxed text-[15.5px] flex-1 font-medium transition-colors group-hover:text-gray-600">{it.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Initials avatar standing in for a portrait photo. TODO(confirm): real photos. */
function Portrait({ initials }: { initials: string }) {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-primary-soft),var(--color-surface))]" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_60%)]" />
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white/80 border-4 border-white shadow-xl flex items-center justify-center">
        <span className="text-5xl font-extrabold tracking-tight text-primary">{initials}</span>
      </div>
    </div>
  );
}

export function StoryTeam() {
  const t = ourStory.team;
  const l = ourStory.leadershipInPractice;
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-neutral-50">
      <Blobs />
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px] relative z-10">
        <div className="mb-32">
          <Reveal className="mb-16 md:mb-24 text-center">
            <Pill tone="primary">{t.eyebrow}</Pill>
            <SectionHeading title={t.title} highlight={t.highlight} description={t.description} center />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
            {t.members.map((m, i) => (
              <Reveal key={i} className="flex flex-col">
                <div className="hidden md:block group perspective-[1000px] h-[500px]">
                  <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:rotate-y-180">
                    <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                      <div className="relative w-full h-full">
                        <Portrait initials={m.initials} />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/20 to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                          <h3 className="text-2xl font-bold mb-1 tracking-tight">{m.name}</h3>
                          <p className="text-primary-light font-medium uppercase tracking-[0.15em] text-xs">{m.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] bg-indigo-950 p-10 flex flex-col justify-center shadow-2xl border border-white/10 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      <div className="relative z-10 text-white">
                        <Quote className="w-10 h-10 text-primary-light/30 mb-6" />
                        <h3 className="text-xl font-bold mb-2 text-primary-light">{m.name}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary-light/80 mb-6">{m.role}</p>
                        <p className="text-base leading-relaxed text-white/90 font-light italic">{m.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
                  <div className="relative h-[380px]">
                    <Portrait initials={m.initials} />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/40 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                      <h3 className="text-2xl font-bold mb-1 tracking-tight">{m.name}</h3>
                      <p className="text-primary-light font-medium uppercase tracking-[0.15em] text-xs">{m.role}</p>
                    </div>
                  </div>
                  <div className="p-8 relative bg-white">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-soft/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <Quote className="w-8 h-8 text-primary/10 mb-4 relative z-10" />
                    <p className="text-slate-600 leading-relaxed italic text-base font-medium relative z-10">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="pt-24 border-t border-slate-200">
          <Reveal className="mb-16">
            <Pill>{l.eyebrow}</Pill>
            <SectionHeading title={l.title} highlight={l.highlight} description={l.description} />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {l.items.map((it) => (
              <PrincipleCard key={it.title} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

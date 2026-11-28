import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { team, teamIntro, type TeamMember } from "@/content/team";

/** Initials for the photo placeholder ("Habib Gemmechu" -> "HG"). */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/** Section background: "light" (white with contour lines) or "dark" (navy). */
const THEME: "light" | "dark" = "light";

const themes = {
  light: {
    section: "bg-white", eyebrow: "text-primary", h2: "text-ink", hl: "text-primary", intro: "font-medium text-muted",
    name: "text-ink", role: "text-primary", bio: "text-muted", tag: "border-border bg-white text-body",
    linkedin: "border-border text-muted hover:border-primary hover:text-primary",
  },
  dark: {
    section: "bg-navy", eyebrow: "text-primary-light", h2: "text-white", hl: "text-primary-light", intro: "text-white/65",
    name: "text-white", role: "text-primary-light", bio: "text-white/60", tag: "border-white/10 bg-white/[0.04] text-white/70",
    linkedin: "border-white/15 text-white/70 hover:border-primary-light hover:text-primary-light",
  },
};
type Theme = (typeof themes)[keyof typeof themes];

/** Photos show in black and white so the four portraits read as one set; hovering a card fades it back to color. */
function MemberCard({ m, t }: { m: TeamMember; t: Theme }) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark ring-1 ring-white/10">
        {m.photo ? (
          // eslint-disable-next-line @next/next/no-img-element -- local team photo
          <img
            src={m.photo}
            alt={m.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover contrast-[1.05] grayscale transition-[filter,scale] duration-700 ease-out group-hover:scale-[1.03] group-hover:contrast-100 group-hover:grayscale-0 group-focus-within:grayscale-0 motion-reduce:transition-none"
          />
        ) : (
          <>
            <ContourLines dark />
            <span className="absolute inset-0 flex items-center justify-center font-heading text-6xl font-extrabold tracking-tight text-white/90">
              {initials(m.name)}
            </span>
          </>
        )}
      </div>
      <figcaption className="mt-5 flex items-start justify-between gap-3">
        <span>
          <span className={`block font-heading text-lg font-bold ${t.name}`}>{m.name}</span>
          <span className={`mt-1 block text-[13px] font-semibold leading-snug ${t.role}`}>{m.role}</span>
          {m.bio ? <span className={`mt-3 block text-sm leading-relaxed ${t.bio}`}>{m.bio}</span> : null}
          {m.skills?.length ? (
            <span className="mt-4 flex flex-wrap gap-1.5">
              {m.skills.map((s) => (
                <span key={s} className={`rounded-full border px-2.5 py-1 text-[11.5px] font-medium ${t.tag}`}>
                  {s}
                </span>
              ))}
            </span>
          ) : null}
        </span>
        {m.linkedin ? (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${m.name} on LinkedIn`}
            className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${t.linkedin}`}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        ) : null}
      </figcaption>
    </figure>
  );
}

/** "Meet the team": heading, then the founders row and the team row. Background from `theme` (default THEME above). */
export function MeetTheTeam({ theme = THEME }: { theme?: "light" | "dark" } = {}) {
  const t = themes[theme];
  return (
    <section className={`relative overflow-hidden ${t.section} py-20 sm:py-24`}>
      {theme === "light" ? (
        <ContourLines />
      ) : (
        <div className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[560px] rounded-full bg-primary/15 blur-[140px]" />
      )}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className={`text-[13px] font-semibold uppercase tracking-[0.25em] ${t.eyebrow}`}>{teamIntro.eyebrow}</p>
            <h2 className={`mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] ${t.h2} sm:text-5xl`}>
              {teamIntro.title} <span className={t.hl}>{teamIntro.highlight}</span>
            </h2>
            <p className={`mt-5 text-lg leading-relaxed ${t.intro}`}>{teamIntro.description}</p>
          </div>
        </Reveal>
        {/* Founders in the first row, the wider team centred below; cards keep the same width in both rows. */}
        {[
          { label: teamIntro.foundersLabel, people: team.filter((m) => m.group === "founder") },
          { label: teamIntro.teamLabel, people: team.filter((m) => m.group === "team") },
        ]
          .filter((g) => g.people.length > 0)
          .map((g, gi) => (
            <div key={g.label} className={gi > 0 ? "mt-16" : undefined}>
              <p className={`mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] ${t.eyebrow}`}>
                {g.label}
                <span className={`h-px flex-1 ${theme === "light" ? "bg-border" : "bg-white/10"}`} aria-hidden />
              </p>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 lg:gap-6">
                {g.people.map((m, i) => (
                  <Reveal key={m.name} delay={0.08 * i} className="w-[calc(50%-0.625rem)] lg:w-[calc(25%-1.125rem)]">
                    <MemberCard m={m} t={t} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

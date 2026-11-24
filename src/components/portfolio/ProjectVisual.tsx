import {
  Activity, Boxes, Building2, ClipboardList, Handshake, Hospital, Pill, UsersRound, UtensilsCrossed, Vote, type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { ContourLines } from "@/components/ui/ContourLines";
import type { ReactNode } from "react";
import { kindLabels, type CoverScene, type Project } from "@/content/portfolio";

const icons: Record<string, LucideIcon> = {
  Activity, Boxes, Building2, ClipboardList, Handshake, Hospital, Pill, UsersRound, UtensilsCrossed, Vote,
};

export function ProjectIcon({ name, className }: { name: string; className?: string }) {
  const I = icons[name] ?? Building2;
  return <I className={className} strokeWidth={1.75} />;
}

/**
 * A screenshot, full-bleed in a rounded 16:10 card (the same shape as the branded covers, so cards
 * line up; the screenshots are 1440×900, also 16:10). The earlier fake browser bar (dots + URL) is gone.
 * `url` is kept in the props so callers don't change; it is not shown.
 */
export function BrowserShot({ src, alt, sizes, priority }: { src: string; alt: string; url?: string; sizes: string; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_60px_-30px_rgba(11,18,33,0.35)]">
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
    </div>
  );
}

/** Skeleton line used inside the cover illustrations. */
function Bar({ w, className = "h-1.5 bg-white/15" }: { w: string; className?: string }) {
  return <span className={`block rounded-full ${className}`} style={{ width: w }} />;
}

/**
 * Illustrations for covers without a screenshot: simple app shapes in the brand colours,
 * drawn in code so they stay sharp at any size. They show the kind of system, not real data.
 */
function Scene({ scene, lg }: { scene: CoverScene; lg: boolean }) {
  const label = (t: string) => (lg ? <span className="truncate text-[11px] font-semibold text-white/70">{t}</span> : null);
  let body: ReactNode = null;

  if (scene === "dashboard") {
    const bars = [38, 55, 46, 70, 62, 84, 58, 92];
    body = (
      <div className="flex h-full flex-col gap-[6%]">
        <div className="grid h-[34%] grid-cols-3 gap-[4%]">
          {["Sales", "Inventory", "Purchasing"].map((t, i) => (
            <div key={t} className="flex flex-col justify-between rounded-lg bg-white/[0.06] p-[8%]">
              {label(t)}
              <Bar w={`${55 + i * 12}%`} className={`h-1.5 ${i === 0 ? "bg-primary-light/80" : "bg-white/25"}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-[4%] rounded-lg bg-white/[0.04] px-[5%] pb-[5%] pt-[8%]">
          {bars.map((h, i) => (
            <span key={i} className={`flex-1 rounded-t ${i === bars.length - 1 ? "bg-primary-light" : "bg-primary/70"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    );
  } else if (scene === "queue") {
    const rows = [
      { s: "Triage", c: "bg-primary-light text-navy" },
      { s: "Lab", c: "bg-white/20 text-white" },
      { s: "Consult", c: "bg-primary text-white" },
      { s: "Billing", c: "bg-white/20 text-white" },
    ];
    body = (
      <ul className="flex h-full flex-col gap-[5%]">
        {rows.map((r, i) => (
          <li key={r.s} className="flex flex-1 items-center gap-[5%] rounded-lg bg-white/[0.06] px-[5%]">
            <span className="aspect-square h-[55%] shrink-0 rounded-full bg-white/20" />
            <span className="flex flex-1 flex-col gap-1.5">
              <Bar w={`${70 - i * 8}%`} className="h-1.5 bg-white/30" />
              <Bar w="40%" className="h-1 bg-white/15" />
            </span>
            {lg ? (
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${r.c}`}>{r.s}</span>
            ) : (
              <span className={`h-2 w-[18%] rounded-full ${r.c}`} />
            )}
          </li>
        ))}
      </ul>
    );
  } else if (scene === "ballot") {
    const rows = [
      ["Mosque", 86],
      ["District", 64],
      ["Region", 48],
      ["Federal", 30],
    ] as const;
    body = (
      <ul className="flex h-full flex-col justify-between">
        {rows.map(([t, w], i) => (
          <li key={t} className="flex flex-col gap-1.5">
            {lg ? <span className="text-[11px] font-semibold text-white/70">{t}</span> : <Bar w="30%" className="h-1 bg-white/25" />}
            <span className="block h-2.5 overflow-hidden rounded-full bg-white/10">
              <span className={`block h-full rounded-full ${i === 0 ? "bg-primary-light" : "bg-primary/80"}`} style={{ width: `${w}%` }} />
            </span>
          </li>
        ))}
      </ul>
    );
  } else if (scene === "member") {
    body = (
      <div className="relative h-full">
        <div className="absolute left-0 top-0 flex h-[70%] w-[64%] flex-col justify-between rounded-xl bg-gradient-to-br from-primary to-primary-dark p-[6%] shadow-lg">
          <div className="flex items-center gap-[6%]">
            <span className={`aspect-square shrink-0 rounded-full bg-white/30 ${lg ? "h-8" : "h-5"}`} />
            <span className="flex flex-1 flex-col gap-1.5">
              <Bar w="80%" className="h-1.5 bg-white/70" />
              <Bar w="50%" className="h-1 bg-white/40" />
            </span>
          </div>
          {lg ? <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">Member</span> : <Bar w="35%" className="h-1 bg-white/50" />}
        </div>
        <div className="absolute bottom-0 right-0 flex h-[52%] w-[56%] items-center gap-[8%] rounded-xl border border-white/15 bg-navy/90 p-[6%]">
          <span className="grid aspect-square h-[70%] shrink-0 grid-cols-3 gap-0.5">
            {[1, 0, 1, 0, 1, 1, 1, 0, 1].map((on, i) => (
              <span key={i} className={on ? "bg-white/70" : "bg-white/10"} />
            ))}
          </span>
          <span className="flex flex-1 flex-col gap-1.5">
            {lg ? <span className="text-[11px] font-semibold text-white/80">Event ticket</span> : <Bar w="80%" className="h-1.5 bg-white/40" />}
            <Bar w="60%" className="h-1 bg-primary-light/70" />
          </span>
        </div>
      </div>
    );
  } else if (scene === "signal") {
    body = (
      <div className="flex h-full flex-col gap-[6%]">
        <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="w-full flex-1 rounded-lg bg-white/[0.04]">
          {[20, 40, 60].map((y) => (
            <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          ))}
          <polyline
            fill="none"
            stroke="#7fd6a4"
            strokeWidth="1.4"
            strokeLinejoin="round"
            points="0,40 12,41 20,39 28,40 34,30 37,52 40,22 43,58 46,28 49,50 52,36 56,40 70,40 80,39 88,41 94,26 97,60 100,16 103,64 106,24 109,54 112,34 116,41 132,40 140,39 148,40 154,33 157,48 160,30 163,46 166,38 170,40 200,40"
          />
        </svg>
        <div className="flex h-[22%] gap-[4%]">
          {["Open", "Close", "Pinch"].map((t, i) => (
            <span
              key={t}
              className={`flex flex-1 items-center justify-center rounded-lg ${i === 1 ? "bg-primary-light text-navy" : "bg-white/[0.06] text-white/70"}`}
            >
              {lg ? <span className="text-[11px] font-bold">{t}</span> : null}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={`absolute right-[6%] top-[9%] flex h-[58%] w-[54%] flex-col rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur ${lg ? "p-4" : "p-2.5"}`}
    >
      <div className={`flex shrink-0 gap-1 ${lg ? "mb-3" : "mb-2"}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
      <div className="min-h-0 flex-1">{body}</div>
    </div>
  );
}

/**
 * Branded cover for projects without a screenshot yet: navy panel with contour lines,
 * an illustration of the kind of system, the project icon, name and sector. Same 16:10
 * shape as the screenshots.
 */
export function ProjectCover({ project, size = "lg" }: { project: Project; size?: "lg" | "sm" }) {
  const lg = size === "lg";
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-navy shadow-[0_30px_60px_-30px_rgba(11,18,33,0.6)]">
      <ContourLines dark />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
      {project.scene ? <Scene scene={project.scene} lg={lg} /> : null}
      <div className={`relative flex h-full flex-col justify-between ${lg ? "p-8 sm:p-10" : "p-6"}`}>
        <span
          className={`flex items-center justify-center rounded-2xl bg-primary text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.8)] ${lg ? "h-16 w-16" : "h-12 w-12"}`}
        >
          <ProjectIcon name={project.icon} className={lg ? "h-8 w-8" : "h-6 w-6"} />
        </span>
        <div>
          <p className={`font-semibold uppercase tracking-[0.22em] text-primary-light ${lg ? "text-xs" : "text-[10px]"}`}>
            {kindLabels[project.kind]} · {project.sector}
          </p>
          <p className={`mt-2 font-heading font-extrabold leading-tight tracking-[-0.02em] text-white ${lg ? "text-3xl sm:text-4xl" : "text-xl"}`}>
            {project.name}
          </p>
        </div>
      </div>
    </div>
  );
}

/** The project's screenshot when there is one, otherwise its branded cover. */
export function ProjectVisual({ project, size = "lg", sizes, priority }: { project: Project; size?: "lg" | "sm"; sizes: string; priority?: boolean }) {
  return project.image ? (
    <BrowserShot src={project.image} alt={`${project.name} screenshot`} url={project.links?.[0]?.href} sizes={sizes} priority={priority} />
  ) : (
    <ProjectCover project={project} size={size} />
  );
}

const statusStyles: Record<Project["status"], string> = {
  Live: "border-primary/25 bg-primary-soft text-primary-dark",
  Active: "border-primary/25 bg-primary-soft text-primary-dark",
  "In development": "border-dashed border-primary/40 bg-white text-primary",
  Completed: "border-border bg-surface text-body",
};

/** Small status pill: Live / Active / In development / Completed. */
export function StatusBadge({ status, dark }: { status: Project["status"]; dark?: boolean }) {
  const cls = dark ? "border-white/15 bg-white/[0.06] text-white/80" : statusStyles[status];
  const live = status === "Live" || status === "Active";
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-bold ${cls}`}>
      {live ? <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-primary-light" : "bg-primary"}`} aria-hidden /> : null}
      {status}
    </span>
  );
}

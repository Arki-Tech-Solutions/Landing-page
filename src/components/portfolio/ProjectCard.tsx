import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { kindLabels, portfolioCopy as c, type Project } from "@/content/portfolio";
import { ProjectVisual } from "./ProjectVisual";

export const projectHref = (p: Project) => `/portfolio/${p.slug}`;

/** Compact project card: visual, type and period, name, summary, link. Light or dark. */
export function ProjectCard({ project: p, dark }: { project: Project; dark?: boolean }) {
  return (
    <Link href={projectHref(p)} className="group flex h-full flex-col">
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <ProjectVisual project={p} size="sm" sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
      </div>
      <p className={`mt-6 text-[12px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-primary-light" : "text-primary"}`}>
        {kindLabels[p.kind]} · {p.period}
      </p>
      <h3 className={`mt-2 font-heading text-xl font-bold leading-snug ${dark ? "text-white" : "text-ink"}`}>{p.name}</h3>
      <p className={`mt-2 leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{p.summary}</p>
      <span
        className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold transition-colors ${
          dark ? "text-white group-hover:text-primary-light" : "text-ink group-hover:text-primary"
        }`}
      >
        {c.view}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/** A grid of project cards, three per row on desktop. */
export function ProjectGrid({ projects, dark }: { projects: Project[]; dark?: boolean }) {
  return (
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.slug} delay={0.06 * (i % 3)} className="h-full">
          <ProjectCard project={p} dark={dark} />
        </Reveal>
      ))}
    </div>
  );
}

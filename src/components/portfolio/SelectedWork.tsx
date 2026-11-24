import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioCopy as c, type Project } from "@/content/portfolio";
import { ProjectGrid } from "./ProjectCard";

/**
 * "Selected work" band: heading, up to six project cards and a link to /portfolio.
 * Used on the home page (featured projects) and on industry pages ("Work in …").
 */
export function SelectedWork({
  projects,
  eyebrow = c.homeEyebrow,
  title = c.homeTitle,
  highlight = c.homeHighlight,
  text = c.homeText,
  className = "bg-white",
}: {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  highlight?: string;
  text?: string;
  className?: string;
}) {
  if (projects.length === 0) return null;
  return (
    <section className={`relative py-20 sm:py-24 ${className}`}>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
                {title} <span className="text-primary">{highlight}</span>
              </h2>
              <p className="mt-5 text-lg font-medium leading-relaxed text-muted">{text}</p>
            </div>
            <Link href="/portfolio" className="group inline-flex shrink-0 items-center gap-2 font-bold text-ink transition-colors hover:text-primary">
              {c.homeAll}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
        <ProjectGrid projects={projects.slice(0, 6)} />
      </div>
    </section>
  );
}

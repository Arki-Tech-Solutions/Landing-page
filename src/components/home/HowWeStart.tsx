import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { howWeStart } from "@/content/home";

/**
 * "How we start" on a light background: heading row with a button, then five numbered
 * steps on a horizontal timeline (stacked vertically on small screens).
 */
export function HowWeStart() {
  const steps = howWeStart.steps;
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">{howWeStart.eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
                {howWeStart.title} <span className="text-primary">{howWeStart.highlight}</span>
              </h2>
              <p className="mt-5 text-lg font-medium leading-relaxed text-muted">{howWeStart.description}</p>
            </div>
            <Link
              href={howWeStart.cta.href}
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_-12px_rgba(19,122,78,0.6)] transition-colors hover:bg-primary-dark lg:self-auto"
            >
              {howWeStart.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* The timeline line: vertical on small screens, horizontal on large ones. */}
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-border lg:hidden" />
          <span aria-hidden className="absolute left-5 right-5 top-5 hidden h-px bg-border lg:block" />

          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={0.08 * i} className="flex gap-5 lg:block">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-mono text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div className="lg:mt-6 lg:pr-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">{s.when}</p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

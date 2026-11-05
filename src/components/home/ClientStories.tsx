import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { clientStories } from "@/content/home";
import { testimonials } from "@/content/testimonials";

/** Initials for the avatar circle ("Selam Tadesse" -> "ST"). */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Client stories on a light background: heading row, then three quote cards side by side.
 * Placeholder quotes carry a small "Sample" tag so they can't be mistaken for real ones.
 */
export function ClientStories() {
  const items = testimonials.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">{clientStories.eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
                {clientStories.title} <span className="text-primary">{clientStories.highlight}</span>
              </h2>
              <p className="mt-5 text-lg font-medium leading-relaxed text-muted">{clientStories.description}</p>
            </div>
            <Link
              href={clientStories.allLink.href}
              className="group inline-flex shrink-0 items-center gap-2 font-bold text-ink transition-colors hover:text-primary"
            >
              {clientStories.allLink.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name + i} delay={0.1 + i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_16px_32px_-16px_rgba(15,36,25,0.18)]">
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden className="font-heading text-6xl font-extrabold leading-none text-primary/40">
                    &ldquo;
                  </span>
                  {t.placeholder ? (
                    <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      Sample
                    </span>
                  ) : null}
                </div>
                <blockquote className="mt-2 flex-1 text-[16px] leading-relaxed text-body">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{t.name}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

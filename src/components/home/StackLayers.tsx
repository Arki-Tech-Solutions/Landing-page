import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { stackLayers } from "@/content/home";
import { techCategories } from "@/content/technologies";

/** Look up a picked technology in the catalogue; skips any pick that no longer exists. */
function resolve(categoryId: string, slug: string) {
  const item = techCategories.find((c) => c.id === categoryId)?.items.find((i) => i.slug === slug);
  return item ? { ...item, href: `/technologies/${categoryId}/${slug}` } : null;
}

/**
 * "Stack by layer": one card with a row per layer (AI, web, mobile, backend, cloud),
 * label on the left and linked logo chips on the right.
 */
export function StackLayers() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">{stackLayers.eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
                {stackLayers.title}
              </h2>
              <p className="mt-5 text-lg font-medium leading-relaxed text-muted">{stackLayers.description}</p>
            </div>
            <Link
              href={stackLayers.allLink.href}
              className="group inline-flex shrink-0 items-center gap-2 font-bold text-ink transition-colors hover:text-primary"
            >
              {stackLayers.allLink.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_60px_-40px_rgba(15,36,25,0.35)]">
            {stackLayers.layers.map((layer, i) => {
              const items = layer.picks.map(([c, s]) => resolve(c, s)).filter((x) => x !== null);
              return (
                <div
                  key={layer.label}
                  className={`group/row grid gap-5 px-6 py-6 transition-colors duration-300 hover:bg-surface/50 sm:px-8 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-10 lg:px-10 ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover/row:bg-primary group-hover/row:text-white">
                      <Icon name={layer.icon} className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-ink">{layer.label}</h3>
                      <p className="text-[13px] font-medium text-muted">{layer.text}</p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2.5">
                    {items.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={t.href}
                          className="flex items-center gap-2.5 rounded-full border border-border bg-white py-1.5 pl-1.5 pr-4 text-[13px] font-semibold text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-ink hover:shadow-sm"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50">
                            {/* eslint-disable-next-line @next/next/no-img-element -- external SVG logo from icon CDN */}
                            <img src={t.icon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" loading="lazy" />
                          </span>
                          {t.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

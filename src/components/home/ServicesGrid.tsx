import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/content/home";

type Tile = (typeof services.tiles)[number];

/** Grid placement per tile size on large screens (4 columns, 3 rows). */
const span: Record<string, string> = {
  feature: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  wide: "md:col-span-2 lg:col-span-2",
  small: "lg:col-span-1",
};

/** Illustrative AI agent run shown in the feature tile (UI decoration, not a client claim). */
function AgentVisual() {
  return (
    <div className="relative mt-8 rounded-2xl border border-border/70 bg-surface/60 p-4 sm:p-5">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-[13px] font-medium text-white">
        Summarise this week&apos;s support tickets and draft replies.
      </div>
      <div className="mt-3 flex gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
          <Icon name="Sparkles" className="h-3.5 w-3.5" />
        </span>
        <div className="flex-1 rounded-2xl rounded-tl-md border border-border/70 bg-white px-4 py-3 text-[13px] text-body">
          <ul className="space-y-1.5">
            {["Read 248 tickets", "Grouped into 6 themes", "Drafted 31 replies for review"].map((step) => (
              <li key={step} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                {step}
              </li>
            ))}
          </ul>
          <span className="mt-2.5 flex items-center gap-1" aria-hidden>
            {[0, 0.2, 0.4].map((d) => (
              <span key={d} className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: `${d}s` }} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

function ServiceTile({ tile }: { tile: Tile }) {
  const feature = tile.size === "feature";
  return (
    <Link href={tile.href} className="block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
      <SpotlightCard radius="rounded-3xl" padding={feature ? "p-8 sm:p-10" : "p-7"}>
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <span
              className={`flex items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white ${feature ? "h-14 w-14" : "h-12 w-12"}`}
            >
              <Icon name={tile.icon} className={feature ? "h-7 w-7" : "h-6 w-6"} strokeWidth={1.7} />
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <h3
            className={`mt-6 font-heading font-extrabold tracking-tight text-ink transition-colors group-hover:text-primary ${feature ? "text-[1.9rem] leading-tight" : "text-[1.3rem] leading-snug"}`}
          >
            {tile.title}
          </h3>
          <p className={`mt-3 font-medium leading-relaxed text-muted ${feature ? "text-base sm:text-[17px] max-w-lg" : "text-[15px]"}`}>{tile.text}</p>
          {tile.tags.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {tile.tags.map((t) => (
                <li key={t} className="rounded-full border border-border bg-white px-3 py-1 text-[12px] font-semibold text-body">
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
          {feature ? <AgentVisual /> : null}
        </div>
      </SpotlightCard>
    </Link>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-gray-50 py-16 sm:py-24 overflow-hidden">
      <Container>
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.25em] text-primary uppercase">{services.eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
                {services.title}
              </h2>
            </div>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-muted lg:justify-self-end">{services.description}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
          {services.tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 0.05} className={`h-full ${span[tile.size]}`}>
              <ServiceTile tile={tile} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

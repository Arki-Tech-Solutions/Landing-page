import { CalendarDays, FileText, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/industries/Breadcrumb";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { legalMeta } from "@/content/legal";

/** Shared hero for the legal pages: breadcrumb, eyebrow, title, intro and a meta row. */
export function LegalHero({ crumb, title, intro, version }: { crumb: string; title: string; intro: string; version?: string }) {
  const meta = [
    { icon: CalendarDays, text: `Last updated ${legalMeta.lastUpdated}` },
    ...(version ? [{ icon: FileText, text: `Version ${version}` }] : []),
    { icon: MapPin, text: "Under Ethiopian data protection law" },
  ];
  return (
    <section className="relative overflow-hidden border-b border-border bg-white pt-16">
      <ContourLines />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-8 sm:pb-20 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Legal" }, { label: crumb }]} />
        <Reveal className="mt-12 max-w-3xl lg:mt-16">
          <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">Legal</p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[60px]">{title}</h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-muted">{intro}</p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {meta.map((m) => (
              <li key={m.text} className="inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-4 py-2 text-sm font-semibold text-body backdrop-blur">
                <m.icon className="h-4 w-4 text-primary" />
                {m.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

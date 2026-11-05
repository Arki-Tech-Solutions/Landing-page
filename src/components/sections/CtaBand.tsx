import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContourLines } from "@/components/ui/ContourLines";

type Props = { title: string; highlight: string; description: string; cta: { label: string; href: string }; note?: string };

/**
 * Dark call-to-action band over the hero's drifting contour lines (light-green on navy),
 * with one big pill button.
 */
export function CtaBand({ title, highlight, description, cta, note }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <ContourLines dark />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] mb-6 leading-[1.1] text-balance">
          {title} <span className="text-primary-light">{highlight}</span>
        </h2>
        <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-10">{description}</p>
        <div className="flex flex-col items-center gap-5">
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary text-white font-bold text-base lg:text-lg shadow-[0_12px_30px_-10px_rgba(19,122,78,0.6)] hover:bg-primary-dark transition-colors"
          >
            {cta.label}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {note ? (
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] font-medium text-white/75">
              {note.split("·").map((part) => (
                <li key={part} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-light" />
                  {part.trim()}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

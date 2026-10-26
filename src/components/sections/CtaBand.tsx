import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GridBeams } from "@/components/ui/GridBeams";

type Props = { title: string; highlight: string; description: string; cta: { label: string; href: string }; note?: string };

/** Dark beam band with one big pill CTA ("Looking for a specific tech expert?"). */
export function CtaBand({ title, highlight, description, cta, note }: Props) {
  return (
    <section className="bg-slate-900 py-16 sm:py-20 relative overflow-hidden">
      <GridBeams cell={60} variant="dark" showGrid={false} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          {title} <span className="text-primary-light">{highlight}</span>
        </h2>
        <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-12">{description}</p>
        <div className="flex flex-col items-center gap-5">
          <Link href={cta.href} className="group relative inline-flex items-center gap-3 px-10 py-4 lg:px-12 lg:py-4.5 rounded-full bg-primary text-white font-bold text-base lg:text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500">
            <span className="relative z-10">{cta.label}</span>
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1.5 transition-transform duration-500 relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-0" />
          </Link>
          {note ? <p className="text-sm font-semibold tracking-wide text-white/40 uppercase">{note}</p> : null}
        </div>
      </div>
    </section>
  );
}

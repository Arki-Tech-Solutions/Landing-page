/* eslint-disable @next/next/no-img-element -- optional local screenshots */
import { Icon } from "@/components/ui/Icon";
import type { CaseStudy } from "@/content/case-studies";

/**
 * Case study visual. Uses the project screenshot when one exists, otherwise a
 * branded placeholder panel (teal lens + project icon + stack chips).
 */
export function CaseCover({ cs, className = "" }: { cs: CaseStudy; className?: string }) {
  if (cs.image) {
    return <img src={cs.image} alt={cs.title} className={`absolute inset-0 h-full w-full object-contain ${className}`} />;
  }
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_60%),radial-gradient(circle_at_75%_75%,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_55%)]" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-[18px] border-primary/90 flex items-center justify-center shadow-xl shadow-primary/20 bg-white">
          <Icon name={cs.icon} className="w-12 h-12 sm:w-14 sm:h-14 text-primary" strokeWidth={1.6} />
          <span className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-accent ring-4 ring-white" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-xs px-4">
          {cs.tech.split(",").map((t) => (
            <span key={t} className="text-[11px] font-bold tracking-wide text-indigo-950/70 bg-white/80 border border-gray-100 rounded-full px-3 py-1 shadow-sm">
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

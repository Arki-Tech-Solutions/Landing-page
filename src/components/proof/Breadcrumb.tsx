import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export type Crumb = { label: string; href?: string };

/** "Home › Resources › …" trail shown at the top of resource pages. */
export function Breadcrumb({ items, className = "" }: { items: Crumb[]; className?: string }) {
  return (
    <div className={`w-full mx-auto px-6 lg:px-8 max-w-[1400px] pt-8 mb-8 relative z-20 ${className}`}>
      <nav className="flex items-center flex-wrap gap-y-1 text-sm font-medium" aria-label="Breadcrumb">
        {[{ label: "Home", href: "/" }, ...items].map((c, i) => (
          <Fragment key={`${c.label}-${i}`}>
            {i > 0 ? <ChevronRight className="w-3.5 h-3.5 mx-1 shrink-0 text-slate-400" aria-hidden /> : null}
            {c.href ? (
              <Link href={c.href} className="font-medium transition-colors duration-150 text-black hover:text-primary">
                {c.label}
              </Link>
            ) : (
              <span className="font-medium text-black">{c.label}</span>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}

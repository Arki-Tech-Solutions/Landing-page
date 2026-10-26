import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export type Crumb = { label: string; href?: string };

/** Breadcrumb row shown at the top of every service hero. `dark` = white text over a dark hero. */
export function Breadcrumb({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const text = dark ? "text-white/55" : "text-black";
  const hover = dark ? "hover:text-white" : "hover:text-primary";
  return (
    <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] pt-8 mb-8 relative z-20">
      <nav className="flex items-center flex-wrap gap-y-1 text-sm font-medium" aria-label="Breadcrumb">
        {items.map((c, i) => (
          <Fragment key={c.label}>
            {i > 0 ? <ChevronRight className={`w-3.5 h-3.5 mx-1 shrink-0 ${dark ? "text-white/30" : "text-slate-400"}`} /> : null}
            {c.href ? (
              <Link href={c.href} className={`font-medium transition-colors duration-150 ${text} ${hover}`}>
                {c.label}
              </Link>
            ) : (
              <span className={`font-medium ${text}`} aria-current={i === items.length - 1 ? "page" : undefined}>
                {c.label}
              </span>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}

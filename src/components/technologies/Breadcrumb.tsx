import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

/** Breadcrumb row shown at the top of technology pages. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-y-1 text-sm font-medium">
      {items.map((c, i) => (
        <Fragment key={c.label}>
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1 shrink-0 text-slate-400" aria-hidden />}
          {c.href ? (
            <Link href={c.href} className="font-medium transition-colors duration-150 text-black hover:text-primary">
              {c.label}
            </Link>
          ) : (
            <span className="font-medium text-black" aria-current={i === items.length - 1 ? "page" : undefined}>
              {c.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

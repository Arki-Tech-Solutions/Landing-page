import Link from "next/link";
import { site } from "@/content/site";

/** Header/footer logo lockup. Files live in public/brand (see docs/brand.md). */
export function Logo({ variant = "light", className = "h-8 w-auto" }: { variant?: "light" | "dark"; className?: string }) {
  return (
    <Link href="/" className="flex items-center shrink-0" aria-label={`${site.shortName} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no optimization needed */}
      <img src={variant === "light" ? site.logo.light : site.logo.dark} alt={site.name} className={className} />
    </Link>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** "Home › Page" breadcrumb matching the reference (light text on dark heroes when `dark`). */
export function Crumbs({ label, dark = false, className = "" }: { label: string; dark?: boolean; className?: string }) {
  return (
    <div className={`w-full mx-auto px-6 lg:px-8 max-w-[1400px] pt-8 mb-8 relative z-20 ${className}`}>
      <nav className="flex items-center flex-wrap gap-y-1 text-sm font-medium" aria-label="Breadcrumb">
        <Link href="/" className={`font-medium transition-colors duration-150 ${dark ? "text-white/55 hover:text-white" : "text-black hover:text-primary"}`}>
          Home
        </Link>
        <ChevronRight className={`w-3.5 h-3.5 mx-1 shrink-0 ${dark ? "text-white/30" : "text-slate-400"}`} aria-hidden />
        <span className={`font-medium ${dark ? "text-white/55" : "text-black"}`}>{label}</span>
      </nav>
    </div>
  );
}

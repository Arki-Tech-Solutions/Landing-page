import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/** "View all testimonials →" style text link. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`flex items-center gap-2 group text-[15px] font-bold text-primary hover:underline ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

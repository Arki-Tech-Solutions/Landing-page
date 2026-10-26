import type { ReactNode } from "react";

/** The original site's page container: max-w-[1400px] with px-6 lg:px-8 gutters. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`w-full mx-auto px-6 lg:px-8 max-w-[1400px] ${className}`}>{children}</div>;
}

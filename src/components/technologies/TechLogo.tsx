/* eslint-disable @next/next/no-img-element -- remote SVG logos from jsDelivr / icon.horse */
import type { TechItem } from "@/content/technologies";

export function TechLogo({ item, className = "w-full h-full object-contain" }: { item: TechItem; className?: string }) {
  return <img src={item.icon} alt={item.name} loading="lazy" className={className} />;
}

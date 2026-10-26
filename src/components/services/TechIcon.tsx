/* eslint-disable @next/next/no-img-element -- external SVG logos from the icon CDN */
import type { TechTile } from "@/content/services";

/** 36px technology logo, falling back to an initial tile when no logo URL is set. */
export function TechIcon({ tile }: { tile: TechTile }) {
  if (!tile.icon) {
    return <span className="w-9 h-9 rounded-lg bg-primary-soft text-primary font-black text-sm flex items-center justify-center">{tile.name[0]}</span>;
  }
  return <img src={tile.icon} alt={tile.name} width={36} height={36} loading="lazy" className="object-contain w-9 h-9" />;
}

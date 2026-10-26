import { Cpu, Layers, Sparkles, type LucideIcon } from "lucide-react";
import type { BlogCategory } from "@/content/blog";

/** Branded cover gradients (token based) used instead of the reference's article imagery. */
export const coverGradients = [
  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-navy) 100%)",
  "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
  "linear-gradient(135deg, var(--color-navy) 0%, var(--color-primary-dark) 100%)",
  "linear-gradient(135deg, var(--color-ink) 0%, var(--color-primary) 100%)",
];

export function coverFor(index: number) {
  return coverGradients[index % coverGradients.length];
}

export const categoryIcons: Record<BlogCategory["icon"], LucideIcon> = { Cpu, Layers, Sparkles };

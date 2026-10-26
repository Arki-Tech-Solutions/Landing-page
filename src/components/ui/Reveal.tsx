"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Seconds before the animation starts. */
  delay?: number;
  /** Direction the element travels in from. Matches the original's translateY(30px) / translateX(30px). */
  from?: "bottom" | "right" | "none";
};

/** Fade-and-rise on first scroll into view, used by almost every section of the original site. */
export function Reveal({ children, className, delay = 0, from = "bottom" }: Props) {
  const initial =
    from === "bottom" ? { opacity: 0, y: 30 } : from === "right" ? { opacity: 0, x: 30 } : { opacity: 0 };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

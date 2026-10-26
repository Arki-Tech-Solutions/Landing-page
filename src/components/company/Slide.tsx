"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; from?: "left" | "right" | "bottom"; distance?: number; delay?: number };

/** Fade + slide in on first view. Like ui/Reveal, but also supports sliding in from the left (translateX(-30px)). */
export function Slide({ children, className, from = "left", distance = 30, delay = 0 }: Props) {
  const initial = from === "bottom" ? { opacity: 0, y: distance } : { opacity: 0, x: from === "left" ? -distance : distance };
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

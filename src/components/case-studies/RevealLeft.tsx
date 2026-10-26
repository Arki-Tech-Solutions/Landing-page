"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Slide-in from the left (the reference's translateX(-30px) wrappers; shared Reveal only does bottom/right). */
export function RevealLeft({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

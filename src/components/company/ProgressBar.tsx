"use client";

import { motion } from "motion/react";

/** Bar that fills to `percent` the first time it scrolls into view. */
export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/20">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary-light to-primary"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
      />
    </div>
  );
}

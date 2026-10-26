"use client";

import { motion } from "motion/react";

/** Splits a headline into words, flagging those inside *asterisk* spans. */
function parseWords(text: string) {
  const out: { word: string; hl: boolean }[] = [];
  let inside = false;
  for (const w of text.split(" ")) {
    const starts = w.startsWith("*");
    out.push({ word: w.replaceAll("*", ""), hl: inside || starts });
    if (starts) inside = true;
    if (w.endsWith("*")) inside = false;
  }
  return out;
}

/** Headline whose words rise in one after another. Words wrapped in *asterisks* get `highlightClass`. */
export function WordReveal({ text, className, highlightClass = "" }: { text: string; className?: string; highlightClass?: string }) {
  const words = parseWords(text);
  return (
    <h1 className={className}>
      {words.map(({ word, hl }, i) => {
        return (
          <span key={i}>
            <motion.span
              className={`inline-block ${hl ? highlightClass : ""}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.05 }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </h1>
  );
}

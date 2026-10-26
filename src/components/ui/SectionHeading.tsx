import type { ReactNode } from "react";

type Props = {
  /** Text before the highlighted part. */
  title?: ReactNode;
  /** Part rendered in the primary color. */
  highlight?: ReactNode;
  /** Put the highlight first ("<highlight> <title>"), as some sections do. */
  highlightFirst?: boolean;
  description?: ReactNode;
  center?: boolean;
  dark?: boolean;
  className?: string;
};

/**
 * Section title + intro used across the site:
 * h2 text-3xl sm:text-4xl lg:text-5xl font-extrabold, highlighted words in primary, gray-500 lead.
 */
export function SectionHeading({ title, highlight, highlightFirst, description, center, dark, className = "" }: Props) {
  const hl = highlight ? <span className="text-primary">{highlight}</span> : null;
  return (
    <div className={`max-w-4xl mb-10 sm:mb-12 ${center ? "mx-auto text-center" : ""} ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.2] ${
          dark ? "text-white" : "text-indigo-950"
        }`}
      >
        {highlightFirst ? (
          <>
            {hl} {title}
          </>
        ) : (
          <>
            {title} {hl}
          </>
        )}
      </h2>
      {description ? (
        <p
          className={`text-lg leading-relaxed max-w-3xl ${center ? "mx-auto" : ""} ${
            dark ? "text-white/70" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Splits a title for "<highlight> <rest> FAQs" headings: short titles stay whole, longer ones split near the middle. */
export function splitTitle(t: string): [string, string] {
  const words = t.split(" ");
  const n = words.length <= 2 ? words.length : Math.ceil(words.length / 2);
  return [words.slice(0, n).join(" "), words.slice(n).join(" ")];
}

/** Fills "{title}" placeholders in content strings. */
export const fill = (s: string, title: string) => s.replaceAll("{title}", title);

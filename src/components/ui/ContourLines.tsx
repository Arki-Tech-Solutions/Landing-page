/**
 * Hero background: faint topographic contour lines, like a map of the Ethiopian
 * highlands, drifting very slowly. Every fifth line is slightly stronger, as index
 * contours are on real maps. The paths are computed once from fixed values, so the
 * drawing is the same on every render. Motion stops for visitors who prefer reduced motion.
 */

const W = 1440;
const H = 900;

/** Peaks the contours ring around: centre (fraction of W/H), line count, phase for the wobble. */
const peaks = [
  { x: 0.16, y: 0.3, levels: 11, phase: 0.4 },
  { x: 0.86, y: 0.62, levels: 12, phase: 2.1 },
  { x: 0.52, y: 1.12, levels: 9, phase: 4.3 },
];

const STEP = 46;
const POINTS = 96;

/** One closed, smooth, irregular ring around (cx, cy) at the given radius. */
function ring(cx: number, cy: number, radius: number, phase: number, level: number) {
  const pts: string[] = [];
  for (let i = 0; i <= POINTS; i++) {
    const t = (i / POINTS) * Math.PI * 2;
    const wobble =
      1 +
      0.14 * Math.sin(3 * t + phase + level * 0.18) +
      0.08 * Math.sin(5 * t + phase * 1.7 - level * 0.11) +
      0.04 * Math.sin(9 * t + phase * 0.6 + level * 0.07);
    const r = radius * wobble;
    pts.push(`${(cx + r * Math.cos(t)).toFixed(1)},${(cy + r * 0.78 * Math.sin(t)).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
}

const lines = peaks.flatMap((p) =>
  Array.from({ length: p.levels }, (_, k) => ({
    d: ring(p.x * W, p.y * H, 30 + k * STEP, p.phase, k),
    index: k % 5 === 4,
  })),
);

/**
 * `dark` draws light-green lines for dark sections and skips the white centre wash;
 * the default is green lines on white with a calm centre behind the text.
 */
export function ContourLines({ dark = false }: { dark?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute -inset-[4%] h-[108%] w-[108%] animate-contour-drift"
      >
        <g fill="none" stroke={dark ? "var(--color-primary-light)" : "var(--color-primary)"}>
          {lines.map((l, i) => (
            <path
              key={i}
              d={l.d}
              strokeWidth={l.index ? 1.1 : 0.7}
              strokeOpacity={dark ? (l.index ? 0.16 : 0.08) : l.index ? 0.22 : 0.12}
            />
          ))}
        </g>
      </svg>
      {dark ? null : (
        /* Keep the centre calm behind the headline. */
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,white_35%,transparent_100%)]" />
      )}
    </div>
  );
}

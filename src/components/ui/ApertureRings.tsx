/**
 * Hero background built on the Arki mark's aperture ("arki": to see): fixed concentric
 * rings around the headline, a few rings that slowly expand outward like a lens
 * focusing, a soft glow at the centre and a fine dot texture fading toward the edges.
 * Motion stops for visitors who prefer reduced motion.
 */

/** Radii (px) of the fixed rings, innermost first. */
const rings = [170, 290, 430, 590, 770];

/** Start offsets (s) of the expanding rings; each takes 12s to travel outward. */
const pulses = [0, 4, 8];

export function ApertureRings() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_50%_42%,black_15%,transparent_70%)]" />

      <div className="absolute left-1/2 top-[42%] h-0 w-0">
        <div className="absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-primary-soft)_90%,transparent),transparent_70%)]" />

        {rings.map((r, i) => (
          <div
            key={r}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border ${i === 2 ? "border-dashed" : ""}`}
            style={{
              width: r * 2,
              height: r * 2,
              borderColor: `color-mix(in oklab, var(--color-primary) ${18 - i * 3}%, transparent)`,
            }}
          />
        ))}

        {pulses.map((delay) => (
          <div key={delay} className="absolute h-[1700px] w-[1700px] -translate-x-1/2 -translate-y-1/2">
            <div className="h-full w-full rounded-full border border-primary/40 animate-aperture" style={{ animationDelay: `${delay}s` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

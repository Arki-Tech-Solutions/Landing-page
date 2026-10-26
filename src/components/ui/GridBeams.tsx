/**
 * Background grid with light "beams" sliding along the grid lines.
 * Reproduces the hero (light, 70px cells) and dark band (white/10 lines, 60–64px cells) backgrounds.
 */
type Props = {
  cell?: number;
  variant?: "light" | "dark";
  /** Show the grid lines themselves (the dark bands on the original keep them hidden and only show beams). */
  showGrid?: boolean;
  rows?: number;
  cols?: number;
};

export function GridBeams({ cell = 70, variant = "light", showGrid = true, rows = 15, cols = 32 }: Props) {
  const line = variant === "light" ? "#ecececff" : "rgba(255, 255, 255, 0.1)";
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
          backgroundSize: `${cell}px ${cell}px`,
          opacity: showGrid ? 1 : 0,
        }}
      />
      {Array.from({ length: rows }, (_, i) => (
        <div
          key={`x${i}`}
          className="absolute left-0 w-[600px] h-[1.5px] animate-beam-x pointer-events-none"
          style={{
            top: (i + 1) * cell,
            background: "linear-gradient(to right, transparent, var(--color-primary), transparent)",
            opacity: 0.6,
            animationDelay: `${(rows - i) * 1.5}s`,
            animationDuration: "15s",
          }}
        />
      ))}
      {Array.from({ length: cols }, (_, i) => (
        <div
          key={`y${i}`}
          className="absolute top-0 w-[1.5px] h-[400px] animate-beam-y pointer-events-none"
          style={{
            left: (i + 1) * cell,
            background: "linear-gradient(to bottom, transparent, var(--color-primary), transparent)",
            opacity: 0.6,
            animationDelay: `${i * 1.5}s`,
            animationDuration: "15s",
          }}
        />
      ))}
    </div>
  );
}

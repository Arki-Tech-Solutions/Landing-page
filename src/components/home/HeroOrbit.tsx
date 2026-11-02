import { CheckCircle2, GitPullRequest, Rocket } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { techCategories } from "@/content/technologies";
import { HeroParallax } from "./HeroParallax";

/**
 * Hero artwork: the Arki mark at the centre of three slowly turning orbits that carry
 * the stack we build with, a light sweeping around the outer ring, and small status
 * cards floating in front. The cards are illustrative UI, not company claims.
 * All motion stops for visitors who prefer reduced motion.
 */

/** The Arki mark (public/brand/arki-mark.svg): a rounded triangle with the aperture set high. */
const MARK_PATH =
  "M36.34 15.55L54.7 47.51A5 5 0 0 1 50.36 55L13.64 55A5 5 0 0 1 9.3 47.51L27.66 15.55A5 5 0 0 1 36.34 15.55ZM32 25.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0 -17Z";

const allTech = techCategories.flatMap((c) => c.items);
const logo = (slug: string) => allTech.find((i) => i.slug === slug);

/** Each orbit: diameter (% of the box), seconds per turn, direction, and the logos riding it. */
const orbits = [
  { size: 44, seconds: 38, reverse: false, slugs: ["openai", "python", "tensorflow"], dashed: false, depth: 10, pulse: 7 },
  { size: 70, seconds: 56, reverse: true, slugs: ["react", "nextjs", "flutter", "nodejs"], dashed: true, depth: 7, pulse: 11 },
  { size: 96, seconds: 80, reverse: false, slugs: ["aws", "docker", "kubernetes", "postgresql", "go"], dashed: false, depth: 4, pulse: 15 },
];

/** How far (px) a layer shifts with the mouse; nearer layers move more. */
const depth = (px: number) => ({ "--d": `${px}px` }) as CSSProperties;

/** Streaks that travel from the outer ring into the centre mark: angle (deg) and start delay (s). */
const inbound = [
  { angle: 38, delay: 0 },
  { angle: 162, delay: 2.2 },
  { angle: 262, delay: 4.4 },
];

function Orbit({ size, seconds, reverse, slugs, dashed, depth: d, pulse }: (typeof orbits)[number]) {
  const spin = (rev: boolean): CSSProperties => ({
    animation: `orbit-spin ${seconds}s linear infinite${rev ? " reverse" : ""}`,
  });
  const items = slugs.map(logo).filter((x): x is NonNullable<typeof x> => Boolean(x));
  return (
    <div
      className={`depth absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${dashed ? "border-dashed border-primary/25" : "border-primary/15"}`}
      style={{ width: `${size}%`, height: `${size}%`, ...depth(d) }}
    >
      {/* A data pulse running along the ring, faster than the logos and the other way. */}
      <div
        className="absolute inset-0 motion-reduce:hidden"
        style={{ animation: `orbit-spin ${pulse}s linear infinite${reverse ? "" : " reverse"}` }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_3px_color-mix(in_oklab,var(--color-primary-light)_70%,transparent)]" />
      </div>
      <div className="absolute inset-0 hero-motion" style={spin(reverse)}>
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2 + size / 40;
          return (
            <div
              key={item.slug}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
            >
              {/* Counter-rotate so each logo stays upright while the orbit turns. */}
              <div className="hero-motion" style={spin(!reverse)}>
                <div className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-[0_8px_24px_-8px_rgba(15,36,25,0.25)] sm:h-14 sm:w-14">
                  {/* eslint-disable-next-line @next/next/no-img-element -- external SVG logo from icon CDN */}
                  <img src={item.icon} alt={item.name} width={28} height={28} className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatusCard({ icon, title, detail, className, delay }: { icon: ReactNode; title: string; detail: string; className: string; delay: string }) {
  return (
    <div className={`depth absolute z-20 ${className}`} style={depth(22)}>
      <div
        className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-[0_18px_40px_-16px_rgba(15,36,25,0.35)] backdrop-blur-md animate-float"
        style={{ animationDelay: delay }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">{icon}</span>
        <span className="flex flex-col">
          <span className="text-[13px] font-bold text-ink leading-tight">{title}</span>
          <span className="text-[11px] font-medium text-muted">{detail}</span>
        </span>
      </div>
    </div>
  );
}

export function HeroOrbit() {
  return (
    <HeroParallax className="relative mx-auto aspect-square w-full max-w-[540px] lg:mx-0">
      {/* Soft glow behind everything. */}
      <div style={depth(3)} className="depth absolute inset-[18%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-primary-light)_45%,transparent),transparent_70%)] blur-2xl" />

      {/* A light sweeping around the outer orbit. */}
      <div
        className="absolute inset-[2%] rounded-full motion-reduce:hidden"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg, var(--color-primary) 40deg, transparent 80deg)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1.5px))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 1.5px))",
          animation: "orbit-spin 9s linear infinite",
          opacity: 0.55,
        }}
      />

      {orbits.map((o) => (
        <Orbit key={o.size} {...o} />
      ))}

      {/* Data streaking in from the outer ring to the centre mark. */}
      {inbound.map(({ angle, delay }) => (
        <div key={angle} className="depth absolute inset-[2%] motion-reduce:hidden" style={depth(6)}>
          <div className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
            <span
              className="absolute left-1/2 h-10 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent to-primary opacity-0"
              style={{ animation: `pulse-in 6.6s cubic-bezier(0.5, 0, 0.75, 0) ${delay}s infinite` }}
            />
          </div>
        </div>
      ))}

      {/* The Arki mark at the centre, with a slow pulse around it. */}
      <div style={depth(12)} className="depth absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 rounded-[28px] bg-primary/25 animate-ping-slow" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-ink shadow-[0_20px_50px_-12px_rgba(15,36,25,0.6)] sm:h-28 sm:w-28">
          <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16">
            <path d={MARK_PATH} fill="var(--color-primary-light)" fillRule="evenodd" />
          </svg>
        </div>
      </div>

      <StatusCard
        icon={<GitPullRequest className="h-4 w-4" />}
        title="AI code review passed"
        detail="12 checks · 0 issues"
        className="left-[-4%] top-[12%]"
        delay="0s"
      />
      <StatusCard
        icon={<Rocket className="h-4 w-4" />}
        title="Deployed to production"
        detail="2 min ago · v2.14"
        className="right-[-2%] top-[46%]"
        delay="1.6s"
      />
      <StatusCard
        icon={<CheckCircle2 className="h-4 w-4" />}
        title="Sprint goal met"
        detail="On time, two weeks"
        className="bottom-[6%] left-[4%]"
        delay="3.2s"
      />
    </HeroParallax>
  );
}

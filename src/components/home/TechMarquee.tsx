import { techCategories } from "@/content/technologies";

/** Pick a recognizable logo row from the tech catalogue (no client logos are claimed). */
const picks = ["react", "nextjs", "nodejs", "python", "flutter", "postgresql", "aws", "docker", "kubernetes", "openai", "tensorflow", "go"];

const logos = picks
  .map((slug) => techCategories.flatMap((c) => c.items).find((i) => i.slug === slug))
  .filter((x): x is NonNullable<typeof x> => Boolean(x));

/** Infinite logo strip (duplicated once so the -50% keyframe loops seamlessly). */
export function TechMarquee() {
  const row = [...logos, ...logos];
  return (
    <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
      {row.map((l, i) => (
        <div key={`${l.slug}-${i}`} className="flex items-center justify-center gap-3 mx-10 shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer group">
          {/* eslint-disable-next-line @next/next/no-img-element -- external SVG logo from icon CDN */}
          <img src={l.icon} alt={l.name} width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="text-xl font-bold text-slate-700 tracking-tight">{l.name}</span>
        </div>
      ))}
    </div>
  );
}

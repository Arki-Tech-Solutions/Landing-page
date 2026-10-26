import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { onboarding as defaults } from "@/content/home";

type Props = Partial<typeof defaults>;

/** Dark section: heading + CTA on the left, numbered steps with a dashed rail on the right. */
export function OnboardingSteps(props: Props) {
  const d = { ...defaults, ...props };
  return (
    <Reveal>
      <section className="bg-[#050b12] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,color-mix(in_oklab,var(--color-primary)_10%,transparent)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--color-primary)_6%,transparent)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 leading-[1.15]">
                {d.title1}
                <br />
                {d.title2} <span className="text-primary-light">{d.title3}</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">{d.description}</p>
              <Link href={d.cta.href} className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 active:scale-95">
                {d.cta.label}
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-[27px] top-8 bottom-8 border-l border-dashed border-white/20 z-0 hidden sm:block" />
              <div className="flex flex-col gap-12 sm:gap-16">
                {d.steps.map((s, i) => (
                  <div key={s.title} className="flex gap-8 group relative z-10">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/10 group-hover:scale-110 transition-transform duration-300 ring-4 ring-[#050b12]">
                      <Icon name={s.icon} className="w-6 h-6" />
                    </div>
                    <div className="pt-1">
                      <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest block mb-2">STEP {i + 1}</span>
                      <h4 className="text-xl font-extrabold text-white mb-3">{s.title}</h4>
                      <p className="text-white/60 text-base leading-relaxed max-w-md">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

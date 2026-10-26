import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { industries } from "@/content/home";

export function IndustriesGrid() {
  return (
    <Reveal>
      <section className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={industries.title} highlight={industries.highlight} description={industries.description} center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.items.map((it) => (
              <SpotlightCard key={it.label} radius="rounded-[24px]" padding="p-8 sm:p-10">
                <div className="relative z-10 mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden ring-1 ring-gray-100 bg-gray-50 group-hover:bg-primary-soft">
                  <Icon name={it.icons[0]} className="w-8 h-8 absolute transition-all duration-700 ease-in-out -translate-x-2.5 -translate-y-2.5 text-indigo-950 group-hover:-translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0" strokeWidth={1.6} />
                  <Icon name={it.icons[1]} className="w-8 h-8 absolute transition-all duration-700 ease-in-out translate-x-2.5 translate-y-2.5 text-indigo-950 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:scale-110" strokeWidth={1.6} />
                </div>
                <div className="flex-1 space-y-4 relative z-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80">{it.label}</h3>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-indigo-950 leading-tight transition-colors duration-300 group-hover:text-primary font-heading">{it.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-[15px] sm:text-[16px] font-medium group-hover:text-gray-600 transition-colors">
                    {it.parts.map((p, i) =>
                      "link" in p && p.link ? (
                        <Link key={i} href={p.href!} className="text-primary hover:underline decoration-primary/40 underline-offset-4 font-bold">
                          {p.link}
                        </Link>
                      ) : (
                        <span key={i}>{"text" in p ? p.text : null}</span>
                      ),
                    )}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}

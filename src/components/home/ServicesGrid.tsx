import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile, SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/content/home";

export function ServicesGrid() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading title={services.title} highlight={services.highlight} description={services.description} />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <SpotlightCard>
                <IconTile>
                  <Icon name={s.icon} className="w-7 h-7" strokeWidth={1.6} />
                </IconTile>
                <h3 className="relative z-10 text-[1.4rem] font-extrabold text-indigo-950 mb-4 tracking-tight leading-snug transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
                <p className="relative z-10 text-gray-500 leading-relaxed text-[15.5px] flex-1 font-medium transition-colors group-hover:text-gray-600">
                  <span>
                    {s.before ? `${s.before} ` : ""}
                    <Link href={s.href} className="text-primary hover:text-indigo-900 transition-colors font-bold decoration-primary/30 underline-offset-4">
                      {s.link}
                    </Link>
                  </span>
                  <span>{s.after}</span>
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

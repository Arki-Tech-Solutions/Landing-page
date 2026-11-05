import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/home";

/** "What we build": heading row, then four simple service cards in one row. */
export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-gray-50 py-16 sm:py-20 overflow-hidden">
      <Container>
        <Reveal>
          <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.25em] text-primary uppercase">{services.eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
                {services.title}
              </h2>
            </div>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-muted lg:justify-self-end">{services.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="h-full">
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_16px_32px_-16px_rgba(15,36,25,0.18)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon name={c.icon} className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

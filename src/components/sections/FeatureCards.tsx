import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = { title: string; highlight: string; description?: string; items: { title: string; text: string }[]; bg?: string };

/** Plain white cards in a 3-column grid ("How we work alongside your team"). */
export function FeatureCards({ title, highlight, description, items, bg = "bg-white" }: Props) {
  return (
    <Reveal>
      <section className={`${bg} py-16 sm:py-20`}>
        <Container>
          <SectionHeading title={title} highlight={highlight} description={description} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((it) => (
              <div key={it.title} className="group relative flex flex-col h-full bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20">
                <h3 className="text-[1.4rem] font-extrabold text-indigo-950 mb-4 tracking-tight leading-snug">{it.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15.5px] flex-1 font-medium">{it.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Reveal>
  );
}

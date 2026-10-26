import { Container } from "@/components/ui/Container";
import { techTemplateCopy, type Stat } from "@/content/technology-details";

/** Centered 4-up stat row ("Power we added..." on the reference). */
export function ImpactStats({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <Container>
        <h2 className="text-3xl lg:text-[40px] font-black text-slate-950 leading-[0.95] tracking-tighter mb-4 text-center text-balance">{techTemplateCopy.category.statsTitle}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-black text-primary mb-2 m-0">{s.value}</p>
              <p className="text-slate-600 font-medium text-sm lg:text-base m-0">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

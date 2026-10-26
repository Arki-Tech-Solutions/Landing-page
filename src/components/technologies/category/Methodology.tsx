import { ArrowRight, FilePen, RotateCw, Search, ShieldCheck, Users, Code, Gauge } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { techTemplateCopy } from "@/content/technology-details";

const copy = techTemplateCopy.category;
const { methodology, engine, methodTags } = techTemplateCopy;

type Tone = { box: string; hover: string; badge: string; title: string };
const tones: Tone[] = [
  { box: "bg-primary/10 border-primary/20 text-primary-light", hover: "hover:border-primary-light/30", badge: "group-hover:bg-primary-light group-hover:text-navy", title: "group-hover:text-primary-light" },
  { box: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400", hover: "hover:border-cyan-500/30", badge: "group-hover:bg-cyan-500", title: "group-hover:text-cyan-400" },
  { box: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", hover: "hover:border-emerald-500/30", badge: "group-hover:bg-emerald-500", title: "group-hover:text-emerald-400" },
];
const stepIcons = [Search, FilePen, ShieldCheck];

function Step({ i, n }: { i: number; n: string }) {
  const s = methodology[i];
  const t = tones[i];
  const I = stepIcons[i];
  return (
    <div className="lg:w-[22%] group">
      <div className={`relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 h-full hover:bg-white/[0.06] ${t.hover} transition-all duration-500`}>
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${t.box}`}>
          <I className="w-6 h-6" />
        </div>
        <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary border border-white/10 flex items-center justify-center text-[10px] font-black text-white transition-colors ${t.badge}`}>{n}</div>
        <h3 className={`text-white font-bold text-lg mb-4 tracking-tight uppercase transition-colors ${t.title}`}>{s.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{s.text}</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden lg:flex lg:w-[4%] items-center justify-center opacity-20" aria-hidden>
      <ArrowRight className="w-6 h-6 text-white" />
    </div>
  );
}

/** Dark "Our Lean-Agile Methodology" band: 3 steps around a central sprint "engine". */
export function Methodology() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" aria-hidden />
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24 relative">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary-light mb-4">{copy.methodTag}</p>
          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6 tracking-tight">{copy.methodTitle}</h2>
          <p className="text-xl text-white/50 font-light leading-relaxed">{copy.methodDescription}</p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 relative">
            <Step i={0} n="01" />
            <Arrow />
            <Step i={1} n="02" />
            <Arrow />
            <div className="lg:w-[26%] group relative">
              <div className="relative bg-primary/[0.05] border border-primary-light/30 rounded-[2.5rem] p-10 h-full overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10" aria-hidden>
                  <RotateCw className="w-6 h-6 text-white animate-[spin_12s_linear_infinite]" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary-light/50 flex items-center justify-center mb-6 relative">
                    <RotateCw className="w-8 h-8 text-primary-light animate-[spin_6s_linear_infinite]" />
                    <div className="absolute inset-0 bg-primary-light/10 rounded-full blur-xl" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-2 tracking-widest uppercase">{engine.title}</h3>
                  <p className="text-primary-light font-bold text-sm uppercase tracking-widest mb-6">{engine.sprints}</p>
                  <div className="flex gap-4 mb-4">
                    {[Users, Code, Gauge].map((I, k) => (
                      <div key={k} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                        <I className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-tighter">{engine.caption}</p>
                </div>
              </div>
            </div>
            <Arrow />
            <Step i={2} n="04" />
          </div>
          <div className="hidden lg:block absolute top-[70px] left-[11%] right-[11%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" aria-hidden />
        </div>
        <div className="mt-20 lg:mt-24 text-center">
          <div className="inline-flex flex-wrap justify-center gap-x-12 gap-y-6">
            {methodTags.map((m, i) => (
              <div key={m} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${["bg-primary-light", "bg-cyan-400", "bg-emerald-400"][i]}`} />
                <span className="text-white/60 text-sm font-medium tracking-wide">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

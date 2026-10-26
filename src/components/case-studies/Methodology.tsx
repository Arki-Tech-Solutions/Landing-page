import { CircleCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { onboarding } from "@/content/home";

const governance = [
  { value: "1wk", label: "Demo Cycle" },
  { value: "+3", label: "GMT Zone" },
  { value: "IP", label: "Client-Owned" },
];

/** "Engineering lifecycle": 5 numbered steps on a rail, then a governance panel with three markers. */
export function Methodology() {
  const steps = onboarding.steps;
  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                How We Deliver
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 tracking-tight leading-[1.1] mb-10 font-heading">
                A clear engineering
                <br />
                <span className="text-primary italic">Lifecycle.</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-3xl">
                Every engagement follows the same visible path, so you always know what is being built, by whom, and what comes next.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute top-[100px] left-0 w-full h-[2px] bg-slate-100 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="group flex flex-col items-center lg:items-start">
                    <div className="relative mb-12">
                      <div className="w-24 h-24 rounded-[32px] bg-white border border-slate-200 flex items-center justify-center text-indigo-950 group-hover:border-primary/40 group-hover:bg-slate-50 transition-all duration-700 shadow-xl shadow-slate-100 group-hover:shadow-2xl group-hover:shadow-primary/5">
                        <span className="text-4xl font-black tabular-nums font-heading group-hover:text-primary transition-all">0{i + 1}</span>
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                        <CircleCheck size={20} aria-hidden />
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-indigo-950 mb-4 tracking-tight font-heading group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed font-medium text-center lg:text-left">{s.text}</p>
                    <div className="h-16 w-px bg-slate-100 mt-12 mb-4 lg:hidden" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative">
            <div className="bg-slate-50 rounded-[48px] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 overflow-hidden border border-slate-100 relative z-10">
              <div className="flex-1 relative z-10 text-center lg:text-left">
                <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-primary shadow-sm">
                    <ShieldCheck size={24} aria-hidden />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Delivery Governance</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-6 tracking-tight leading-[1.1] font-heading">
                  Transparent process.
                  <br />
                  <span className="text-primary italic">Dependable delivery.</span>
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                  Code reviews, written sprint reports and shared boards keep progress visible at every stage, and you own everything we write from the first commit.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
                {governance.map((g, i) => (
                  <div key={g.label} className="contents">
                    {i > 0 ? <div className="w-[1px] h-16 bg-slate-200 hidden lg:block" /> : null}
                    <div className="flex flex-col items-center gap-3 group/stat">
                      <div className="text-4xl lg:text-5xl font-black text-indigo-950 group-hover/stat:text-primary transition-colors font-heading tabular-nums">{g.value}</div>
                      <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">{g.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

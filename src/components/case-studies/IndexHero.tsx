import { ArrowRight, Terminal } from "lucide-react";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { ClientLogo } from "@/components/proof/ClientLogo";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/case-studies";
import { clients } from "@/content/clients";
import { CaseTile } from "./CaseVisual";

const tiles = [
  "absolute top-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hover:scale-105 transition-transform duration-500",
  "absolute bottom-0 right-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-30 hover:scale-105 transition-transform duration-500 hover:z-40",
  "absolute top-8 right-4 w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10 hover:scale-105 transition-transform duration-500",
  "absolute bottom-6 left-6 w-[40%] h-[35%] rounded-3xl overflow-hidden shadow-lg border-4 border-white z-10 hover:scale-105 transition-transform duration-500",
];

/** Full-height hero: breadcrumb, giant headline, cover collage and a logo marquee pinned to the bottom. */
export function IndexHero() {
  const marquee = [...clients, ...clients];
  return (
    <section className="relative min-h-[100dvh] min-h-svh flex flex-col overflow-hidden border-b border-slate-100 bg-white pt-16">
      <Breadcrumb items={[{ label: "Resources" }, { label: "Case Studies" }]} />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden>
        <div className="absolute top-10 left-10 text-[10px] font-mono text-indigo-950 uppercase tracking-widest bg-slate-100/50 px-2 py-1 rotate-90 origin-top-left">
          COORD_LAT: 09.0054N / COORD_LONG: 38.7636E
        </div>
        <div className="absolute bottom-40 right-10 text-[10px] font-mono text-indigo-950 uppercase tracking-widest bg-slate-100/50 px-2 py-1 -rotate-90 origin-bottom-right">
          ARKI_NODE_ID: ETH_ADD_0001
        </div>
        <svg className="h-full w-full text-indigo-950" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cs-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cs-grid)" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-start py-0 relative z-10">
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 lg:px-12">
            <div className="flex-1 text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-400 font-bold text-[9px] uppercase tracking-[0.4em] mb-10 shadow-sm">
                  <Terminal className="text-primary" size={12} aria-hidden />
                  Arki_Registry / Case_Reports
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold text-indigo-950 tracking-tighter leading-[0.9] mb-8 font-heading">
                  Clearly
                  <br />
                  <span className="text-primary italic">Built.</span>
                </h1>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-xl mx-auto lg:mx-0">
                  Software we design to be seen through: clear scope, careful engineering and results that satisfy the people who use it every day.
                </p>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-indigo-950 text-white rounded-full font-bold text-base hover:bg-primary transition-all duration-500 shadow-2xl shadow-indigo-950/20 active:scale-95"
                >
                  Explore Portfolio
                  <ArrowRight size={24} aria-hidden />
                </a>
              </Reveal>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <Reveal from="right" className="w-full max-w-lg relative">
                <div className="relative aspect-square md:aspect-[4/3] w-full">
                  {tiles.map((cls, i) => (
                    <div key={i} className={cls}>
                      <div className={`w-full h-full relative bg-slate-50 ${i > 1 ? "opacity-80 hover:opacity-100 transition-opacity" : ""}`}>
                        <CaseTile cs={caseStudies[i % caseStudies.length]} />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-slate-100 py-10 overflow-hidden bg-white/50 backdrop-blur-sm relative mt-auto w-full">
        <Reveal>
          <div className="max-w-[1400px] mx-auto px-6 mb-6 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Teams we build with</p>
          </div>
        </Reveal>
        <div className="flex animate-marquee whitespace-nowrap">
          {marquee.map((c, i) => (
            <div key={i} className="flex items-center justify-center mx-12 shrink-0 transition-all duration-500 hover:-translate-y-1 hover:scale-110 cursor-pointer group">
              <div className="relative flex items-center justify-center w-[180px] h-[60px] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <ClientLogo client={c} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

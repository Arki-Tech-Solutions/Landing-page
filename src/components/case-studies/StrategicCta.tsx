import Link from "next/link";
import { ArrowRight, Cpu, ShieldCheck, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { RevealLeft } from "./RevealLeft";

/** Light closing CTA with two value cards, shown above the black contact band. */
export function StrategicCta() {
  return (
    <section className="py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 text-center lg:text-left">
            <RevealLeft>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10 shadow-sm">
                <Target className="text-primary" size={12} aria-hidden />
                Start a Project
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-indigo-950 tracking-tighter leading-[1.1] mb-10 font-heading">
                Ready to build your
                <br />
                <span className="text-primary italic">next product?</span>
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto lg:mx-0">
                Tell us what you are working on. A senior engineer from Addis Ababa will look at it with you and suggest a practical first step.
              </p>
              <Link
                href={site.bookingHref}
                className="inline-flex items-center gap-5 px-14 py-6 bg-indigo-950 text-white rounded-full font-bold text-xl hover:bg-primary transition-all duration-500 shadow-2xl shadow-indigo-950/20 active:scale-95"
              >
                Start Consultation
                <ArrowRight size={24} aria-hidden />
              </Link>
            </RevealLeft>
          </div>
          <div className="lg:w-1/3">
            <Reveal from="right">
              <div className="space-y-6">
                <div className="p-8 bg-white border border-slate-200 rounded-[32px] group hover:border-primary/40 transition-all duration-700 shadow-xl shadow-slate-100">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-3.5 rounded-2xl bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-700 shadow-sm">
                      <ShieldCheck size={24} aria-hidden />
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-950 font-heading tracking-tight leading-none">Senior-Led Teams</h3>
                  </div>
                  <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                    Experienced engineers lead architecture and review every change, so quality is built in rather than checked at the end.
                  </p>
                </div>
                <div className="p-8 bg-white border border-slate-200 rounded-[32px] group hover:border-primary/40 transition-all duration-700 shadow-xl shadow-slate-100">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-50 text-indigo-950 border border-slate-200 group-hover:bg-indigo-950 group-hover:text-white transition-colors duration-700 shadow-sm">
                      <Cpu size={24} aria-hidden />
                    </div>
                    <h3 className="text-xl font-extrabold text-indigo-950 font-heading tracking-tight leading-none">Clear Reporting</h3>
                  </div>
                  <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                    Written sprint summaries, demos and open access to boards and repositories give you a full picture at any time.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

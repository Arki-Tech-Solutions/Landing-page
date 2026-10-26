import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { techTemplateCopy, type CategoryDetail } from "@/content/technology-details";
import { shadowCard, techIcons } from "../icons";

const copy = techTemplateCopy.tech;

/** "Our proven guidelines & expertise areas": four cards plus a dark challenges panel. */
export function TechExpertise({ detail }: { detail: CategoryDetail }) {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-black tracking-[0.2em] uppercase mb-4">{copy.expertiseTag}</p>
          <h2 className="text-3xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            {copy.expertiseTitle} <span className="text-primary">{copy.expertiseHighlight}</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">{copy.expertiseDescription}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {detail.expertise.map((e) => {
            const I = techIcons[e.icon];
            return (
              <div key={e.title} className={`group bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary/15 rounded-3xl p-10 ${shadowCard} transition-all duration-500`}>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <I className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{e.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed mb-7 text-[15px]">{e.text}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {e.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 text-slate-600 text-sm">
                      <CircleCheck className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-slate-900 rounded-3xl p-10 lg:p-14">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{copy.challengesTitle}</h3>
          <p className="text-white/40 mb-10 text-sm">{copy.challengesDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.challenges.map((c, i) => (
              <div key={c} className="flex items-start gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] transition-colors">
                <div className="w-7 h-7 rounded-lg bg-primary-light/20 text-primary-light flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-white/70 text-sm leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

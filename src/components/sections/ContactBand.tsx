import Link from "next/link";
import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/content/home";

/** Black closing band: headline, stat column and a "Book a call" card. Used at the bottom of most pages. */
export function ContactBand() {
  return (
    <Reveal>
      <section id="contact" className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1.1fr] gap-12 md:gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                  {contact.title} <span className="text-primary-light">{contact.highlight}</span>
                </h2>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-sm">{contact.description}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-8 flex flex-col items-start md:items-center">
                <div className="space-y-8 w-full max-w-[280px]">
                  {contact.stats.map((s) => (
                    <div key={s.label} className="flex items-start gap-4">
                      <div className="mt-1.5 text-primary-light">
                        <Icon name={s.icon} className="h-5 w-5 shrink-0" />
                      </div>
                      <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-2">{s.value}</div>
                        <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.15em] leading-tight">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal from="right" delay={0.2}>
              <div className="bg-[#0d1117] rounded-2xl p-7 sm:p-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">{contact.cardTitle}</h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{contact.cardText}</p>
                  </div>
                  <Link href={contact.cta.href} className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 active:scale-95">
                    {contact.cta.label}
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    {contact.checks.map((c) => (
                      <div key={c} className="flex items-center gap-2.5 text-[11px] font-bold text-white/30 uppercase tracking-widest">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-primary-light">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

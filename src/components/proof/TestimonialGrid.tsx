import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";

function QuoteMark() {
  return (
    <svg width="32" height="24" viewBox="0 0 48 36" className="text-white fill-current" aria-hidden>
      <path d="M0 36V22.2C0 9.6 6.6 2.2 19.8 0l1.8 4.2C14.4 6 10.8 10 10.2 16.2H19.8V36H0zm27.6 0V22.2C27.6 9.6 34.2 2.2 47.4 0l.6 4.2c-7.2 1.8-10.8 5.8-11.4 12H46.2V36H27.6z" />
    </svg>
  );
}

/** 3-column grid of full testimonial cards (teal panels with quote, author and rating). */
export function TestimonialGrid() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08} className="h-full">
          <div className="group relative h-full bg-primary rounded-[32px] overflow-hidden p-8 border border-white/10 shadow-2xl shadow-primary/20 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 blur-3xl rounded-full" />
            <div className="mb-8 opacity-40">
              <QuoteMark />
            </div>
            <p className="text-white text-[17px] leading-relaxed mb-10 font-medium italic flex-1">&quot;{t.quote}&quot;</p>
            <div className="h-px w-full bg-white/10 mb-6" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{t.name}</h4>
                <p className="text-white/60 font-medium text-xs md:text-sm">{t.role}</p>
              </div>
              <div className="flex items-center gap-0.5" aria-label={t.rating ? `${t.rating} out of 5 stars` : "No rating yet"}>
                {Array.from({ length: 5 }, (_, s) => {
                  const on = t.rating !== undefined && s < t.rating;
                  return <Star key={s} className={`w-4 h-4 ${on ? "fill-amber-400 text-amber-400" : "text-white/30"}`} aria-hidden />;
                })}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

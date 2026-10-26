import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whyArki } from "@/content/home";

function Point({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-4 items-start group transition-transform duration-300 hover:translate-x-1.5 cursor-default">
      <div className="mt-1 flex-shrink-0 w-[22px] h-[22px] rounded-full bg-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary-light group-hover:scale-110 group-hover:shadow-[0_0_12px_color-mix(in_oklab,var(--color-primary-light)_80%,transparent)]">
        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
      </div>
      <div>
        <h4 className="text-white font-bold text-[17px] leading-tight mb-1.5 transition-colors duration-300 group-hover:text-primary-light">{title}</h4>
        <p className="text-[#9ca3af] text-[15px] leading-relaxed max-w-sm transition-colors duration-300 group-hover:text-gray-300">{text}</p>
      </div>
    </div>
  );
}

export function WhyArki() {
  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          <div className="flex flex-col">
            <Reveal>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
                {whyArki.title} <br className="hidden sm:block" />
                <span className="text-primary-light">{whyArki.highlight}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[17px] text-[#cbd5e1] leading-[1.6] max-w-md mb-12">{whyArki.description}</p>
            </Reveal>
            <div className="flex flex-col gap-8">
              {whyArki.left.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.05}>
                  <Point {...p} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:pt-[10rem]">
            <div className="flex flex-col gap-8 mb-10">
              {whyArki.right.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.05}>
                  <Point {...p} />
                </Reveal>
              ))}
            </div>
            <Reveal className="pt-2">
              <Link
                href={whyArki.cta.href}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white font-bold text-[15px] hover:bg-white hover:text-navy hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all duration-300 bg-transparent"
              >
                {whyArki.cta.label}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

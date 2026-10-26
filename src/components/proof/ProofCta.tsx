import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { title: string; text: string; cta: { label: string; href: string } };

/** Grey rounded call-to-action panel at the end of the proof pages. */
export function ProofCta({ title, text, cta }: Props) {
  return (
    <section className="my-32 px-6 py-10 md:p-12 rounded-[32px] md:rounded-[40px] bg-gray-50 border border-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-6">{title}</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-base md:text-lg">{text}</p>
      <Link
        href={cta.href}
        className="flex w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 md:gap-3 bg-primary text-white px-5 sm:px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-[15px] sm:text-base md:text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 group max-w-full mx-auto"
      >
        {cta.label}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
      </Link>
    </section>
  );
}

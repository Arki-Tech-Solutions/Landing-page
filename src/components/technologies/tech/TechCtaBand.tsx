import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { techTemplateCopy } from "@/content/technology-details";

const copy = techTemplateCopy.tech;

/** Full-width brand gradient CTA strip. */
export function TechCtaBand({ name }: { name: string }) {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08),transparent)] pointer-events-none" aria-hidden />
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">{copy.ctaTitle}</h2>
            <p className="text-white/70 text-lg">{copy.ctaText(name)}</p>
          </div>
          <Link href={site.bookingHref} className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-primary-soft transition-all shrink-0 shadow-lg">
            {copy.ctaButton}
          </Link>
        </div>
      </Container>
    </section>
  );
}

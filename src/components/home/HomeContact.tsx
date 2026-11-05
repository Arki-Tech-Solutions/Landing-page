import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContourLines } from "@/components/ui/ContourLines";
import { Reveal } from "@/components/ui/Reveal";
import { homeContact } from "@/content/home";
import { site } from "@/content/site";

/**
 * Closing contact section on the home page: a large dark card on the light contour
 * background, so it stays separate from the black footer. Contact details come from
 * content/site.ts.
 */
export function HomeContact() {
  const location = site.locations[0];
  const details = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: "Addis Ababa, Ethiopia", href: location?.mapUrl },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <ContourLines />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">
              <div>
                <h2 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
                  {homeContact.title} <span className="text-primary-light">{homeContact.highlight}</span>
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">{homeContact.description}</p>
              </div>

              <div className="flex flex-col gap-8 lg:items-start">
                <Link
                  href={homeContact.cta.href}
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-primary-dark"
                >
                  {homeContact.cta.label}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <ul className="flex flex-col gap-4 border-t border-white/10 pt-8 lg:w-full">
                  {details.map(({ icon: I, label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="group flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                        {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-primary-light">
                          <I className="h-[18px] w-[18px]" />
                        </span>
                        <span className="font-medium">{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

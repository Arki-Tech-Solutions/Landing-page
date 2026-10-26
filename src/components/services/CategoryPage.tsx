import Link from "next/link";
import { ContactBand } from "@/components/sections/ContactBand";
import { Faq } from "@/components/sections/Faq";
import { Container } from "@/components/ui/Container";
import { faqIntro, serviceCta, type ServiceLanding } from "@/content/services";
import { site } from "@/content/site";
import { Breadcrumb } from "./Breadcrumb";
import { SvcIcon } from "./icons";
import { TechIcon } from "./TechIcon";

/** Dark hero artwork that replaces the reference's stock photo: grid, glows and a large outline icon. */
function HeroArt({ icon }: { icon: string }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-primary)_45%,transparent),transparent_65%)]" />
      <div className="absolute bottom-[-20%] right-[25%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_65%)]" />
      <div className="absolute top-1/2 right-[4%] -translate-y-1/2 hidden md:flex items-center justify-center w-[560px] h-[560px] rounded-full border border-white/10">
        <div className="absolute inset-12 rounded-full border border-dashed border-white/10" />
        <div className="absolute inset-28 rounded-full border border-primary-light/20" />
        <SvcIcon name={icon} className="w-56 h-56 text-primary-light/40" strokeWidth={0.8} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-[1]" />
    </div>
  );
}

function Hero({ l }: { l: ServiceLanding }) {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-stretch overflow-hidden bg-black pt-16">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <HeroArt icon={l.icon} />
      <Breadcrumb dark items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: l.crumb }]} />
      <Container className="relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-28 lg:pb-36">
        <div className="max-w-4xl lg:border-l-[3px] border-primary lg:pl-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 self-start">
            <span className="w-2 h-2 rounded-full bg-primary-light mr-2 animate-pulse" />
            <h1 className="text-white/90 text-sm font-semibold tracking-wider uppercase m-0 leading-none">{l.eyebrow}</h1>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[84px] font-bold text-white leading-[1.05] mb-8 tracking-tighter break-words hyphens-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">{l.title}</span>
            {l.titleRest ? <> {l.titleRest}</> : null}
          </h2>
          <div className="relative mb-12">
            <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/30 to-transparent hidden lg:block" />
            <p className="text-xl md:text-[22px] text-white/80 leading-relaxed font-light max-w-3xl m-0 lg:pl-6">{l.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link
              href={serviceCta.href}
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 text-lg shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-primary/40 hover:scale-[1.02]"
            >
              {serviceCta.label}
              <span className="ml-2 font-bold transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <div className="hidden sm:flex items-center text-white/60 font-medium text-sm tracking-wide uppercase">
              <span className="w-12 h-px bg-white/30 mr-4" />
              Explore our solutions
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Offerings({ l }: { l: ServiceLanding }) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
                <span className="text-primary border-b-2 border-transparent hover:border-primary cursor-pointer transition-colors duration-300">{l.offeringsHighlight}</span>{" "}
                designed for your business needs
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-8">
                Every organisation has its own mix of workflows, customers and constraints. Our engineers fit the work around them and measure success in outcomes you can see.
              </p>
              <Link
                href={serviceCta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors duration-300 text-lg"
              >
                Talk to an {site.shortName} engineer
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              {l.offerings.map((o) => (
                <div key={o.title} className="bg-white border border-gray-200 p-8 lg:p-10 rounded shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors break-words hyphens-auto">{o.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg m-0">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Approach({ l }: { l: ServiceLanding }) {
  const a = l.approach;
  return (
    <section className="bg-black py-20 lg:py-32 border-t border-white/5">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky lg:top-32 mb-8 lg:mb-0">
              <h2 className="text-3xl lg:text-[40px] font-bold text-white leading-[1.2] mb-6 tracking-tight">
                <span className="text-primary-light">{a.highlight}</span> {a.rest}
              </h2>
              <p className="text-lg text-white/75 leading-relaxed max-w-lg mb-0 font-light">{a.description}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              {a.items.map((it) => (
                <div key={it.title} className="border border-white/10 bg-transparent p-6 lg:p-8 rounded-none first:border-t-white/10 border-t-0 hover:bg-white/5 transition-colors duration-300">
                  <h3 className="text-white text-[22px] font-semibold mb-3 break-words hyphens-auto">{it.title}</h3>
                  <p className="text-white/60 mb-0 leading-relaxed font-light text-[17px]">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TechStack({ l }: { l: ServiceLanding }) {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <Container>
        <div className="mb-16 lg:mb-20 max-w-[950px]">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
            The <span className="text-primary">tech stack</span> {l.tech.subject}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-0">{l.tech.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {l.tech.groups.map((g) => (
            <div key={g.title} className="bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">{g.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {g.items.map((t) => (
                  <div key={t.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-primary-soft hover:shadow-sm transition-all duration-200 group/tech cursor-default">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                      <TechIcon tile={t} />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 text-center leading-tight group-hover/tech:text-primary-dark transition-colors break-words hyphens-auto">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Sectors({ l }: { l: ServiceLanding }) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="mb-16 lg:mb-20 max-w-[950px]">
          <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
            <span className="text-primary">Sectors where our</span> {l.sectors.rest}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-0">{l.sectors.description}</p>
        </div>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 lg:gap-8">
          {l.sectors.items.map((s) => (
            <div key={s.title} className="break-inside-avoid mb-6 lg:mb-8 relative w-full bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 overflow-hidden transition-all duration-500 group">
              <div className="p-6 sm:p-8 flex flex-col justify-start relative z-10 w-full">
                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-primary-soft to-white group-hover:from-primary group-hover:to-primary-dark transition-all duration-500 border border-primary/15 rounded-xl flex items-center justify-center text-primary group-hover:text-white text-xl font-black uppercase shadow-inner">
                    {s.title[0]}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300 break-words hyphens-auto">{s.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-base font-light mb-6">{s.text}</p>
                <div className="mt-auto border-l-[3px] border-primary pl-4 py-1">
                  <p className="text-slate-400 font-medium leading-relaxed text-[13px] italic group-hover:text-slate-600 transition-colors duration-300">{s.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** /services/<landing> — category template. */
export function CategoryPage({ landing }: { landing: ServiceLanding }) {
  return (
    <>
      <Hero l={landing} />
      <Offerings l={landing} />
      <Approach l={landing} />
      <TechStack l={landing} />
      <Sectors l={landing} />
      {landing.faq ? <Faq highlight={landing.faq.highlight} title={landing.faq.rest} description={faqIntro} items={landing.faq.items} /> : null}
      <ContactBand />
    </>
  );
}

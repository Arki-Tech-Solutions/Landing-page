import { ClientStories } from "@/components/home/ClientStories";
import { Hero } from "@/components/home/Hero";
import { HomeContact } from "@/components/home/HomeContact";
import { HowWeStart } from "@/components/home/HowWeStart";
// import { IndustriesGrid } from "@/components/home/IndustriesGrid"; // hidden for now
import { ServicesGrid } from "@/components/home/ServicesGrid";
// import { StackLayers } from "@/components/home/StackLayers"; // hidden for now
import { WhyArki } from "@/components/home/WhyArki";
// import { CaseStudyCarousel } from "@/components/sections/CaseStudyCarousel"; // hidden until projects can be published
// import { ContactBand } from "@/components/sections/ContactBand"; // home uses HomeContact
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
// import { FeatureCards } from "@/components/sections/FeatureCards"; // "How we work alongside your team", hidden for now
// import { OnboardingSteps } from "@/components/sections/OnboardingSteps"; // home uses HowWeStart
import { StatsBand } from "@/components/sections/StatsBand";
// import { TechStackSection } from "@/components/sections/TechStackSection"; // replaced by StackLayers
// import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel"; // replaced by ClientStories
import { faq, stats, techExpertCta } from "@/content/home";

/**
 * Home page, top to bottom: Hero (light) → services (light) → Why Arki (dark) → client stories
 * (dark) → stats (dark) → FAQ (light) → "Need the right engineer" CTA (light, lines)
 * → how we start (light) → contact (dark card on light lines) → footer (dark).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyArki />
      {/* Quotes are samples: replace with approved client quotes before launch. */}
      <ClientStories />
      <StatsBand {...stats} />
      <Faq {...faq} />
      <CtaBand {...techExpertCta} />
      <HowWeStart />
      <HomeContact />

      {/* Hidden for now:
          <CaseStudyCarousel />                 case studies, until projects can be published
          <StackLayers />                       compact "Tools we trust in production"
          <TechStackSection {...techSection} /> previous long technology list
          <TestimonialCarousel {...testimonialsIntro} /> previous testimonials carousel
          <OnboardingSteps />                   previous "How we plug into your team"
          <ContactBand />                       previous contact band (still used on other pages)
          <IndustriesGrid />                    "Engineering across the sectors we know best"
          <FeatureCards {...howWeWork} />       "How we work alongside your team" */}
    </>
  );
}

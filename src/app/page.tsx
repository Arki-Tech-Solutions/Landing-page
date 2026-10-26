import { Hero } from "@/components/home/Hero";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyArki } from "@/components/home/WhyArki";
import { CaseStudyCarousel } from "@/components/sections/CaseStudyCarousel";
import { ContactBand } from "@/components/sections/ContactBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { OnboardingSteps } from "@/components/sections/OnboardingSteps";
import { StatsBand } from "@/components/sections/StatsBand";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { faq, howWeWork, stats, techExpertCta, techSection, testimonialsIntro } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyArki />
      <CaseStudyCarousel />
      <StatsBand {...stats} />
      <TechStackSection {...techSection} />
      <CtaBand {...techExpertCta} />
      <TestimonialCarousel {...testimonialsIntro} />
      <IndustriesGrid />
      <FeatureCards {...howWeWork} />
      <OnboardingSteps />
      <Faq {...faq} />
      <ContactBand />
    </>
  );
}

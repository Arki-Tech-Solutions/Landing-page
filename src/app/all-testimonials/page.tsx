import type { Metadata } from "next";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { ProofCta } from "@/components/proof/ProofCta";
import { ProofIntro } from "@/components/proof/ProofIntro";
import { TestimonialGrid } from "@/components/proof/TestimonialGrid";
import { ContactBand } from "@/components/sections/ContactBand";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: `What clients say about working with ${site.name}.`,
};

export default function AllTestimonialsPage() {
  return (
    <main className="relative min-h-screen pt-16 bg-white selection:bg-primary/10">
      <Breadcrumb items={[{ label: "Resources" }, { label: "Testimonials" }]} />
      <Container>
        <ProofIntro
          title="Client feedback:"
          highlight="In their own words"
          description="Full accounts from the teams we work with: how the engagement ran, how we communicated, and what the software changed for them."
        />
        <TestimonialGrid />
        <ProofCta
          title="Ready to write your own success story?"
          text="Work with a team that is transparent about progress, careful with details and focused on results you can measure."
          cta={{ label: "Start Free Consultation", href: site.bookingHref }}
        />
      </Container>
      <ContactBand />
    </main>
  );
}

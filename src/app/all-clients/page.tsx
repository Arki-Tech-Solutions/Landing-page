import type { Metadata } from "next";
import { ClientGrid } from "@/components/proof/ClientGrid";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { ProofCta } from "@/components/proof/ProofCta";
import { ProofIntro } from "@/components/proof/ProofIntro";
import { ContactBand } from "@/components/sections/ContactBand";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clients",
  description: `Organisations that work with ${site.name}, from Ethiopian businesses to international product teams.`,
};

export default function AllClientsPage() {
  return (
    <div className="relative min-h-screen pt-16 bg-white selection:bg-primary/10">
      <Breadcrumb items={[{ label: "Resources" }, { label: "Our Clients" }]} />
      <Container>
        <ProofIntro
          title="Teams that build"
          highlight="with Arki Tech"
          description="We work with organisations of different sizes and sectors, from Ethiopian businesses going digital to international product teams adding senior engineers. Every partnership starts with seeing the problem clearly."
        />
        <ClientGrid />
        <ProofCta
          title="Be our next success story"
          text="Bring us your product idea or your hardest engineering problem. We will help you scope it, staff it and ship it."
          cta={{ label: "Start Your Partnership", href: site.bookingHref }}
        />
      </Container>
      <ContactBand />
    </div>
  );
}

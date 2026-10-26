import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetail } from "@/components/case-studies/CaseDetail";
import { ContactBand } from "@/components/sections/ContactBand";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

/** All slugs are prerendered via generateStaticParams; unknown slugs must block to return a real 404. */
export const instant = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  "use cache";
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: `${cs.title} | Case Study`, description: cs.summary };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  "use cache";
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  return (
    <main className="relative min-h-screen bg-white">
      <CaseDetail cs={cs} />
      <div className="h-20 bg-white" />
      <ContactBand />
    </main>
  );
}

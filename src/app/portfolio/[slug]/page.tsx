import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/portfolio/ProjectPage";
import { getProject, projects } from "@/content/portfolio";

/** All slugs are prerendered via generateStaticParams; unknown slugs must block to return a real 404. */
export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  "use cache";
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} | Portfolio`,
    description: p.summary,
    alternates: { canonical: `/portfolio/${p.slug}` },
    ...(p.image ? { openGraph: { images: [p.image] } } : {}),
  };
}

export default async function ProjectRoute({ params }: PageProps<"/portfolio/[slug]">) {
  "use cache";
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  return <ProjectPage project={p} />;
}

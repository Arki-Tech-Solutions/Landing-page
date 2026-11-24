import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/portfolio/ProjectPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProject, projects } from "@/content/portfolio";
import { pageMeta } from "@/content/seo";
import { projectSchema } from "@/content/structured-data";

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
  return pageMeta({
    path: `/portfolio/${p.slug}`,
    title: `${p.name}: ${p.sector} Project`,
    description: p.summary,
    image: p.image,
    imageAlt: `${p.name} screenshot`,
  });
}

export default async function ProjectRoute({ params }: PageProps<"/portfolio/[slug]">) {
  "use cache";
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd data={projectSchema(p)} />
      <ProjectPage project={p} />
    </>
  );
}

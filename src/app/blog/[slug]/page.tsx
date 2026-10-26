import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import { PostBody } from "@/components/blog/PostBody";
import { categoryIcons } from "@/components/blog/theme";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { ContactBand } from "@/components/sections/ContactBand";
import { Reveal } from "@/components/ui/Reveal";
import { blogAuthor, blogIntro, blogPostChrome, blogPosts, getCategory, getPost } from "@/content/blog";
import { site } from "@/content/site";

/** All posts are prerendered via generateStaticParams; unknown slugs block and return a real 404. */
export const instant = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} ${post.titleHighlight}`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const category = getCategory(post.category);
  const CatIcon = categoryIcons[category.icon];
  const meta = [
    { icon: User, label: blogPostChrome.authorLabel, value: blogAuthor.name },
    { icon: Clock, label: blogPostChrome.readingTimeLabel, value: `${post.readTime} Read` },
    { icon: Calendar, label: blogPostChrome.publishedLabel, value: post.date },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white font-sans">
        <section className="pt-24 pb-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
              <div className="flex-1 min-w-0">
                <div className="mb-12">
                  <Reveal>
                    <Breadcrumb
                      className="!px-0 !pt-0 !mb-0 !max-w-none"
                      items={[{ label: blogIntro.breadcrumbParent }, { label: "Blog", href: "/blog" }, { label: post.shortTitle }]}
                    />
                  </Reveal>
                </div>
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">{category.title}</span>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-1.5 h-32 bg-primary shrink-0" />
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">{blogPostChrome.eyebrow}</span>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo-950 leading-[1.05] tracking-tight">
                        {post.title}
                        <br />
                        <span className="text-primary">{post.titleHighlight}</span>
                      </h1>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="my-16 md:my-20 max-w-4xl">
                    <div className="w-16 h-[2px] mb-8 rounded-full opacity-80 bg-gradient-to-br from-primary to-primary-dark" />
                    <p className="text-2xl md:text-[34px] text-slate-700 font-light leading-[1.5] tracking-tight">{post.excerpt}</p>
                  </div>
                </Reveal>
                <Reveal className="max-w-4xl mb-16">
                  <div className="space-y-8 border-b border-gray-50 pb-12">
                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{post.intro}</p>
                  </div>
                </Reveal>
                <PostBody blocks={post.blocks} />
              </div>
              <aside className="w-full lg:w-[400px] shrink-0 space-y-8 lg:sticky lg:top-32">
                <div className="bg-white border border-gray-100 p-8 shadow-sm">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-8 block">{blogPostChrome.metadataTitle}</span>
                  <div className="space-y-6">
                    {meta.map((m) => (
                      <div key={m.label} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-primary">
                          <m.icon className="w-4 h-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{m.label}</span>
                        </div>
                        <span className="text-[11px] font-black text-indigo-950 uppercase text-right">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-100 p-8 shadow-sm">
                  <h3 className="text-xl font-black mb-4 leading-tight text-indigo-950">{blogPostChrome.ctaTitle}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">{blogPostChrome.ctaText}</p>
                  <Link
                    href={site.bookingHref}
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all inline-block text-center rounded-lg shadow-lg shadow-primary/20"
                  >
                    {blogPostChrome.ctaLabel}
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
      <ContactBand />
    </div>
  );
}

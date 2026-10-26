import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { CategorySection } from "@/components/blog/CategorySection";
import { FeaturedCarousel } from "@/components/blog/FeaturedCarousel";
import { ContactBand } from "@/components/sections/ContactBand";
import { blogCategories, blogIntro, blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Engineering Blog",
  description: blogIntro.description,
};

export default function BlogIndexPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const categories = blogCategories
    .map((c) => ({ category: c, posts: blogPosts.filter((p) => p.category === c.id) }))
    .filter((c) => c.posts.length > 0);
  const tagCount = new Set(blogPosts.flatMap((p) => p.tags)).size;
  // Derived from the content itself; no invented reader or author numbers.
  const stats = [
    { value: String(blogPosts.length), label: "Articles", icon: "FileText" as const },
    { value: String(categories.length), label: "Categories", icon: "Layers" as const },
    { value: String(tagCount), label: "Topics", icon: "Tag" as const },
    { value: "GMT+3", label: "Written in Addis", icon: "Clock" as const },
  ];
  return (
    <>
      <BlogHero posts={featured} stats={stats} />
      <FeaturedCarousel posts={featured} />
      {categories.map((c, i) => (
        <CategorySection key={c.category.id} category={c.category} posts={c.posts} tinted={i % 2 === 1} />
      ))}
      <ContactBand />
    </>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import type { BlogCategory, BlogPost } from "@/content/blog";
import { PostCard } from "./PostCard";
import { categoryIcons } from "./theme";

/** One category block on /blog: icon tile, title + count pill, description, divider, 4-column card grid. */
export function CategorySection({ category, posts, tinted }: { category: BlogCategory; posts: BlogPost[]; tinted: boolean }) {
  const I = categoryIcons[category.icon];
  return (
    <section id={category.id} className={`py-16 sm:py-20 overflow-hidden scroll-mt-16 ${tinted ? "bg-gray-50/70" : "bg-white"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-primary/[0.07]">
              <I className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-950 tracking-tight">{category.title}</h2>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-bold">
                  {posts.length} {posts.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <p className="text-gray-500 text-base leading-relaxed max-w-2xl font-medium">{category.description}</p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-6 mb-10 h-px bg-gradient-to-r from-gray-200 via-gray-200/50 to-transparent" />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className="h-full">
              <PostCard post={p} index={i} categoryTitle={category.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

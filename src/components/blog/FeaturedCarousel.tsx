"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { blogAuthor, blogIntro, type BlogPost } from "@/content/blog";
import { coverFor } from "./theme";

/** "Featured Articles" slider: auto-advances every 6s, pauses on hover, progress bar + dots. */
export function FeaturedCarousel({ posts }: { posts: BlogPost[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = posts.length;
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count, index]);

  const post = posts[index];
  const btn =
    "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300";

  return (
    <section id="featured-articles" className="py-16 sm:py-20 bg-white overflow-hidden scroll-mt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 rounded-full bg-primary" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">{blogIntro.featuredTitle}</h2>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => go(index - 1)} aria-label="Previous article" className={btn}>
                <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <button type="button" onClick={() => go(index + 1)} aria-label="Next article" className={btn}>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Link href={`/blog/${post.slug}`} className="block relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="grid md:grid-cols-[1.1fr_1fr] min-h-[380px]"
                >
                  <div className="relative overflow-hidden min-h-[240px] md:min-h-0" style={{ background: coverFor(index) }}>
                    <div className="absolute inset-0 opacity-15">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 1px, transparent 1px)",
                          backgroundSize: "30px 30px",
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-32 h-32 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" strokeWidth={0.5} />
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[12px] font-bold uppercase tracking-widest border border-white/20">
                        <Heart className="w-3.5 h-3.5" fill="currentColor" />
                        {blogIntro.editorsPick}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-white text-[12px] font-bold tabular-nums border border-white/10">
                        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 bg-gradient-to-br from-navy via-ink to-navy">
                    <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/10 text-primary-light text-[11px] font-bold uppercase tracking-wider mb-5">
                      <Clock className="w-3 h-3" />
                      {post.readTime} read
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-white leading-snug tracking-tight mb-4 transition-colors duration-300 group-hover:text-primary-light line-clamp-2">
                      {post.title} {post.titleHighlight}
                    </h3>
                    <p className="text-white/55 leading-relaxed text-[15px] mb-6 font-medium max-w-lg line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{ background: coverFor(index) }}
                      >
                        {blogAuthor.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{blogAuthor.name}</p>
                        <p className="text-xs text-white/40 font-medium">
                          {blogAuthor.role} · {post.date}
                        </p>
                      </div>
                      <div className="ml-auto hidden sm:block">
                        <span className="inline-flex items-center gap-1.5 text-primary-light text-sm font-bold transition-all group-hover:gap-3">
                          {blogIntro.readArticle}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                key={`progress-${index}-${paused}`}
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: paused ? undefined : "100%" }}
                transition={paused ? { duration: 0 } : { duration: 6, ease: "linear" }}
              />
            </div>
          </div>
        </Reveal>
        <div className="mt-6 flex items-center justify-center gap-2">
          {posts.map((p, i) => (
            <button key={p.slug} type="button" onClick={() => go(i)} aria-label={`Go to article ${i + 1}`} className="relative flex items-center justify-center p-1">
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

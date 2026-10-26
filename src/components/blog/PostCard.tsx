"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { blogAuthor, type BlogPost } from "@/content/blog";
import { coverFor } from "./theme";

/** Article card in the category grids: cover band, title, excerpt, tags, author row, cursor spotlight on hover. */
export function PostCard({ post, index, categoryTitle }: { post: BlogPost; index: number; categoryTitle: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  const cover = coverFor(index);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPos({ x: -200, y: -200 });
      }}
      className="group relative flex flex-col h-full rounded-2xl p-[1.5px] cursor-pointer transition-all duration-500 ease-out"
      style={{
        background: hover
          ? `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--color-primary) 40%, transparent), transparent 50%)`
          : "transparent",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hover
          ? "0 25px 60px -12px color-mix(in oklab, var(--color-primary) 20%, transparent), 0 12px 28px -8px color-mix(in oklab, var(--color-primary) 10%, transparent)"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div
          className="relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            border: hover ? "1px solid transparent" : "1px solid rgb(243 244 246)",
            backgroundColor: hover ? "color-mix(in oklab, var(--color-primary-soft) 85%, transparent)" : "white",
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-400"
            style={{
              opacity: hover ? 1 : 0,
              background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--color-primary) 6%, transparent), transparent 55%)`,
            }}
          />
          <div className="relative h-40 sm:h-44 overflow-hidden" style={{ background: cover }}>
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                {categoryTitle}
              </span>
            </div>
            <div className="absolute bottom-3 right-4 text-[5rem] font-black text-white/[0.08] leading-none select-none">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
          <div className="relative z-10 flex flex-col flex-1 p-6">
            <h3 className="text-[1.1rem] font-extrabold text-indigo-950 leading-snug tracking-tight mb-3 transition-colors duration-300 group-hover:text-primary line-clamp-2">
              {post.title} {post.titleHighlight}
            </h3>
            <p className="text-gray-500 leading-relaxed text-[14px] font-medium mb-5 flex-1 line-clamp-3">{post.excerpt}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md bg-gray-50 text-gray-500 text-[11px] font-semibold border border-gray-100 transition-colors group-hover:bg-primary/5 group-hover:text-primary/80 group-hover:border-primary/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 transition-colors group-hover:border-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: cover }}>
                  {blogAuthor.initials}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-indigo-950">{blogAuthor.name}</p>
                  <p className="text-[11px] text-gray-400 font-medium">{blogAuthor.role}</p>
                </div>
              </div>
              <span className="text-[12px] text-gray-400 font-medium">{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

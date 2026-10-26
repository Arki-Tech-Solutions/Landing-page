"use client";

import { motion } from "motion/react";
import { FileText, Layers, Tag, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/proof/Breadcrumb";
import { Reveal } from "@/components/ui/Reveal";
import { blogAuthor, blogIntro, type BlogPost } from "@/content/blog";

const lines = [
  { d: "M-50,200 L400,-50", delay: 0.2 },
  { d: "M-50,300 L600,-50", delay: 0.4 },
  { d: "M-50,450 L800,-50", delay: 0.6 },
  { d: "M-50,650 L1000,-50", delay: 0.8 },
  { d: "M1050,400 L600,1050", delay: 0.3 },
  { d: "M1050,600 L400,1050", delay: 0.5 },
  { d: "M1050,800 L200,1050", delay: 0.7 },
];
const dots = [
  { x: 300, y: 150 },
  { x: 700, y: 400 },
  { x: 200, y: 800 },
  { x: 800, y: 250 },
];

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-white" />
      <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-soft/20 blur-[120px]" />
      <div className="absolute top-[20%] -right-[15%] w-[50%] h-[50%] rounded-full bg-primary-soft/15 blur-[100px]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-primary-soft/10 blur-[100px]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.4] text-primary" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="blogLineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((l, i) => (
          <motion.path
            key={i}
            d={l.d}
            stroke="currentColor"
            strokeWidth="3.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.4, 0.2] }}
            transition={{ duration: 2.5, delay: l.delay, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 1 }}
          />
        ))}
        {lines.map((l, i) => (
          <motion.path
            key={`g${i}`}
            d={l.d}
            stroke="url(#blogLineGlow)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 0.2, 0.2, 0], pathOffset: [0, 0.8, 1, 1], opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 3, delay: l.delay + 0.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />
        ))}
        {dots.map((p, i) => (
          <motion.circle
            key={`c${i}`}
            cx={p.x}
            cy={p.y}
            r="1.5"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 4, delay: 0.8 * i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

const floatPos = [
  "top-[-5%] right-[12%] w-[330px] z-20",
  "top-[35%] right-[-8%] w-[350px] z-[15]",
  "bottom-[-5%] right-[22%] w-[330px] z-10",
];

function FloatingCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: [0, 1.5, 3][index] }}
      className={`p-5 rounded-3xl bg-white/70 border border-gray-100 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,36,25,0.06)] hover:shadow-[0_20px_60px_rgba(15,36,25,0.12)] transition-shadow duration-500 absolute ${floatPos[index]}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded-lg bg-primary-soft text-primary border border-primary/15 text-[10px] font-black uppercase tracking-widest leading-none">
          {post.tags[0]}
        </span>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mt-0.5">{post.tags[1]}</span>
      </div>
      <h4 className="text-[15px] font-bold text-indigo-950 leading-snug mb-4 line-clamp-2">
        {post.title} {post.titleHighlight}
      </h4>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-[10px] font-bold text-white">
          {blogAuthor.initials}
        </div>
        <div>
          <p className="text-[11px] font-bold text-indigo-950/90 leading-none">{blogAuthor.name}</p>
          <p className="text-[9px] text-gray-400 font-medium mt-1 uppercase tracking-wider">{post.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function BlogHero({ posts, stats }: { posts: BlogPost[]; stats: { value: string; label: string; icon: "FileText" | "Layers" | "Tag" | "Clock" }[] }) {
  const icons = { FileText, Layers, Tag, Clock };
  return (
    <section className="relative pt-16 pb-8 lg:pb-12 overflow-hidden min-h-[85vh] flex flex-col items-stretch">
      <HeroBackground />
      <Breadcrumb items={[{ label: blogIntro.breadcrumbParent }, { label: "Blog" }]} />
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col items-start gap-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft border border-primary/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_color-mix(in_oklab,var(--color-primary)_50%,transparent)]" />
                <span className="text-[11px] font-black tracking-[0.2em] text-primary uppercase">{blogIntro.badge}</span>
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] text-indigo-950 tracking-tight">
                {blogIntro.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">{blogIntro.highlight}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-xl text-lg text-gray-500 leading-relaxed font-medium">{blogIntro.description}</p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#featured-articles"
                className="px-8 py-4 rounded-xl bg-primary text-white text-sm font-black shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all active:scale-95 uppercase tracking-widest"
              >
                {blogIntro.cta}
              </a>
            </Reveal>
          </div>
          <div className="relative h-[600px] hidden lg:block">
            {posts.slice(0, 3).map((p, i) => (
              <FloatingCard key={p.slug} post={p} index={i} />
            ))}
            <div className="absolute top-[10%] right-[20%] w-48 h-48 bg-primary/5 blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[35%] w-40 h-40 bg-primary/5 blur-[70px] rounded-full pointer-events-none" />
          </div>
        </div>
        <Reveal delay={0.4} className="mt-12 lg:mt-16 pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const I = icons[s.icon];
              return (
                <div key={s.label} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center relative group shrink-0">
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <I className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors relative z-10" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-indigo-950 tracking-tight">{s.value}</p>
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mt-0.5">{s.label}</p>
                  </div>
                  {i < 3 ? <div className="hidden lg:block ml-auto w-px h-10 bg-gradient-to-b from-transparent via-gray-200 to-transparent" /> : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

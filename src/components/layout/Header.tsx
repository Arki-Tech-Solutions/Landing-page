"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";

function Dots({ active }: { active?: boolean }) {
  return (
    <svg className={`h-3 w-3 shrink-0 transition-opacity duration-200 translate-y-[1.5px] ${active ? "opacity-100 text-primary" : "opacity-40"}`} viewBox="0 0 8 8" fill="currentColor">
      <circle cx="2" cy="2" r="1.2" />
      <circle cx="6" cy="2" r="1.2" />
      <circle cx="2" cy="6" r="1.2" />
      <circle cx="6" cy="6" r="1.2" />
    </svg>
  );
}

const menus = ["Services", "Technologies", "Industries", "Resources"] as const;

/** Fixed site header. Transparent at the top of the page, frosted white once scrolled. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        scrolled ? "bg-white/85 backdrop-blur-md border-b border-slate-200 py-0 shadow-sm" : "bg-transparent border-transparent py-0 shadow-none"
      }`}
    >
      <div className="w-full mx-auto px-6 lg:px-8 max-w-[1400px] flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden min-[992px]:flex items-center gap-8">
          {menus.map((m) => (
            <div key={m} className="relative z-20">
              <button type="button" className="relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[15px] font-semibold leading-none outline-none transition-all duration-200 text-slate-700 hover:text-primary">
                <span>{m}</span>
                <Dots />
              </button>
            </div>
          ))}
        </nav>
        <div className="hidden min-[992px]:flex items-center gap-4">
          <Link href={site.bookingHref} className="inline-flex items-center rounded-full border-2 border-primary px-6 py-2.5 text-sm font-bold transition-all duration-300 bg-primary/10 text-primary hover:bg-primary/15">
            Partner with Us
          </Link>
        </div>
        <button type="button" aria-label="Toggle navigation menu" className="inline-flex h-10 w-10 min-[992px]:hidden items-center justify-center rounded-md border transition-all duration-300 border-slate-200 text-slate-900 hover:bg-slate-100">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

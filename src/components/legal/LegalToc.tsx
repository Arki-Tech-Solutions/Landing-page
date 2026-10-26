"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Sticky table of contents that highlights the section currently in view. */
export function LegalToc({ items, variant }: { items: Item[]; variant: "privacy" | "cookie" }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px" },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [items]);

  if (variant === "privacy") {
    return (
      <nav className="flex flex-col gap-4">
        {items.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className={`text-sm font-medium transition-all duration-300 ${
              active === i.id ? "text-primary translate-x-1" : "text-gray-500 hover:text-indigo-950"
            }`}
          >
            {i.label}
          </a>
        ))}
      </nav>
    );
  }
  return (
    <nav className="flex flex-col border-l border-slate-200">
      {items.map((i) => (
        <a
          key={i.id}
          href={`#${i.id}`}
          className={`py-3 px-6 transition-all text-sm font-medium border-l-2 -ml-[2px] ${
            active === i.id ? "text-primary border-primary" : "text-slate-500 border-transparent hover:text-primary hover:border-primary"
          }`}
        >
          {i.label}
        </a>
      ))}
    </nav>
  );
}

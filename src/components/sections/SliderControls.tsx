"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

/** Pill dots + prev/next square buttons shared by the case study and testimonial carousels. */
export function SliderDots({ count, active, onSelect }: { count: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex gap-3 items-center">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`rounded-full transition-all duration-300 ${i === active ? "h-2.5 w-10 bg-primary shadow-lg shadow-primary/30" : "h-2.5 w-2.5 bg-gray-200 hover:bg-gray-300"}`}
        />
      ))}
    </div>
  );
}

export function SliderArrows({ onPrev, onNext, label }: { onPrev: () => void; onNext: () => void; label: string }) {
  return (
    <div className="flex gap-4">
      <button type="button" onClick={onPrev} aria-label={`Previous ${label}`} className="w-12 h-10 sm:h-11 rounded-xl border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:bg-indigo-950 hover:text-white transition-all active:scale-95 shadow-sm">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button type="button" onClick={onNext} aria-label={`Next ${label}`} className="w-12 h-10 sm:h-11 rounded-xl bg-indigo-950 flex items-center justify-center text-white hover:bg-primary transition-all active:scale-95 shadow-md shadow-indigo-200/50">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

import type { ReactNode } from "react";

/**
 * Plain white card: thin border, and on hover a small lift, a slightly darker border
 * and a soft neutral shadow. (It used to have a green glow that followed the cursor;
 * that was removed, the name stays so existing pages keep working.)
 */
export function SpotlightCard({ children, radius = "rounded-2xl", padding = "p-8" }: { children: ReactNode; radius?: string; padding?: string }) {
  return (
    <div
      className={`group relative flex flex-col h-full ${radius} ${padding} border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_16px_32px_-16px_rgba(15,36,25,0.18)]`}
    >
      {children}
    </div>
  );
}

/** Square icon tile used at the top of spotlight cards. Rotates/scales the icon on card hover. */
export function IconTile({ children, size = "w-15 h-15" }: { children: ReactNode; size?: string }) {
  return (
    <div className={`relative z-10 mb-8 ${size} rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden ring-1 ring-gray-100 bg-gray-50 group-hover:bg-primary-soft group-hover:ring-primary/20`}>
      <div className="transition-all duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110 text-indigo-950 group-hover:text-primary">{children}</div>
    </div>
  );
}

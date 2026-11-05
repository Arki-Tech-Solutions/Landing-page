"use client";

import { useRef, type KeyboardEvent } from "react";

export type HeaderVariant = "light" | "dark";

/** Small chevron after each menu label; points up while its mega-menu is open. */
export function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={[
        "h-3 w-3 shrink-0 transition-[transform,opacity] duration-200 translate-y-[1px]",
        open ? "rotate-180 opacity-100 text-primary" : "opacity-50",
      ].join(" ")}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 4.5 6 7.5 9 4.5" />
    </svg>
  );
}

/** Desktop nav button that opens a mega-menu on hover and reports its position. */
export function MenuTrigger({
  label,
  open,
  variant,
  onEnter,
  onLeave,
}: {
  label: string;
  open: boolean;
  variant: HeaderVariant;
  onEnter: (rect: DOMRect) => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const show = () => {
    if (ref.current) onEnter(ref.current.getBoundingClientRect());
  };
  const toggle = () => (open ? onLeave() : show());
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      onLeave();
      ref.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      show();
    }
  };

  return (
    <div className="relative z-20" onMouseEnter={show} onMouseLeave={onLeave}>
      <button
        ref={ref}
        type="button"
        className={[
          "relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[15px] font-semibold leading-none outline-none transition-all duration-200",
          open
            ? variant === "dark"
              ? "text-primary-light"
              : "text-primary"
            : variant === "dark"
              ? "text-white group-hover:text-primary-light"
              : "text-slate-700 hover:text-primary",
        ].join(" ")}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        <span>{label}</span>
        <Chevron open={open} />
      </button>
    </div>
  );
}

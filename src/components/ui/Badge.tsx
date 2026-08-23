import type { ReactNode } from "react";
import type { BadgeTone } from "@/data/homepage";

const toneClasses: Record<BadgeTone, string> = {
  accent: "border-gray-800 bg-indigo-500/10 text-indigo-300",
  pink: "border-gray-800 bg-pink-500/10 text-pink-400",
};

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
};

export function Badge({ children, tone = "accent" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-bold uppercase tracking-wider ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}


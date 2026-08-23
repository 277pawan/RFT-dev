import type { LucideIcon } from "lucide-react";
import type { BadgeTone } from "@/data/homepage";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: BadgeTone;
};

const iconBoxStyles: Record<BadgeTone, string> = {
  pink: "bg-pink-500/10 border-gray-700 text-pink-400",
  accent: "bg-purple-500/10 border-gray-700 text-purple-400",
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  tone = "pink",
}: FeatureCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#0c0e17] p-7 transition-all duration-200 hover:border-white/[0.15]">
      <div
        className={`flex size-9 items-center justify-center rounded-lg border ${iconBoxStyles[tone]}`}
      >
        <Icon className="size-6" strokeWidth={2} aria-hidden />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="text-xs leading-relaxed text-gray-400">{description}</p>
      </div>
    </article>
  );
}


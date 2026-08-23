import { Badge } from "@/components/ui/Badge";
import type { SectionIntro } from "@/data/homepage";

type SectionHeaderProps = SectionIntro & {
  className?: string;
};

export function SectionHeader({
  badge,
  badgeTone = "accent",
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      <Badge tone={badgeTone}>{badge}</Badge>
      <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-[32px]">
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-[600px] text-base leading-normal text-muted ${centered ? "text-center" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}


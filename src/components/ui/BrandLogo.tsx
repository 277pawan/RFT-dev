import { Link } from "react-router-dom";
import { site } from "@/data/site";

type BrandLogoProps = {
  size?: "sm" | "md";
  showWordmark?: boolean;
};

export function BrandLogo({ size = "md", showWordmark = true }: BrandLogoProps) {
  const iconSize = size === "sm" ? "size-7" : "size-8";
  const text = size === "sm" ? "text-base" : "text-lg";

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group">
      <img
        src={site.logoSrc}
        alt="React Form Toaster logo"
        width={32}
        height={32}
        className={`${iconSize} rounded-lg object-cover shadow-sm`}
      />
      {showWordmark ? (
        <span className={`${text} font-bold text-white tracking-tight`}>
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}

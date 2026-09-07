import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "github" | "glow";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent hover:opacity-90 text-white font-bold border border-gray-800",
  secondary:
    "border border-gray-800 bg-surface text-text font-semibold hover:border-gray-700 hover:bg-surface-raised",
  ghost:
    "border border-gray-800 bg-surface text-muted hover:border-gray-700 hover:bg-surface-raised hover:text-text",
  github:
    "border border-gray-800 bg-surface-raised text-muted hover:border-gray-700 hover:bg-surface",
  glow: "bg-accent text-white hover:opacity-90 border border-gray-800",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "px-4 py-2 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-lg",
  lg: "px-7 py-3.5 text-sm rounded-lg",
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "", size = "md" } = props;

  const classes = `inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    if (props.external || props.href.startsWith("http")) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}


import type { ReactNode } from "react";

type PlaygroundPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
  headerRight?: ReactNode;
};

export function PlaygroundPanel({
  title,
  children,
  className = "",
  headerRight,
}: PlaygroundPanelProps) {
  return (
    <div
      className={`flex h-full min-h-0 flex-col border-border bg-surface ${className}`}
    >
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-border bg-surface-raised px-3">
        <span className="truncate font-mono text-[11px] text-muted">{title}</span>
        {headerRight}
      </div>
      <div className="min-h-0 flex-1 overflow-auto bg-surface">{children}</div>
    </div>
  );
}

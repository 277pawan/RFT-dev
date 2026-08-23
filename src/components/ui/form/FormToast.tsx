import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

type FormToastProps = {
  children: ReactNode;
  visible?: boolean;
};

/** Figma success toast float — #1c382a / #10b981, 12px semibold. */
export function FormToast({ children, visible = true }: FormToastProps) {
  if (!visible) return null;

  return (
    <div
      role="status"
      className="absolute bottom-3 left-[30px] z-10 flex max-w-[calc(100%-2.5rem)] items-center gap-2.5 rounded-lg border border-success bg-success-bg px-4 py-3 shadow-[0_12px_12px_rgba(0,0,0,0.25)]"
    >
      <CheckCircle2
        className="size-4 shrink-0 text-success"
        strokeWidth={2}
        aria-hidden
      />
      <span className="text-xs font-semibold leading-none text-white">
        {children}
      </span>
    </div>
  );
}

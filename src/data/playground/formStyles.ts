import type { CSSProperties } from "react";

/** Inline styles for field colors — safe from Tailwind JIT purging in prop strings */
export const playgroundInputStyle: CSSProperties = {
  backgroundColor: "#181b2b",
  border: "1px solid #1d2138",
  color: "#f1f2f6",
  borderRadius: "6px",
};

export const playgroundSubmitStyle: CSSProperties = {
  backgroundColor: "#5d5fef",
  color: "#ffffff",
  border: "none",
};

export const playgroundFormClassNames = {
  containerClassName:
    "formbox-dark w-full rounded-xl border border-border bg-surface p-5 overflow-visible",
  innerContainerClassName: "space-y-4 overflow-visible",
  buttonContainerClassName: "pt-2 flex w-full",
  inputClassName: "w-full rounded-md border !border-border-strong !bg-surface-input !text-text placeholder:!text-faint",
  labelClassName: "block text-xs font-semibold text-muted mb-1.5",
  requiredClassName: "text-danger ml-0.5",
  errorClassName: "text-danger text-[11px] font-medium",
  submitClassName:
    "w-full rounded-md py-3 font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90",
  passwordToggleClassName: "text-faint hover:text-text transition-colors",
} as const;

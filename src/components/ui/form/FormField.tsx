import type { InputHTMLAttributes } from "react";

type FormFieldProps = {
  label: string;
  error?: string;
  hint?: string;
  /** Show hint/error on the right of the label row (Figma password pattern). */
  hintInline?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export function FormField({
  label,
  error,
  hint,
  hintInline = false,
  id,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id ?? inputProps.name;
  const showRight = hintInline && (error || hint);
  const hasError = Boolean(error);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor={fieldId}
          className="text-xs font-semibold leading-none text-muted"
        >
          {label}
        </label>
        {showRight ? (
          <span className="text-[11px] font-normal leading-none text-danger">
            {error ?? hint}
          </span>
        ) : null}
      </div>
      <input
        id={fieldId}
        {...inputProps}
        className={`w-full rounded-md border bg-surface-input px-3 py-3 text-[13px] font-normal leading-none text-text outline-none transition-colors placeholder:text-faint focus:border-accent ${
          hasError ? "border-danger" : "border-border"
        }`}
      />
      {!hintInline && error ? (
        <span className="text-[11px] text-danger">{error}</span>
      ) : null}
    </div>
  );
}

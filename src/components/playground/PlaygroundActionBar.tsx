import { Copy, Eye, EyeOff, LayoutTemplate, RotateCcw } from "lucide-react";
import { useState } from "react";
import { usePlayground } from "@/components/playground/PlaygroundProvider";

/** Playground toolbar for preview mode, response visibility, copy, and reset. */
export function PlaygroundActionBar() {
  const {
    preset,
    reset,
    previewMode,
    setPreviewMode,
    showResponse,
    setShowResponse,
  } = usePlayground();

  const [copied, setCopied] = useState(false);

  const copySchema = async () => {
    const code = (preset.codeFiles["schema.ts"] ?? []).join("\n");
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-800 bg-surface-raised px-3 py-2">
      <span className="mr-1 text-[12px] font-semibold uppercase tracking-wider text-muted">
        Preview mode
      </span>
      <div className="flex rounded-lg border border-gray-800 bg-surface p-0.5">
        <button
          type="button"
          onClick={() => setPreviewMode("inline")}
          className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
            previewMode === "inline"
              ? "bg-accent text-white"
              : "text-muted hover:text-text"
          }`}
        >
          Inline
        </button>
        <button
          type="button"
          onClick={() => setPreviewMode("modal")}
          className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
            previewMode === "modal"
              ? "bg-accent text-white"
              : "text-muted hover:text-text"
          }`}
        >
          Modal
        </button>
      </div>

      <div className="mx-1 hidden h-5 w-px bg-border sm:block" />
      <button
        type="button"
        onClick={copySchema}
        className="inline-flex items-center gap-1.5 rounded-md border border-gray-700 bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-border-strong hover:text-text"
      >
        <Copy className="size-3.5" aria-hidden />
        {copied ? "Copied!" : "Copy schema"}
      </button>

      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center gap-1.5 rounded-md border border-gray-700 bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-border-strong hover:text-text"
      >
        <RotateCcw className="size-3.5" aria-hidden />
        Reset
      </button>

      <button
        type="button"
        onClick={() => setShowResponse(!showResponse)}
        aria-pressed={showResponse}
        className="inline-flex items-center gap-1.5 rounded-md border border-gray-700 bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-border-strong hover:text-text"
      >
        {showResponse ? <Eye className="size-3.5" aria-hidden /> : <EyeOff className="size-3.5" aria-hidden />}
        {showResponse ? "Hide response" : "Show response"}
      </button>

      <div className="ml-auto hidden items-center gap-2 sm:flex">
        <LayoutTemplate className="size-3.5 text-faint" aria-hidden />
        <span className="text-[11px] text-faint">
          {preset.fields.length} fields · ~
          {Math.max(0, 120 - preset.fields.length * 18)} lines saved vs manual
          form
        </span>
      </div>
    </div>
  );
}

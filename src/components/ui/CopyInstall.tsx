import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyInstallProps = {
  command: string;
};

export function CopyInstall({ command }: CopyInstallProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  const [pkgManager, ...rest] = command.split(" ");
  const packageName = rest.join(" ");

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-between gap-4 rounded-lg border border-gray-600 bg-[#111420] px-4 py-2.5 text-left transition-all hover:border-white/20 hover:bg-[#151928] cursor-pointer"
      aria-label="Copy install command"
    >
      <code className="font-mono text-xs font-medium tracking-tight">
        <span className="text-[#ec4899] font-bold">$ </span>
        <span className="text-[#ec4899] font-semibold">{pkgManager}</span>
        <span className="text-gray-300"> {packageName}</span>
      </code>
      {copied ? (
        <Check className="size-3.5 text-[#10b981]" aria-hidden />
      ) : (
        <Copy
          className="size-3.5 text-gray-500 hover:text-gray-300 transition-colors"
          aria-hidden
        />
      )}
    </button>
  );
}


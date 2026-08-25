import { useState } from "react";
import { Check } from "lucide-react";
import { PlaygroundSplit } from "@/components/playground/variants/PlaygroundSplit";
import { getPlaygroundPreset, playgroundPresets } from "@/data/playground";
import type { CodeTabKey } from "@/data/playground/types";

function preferredCodeTab(presetId: string): CodeTabKey {
  const preset = getPlaygroundPreset(presetId);
  // Live preview parses formConfig.ts when present; show that tab first.
  if (preset.codeFiles["formConfig.ts"]?.length) return "formConfig.ts";
  if (preset.codeFiles["App.tsx"]?.length) return "App.tsx";
  return "schema.ts";
}

export function ExamplesGallery() {
  const examples = playgroundPresets.slice(0, 4);
  const [selectedId, setSelectedId] = useState(examples[0]?.id ?? "");
  const selected = getPlaygroundPreset(selectedId);
  const codeTab = preferredCodeTab(selected.id);

  return (
    <div className="mt-8 flex w-full flex-col gap-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {examples.map((example) => (
          <button
            key={example.id}
            type="button"
            onClick={() => setSelectedId(example.id)}
            className={`group rounded-xl border p-4 text-left transition-colors ${selectedId === example.id ? "border-cyan-400/70 bg-cyan-400/10" : "border-gray-800 bg-surface hover:border-gray-600"}`}
          >
            <span className="flex items-center justify-between gap-3 text-sm font-semibold text-text">
              {example.label}
              {selectedId === example.id ? <Check className="size-4 shrink-0 text-cyan-300" aria-hidden /> : null}
            </span>
            <span className="mt-2 block text-xs leading-relaxed text-muted">{example.description}</span>
          </button>
        ))}
      </div>
      <PlaygroundSplit
        key={selected.id}
        presetId={selected.id}
        codeTab={codeTab}
        compact
        readOnly
        embed
        className="w-full"
      />
    </div>
  );
}

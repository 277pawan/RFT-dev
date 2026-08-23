import type { CodeTabKey } from "@/data/playground/types";
import { PlaygroundSplit } from "@/components/playground/variants/PlaygroundSplit";

type DocExampleProps = {
  preset: string;
  title?: string;
  description?: string;
  showCode?: boolean;
  showState?: boolean;
  codeTab?: CodeTabKey;
};

/** Compact docs embed — preview-first, no full split unless showCode */
export function DocExample({
  preset,
  title,
  description,
  showCode = false,
  showState = false,
  codeTab = "schema.ts",
}: DocExampleProps) {
  return (
    <figure className="w-full min-w-0">
      {title ? (
        <figcaption className="mb-2 text-sm font-semibold text-text">
          {title}
        </figcaption>
      ) : null}
      {description ? (
        <p className="mb-4 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}

      <PlaygroundSplit
        presetId={preset}
        showCode={showCode}
        compact
        showState={showState}
        codeTab={codeTab}
        readOnly
        embed
      />
    </figure>
  );
}

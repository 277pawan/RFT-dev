import type { CodeTabKey } from "@/data/playground/types";
import { PlaygroundProvider } from "@/components/playground/PlaygroundProvider";
import { PlaygroundShell } from "@/components/playground/PlaygroundShell";
import { PlaygroundCodeEditor } from "@/components/playground/PlaygroundCodeEditor";
import { PlaygroundPreviewPane } from "@/components/playground/PlaygroundPreviewPane";
import { PlaygroundStatePane } from "@/components/playground/PlaygroundStatePane";

type PlaygroundSplitProps = {
  presetId?: string;
  showCode?: boolean;
  showState?: boolean;
  compact?: boolean;
  codeTab?: CodeTabKey;
  readOnly?: boolean;
  /** Docs embed — preview only, no action bar */
  embed?: boolean;
  className?: string;
};

export function PlaygroundSplit({
  presetId,
  showCode = true,
  showState = false,
  compact = false,
  codeTab = "schema.ts",
  readOnly = true,
  embed = false,
  className = "",
}: PlaygroundSplitProps) {
  return (
    <PlaygroundProvider presetId={presetId}>
      <PlaygroundShell
        compact={compact || embed}
        className={className}
        showCode={showCode}
        code={
          <PlaygroundCodeEditor
            tabs={[codeTab]}
            activeTab={codeTab}
            readOnly={readOnly}
          />
        }
        preview={<PlaygroundPreviewPane />}
        state={
          showState ? <PlaygroundStatePane /> : undefined
        }
      />
    </PlaygroundProvider>
  );
}

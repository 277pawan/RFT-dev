/**
 * Editable code area for /playground.
 *
 * Reads from and writes to the provider's `codeFiles` via `updateCodeFile`
 * so every keystroke triggers live re-compilation in the preview.
 */
import { useEffect, useState } from "react";
import { CodeEditor } from "@/components/ui/CodeEditor";
import { usePlayground } from "@/components/playground/PlaygroundProvider";
import { languageFromFilename } from "@/lib/prism";
import type { CodeTabKey } from "@/data/playground/types";

type PlaygroundCodeEditorProps = {
  tabs?: CodeTabKey[];
  activeTab?: CodeTabKey;
  readOnly?: boolean;
  className?: string;
};

const defaultTabs: CodeTabKey[] = ["schema.ts", "formConfig.ts", "App.tsx"];

export function PlaygroundCodeEditor({
  tabs = defaultTabs,
  activeTab: fixedTab,
  readOnly = false,
  className = "",
}: PlaygroundCodeEditorProps) {
  const { preset, codeFiles, updateCodeFile } = usePlayground();
  const availableTabs = tabs.filter((tab) => preset.codeFiles[tab]?.length);
  const [activeTab, setActiveTab] = useState<CodeTabKey>(
    fixedTab ?? availableTabs[0] ?? "schema.ts",
  );

  useEffect(() => {
    const nextTabs = tabs.filter((tab) => preset.codeFiles[tab]?.length);
    if (!fixedTab) {
      setActiveTab(nextTabs[0] ?? "schema.ts");
    }
  }, [preset.id, preset.codeFiles, tabs, fixedTab]);

  const currentTab = fixedTab ?? activeTab;
  const showTabs = availableTabs.length > 1 && !fixedTab;

  return (
    <div className={`flex h-full min-h-[440px] flex-col ${className}`}>
      {showTabs ? (
        <div className="flex shrink-0 border-b border-border bg-surface-raised">
          {availableTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`border-r border-border px-4 py-2.5 font-mono text-[11px] last:border-r-0 ${
                currentTab === tab
                  ? "border-b-2 border-b-accent bg-surface text-text"
                  : "text-faint hover:bg-surface hover:text-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : (
        <div className="shrink-0 border-b border-border bg-surface-raised px-4 py-2.5 font-mono text-[11px] text-muted">
          {currentTab}
        </div>
      )}

      <div className="flex min-h-[400px] flex-1 flex-col overflow-hidden">
        <CodeEditor
          value={codeFiles[currentTab] ?? ""}
          onChange={(value) => updateCodeFile(currentTab, value)}
          language={languageFromFilename(currentTab)}
          readOnly={readOnly}
          minLines={20}
        />
      </div>
    </div>
  );
}

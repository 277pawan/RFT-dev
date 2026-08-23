import { PlaygroundProvider } from "@/components/playground/PlaygroundProvider";
import { PlaygroundShell } from "@/components/playground/PlaygroundShell";
import { PlaygroundActionBar } from "@/components/playground/PlaygroundActionBar";
import { PlaygroundCodeEditor } from "@/components/playground/PlaygroundCodeEditor";
import { PlaygroundPreviewPane } from "@/components/playground/PlaygroundPreviewPane";
import { PlaygroundStatePane } from "@/components/playground/PlaygroundStatePane";
import { usePlayground } from "@/components/playground/PlaygroundProvider";

type PlaygroundFullProps = {
  presetId?: string;
  className?: string;
};

export function PlaygroundFull({ presetId, className = "" }: PlaygroundFullProps) {
  return (
    <PlaygroundProvider presetId={presetId}>
      <PlaygroundFullContent className={className} />
    </PlaygroundProvider>
  );
}

function PlaygroundFullContent({ className }: { className: string }) {
  const { showResponse } = usePlayground();

  return (
    <PlaygroundShell
      className={className}
      showCode
      toolbar={<PlaygroundActionBar />}
      code={<PlaygroundCodeEditor />}
      preview={<PlaygroundPreviewPane />}
      state={<PlaygroundStatePane />}
      stateVisible={showResponse}
    />
  );
}

import { PlaygroundPanel } from "@/components/playground/PlaygroundPanel";
import { PlaygroundPreview } from "@/components/playground/PlaygroundPreview";
import { usePlayground } from "@/components/playground/PlaygroundProvider";

type PlaygroundPreviewPaneProps = {
  className?: string;
};

export function PlaygroundPreviewPane({ className = "" }: PlaygroundPreviewPaneProps) {
  const { preset } = usePlayground();

  return (
    <PlaygroundPanel title={preset.previewFilename} className={`border-0 ${className}`}>
      <div className="p-4">
        <PlaygroundPreview />
      </div>
    </PlaygroundPanel>
  );
}

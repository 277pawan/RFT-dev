import { PlaygroundPanel } from "@/components/playground/PlaygroundPanel";
import { usePlayground } from "@/components/playground/PlaygroundProvider";

type PlaygroundStatePaneProps = {
  className?: string;
};

export function PlaygroundStatePane({
  className = "",
}: PlaygroundStatePaneProps) {
  const { submittedResponse } = usePlayground();
  const json = JSON.stringify(submittedResponse ?? {}, null, 2);

  return (
    <PlaygroundPanel title="Submit Response" className={`border-0 ${className}`}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            Active JSON
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
              submittedResponse
                ? "bg-success-bg text-success"
                : "bg-surface-input text-faint"
            }`}
          >
            {submittedResponse ? "Received" : "Waiting"}
          </span>
        </div>

        <pre className="max-h-36 overflow-auto rounded-md border border-border bg-surface-input p-3 font-mono text-[11px] leading-5 whitespace-pre-wrap text-muted">
          {submittedResponse ? json : "Submit the form to inspect its response."}
        </pre>
      </div>
    </PlaygroundPanel>
  );
}

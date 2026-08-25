import {
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type UIEvent,
} from "react";
import { highlightCode, type CodeLanguage } from "@/lib/prism";

type CodeEditorProps = {
  value: string;
  onChange?: (value: string) => void;
  language?: CodeLanguage;
  readOnly?: boolean;
  minLines?: number;
  className?: string;
};

const LINE_HEIGHT = 20;
const FONT_SIZE = 12;
const PADDING = 16;
const GUTTER_WIDTH = 48;

const editorTextStyle: CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: FONT_SIZE,
  lineHeight: `${LINE_HEIGHT}px`,
  letterSpacing: "0",
  tabSize: 2,
  MozTabSize: 2,
  whiteSpace: "pre",
  overflowWrap: "normal",
  wordBreak: "normal",
};

export function CodeEditor({
  value,
  onChange,
  language,
  readOnly = false,
  minLines = 16,
  className = "",
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLPreElement>(null);
  const [activeLine, setActiveLine] = useState(1);
  const lineCount = Math.max(value.split("\n").length, minLines);
  const contentMinHeight = lineCount * LINE_HEIGHT + PADDING * 2;
  const highlightedCode = highlightCode(value, language ?? "typescript");

  const updateActiveLine = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    setActiveLine(value.slice(0, textarea.selectionStart).split("\n").length);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
    updateActiveLine();
  };

  const handleScroll = (event: UIEvent<HTMLTextAreaElement>) => {
    const { scrollLeft, scrollTop } = event.currentTarget;
    if (gutterRef.current) {
      gutterRef.current.style.transform = `translateY(-${scrollTop}px)`;
    }
    if (highlightRef.current) {
      // Full-width content layer: translate with scroll so long lines stay visible.
      highlightRef.current.style.transform = `translate(${-scrollLeft}px, ${-scrollTop}px)`;
    }
  };

  return (
    <div className={`relative flex min-h-0 h-full overflow-hidden bg-surface ${className}`}>
      {/* Line gutter — scrolls vertically with the textarea */}
      <div
        aria-hidden
        className="shrink-0 select-none overflow-hidden border-r border-gray-800 bg-surface-raised"
        style={{ width: GUTTER_WIDTH, paddingTop: PADDING, paddingBottom: PADDING }}
      >
        <div ref={gutterRef} className="will-change-transform">
          {Array.from({ length: lineCount }, (_, index) => {
            const lineNumber = index + 1;
            return (
              <div
                key={lineNumber}
                style={{ height: LINE_HEIGHT, lineHeight: `${LINE_HEIGHT}px` }}
                className={`pr-2 pl-2 text-right font-mono text-[11px] ${
                  lineNumber === activeLine ? "bg-accent/10 text-text" : "text-faint"
                }`}
              >
                {lineNumber}
              </div>
            );
          })}
        </div>
      </div>

      {/* Code column — textarea scrolls; highlight mirrors it */}
      <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
        <pre
          aria-hidden
          ref={highlightRef}
          className="code-vscode pointer-events-none absolute top-0 left-0 z-0 m-0 will-change-transform"
          style={{
            ...editorTextStyle,
            padding: PADDING,
            minHeight: contentMinHeight,
            // Must size to content, not the viewport — otherwise long lines clip forever.
            width: "max-content",
            minWidth: "100%",
          }}
        >
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onClick={updateActiveLine}
          onKeyUp={updateActiveLine}
          onSelect={updateActiveLine}
          onScroll={handleScroll}
          readOnly={readOnly}
          spellCheck={false}
          aria-label="Code editor"
          style={{
            ...editorTextStyle,
            position: "relative",
            zIndex: 1,
            display: "block",
            width: "100%",
            height: "100%",
            minHeight: contentMinHeight,
            padding: PADDING,
            margin: 0,
            border: "none",
            outline: "none",
            resize: "none",
            overflow: "auto",
            background: "transparent",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            caretColor: "var(--color-pink)",
          }}
        />
      </div>
    </div>
  );
}

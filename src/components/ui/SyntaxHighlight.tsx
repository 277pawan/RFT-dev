import { useMemo } from "react";
import { highlightCode, type CodeLanguage } from "@/lib/prism";

type SyntaxHighlightProps = {
  code: string;
  language?: CodeLanguage;
  showLineNumbers?: boolean;
  className?: string;
};

export function SyntaxHighlight({
  code,
  language = "typescript",
  showLineNumbers = true,
  className = "",
}: SyntaxHighlightProps) {
  const lines = code.split("\n");
  const highlighted = useMemo(
    () => highlightCode(code, language),
    [code, language],
  );

  if (showLineNumbers) {
    return (
      <div className={`flex ${className}`}>
        <div
          aria-hidden
          className="shrink-0 border-r border-gray-800/80 py-1 pr-3 pl-2"
        >
          {lines.map((_, index) => (
            <div
              key={index}
              className="select-none text-right font-mono text-[11px] leading-[1.7] text-gray-600"
            >
              {index + 1}
            </div>
          ))}
        </div>
        <pre className="code-vscode min-w-0 flex-1 overflow-x-auto py-1 font-mono text-[11px] leading-[1.7] whitespace-pre">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    );
  }

  return (
    <pre
      className={`code-vscode overflow-x-auto font-mono text-[11px] leading-[1.7] whitespace-pre ${className}`}
    >
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}

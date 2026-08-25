type HighlightTextProps = {
  text: string;
  query?: string;
};

export function HighlightText({ text, query = "" }: HighlightTextProps) {
  const term = query.trim();
  if (!term) return <>{text}</>;

  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark key={`${part}-${index}`} className="rounded bg-cyan-300/25 px-0.5 text-cyan-100">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
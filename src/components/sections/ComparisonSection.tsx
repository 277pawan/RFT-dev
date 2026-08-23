import { Container } from "@/components/ui/Container";
import { CodePanel } from "@/components/ui/CodePanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SyntaxHighlight } from "@/components/ui/SyntaxHighlight";
import { languageFromFilename } from "@/lib/prism";
import { comparisonSection } from "@/data/homepage";

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[#08090d]">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <Container className="relative z-10 flex flex-col gap-12 py-20 lg:py-24">
        <SectionHeader {...comparisonSection.intro} />

        <div className="relative">
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[48%]
              z-30
              hidden
              -translate-x-1/2
              -translate-y-1/2
              lg:block
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0d0f15] shadow-[0_0_35px_rgba(0,0,0,0.5)]">
              <span className="text-[10px] font-bold tracking-wider text-muted">
                VS
              </span>
            </div>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-6">
            {comparisonSection.snippets.map((snippet) => (
              <SnippetCard key={snippet.filename} snippet={snippet} />
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-1">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 shadow-lg backdrop-blur-xl">
            <span className="text-[11px] font-medium text-[#858da1]">
              Less boilerplate
            </span>
            <span className="h-1 w-1 rounded-full bg-[#4c5364]" />
            <span className="text-[11px] font-medium text-[#858da1]">
              More focus on your form
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

type Snippet = (typeof comparisonSection.snippets)[number];

function SnippetCard({ snippet }: { snippet: Snippet }) {
  const code = snippet.lines.join("\n");

  return (
    <div className="group relative flex min-w-0 flex-col">
      {snippet.highlight ? (
        <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[#5D5FEF]/[0.06] opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />
      ) : null}

      <div className="relative mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <span
            className={`relative h-2 w-2 rounded-full ${
              snippet.highlight
                ? "bg-[#6366f1] shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                : "bg-white/20"
            }`}
          >
            {snippet.highlight ? (
              <span className="absolute inset-0 animate-ping rounded-full bg-[#6366f1] opacity-60" />
            ) : null}
          </span>
          <span
            className={`text-xs font-semibold ${
              snippet.highlight ? "text-[#8b8df7]" : "text-[#8b93a8]"
            }`}
          >
            {snippet.label}
          </span>
        </div>
      </div>

      <CodePanel
        filename={snippet.filename}
        code={code}
        highlight={snippet.highlight}
      >
        <SyntaxHighlight
          code={code}
          language={languageFromFilename(snippet.filename)}
          showLineNumbers
        />
      </CodePanel>
    </div>
  );
}

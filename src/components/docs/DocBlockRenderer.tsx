import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DocExample } from "@/components/docs/DocExample";
import { SyntaxHighlight } from "@/components/ui/SyntaxHighlight";
import type { DocBlock } from "@/data/docs";

type DocBlockRendererProps = { blocks?: DocBlock[] };

function CodeBlock({ block }: { block: Extract<DocBlock, { type: "code" }> }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800 bg-surface">
      {block.filename ? (
        <div className="border-b border-gray-800 px-4 py-2 text-xs text-faint">
          {block.filename}
        </div>
      ) : null}
      <SyntaxHighlight
        code={block.code}
        language={block.language}
        showLineNumbers={false}
        className="p-4 text-sm"
      />
    </div>
  );
}

function TabsBlock({ block }: { block: Extract<DocBlock, { type: "tabs" }> }) {
  const [activeId, setActiveId] = useState(block.tabs[0]?.id ?? "");
  const activeTab =
    block.tabs.find((tab) => tab.id === activeId) ?? block.tabs[0];

  return (
    <div className="overflow-hidden rounded-lg border border-gray-800 bg-page-alt">
      <div
        className="flex gap-1 overflow-x-auto border-b border-gray-800 px-2 pt-2"
        role="tablist"
      >
        {block.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab?.id}
            onClick={() => setActiveId(tab.id)}
            className={`relative whitespace-nowrap px-3 py-2 text-sm transition-colors ${tab.id === activeTab?.id ? "font-semibold text-text" : "text-muted hover:text-text"}`}
          >
            {tab.label}
            {tab.id === activeTab?.id ? (
              <motion.span
                layoutId="doc-tab-indicator"
                className="absolute inset-x-2 bottom-0 h-0.5 bg-cyan-400"
              />
            ) : null}
          </button>
        ))}
      </div>
      <div className="p-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab?.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.16 }}
          >
            <DocBlockRenderer blocks={activeTab?.blocks} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DocBlockRenderer({ blocks = [] }: DocBlockRendererProps) {
  const calloutStyles = {
    info: "border-cyan-400 bg-cyan-400/10 text-cyan-100",
    tip: "border-emerald-400 bg-emerald-400/10 text-emerald-100",
    warning: "border-amber-400 bg-amber-400/10 text-amber-100",
  } as const;

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-base leading-relaxed text-muted">
                {block.text}
              </p>
            );
          case "heading":
            return block.level === 4 ? (
              <h4 key={index} className="text-base font-bold text-text">
                {block.text}
              </h4>
            ) : (
              <h3 key={index} className="text-lg font-bold text-text">
                {block.text}
              </h3>
            );
          case "code":
            return <CodeBlock key={index} block={block} />;
          case "callout":
            return (
              <aside
                key={index}
                className={`border-l-2 px-4 py-3 ${
                  block.size === 3 ? "text-md font-bold" : "text-sm"
                } leading-relaxed ${calloutStyles[block.tone]}`}
              >
                <strong className="mb-1 block font-semibold text-text">
                  {block.title ?? block.tone}
                </strong>

                <span>{block.text}</span>
              </aside>
            );
          case "list":
            return block.ordered ? (
              <ol
                key={index}
                className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul
                key={index}
                className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div
                key={index}
                className="overflow-x-auto rounded-lg border border-gray-800"
              >
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface text-text">
                    <tr>
                      {block.columns.map((column) => (
                        <th key={column} className="px-4 py-3 font-semibold">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-t border-gray-800 text-muted"
                      >
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "tabs":
            return <TabsBlock key={index} block={block} />;
          case "image":
            return (
              <figure key={index}>
                <img
                  src={block.src}
                  alt={block.alt}
                  className="h-auto w-full rounded-lg border border-gray-800"
                />
                {block.caption ? (
                  <figcaption className="mt-2 text-sm text-faint">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "example":
            return (
              <DocExample
                key={index}
                preset={block.presetId}
                title={block.title}
                description={block.description}
                showCode={block.showCode}
                showState={block.showState}
                codeTab={block.codeTab}
              />
            );
        }
      })}
    </div>
  );
}


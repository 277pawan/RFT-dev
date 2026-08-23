import Prism from "prismjs";

// Order matters — each grammar extends the previous one.
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

export type CodeLanguage = "typescript" | "tsx" | "javascript" | "jsx";

const languageMap: Record<CodeLanguage, Prism.Grammar> = {
  javascript: Prism.languages.javascript,
  jsx: Prism.languages.jsx,
  typescript: Prism.languages.typescript,
  tsx: Prism.languages.tsx,
};

export function highlightCode(code: string, language: CodeLanguage): string {
  const grammar = languageMap[language] ?? Prism.languages.typescript;
  return Prism.highlight(code, grammar, language);
}

export function languageFromFilename(filename: string): CodeLanguage {
  if (filename.endsWith(".tsx")) return "tsx";
  if (filename.endsWith(".jsx")) return "jsx";
  if (filename.endsWith(".ts")) return "typescript";
  return "javascript";
}

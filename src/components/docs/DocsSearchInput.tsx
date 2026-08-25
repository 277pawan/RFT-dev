import { Search, X } from "lucide-react";
import { useDocsSearch } from "@/components/docs/DocsSearchProvider";

function SearchShortcut() {
  const isMac =
    typeof navigator !== "undefined" &&
    /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <kbd className="pointer-events-none hidden rounded border border-gray-800 bg-surface px-1.5 py-0.5 font-mono text-[10px] text-faint sm:inline">
      {isMac ? "⌘K" : "Ctrl+K"}
    </kbd>
  );
}

export function DocsSearchInput() {
  const { query, setQuery, submitSearch, searchInputRef, isDocsPage } =
    useDocsSearch();
  const hasQuery = query.trim().length > 0;

  return (
    <div className="relative flex w-full max-w-sm items-center">
      <Search
        className="pointer-events-none absolute left-3 size-4 text-faint"
        aria-hidden
      />
      <input
        ref={searchInputRef}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => {
          if (!isDocsPage) submitSearch(query);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            submitSearch(query);
          }
          if (event.key === "Escape" && hasQuery) {
            event.preventDefault();
            setQuery("");
          }
        }}
        placeholder="Search docs… Ctrl+K"
        aria-label="Search documentation"
        className="w-full rounded-md border border-gray-700 bg-surface py-2.5 pr-12 pl-10 text-sm text-text shadow-[0_8px_30px_rgba(0,0,0,0.16)] outline-none transition-colors placeholder:text-muted/80 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/10"
      />
      <div className="absolute right-2 flex items-center gap-1">
        {hasQuery ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              searchInputRef.current?.focus();
            }}
            className="inline-flex size-7 items-center justify-center rounded-md text-faint transition-colors hover:bg-surface-raised hover:text-text"
            aria-label="Clear search"
          >
            <X className="size-3.5" />
          </button>
        ) : (
          <SearchShortcut />
        )}
      </div>
    </div>
  );
}

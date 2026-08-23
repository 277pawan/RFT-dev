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

  return (
    <div className="relative flex items-center">
      <input
        ref={searchInputRef}
        type="search"
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
        }}
        placeholder="Search docs..."
        aria-label="Search documentation"
        className="w-[140px] rounded-lg border border-gray-800 bg-surface py-1.5 pr-16 pl-3 text-xs text-text outline-none placeholder:text-faint focus:border-gray-700 sm:w-[180px] lg:w-[220px]"
      />
      <div className="pointer-events-none absolute right-2 flex items-center">
        <SearchShortcut />
      </div>
    </div>
  );
}

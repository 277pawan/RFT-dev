import { useLocation, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DocBlockRenderer } from "@/components/docs/DocBlockRenderer";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { HighlightText } from "@/components/docs/HighlightText";
import { ExamplesGallery } from "@/components/docs/ExamplesGallery";
import { searchDocsSections } from "@/components/docs/searchDocs";
import { docsSections } from "@/data/docs";
import { site } from "@/data/site";

export function DocsPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get("q") ?? "";
  const hash = location.hash.replace("#", "");

  const filtered = searchDocsSections(docsSections, query);
  const sectionsToShow = hash
    ? filtered.filter((section) => section.id === hash)
    : filtered;
  const isSearching = Boolean(query.trim());

  return (
    <div className="min-h-[calc(100dvh-4rem)] w-full bg-page">
      {/* Sidebar LEFT · content RIGHT — grid, not stacked flex */}
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 md:grid-cols-[256px_minmax(0,1fr)]">
        <DocsSidebar query={query} />

        <main className="min-w-0 px-5 py-10 md:border-l md:border-gray-800 md:px-10 lg:px-14 lg:py-14">
          {!hash ? (
            <>
              <Badge>Documentation</Badge>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text">
                {isSearching ? "Search results" : "React Form Toaster"}
              </h1>
              {isSearching ? (
                <p className="mt-4 text-sm text-faint">
                  {sectionsToShow.length} result
                  {sectionsToShow.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
                  <span className="text-muted"> — best topic matches first</span>
                </p>
              ) : (
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                  Schema-driven forms with Zod validation. Press{" "}
                  <kbd className="rounded border border-gray-800 bg-surface px-1.5 py-0.5 font-mono text-xs text-muted">
                    Ctrl+K
                  </kbd>{" "}
                  to search. Pick a topic from the sidebar.
                </p>
              )}

              {!isSearching ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={site.npm.url} external>
                    View on npm
                  </Button>
                  <Button href={site.github.url} external variant="secondary">
                    GitHub README
                  </Button>
                  <Button href="/playground" variant="secondary">
                    Open Playground
                  </Button>
                </div>
              ) : null}
            </>
          ) : null}

          <div className={`flex flex-col gap-12 ${hash ? "" : "mt-16"}`}>
            {sectionsToShow.length === 0 ? (
              <p className="max-w-3xl text-base leading-relaxed text-muted">
                No topics match. Try &ldquo;validation&rdquo; or pick a link from
                the sidebar.
              </p>
            ) : (
              sectionsToShow.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-24 ${section.id === "examples" ? "w-full max-w-6xl" : "max-w-3xl"}`}
                >
                  <h2 className="text-2xl font-extrabold tracking-tight text-text">
                    <HighlightText text={section.title} query={query} />
                  </h2>
                  {section.description ? (
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                      <HighlightText text={section.description} query={query} />
                    </p>
                  ) : null}

                  {section.id === "examples" ? <ExamplesGallery /> : null}

                  <div
                    className={`${section.id === "examples" ? "hidden" : "mt-8"} w-full max-w-full overflow-x-clip`}
                  >
                    <DocBlockRenderer
                      blocks={
                        section.blocks ??
                        (section.presetId
                          ? [
                              {
                                type: "example",
                                presetId: section.presetId,
                                showCode: section.showCode,
                                showState: section.showState,
                                codeTab: section.codeTab,
                              },
                            ]
                          : [])
                      }
                      query={query}
                    />
                  </div>
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

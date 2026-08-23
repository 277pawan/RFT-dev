import { useLocation, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DocExample } from "@/components/docs/DocExample";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
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

  return (
    <div className="min-h-[calc(100dvh-4rem)] w-full bg-page">
      {/* Sidebar LEFT · content RIGHT — grid, not stacked flex */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-[256px_minmax(0,1fr)]">
        <DocsSidebar query={query} />

        <main className="min-w-0 px-5 py-10 md:border-l md:border-gray-800 md:px-10 lg:px-14 lg:py-14">
          {!hash ? (
            <>
              <Badge>Documentation</Badge>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text">
                React Form Toaster
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                Schema-driven forms with Zod validation. Press{" "}
                <kbd className="rounded border border-gray-800 bg-surface px-1.5 py-0.5 font-mono text-xs text-muted">
                  Ctrl+K
                </kbd>{" "}
                to search. Pick a topic from the sidebar.
              </p>

              {query.trim() ? (
                <p className="mt-4 text-sm text-faint">
                  {sectionsToShow.length} result
                  {sectionsToShow.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
                </p>
              ) : null}

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
            </>
          ) : null}

          <div className={`flex max-w-3xl flex-col gap-12 ${hash ? "" : "mt-16"}`}>
            {sectionsToShow.length === 0 ? (
              <p className="text-base leading-relaxed text-muted">
                No topics match. Try &ldquo;validation&rdquo; or pick a link from
                the sidebar.
              </p>
            ) : (
              sectionsToShow.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-extrabold tracking-tight text-text">
                    {section.title}
                  </h2>
                  {section.description ? (
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {section.description}
                    </p>
                  ) : null}

                  {section.presetId ? (
                    <div className="mt-8 w-full max-w-full overflow-x-auto">
                      <DocExample
                        preset={section.presetId}
                        showCode={section.showCode ?? false}
                        showState={section.showState ?? false}
                        codeTab={section.codeTab}
                      />
                    </div>
                  ) : null}
                </article>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DocBlockRenderer } from "@/components/docs/DocBlockRenderer";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { HighlightText } from "@/components/docs/HighlightText";
import { ExamplesGallery } from "@/components/docs/ExamplesGallery";
import { DocsJsonLd } from "@/components/seo/JsonLd";
import { searchDocsSections } from "@/components/docs/searchDocs";
import { docsSections } from "@/data/docs";
import { seoByPath } from "@/data/seo";
import { site } from "@/data/site";

function DocArticle({
  section,
  query,
  heading = "h1",
}: {
  section: (typeof docsSections)[number];
  query?: string;
  heading?: "h1" | "h2";
}) {
  const Heading = heading;
  return (
    <article className={`scroll-mt-24 ${section.id === "examples" ? "w-full max-w-6xl" : "max-w-3xl"}`}>
      <Heading className="text-3xl font-extrabold tracking-tight text-text md:text-4xl">
        <HighlightText text={section.title} query={query} />
      </Heading>
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
  );
}

export function DocsPage() {
  const { sectionId } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const query = searchParams.get("q") ?? "";

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash || sectionId) return;
    if (docsSections.some((section) => section.id === hash)) {
      navigate(`/docs/${hash}`, { replace: true });
    }
  }, [location.hash, navigate, sectionId]);

  const filtered = searchDocsSections(docsSections, query);
  const isSearching = Boolean(query.trim());
  const activeSection = sectionId
    ? docsSections.find((section) => section.id === sectionId)
    : undefined;

  if (sectionId && !activeSection && !isSearching) {
    return <Navigate to="/docs" replace />;
  }

  const seoPath = sectionId ? `/docs/${sectionId}` : "/docs";
  const seo = seoByPath[seoPath] ?? seoByPath["/docs"];

  return (
    <div className="min-h-[calc(100dvh-4rem)] w-full bg-page">
      <DocsJsonLd
        title={seo.title}
        description={seo.description}
        path={seo.path}
      />
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 md:grid-cols-[256px_minmax(0,1fr)]">
        <DocsSidebar query={query} activeSectionId={sectionId} />

        <div className="min-w-0 px-5 py-10 md:border-l md:border-gray-800 md:px-10 lg:px-14 lg:py-14">
          {isSearching ? (
            <div className="flex flex-col gap-12">
              <header>
                <Badge>Search</Badge>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text">
                  Search results
                </h1>
                <p className="mt-4 text-sm text-faint">
                  {filtered.length} result{filtered.length === 1 ? "" : "s"} for
                  &ldquo;{query}&rdquo;
                </p>
              </header>
              {filtered.length === 0 ? (
                <p className="text-muted">
                  No topics match. Try validation, showWhen, or open a guide from
                  the sidebar.
                </p>
              ) : (
                filtered.map((section) => (
                  <div key={section.id}>
                    <Link
                      to={`/docs/${section.id}`}
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      Open {section.title}
                    </Link>
                    <div className="mt-3">
                      <DocArticle section={section} query={query} heading="h2" />
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : activeSection ? (
            <DocArticle section={activeSection} />
          ) : (
            <div className="max-w-3xl">
              <Badge>Documentation</Badge>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text">
                React Form Toaster documentation
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Schema-driven React forms with Zod validation, conditional fields,
                styling, and toasts. Each guide below is a real page — pick a topic
                or press{" "}
                <kbd className="rounded border border-gray-800 bg-surface px-1.5 py-0.5 font-mono text-xs text-muted">
                  Ctrl+K
                </kbd>{" "}
                to search.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/docs/quick-start">Quick Start</Button>
                <Button href={site.npm.url} external variant="secondary">
                  View on npm
                </Button>
                <Button href="/playground" variant="secondary">
                  Open Playground
                </Button>
              </div>
              <ul className="mt-12 flex flex-col gap-3">
                {docsSections.map((section) => (
                  <li key={section.id}>
                    <Link
                      to={`/docs/${section.id}`}
                      className="block rounded-xl border border-gray-800 bg-surface px-5 py-4 transition-colors hover:border-gray-600"
                    >
                      <span className="text-sm font-semibold text-text">
                        {section.title}
                      </span>
                      {section.description ? (
                        <span className="mt-1 block text-sm leading-relaxed text-muted">
                          {section.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

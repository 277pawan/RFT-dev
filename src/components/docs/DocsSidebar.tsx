import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { docsSections, docsSidebarGroups } from "@/data/docs";
import { searchDocsSections } from "@/components/docs/searchDocs";
import { HighlightText } from "@/components/docs/HighlightText";

type DocsSidebarProps = {
  query?: string;
};

export function DocsSidebar({ query = "" }: DocsSidebarProps) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.hash.replace("#", ""));
  const isSearching = Boolean(query.trim());
  const ranked = searchDocsSections(docsSections, query);

  useEffect(() => {
    setActiveSection(location.hash.replace("#", ""));
    const articles = document.querySelectorAll<HTMLElement>("article[id]");
    if (articles.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 },
    );
    articles.forEach((article) => observer.observe(article));
    return () => observer.disconnect();
  }, [location.hash, query]);

  return (
    <aside className="border-b border-gray-800 bg-page-alt md:sticky md:top-16 md:h-[calc(100dvh-4rem)] md:border-b-0">
      <div className="h-full overflow-y-auto px-4 py-6 md:px-5 md:py-8">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-faint">
          Documentation
        </p>

        <nav className="flex flex-col gap-6" aria-label="Documentation topics">
          {isSearching ? (
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-faint">
                Best matches
              </p>
              <ul className="flex flex-col gap-0.5">
                {ranked.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`relative block rounded-md border px-3 py-2 text-sm transition-colors ${
                        activeSection === section.id
                          ? "border-gray-800 bg-surface font-semibold text-text"
                          : "border-transparent text-muted hover:border-gray-800 hover:bg-surface hover:text-text"
                      }`}
                    >
                      {activeSection === section.id ? (
                        <motion.span
                          layoutId="docs-active-item"
                          className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-cyan-400"
                        />
                      ) : null}
                      <HighlightText text={section.title} query={query} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            docsSidebarGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-faint">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {group.items.map((item) =>
                    item.href ? (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="block rounded-md border border-transparent px-3 py-2 text-sm text-muted transition-colors hover:border-gray-800 hover:bg-surface hover:text-text"
                        >
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li key={item.id}>
                        <a
                          href={`#${item.sectionId}`}
                          className={`relative block rounded-md border px-3 py-2 text-sm transition-colors ${
                            activeSection === item.sectionId
                              ? "border-gray-800 bg-surface font-semibold text-text"
                              : "border-transparent text-muted hover:border-gray-800 hover:bg-surface hover:text-text"
                          }`}
                        >
                          {activeSection === item.sectionId ? (
                            <motion.span
                              layoutId="docs-active-item"
                              className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-cyan-400"
                            />
                          ) : null}
                          {item.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))
          )}
        </nav>
      </div>
    </aside>
  );
}

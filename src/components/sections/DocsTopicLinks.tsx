import { Link } from "react-router-dom";
import { docsSections } from "@/data/docs";

export function DocsTopicLinks() {
  return (
    <section className="bg-page" aria-labelledby="guides-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
          Documentation
        </p>
        <h2 id="guides-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-text">
          Guides Google — and developers — can actually crawl
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Each topic is its own URL. Start with installation, then jump to validation,
          conditional fields, or the live playground.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {docsSections.map((section) => (
            <li key={section.id}>
              <Link
                to={`/docs/${section.id}`}
                className="block h-full rounded-xl border border-gray-800 bg-surface p-5 transition-colors hover:border-gray-600 hover:bg-surface-raised"
              >
                <span className="text-sm font-semibold text-text">{section.title}</span>
                {section.description ? (
                  <span className="mt-2 block text-xs leading-relaxed text-muted">
                    {section.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

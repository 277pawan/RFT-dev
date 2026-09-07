import { Link } from "react-router-dom";
import { homepageFaq } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="border-t border-border bg-page-alt" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-text">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Straight answers for people comparing React form libraries or installing{" "}
          <code className="text-text">react-form-toaster</code> for the first time.
        </p>

        <dl className="mt-10 flex flex-col gap-3">
          {homepageFaq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-800 bg-surface px-5 py-4 open:border-gray-700"
            >
              <summary className="cursor-pointer list-none text-left text-sm font-semibold text-text marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-faint transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</dd>
            </details>
          ))}
        </dl>

        <p className="mt-8 text-sm text-muted">
          Need the full walkthrough? Start with{" "}
          <Link to="/docs/quick-start" className="font-semibold text-text underline-offset-4 hover:underline">
            Quick Start
          </Link>{" "}
          or the{" "}
          <Link to="/docs/api" className="font-semibold text-text underline-offset-4 hover:underline">
            API reference
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

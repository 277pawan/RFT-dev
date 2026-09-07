import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-xl flex-col justify-center px-5 py-20">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text">
        This page does not exist
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        The URL is not part of the React Form Toaster site. Try the docs hub, the
        playground, or go back home.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Home</Button>
        <Button href="/docs" variant="secondary">
          Documentation
        </Button>
        <Button href="/playground" variant="secondary">
          Playground
        </Button>
      </div>
      <p className="mt-8 text-sm text-muted">
        Looking for a guide?{" "}
        <Link to="/docs/quick-start" className="text-text underline-offset-4 hover:underline">
          Quick Start
        </Link>
        {" · "}
        <Link to="/docs/validation" className="text-text underline-offset-4 hover:underline">
          Zod validation
        </Link>
        {" · "}
        <Link to="/docs/conditional-fields" className="text-text underline-offset-4 hover:underline">
          Conditional fields
        </Link>
      </p>
    </section>
  );
}

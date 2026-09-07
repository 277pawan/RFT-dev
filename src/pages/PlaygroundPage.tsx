import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaygroundFull } from "@/components/playground/variants/PlaygroundFull";

export function PlaygroundPage() {
  return (
    <section className="bg-page">
      <Container className="py-14 lg:py-20">
        <div className="mb-8 max-w-3xl">
          <Badge>Live playground</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text">
            React Form Toaster playground
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Edit a Zod schema and Formbox field config in the browser. Toggle{" "}
            <strong className="font-semibold text-text">inline or modal</strong>,
            submit the form, and inspect the payload. This is the same{" "}
            <code className="text-text">react-form-toaster</code> API as production.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/docs/quick-start" variant="secondary" size="sm">
              Quick Start
            </Button>
            <Button href="/docs/conditional-fields" variant="secondary" size="sm">
              Conditional fields
            </Button>
            <Button href="/docs/examples" variant="secondary" size="sm">
              More examples
            </Button>
          </div>
        </div>

        <PlaygroundFull />
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PlaygroundFull } from "@/components/playground/variants/PlaygroundFull";

export function PlaygroundPage() {
  return (
    <section className="bg-page">
      <Container className="py-14 lg:py-20">
        <div className="mb-8 max-w-2xl">
          <Badge>Playground</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text">
            Try react-form-toaster live
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Edit schema on the left with VS Code line numbers. Toggle{" "}
            <strong className="font-semibold text-text">Inline / Modal</strong>,
            inspect the submitted response, and watch the form update live —
            built only with react-form-toaster.
          </p>
        </div>

        <PlaygroundFull />
      </Container>
    </section>
  );
}

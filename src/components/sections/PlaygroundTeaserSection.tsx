import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaygroundSplit } from "@/components/playground/variants/PlaygroundSplit";
import { playgroundTeaser } from "@/data/homepage";

export function PlaygroundTeaserSection() {
  return (
    <section className="border-y border-gray-700 bg-page-alt">
      <Container className="flex flex-col items-center max-w-7xl gap-12 py-24">
        <SectionHeader {...playgroundTeaser.intro} />

        <PlaygroundSplit presetId="contact-us" codeTab="schema.ts" />

        <Button href={playgroundTeaser.cta.href}>
          {playgroundTeaser.cta.label}
        </Button>
      </Container>
    </section>
  );
}

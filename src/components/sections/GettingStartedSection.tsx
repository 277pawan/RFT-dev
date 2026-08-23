import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AnimatedCard,
  AnimatedItem,
  AnimatedStagger,
} from "@/components/ui/AnimatedSection";
import { gettingStarted } from "@/data/homepage";

export function GettingStartedSection() {
  return (
    <section className="bg-page">
      <Container className="flex flex-col gap-14 py-24">
        <SectionHeader {...gettingStarted.intro} />
        <AnimatedStagger className="grid gap-6 md:grid-cols-3">
          {gettingStarted.steps.map((step) => (
            <AnimatedItem key={step.id}>
              <AnimatedCard>
                <article className="rounded-xl border border-gray-800 bg-surface p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[32px] font-extrabold text-accent">
                      {step.step}
                    </span>
                    <span className="text-sm font-semibold text-muted">
                      {step.title}
                    </span>
                  </div>
                  <code className="block rounded-md border border-border bg-surface-input px-3 py-3 font-mono text-[13px] text-muted">
                    {step.code}
                  </code>
                </article>
              </AnimatedCard>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}

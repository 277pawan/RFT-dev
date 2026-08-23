import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AnimatedCard,
  AnimatedItem,
  AnimatedStagger,
} from "@/components/ui/AnimatedSection";
import { ecosystemIcon, ecosystemSection } from "@/data/homepage";

export function EcosystemSection() {
  const Icon = ecosystemIcon;

  return (
    <section className="bg-page">
      <Container className="flex flex-col gap-14 py-24">
        <SectionHeader {...ecosystemSection.intro} />
        <AnimatedStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemSection.items.map((item) => (
            <AnimatedItem key={item.id}>
              <AnimatedCard>
                <article className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-surface p-6">
                  <Icon
                    className="size-4 text-accent"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <h3 className="text-[15px] font-bold text-text">{item.title}</h3>
                  <p className="text-[13px] leading-[1.4] text-muted">
                    {item.description}
                  </p>
                </article>
              </AnimatedCard>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}

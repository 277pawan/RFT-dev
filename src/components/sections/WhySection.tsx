import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  AnimatedCard,
  AnimatedItem,
  AnimatedStagger,
} from "@/components/ui/AnimatedSection";
import { whySection } from "@/data/homepage";

export function WhySection() {
  return (
    <section className="bg-[#08090e] py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeader {...whySection.intro} />
        <AnimatedStagger className="grid gap-6 md:grid-cols-2">
          {whySection.features.map((feature) => (
            <AnimatedItem key={feature.id}>
              <AnimatedCard>
                <FeatureCard {...feature} />
              </AnimatedCard>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}

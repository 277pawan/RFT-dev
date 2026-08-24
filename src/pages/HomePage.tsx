import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PlaygroundTeaserSection } from "@/components/sections/PlaygroundTeaserSection";
import { GettingStartedSection } from "@/components/sections/GettingStartedSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HomePage() {
  return (
    <>
      <HeroSection />

      <AnimatedSection>
        <WhySection />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <ComparisonSection />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <EcosystemSection />
      </AnimatedSection>

      <AnimatedSection delay={0.06}></AnimatedSection>

      <AnimatedSection>
        <PlaygroundTeaserSection />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <GettingStartedSection />
      </AnimatedSection>

      <AnimatedSection>
        <CommunitySection />
      </AnimatedSection>
    </>
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { WhySection } from "@/components/sections/WhySection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PlaygroundTeaserSection } from "@/components/sections/PlaygroundTeaserSection";
import { GettingStartedSection } from "@/components/sections/GettingStartedSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { DocsTopicLinks } from "@/components/sections/DocsTopicLinks";
import { HomepageJsonLd } from "@/components/seo/JsonLd";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import WhyReactFormToaster from "@/components/sections/WhyReactFormToaster";

export function HomePage() {
  return (
    <>
      <HomepageJsonLd />
      <HeroSection />

      <AnimatedSection>
        <WhySection />
      </AnimatedSection>

      <AnimatedSection>
        <ComparisonSection />
      </AnimatedSection>

      <AnimatedSection>
        <EcosystemSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyReactFormToaster />
      </AnimatedSection>

      <AnimatedSection>
        <PlaygroundTeaserSection />
      </AnimatedSection>

      <AnimatedSection>
        <GettingStartedSection />
      </AnimatedSection>

      <DocsTopicLinks />
      <FaqSection />

      <AnimatedSection>
        <CommunitySection />
      </AnimatedSection>
    </>
  );
}

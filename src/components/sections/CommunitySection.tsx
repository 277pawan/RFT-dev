import { MessagesSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedSection";
import { communitySection } from "@/data/homepage";

const icons = {
  discord: MessagesSquare,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-page">
      <Container className="relative z-10 flex flex-col gap-12 py-24">
        <SectionHeader {...communitySection.intro} />

        <AnimatedStagger className="grid gap-6 lg:grid-cols-2">
          {communitySection.cards.map((card) => {
            const Icon = icons[card.icon];

            return (
              <AnimatedItem key={card.id}>
              <article
                className="
                  group
                  relative
                  flex
                  flex-col
                  gap-5
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-800
                  bg-surface
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/40
                  hover:shadow-[0_20px_60px_-30px_rgba(93,95,239,0.4)]
                "
              >
                {/* Subtle hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-accent/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon + Title */}
                <div className="relative flex items-center gap-3">
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-gray-700
                      bg-accent/10
                      text-accent
                      transition-all
                      duration-300
                      group-hover:border-accent/40
                      group-hover:bg-accent/15
                      group-hover:shadow-[0_0_25px_rgba(93,95,239,0.2)]
                    "
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-text">{card.title}</h3>
                </div>

                {/* Description */}
                <p className="relative max-w-xl text-sm leading-6 text-muted">
                  {card.description}
                </p>

                {/* CTA */}
                <div className="relative pt-1">
                  <Button href={card.cta.href} size="sm" variant="secondary">
                    {card.cta.label}
                  </Button>
                </div>
              </article>
              </AnimatedItem>
            );
          })}
        </AnimatedStagger>
      </Container>
    </section>
  );
}


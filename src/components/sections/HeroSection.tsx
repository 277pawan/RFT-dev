import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyInstall } from "@/components/ui/CopyInstall";
import { AnimatedHero } from "@/components/ui/AnimatedSection";
import { HeroFormDemo } from "@/components/demos/HeroFormDemo";
import { heroContent } from "@/data/homepage";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#08090d] pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
          [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <Container className="relative z-10 grid max-w-8xl items-center gap-4 lg:grid-cols-12">
        <AnimatedHero className="flex flex-col gap-6 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
          >
            <span className="inline-flex items-center rounded-full border border-gray-700 bg-[#1e1a3a] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5D5FEF]">
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.12 }}
            className="max-w-2xl text-5xl leading-[1.15] font-bold tracking-tight text-white sm:text-5xl lg:text-[52px]"
          >
            Build powerful React forms without repetitive form code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-[#9ca3af] sm:text-lg"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.28 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Button
              href={heroContent.primaryCta.href}
              variant="primary"
              size="md"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              size="md"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.36 }}
            className="pt-2"
          >
            <CopyInstall command={heroContent.installCommand} />
          </motion.div>
        </AnimatedHero>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <HeroFormDemo />
        </motion.div>
      </Container>
    </section>
  );
}

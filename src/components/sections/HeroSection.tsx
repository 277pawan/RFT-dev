import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyInstall } from "@/components/ui/CopyInstall";
import { AnimatedHero } from "@/components/ui/AnimatedSection";
import { HeroFormDemo } from "@/components/demos/HeroFormDemo";
import { heroContent } from "@/data/homepage";
import { motion } from "framer-motion";
import "../../hero-fx.css";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  "Zod validation",
  "Conditional fields",
  "Modal & inline",
  "Built-in toasts",
  "Array fields",
  "File uploads",
  "Password toggle",
  "TypeScript",
  "Tailwind + style",
  "External toast support",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#06070b] pt-14 pb-0 lg:pt-20">
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="rft-aurora absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full"
          style={{
            background: "radial-gradient(circle,#6366f1 0%,transparent 65%)",
            opacity: 0.35,
            filter: "blur(60px)",
          }}
        />
        <div
          className="rft-aurora absolute top-20 right-[-120px] h-[480px] w-[480px] rounded-full"
          style={{
            background: "radial-gradient(circle,#ec4899 0%,transparent 65%)",
            opacity: 0.25,
            filter: "blur(70px)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="rft-aurora absolute bottom-[-160px] left-1/3 h-[460px] w-[460px] rounded-full"
          style={{
            background: "radial-gradient(circle,#22d3ee 0%,transparent 65%)",
            opacity: 0.2,
            filter: "blur(70px)",
            animationDelay: "-11s",
          }}
        />
      </div>

      {/* Masked grid */}
      <div
        className="rft-grid-mask pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.07) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10 grid max-w-8xl items-center gap-4 pb-20 lg:grid-cols-12 lg:pb-28">
        <AnimatedHero className="flex flex-col gap-6 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.05 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{
                color: "#a5b4fc",
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(129,140,248,0.35)",
                boxShadow: "0 0 24px rgba(99,102,241,0.25)",
              }}
            >
              <span
                className="rft-dot h-1.5 w-1.5 rounded-full"
                style={{ background: "#34d399" }}
              />
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.08 }}
            className="rft-text-shimmer max-w-2xl text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-[56px]"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.14 }}
            className="max-w-xl text-base leading-relaxed text-[#9ca3af] sm:text-lg"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.26 }}
            className="pt-2"
          >
            <CopyInstall command={heroContent.installCommand} />
          </motion.div>
        </AnimatedHero>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <HeroFormDemo />
        </motion.div>
      </Container>

      {/* Feature marquee */}
      <div
        className="relative z-10 overflow-hidden py-4"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(8,9,13,0.7)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="rft-marquee flex w-max gap-3">
          {[...features, ...features].map((f, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium"
              style={{
                color: "#c7d2fe",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(129,140,248,0.25)",
              }}
            >
              ✦ {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

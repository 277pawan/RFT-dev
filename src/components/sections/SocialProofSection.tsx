import { Container } from "@/components/ui/Container";
import { socialProof } from "@/data/homepage";

export function SocialProofSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#08090e] py-10">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-[#4b5563]">
          {socialProof.label}
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-24 gap-y-4 sm:justify-between">
          {socialProof.logos.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-md font-semibold text-[#6b7280] hover:text-[#9ca3af] cursor-pointer transition-colors"
            >
              <span className="size-4 rounded-sm bg-[#374151]" aria-hidden />
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


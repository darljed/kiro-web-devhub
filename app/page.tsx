import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <article>
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <StatsSection />
      <CTASection />
    </article>
  );
}

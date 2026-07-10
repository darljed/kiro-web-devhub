import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { LivePreviewSection } from "@/components/landing/LivePreviewSection";
import { CategoriesSection } from "@/components/landing/CategoriesSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <article>
      <HeroSection />
      <FeaturesSection />
      <LivePreviewSection />
      <CategoriesSection />
      <StatsSection />
      <CTASection />
    </article>
  );
}

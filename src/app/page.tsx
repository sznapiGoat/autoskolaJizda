import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import CorePathsSection from "@/components/sections/CorePathsSection";
import JourneySection from "@/components/sections/JourneySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <StatsBar />
      <CorePathsSection />
      <JourneySection />
      <WhyUsSection />
      <TestimonialsSection />
    </main>
  );
}

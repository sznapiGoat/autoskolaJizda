import NavBar from "@/components/sections/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import RemotionSection from "@/components/sections/RemotionSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import PricingSection from "@/components/sections/PricingSection";
import FeesSection from "@/components/sections/FeesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <RemotionSection />
        <AdvantagesSection />
        <PricingSection />
        <FeesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}

import NavBar from "@/components/sections/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import LanguagesSection from "@/components/sections/LanguagesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import RemotionSection from "@/components/sections/RemotionSection";
import PricingSection from "@/components/sections/PricingSection";
import FeesSection from "@/components/sections/FeesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
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
        <LanguagesSection />
        <WhyUsSection />
        <RemotionSection />
        <PricingSection />
        <FeesSection />
        <ResourcesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}

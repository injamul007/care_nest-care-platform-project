import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <TestimonialSection></TestimonialSection>
      <CTASection></CTASection>
    </main>
  );
}

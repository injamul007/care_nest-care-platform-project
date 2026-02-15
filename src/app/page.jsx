import AboutSection from "@/components/AboutSection";
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
    </main>
  );
}


import ContactCTA from "@/components/Sections/ContactCta";
import CTASection from "@/components/Sections/CTA";
import EmergencyServices from "@/components/Sections/Emergency";
import Hero from "@/components/Sections/Hero";
import HowItWorks from "@/components/Sections/HowItWorks";
import PropertyAreas from "@/components/Sections/PropertyAreas";
import ServicesPreview from "@/components/Sections/Services";
import Testimonials from "@/components/Sections/Testimonials";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <PropertyAreas />
      <EmergencyServices />
      <Testimonials />
      <ContactCTA
        title="Need a Quick Estimate?"
        description="Fill out our simple form and get a free quote within 24 hours."
      />
      <CTASection />
    </>
  );
}
import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import homepageData from "@/data/homePage.json";
import servicesData from "@/data/services.json";
import { ArrowRight } from "lucide-react";

const ServicesPreview: React.FC = () => {
  const { servicesSection } = homepageData;
  const { services } = servicesData;

  return (
    <section className="py-section bg-bg-white">
      <Container>
        {/* Section Header - Using SectionHeader Component */}
        <SectionHeader
          badge={servicesSection.badge}
          title={servicesSection.title}
          description={servicesSection.description}
          align="center"
        />

        {/* Services Grid - Using ServiceCard Component */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/${service.slug}`}
              variant="default"
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button href="/services" variant="outline" size="lg">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import homepageData from "@/data/homePage.json";
import { ArrowRight, Phone } from "lucide-react";

const CTASection: React.FC = () => {
  const { ctaSection } = homepageData;

  return (
    <section className="py-section bg-bg-white">
      <Container size="lg">
        <div className="bg-gradient-primary rounded-2xl lg:rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-text-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-text-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Title */}
            <h2 className="text-display font-display font-bold text-text-white mb-4">
              {ctaSection.title}
            </h2>
            <p className="text-lg lg:text-xl text-text-white/90 mb-8 leading-relaxed">
              {ctaSection.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={ctaSection.primaryCta.href}
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="bg-text-white text-primary hover:bg-bg-light"
              >
                {ctaSection.primaryCta.label}
              </Button>
              <Button
                href={ctaSection.secondaryCta.href}
                variant="outline"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
                className="border-text-white text-text-white hover:bg-text-white hover:text-primary"
              >
                {ctaSection.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import locationsData from "@/data/locations.json";
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, Building } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/Sections/CTA";

export const metadata: Metadata = {
  title: "Service Locations | Mark Repair Services",
  description: "Mark Repair Services provides home repair and maintenance services across Texas and Florida. Find your local service area.",
};

export default function LocationsPage() {
  const { hero, states, cta } = locationsData;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">{hero.badge}</span>
            </div>
            <h1 className="text-hero font-display font-bold text-text-primary mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* States/Locations */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {states.map((state, index) => (
              <div
                key={state.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
              >
                {/* Image & Contact */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl mb-6">
                    <Image
                      src={state.heroImage}
                      alt={state.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h2 className="text-3xl font-display font-bold text-text-white">
                        {state.name}
                      </h2>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-bg-light rounded-xl p-6">
                    <h3 className="font-display font-bold text-text-primary mb-4">
                      {state.name} Office
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={`tel:${state.phone}`}
                        className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        {state.phone}
                      </a>
                      <a
                        href={`mailto:${state.email}`}
                        className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                        {state.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    {state.description}
                  </p>

                  {/* Cities */}
                  <div className="mb-8">
                    <h3 className="text-lg font-display font-bold text-text-primary mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-primary" />
                      Cities We Serve
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {state.cities.map((city) => (
                        <div
                          key={city.name}
                          className="p-4 bg-bg-light rounded-xl border border-border hover:border-primary/30 transition-colors"
                        >
                          <h4 className="font-semibold text-text-primary mb-1">
                            {city.name}
                          </h4>
                          <p className="text-sm text-text-muted">{city.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Available Services */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-text-primary mb-4">
                      Available Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {state.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
                        >
                          <CheckCircle className="w-4 h-4" />
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant="primary"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Get Service in {state.name}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Expansion CTA */}
      <section className="py-section bg-bg-muted">
        <Container size="sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-heading font-display font-bold text-text-primary mb-4">
              {cta.title}
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              {cta.description}
            </p>
            <Button
              href={cta.buttonHref}
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {cta.buttonLabel}
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import servicesData from "@/data/services.json";
import { Sparkles, Layers, Droplet, Zap, Hammer, FenceIcon, DoorOpen, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/Sections/CTA";

export const metadata: Metadata = {
  title: "Our Services | Mark Repair Services",
  description: "Explore our comprehensive range of home repair, renovation, and maintenance services including cleaning, flooring, plumbing, electrical, and more.",
};

const iconMap: { [key: string]: React.ReactNode } = {
  sparkles: <Sparkles className="w-8 h-8" />,
  layers: <Layers className="w-8 h-8" />,
  droplet: <Droplet className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  hammer: <Hammer className="w-8 h-8" />,
  fence: <FenceIcon className="w-8 h-8" />,
  "door-open": <DoorOpen className="w-8 h-8" />,
  wrench: <Wrench className="w-8 h-8" />,
};

export default function ServicesPage() {
  const { pageTitle, pageDescription, services } = servicesData;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-hero font-display font-bold text-text-primary mb-6">
              {pageTitle}
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
              {pageDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className={`absolute -z-10 w-full h-full bg-primary/10 rounded-2xl top-4 ${index % 2 === 1 ? "-left-4" : "-right-4"}`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    {iconMap[service.icon]}
                  </div>

                  <h2 className="text-heading font-display font-bold text-text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary">
                        <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Text */}
                  <p className="text-text-muted italic mb-6">{service.cta}</p>

                  {/* Button */}
                  <Button
                    href={`/services/${service.slug}`}
                    variant="primary"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
// import Breadcrumb from "@/components/common/BreadCrumb";
import FeatureList from "@/components/ui/FeatureList";
import ServiceCard from "@/components/ui/ServiceCard";
import { Card, CardContent } from "@/components/ui/Card";
import servicesData from "@/data/services.json";
import {
  Sparkles, Layers, Droplet, Zap, Hammer, FenceIcon, DoorOpen, Wrench,
  ArrowRight, ArrowLeft, Phone, Shield, Clock, Award, CheckCircle
} from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/Sections/CTA";

const iconMap: { [key: string]: React.ReactNode } = {
  sparkles: <Sparkles className="w-10 h-10" />,
  layers: <Layers className="w-10 h-10" />,
  droplet: <Droplet className="w-10 h-10" />,
  zap: <Zap className="w-10 h-10" />,
  hammer: <Hammer className="w-10 h-10" />,
  fence: <FenceIcon className="w-10 h-10" />,
  "door-open": <DoorOpen className="w-10 h-10" />,
  wrench: <Wrench className="w-10 h-10" />,
};

const benefitIcons = [
  <Shield key="shield" className="w-5 h-5 text-primary" />,
  <Award key="award" className="w-5 h-5 text-primary" />,
  <Clock key="clock" className="w-5 h-5 text-primary" />,
  <CheckCircle key="check" className="w-5 h-5 text-primary" />,
];

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found | Mark Repair Services" };
  }

  return {
    title: `${service.title} | Mark Repair Services`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb Component */}
      {/* <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      /> */}

      {/* Hero Section */}
      <section className="bg-bg-light py-12 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                {iconMap[service.icon]}
              </div>

              <h1 className="text-hero font-display font-bold text-text-primary mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {service.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  variant="accent"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Free Estimate
                </Button>
                <Button
                  href="tel:(555) 123-4567"
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Call Now
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -z-10 w-full h-full bg-primary/10 rounded-2xl top-4 -right-4" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Included */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Features - Using FeatureList Component */}
            <div>
              <h2 className="text-heading font-display font-bold text-text-primary mb-6">
                What's Included
              </h2>
              <p className="text-text-secondary mb-8">
                Our {service.title.toLowerCase()} cover a wide range of needs to keep your home in perfect condition.
              </p>

              <FeatureList
                features={service.features}
                variant="checkCircle"
                size="md"
                columns={1}
              />
            </div>

            {/* Benefits - Using Card Component */}
            <div>
              <h2 className="text-heading font-display font-bold text-text-primary mb-6">
                Why Choose Us
              </h2>
              <p className="text-text-secondary mb-8">
                {service.cta}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} hover={true} padding="md">
                    <CardContent>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        {benefitIcons[index % benefitIcons.length]}
                      </div>
                      <span className="font-semibold text-text-primary">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Card */}
              <Card className="mt-8 bg-primary/5 border-primary/20" hover={false}>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-text-primary mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Contact us today for a free, no-obligation estimate.
                  </p>
                  <Button href="/contact" variant="primary" size="sm">
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services - Using ServiceCard Component */}
      <section className="py-section bg-bg-muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-heading font-display font-bold text-text-primary mb-4">
              Related Services
            </h2>
            <p className="text-text-secondary">
              Explore other services that might interest you
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <ServiceCard
                key={relatedService.id}
                title={relatedService.title}
                description={relatedService.shortDescription}
                icon={relatedService.icon}
                href={`/services/${relatedService.slug}`}
                variant="default"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
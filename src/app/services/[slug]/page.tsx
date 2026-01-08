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
  ArrowRight, ArrowLeft, Phone, Shield, Clock, Award, CheckCircle,
  ClipboardList, Settings, Box, CheckSquare, Search, FileText,
  ShieldCheck, Activity, PencilRuler, CalendarDays, Key, Map,
  Palette, Construction, ClipboardCheck, RefreshCw, Settings2,
  ListTodo, Truck, Smile, ChevronRight, MessageCircle, Calculator
} from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/Sections/CTA";
import Accordion from "@/components/ui/Accordian";
import AnimatedCounter from "@/components/ui/AnimatorCounter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap: { [key: string]: React.ReactNode } = {
  // Service Icons
  sparkles: <Sparkles className="w-full h-full" />,
  layers: <Layers className="w-full h-full" />,
  droplet: <Droplet className="w-full h-full" />,
  zap: <Zap className="w-full h-full" />,
  hammer: <Hammer className="w-full h-full" />,
  fence: <FenceIcon className="w-full h-full" />,
  "door-open": <DoorOpen className="w-full h-full" />,
  wrench: <Wrench className="w-full h-full" />,

  // Process/FAQ Icons
  "clipboard-list": <ClipboardList className="w-full h-full" />,
  settings: <Settings className="w-full h-full" />,
  "check-circle": <CheckCircle className="w-full h-full" />,
  box: <Box className="w-full h-full" />,
  "check-square": <CheckSquare className="w-full h-full" />,
  search: <Search className="w-full h-full" />,
  "file-text": <FileText className="w-full h-full" />,
  "shield-check": <ShieldCheck className="w-full h-full" />,
  activity: <Activity className="w-full h-full" />,
  "pencil-ruler": <PencilRuler className="w-full h-full" />,
  "calendar-days": <CalendarDays className="w-full h-full" />,
  key: <Key className="w-full h-full" />,
  map: <Map className="w-full h-full" />,
  palette: <Palette className="w-full h-full" />,
  construction: <Construction className="w-full h-full" />,
  "clipboard-check": <ClipboardCheck className="w-full h-full" />,
  "refresh-cw": <RefreshCw className="w-full h-full" />,
  "settings-2": <Settings2 className="w-full h-full" />,
  "list-todo": <ListTodo className="w-full h-full" />,
  truck: <Truck className="w-full h-full" />,
  smile: <Smile className="w-full h-full" />,
  "message-circle": <MessageCircle className="w-full h-full" />,
  calculator: <Calculator className="w-full h-full" />,
};

const benefitIcons = [
  <Shield key="shield" className="w-6 h-6 text-primary" />,
  <Award key="award" className="w-6 h-6 text-primary" />,
  <Clock key="clock" className="w-6 h-6 text-primary" />,
  <CheckCircle key="check" className="w-6 h-6 text-primary" />,
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-bg-light pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="animate-fade-up">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to All Services
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary p-3 shadow-sm border border-primary/20">
                  {iconMap[service.icon]}
                </div>
                <div className="h-px w-12 bg-border" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-muted">
                  Service Detail
                </span>
              </div>

              <h1 className="text-display font-display font-bold text-text-primary mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
                {service.detailedDescription || service.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  href="/contact"
                  variant="accent"
                  size="lg"
                  className="px-8"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Book Service
                </Button>
                <Button
                  href="tel:(555) 123-4567"
                  variant="outline"
                  size="lg"
                  className="px-8"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  (555) 123-4567
                </Button>
              </div>
            </div>

            {/* Image & Stats Plate */}
            <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="aspect-3/2 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-bg-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Stats Floating Plate */}
              <div className="absolute -bottom-10 -left-10 lg:-left-20 z-20 bg-bg-white p-8 rounded-3xl shadow-xl border border-border animate-bounce-subtle hidden sm:block">
                <div className="grid grid-cols-2 gap-8 items-center">
                  {(service.stats || []).slice(0, 2).map((stat, idx) => (
                    <div key={idx} className={idx === 0 ? "border-r border-border pr-8" : ""}>
                      <div className="text-3xl font-display font-bold text-primary flex items-baseline">
                        <AnimatedCounter value={stat.value} label="" className="text-3xl" />
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative dots/shapes */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10 blur-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights Bar */}
      <section className="bg-bg-white border-b border-border py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-text-primary">Fully Insured</div>
                <div className="text-xs text-text-secondary">Licensed & Bonded</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-text-primary">On-Time Arrival</div>
                <div className="text-xs text-text-secondary">Scheduled Windows</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-text-primary">Quality Guarantee</div>
                <div className="text-xs text-text-secondary">100% Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-text-primary">Expert Pros</div>
                <div className="text-xs text-text-secondary">Background Checked</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg-white relative overflow-hidden">
        <Container>
          <AnimatedSection >
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <h2 className="text-heading font-display font-bold text-text-primary mb-6">
                Our {service.title} Process
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We follow a streamlined, professional approach to ensuring your project is completed to the highest standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Desktop Connecting Line (SVG Path) */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] z-0">
              <svg
                width="100%"
                height="40"
                viewBox="0 0 1000 40"
                fill="none"
                preserveAspectRatio="none"
                className="text-border"
              >
                <path
                  d="M0 20C150 20 150 2 300 2C450 2 450 38 600 38C750 38 750 20 1000 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="animate-[shimmer_2s_infinite_linear]"
                />
              </svg>
            </div>

            {(service.process || []).map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 150} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8 group">
                    {/* Outer Glow/Ring */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />

                    {/* Icon Container */}
                    <div className="relative w-24 h-24 bg-bg-white rounded-2xl shadow-md border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-text-white group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-3">
                      <div className="w-10 h-10">
                        {iconMap[step.icon] || <CheckCircle className="w-full h-full" />}
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-text-white rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-lg transform transition-transform group-hover:scale-110">
                        {idx + 1}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Details & FAQ Section */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column: What's Included */}
            <div className="lg:col-span-5">
              <AnimatedSection animation="slide-right">
                <div className="bg-bg-white p-10 rounded-[2.5rem] shadow-sm border border-border sticky top-24">
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-8 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    What's Included
                  </h2>
                  <div className="space-y-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="mt-1 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-text-white transition-colors">
                          <CheckSquare className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-text-primary font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <h4 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Our Promise
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed italic">
                      "{service.cta}"
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: FAQ & Benefits */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="mb-16">
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-8 flex items-center gap-3">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={(service.faqs || []).map((faq, idx) => ({
                      id: `faq-${idx}`,
                      title: faq.question,
                      content: faq.answer
                    }))}
                    className="w-full"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div>
                  <h2 className="text-3xl font-display font-bold text-text-primary mb-8">
                    Why Choose Our Service
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="p-6 bg-bg-white rounded-2xl border border-border hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                          {benefitIcons[index % benefitIcons.length]}
                        </div>
                        <h4 className="font-bold text-text-primary mb-2">{benefit}</h4>
                        <p className="text-xs text-text-secondary">Expertly delivered by our trained and vetted professionals.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-bg-white overflow-hidden">
        <Container>
          <AnimatedSection >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
                  Other Expert Services
                </h2>
                <p className="text-text-secondary">
                  We provide a full suite of home maintenance and repair solutions tailored to your needs.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                View All Services <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, idx) => (
              <AnimatedSection key={relatedService.id} delay={idx * 100}>
                <ServiceCard
                  title={relatedService.title}
                  description={relatedService.shortDescription}
                  icon={relatedService.icon}
                  href={`/services/${relatedService.slug}`}
                  variant="default"
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

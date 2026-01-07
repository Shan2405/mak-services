import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { StatsGrid } from "@/components/ui/StatCounter";
import homepageData from "@/data/homePage.json";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  const { hero } = homepageData;

  // Transform stats for StatsGrid component
  const statsData = hero.stats.map((stat) => ({
    value: stat.value,
    label: stat.label,
    suffix: stat.value.includes("+") ? "+" : "",
  }));

  return (
    <section className="relative bg-bg-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-t from-accent/5 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            {/* Badge Component */}
            <Badge
              variant="primary"
              size="md"
              icon={<CheckCircle className="w-4 h-4" />}
              className="mb-6"
            >
              {hero.badge}
            </Badge>

            {/* Title */}
            <h1 className="text-hero font-display font-bold text-text-primary mb-6 leading-tight">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              {hero.description}
            </p>
            <p className="text-text-muted mb-8">
              {hero.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                href={hero.primaryCta.href}
                variant="accent"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                size="lg"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Stats - Using StatsGrid Component */}
            <StatsGrid stats={statsData} columns={4} />
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={hero.image}
                alt="Professional home repair services"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-bg-white rounded-xl shadow-card p-4 hidden md:block animate-bounce-soft">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">100%</div>
                  <div className="text-sm text-text-muted">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
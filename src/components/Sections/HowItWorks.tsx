import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import howItWorksData from "@/data/howItWorks.json";
import { MessageCircle, ClipboardList, Calculator, CheckCircle, ArrowRight } from "lucide-react";

/**
 * Icon Map for Lucide Icons
 */
const iconMap: { [key: string]: React.ReactNode } = {
  "message-circle": <MessageCircle className="w-8 h-8" />,
  "clipboard-list": <ClipboardList className="w-8 h-8" />,
  "calculator": <Calculator className="w-8 h-8" />,
  "check-circle": <CheckCircle className="w-8 h-8" />,
};

const HowItWorks: React.FC = () => {
  const { badge, title, description, steps, cta } = howItWorksData;

  return (
    <section className="py-section bg-bg-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold tracking-wide uppercase">{badge}</span>
          </div>
          <h2 className="text-display font-display font-bold text-text-primary mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Indicator & Icon */}
                <div className="relative mb-8 group">
                  {/* Outer Glow/Ring */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />

                  {/* Icon Container */}
                  <div className="relative w-24 h-24 bg-bg-white rounded-2xl shadow-md border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-text-white group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-3">
                    {iconMap[step.icon]}

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-text-white rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-lg transform transition-transform group-hover:scale-110">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300 flex-1">
                  <h3 className="text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24 animate-fade-up">
          <div className="inline-block p-8 bg-bg-white rounded-3xl shadow-sm border border-border/50 max-w-2xl mx-auto w-full">
            <h4 className="text-xl font-display font-bold text-text-primary mb-3">
              {cta.title}
            </h4>
            <p className="text-text-secondary mb-8">
              Don't let small repairs turn into big problems.
            </p>
            <Button
              href={cta.href}
              variant="accent"
              size="lg"
              className="min-w-[240px]"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
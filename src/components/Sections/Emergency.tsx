import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import emergencyData from "@/data/emergency.json";
import { Phone, Droplet, Zap, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  droplet: <Droplet className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
};

const EmergencyServices: React.FC = () => {
  const { badge, title, subtitle, description, phone, services, features, cta } = emergencyData;

  return (
    <section className="py-section bg-linear-to-br from-accent to-accent-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-text-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-text-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-text-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-text-white/20 text-text-white px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">{badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-display font-display font-bold text-text-white mb-2">
              {title}
            </h2>
            <p className="text-xl text-text-white/90 mb-4">{subtitle}</p>
            <p className="text-text-white/80 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-text-white rounded-full flex items-center justify-center animate-bounce-soft">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-text-white/80 text-sm">Emergency Hotline</p>
                <a
                  href={`tel:${phone}`}
                  className="text-2xl lg:text-3xl font-display font-bold text-text-white hover:underline"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={cta.primary.href}
                variant="secondary"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
              >
                {cta.primary.label}
              </Button>
              <Button
                href={cta.secondary.href}
                variant="outline"
                size="lg"
                className="border-text-white text-text-white hover:bg-text-white hover:text-accent"
              >
                {cta.secondary.label}
              </Button>
            </div>
          </div>

          {/* Services & Features */}
          <div className="space-y-6">
            {/* Emergency Services Cards */}
            <div className="grid gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-text-white/10 backdrop-blur-sm border border-text-white/20 rounded-xl p-5 hover:bg-text-white/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-text-white/20 rounded-xl flex items-center justify-center text-text-white shrink-0">
                      {iconMap[service.icon]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-display font-bold text-text-white">
                          {service.title}
                        </h3>
                        <span className="text-xs bg-text-white/20 text-text-white px-2 py-1 rounded-full">
                          {service.responseTime}
                        </span>
                      </div>
                      <p className="text-text-white/80 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-text-white/10 backdrop-blur-sm border border-text-white/20 rounded-xl p-6">
              <h4 className="font-display font-bold text-text-white mb-4">
                Why Choose Our Emergency Services
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-white/90 text-sm">
                    <CheckCircle className="w-5 h-5 text-text-white shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmergencyServices;
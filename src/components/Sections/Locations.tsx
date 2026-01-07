"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Check,
  X,
  ArrowRight,
  Phone,
  Clock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import locationsData from "@/data/locations.json";

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(locationsData.states[0]);

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-20" />

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-linear-to-br from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-linear-to-tl from-accent/5 to-transparent" />

      <Container className="relative">
        <SectionHeader
          badge={locationsData.hero.badge}
          headline={locationsData.hero.title}
          description={locationsData.hero.description}
        />

        {/* Location Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {locationsData.states.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-6 py-3 font-medium transition-all duration-300",
                activeLocation.id === location.id
                  ? "bg-primary text-text-inverse shadow-lg shadow-primary/25"
                  : "bg-surface-elevated text-text-secondary hover:bg-surface-elevated/80 hover:text-text-primary"
              )}
            >
              <MapPin className="h-5 w-5" />
              {location.name}
            </button>
          ))}
        </div>

        {/* Active Location Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* Left - Image & Info */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={activeLocation.heroImage}
                  alt={`${activeLocation.name} service area`}
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
              </div>

              {/* State Badge */}
              <div className="absolute left-6 top-6">
                <Badge variant="primary" size="lg">
                  <MapPin className="h-4 w-4" />
                  {activeLocation.name} ({activeLocation.abbreviation})
                </Badge>
              </div>

              {/* Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-surface/90 p-4 backdrop-blur-sm"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {activeLocation.stats.map((stat: any, index: number) => (
                    <div key={index}>
                      <div className="font-heading text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Details */}
            <div>
              <h3 className="mb-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
                Serving {activeLocation.name} Homeowners
              </h3>
              <p className="mb-6 text-text-secondary">
                {activeLocation.description}
              </p>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {activeLocation.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-text-secondary">
                    <Check className="h-5 w-5 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Service Areas */}
              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Service Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLocation.serviceAreas.map((area: string, index: number) => (
                    <Badge key={index} variant="default" size="md">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Cities Grid */}
              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Cities We Serve
                </h4>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  {activeLocation.cities.map((city: any, index: number) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                        city.available
                          ? "bg-success/10 text-success"
                          : "bg-surface-elevated text-text-muted"
                      )}
                    >
                      {city.available ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                      <span>{city.name}</span>
                      {!city.available && (
                        <span className="ml-auto text-xs">(Soon)</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Get Service in {activeLocation.name}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Expansion Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 overflow-hidden rounded-2xl border border-accent/30 bg-linear-to-r from-accent/10 to-primary/10"
        >
          <div className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-text-primary md:text-2xl">
                {locationsData.expansion.headline}
              </h3>
              <p className="mt-2 text-text-secondary">
                {locationsData.expansion.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <span className="text-sm text-text-muted">Coming to:</span>
                {locationsData.expansion.upcomingStates.map((state: string, index: number) => (
                  <Badge key={index} variant="accent" size="md">
                    {state}
                  </Badge>
                ))}
              </div>
            </div>
            <Button href="/contact" variant="outline" size="lg">
              {locationsData.expansion.ctaText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
"use client";

import { motion, Variants } from "framer-motion";

import {
  Award,
  DollarSign,
  Heart,
  Clock,
  Shield,
  Leaf,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  staggerContainer,
  staggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import content from "@/data/content.json";

const valueIcons: Record<string, React.ReactNode> = {
  Award: <Award className="h-6 w-6" />,
  DollarSign: <DollarSign className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  Clock: <Clock className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Leaf: <Leaf className="h-6 w-6" />,
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

      <Container className="relative">
        {/* Main Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image Section */}
          <motion.div
            variants={fadeInLeft as Variants}

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={content.about.image}
                  alt="Mark Repair Services team"
                  className="aspect-4/3 w-full object-cover"
                />

              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-surface/60 via-transparent to-transparent" />


              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 z-10 md:bottom-8 md:right-8"
              >
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-center text-text-inverse shadow-xl md:h-36 md:w-36">

                  <span className="text-4xl font-bold md:text-5xl">15+</span>
                  <span className="text-sm">Years of</span>
                  <span className="text-sm font-medium">Excellence</span>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -left-4 -top-4 z-0 h-full w-full rounded-3xl border-2 border-primary/20" />
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {content.about.teamStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-surface-elevated p-4 text-center"
                >
                  <div className="font-heading text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-muted md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Content Section */}
          <motion.div
            variants={fadeInRight as Variants}

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Us
            </span>

            <h2 className="font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
              {content.about.headline}
            </h2>

            <p className="mt-4 text-lg text-primary">
              {content.about.subheadline}
            </p>

            <p className="mt-4 text-text-secondary">
              {content.about.description}
            </p>

            {/* Mission */}
            <div className="mt-8 rounded-xl border border-border bg-surface-elevated p-6">
              <h3 className="mb-2 flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Heart className="h-5 w-5 text-primary" />
                Our Mission
              </h3>
              <p className="text-text-secondary">{content.about.mission}</p>
            </div>

            {/* Key Points */}
            <ul className="mt-8 space-y-4">
              {[
                "Over 15 years of trusted service",
                "Licensed, insured, and certified professionals",
                "Transparent pricing with no hidden fees",
                "100% satisfaction guarantee on all work",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success/20">
                    <CheckCircle className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-text-secondary">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/about" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >
          <SectionHeader
            headline="Our Core Values"
            description="The principles that guide everything we do"
            size="sm"
          />

          <motion.div
            variants={staggerContainer as Variants}

            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {content.about.values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem as Variants}

                className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-text-inverse">
                  {valueIcons[value.icon]}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
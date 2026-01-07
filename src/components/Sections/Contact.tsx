"use client";

import { motion, Variants } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/contactForm";

import { staggerContainer, staggerItem } from "@/lib/animations";
import content from "@/data/content.json";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      value: content.contact.phone,
      href: `tel:${content.contact.phone.replace(/\D/g, "")}`,
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: content.contact.email,
      href: `mailto:${content.contact.email}`,
      color: "bg-accent/10 text-accent",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Our main office location",
      value: `${content.contact.address.city}, ${content.contact.address.state}`,
      href: "#",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon-Fri: 7AM-7PM",
      subValue: "24/7 Emergency Line",
      href: "#",
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-linear-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-linear-to-tr from-accent/5 to-transparent" />

      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge="Contact Us"
          subheadline={content.contact.subheadline}
          headline={content.contact.headline}
          description={content.contact.description}
        />

        {/* Contact Methods Grid */}
        <motion.div
          variants={staggerContainer as Variants}

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              variants={staggerItem as Variants}

              href={method.href}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${method.color} transition-transform group-hover:scale-110`}
              >
                {method.icon}
              </div>
              <h3 className="mb-1 font-heading text-lg font-semibold text-text-primary">
                {method.title}
              </h3>
              <p className="mb-2 text-sm text-text-muted">{method.description}</p>
              <p className="font-medium text-text-primary">{method.value}</p>
              {method.subValue && (
                <p className="text-sm text-success">{method.subValue}</p>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <MessageSquare className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary">
                    Send Us a Message
                  </h3>
                  <p className="text-text-muted">
                    Fill out the form and we'll get back to you
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </motion.div>

          {/* Right - Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="relative h-64 overflow-hidden rounded-3xl border border-border bg-surface-elevated lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Map location"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 h-12 w-12 text-primary" />
                  <h4 className="font-heading text-xl font-bold text-text-primary">
                    Serving Texas & Florida
                  </h4>
                  <p className="mt-2 text-text-muted">
                    Multiple locations for faster service
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h4 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Clock className="h-5 w-5 text-primary" />
                Business Hours
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-text-secondary">Monday - Friday</span>
                  <span className="font-medium text-text-primary">
                    7:00 AM - 7:00 PM
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-text-secondary">Saturday</span>
                  <span className="font-medium text-text-primary">
                    8:00 AM - 5:00 PM
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-text-secondary">Sunday</span>
                  <span className="font-medium text-text-muted">
                    Emergency Only
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-text-secondary">Emergency Line</span>
                  <span className="font-medium text-success">
                    24/7 Available
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Response Promise */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-text-inverse">

                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text-primary">
                    Quick Response Guaranteed
                  </h4>
                  <p className="mt-1 text-text-secondary">
                    We respond to all inquiries within 2 hours during business
                    hours. For emergencies, call our 24/7 hotline.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
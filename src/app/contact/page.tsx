import React from "react";
import Container from "@/components/ui/Container";
// import Breadcrumb from "@/components/common/BreadCrumb";
import Accordion from "@/components/ui/Accordian";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import contactData from "@/data/contact.json";
import siteData from "@/data/siteConfig.json";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mark Repair Services",
  description: "Contact Mark Repair Services for a free estimate. We provide professional home repair, renovation, and maintenance services in Texas and Florida.",
};

const iconMap: { [key: string]: React.ReactNode } = {
  phone: <Phone className="w-6 h-6" />,
  mail: <Mail className="w-6 h-6" />,
  "map-pin": <MapPin className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
};

export default function ContactPage() {
  const { hero, contactInfo, form, faq } = contactData;

  // Transform FAQ for Accordion component
  const accordionItems = faq.questions.map((q, index) => ({
    id: `faq-${index}`,
    title: q.question,
    content: <p>{q.answer}</p>,
  }));

  return (
    <>
      {/* Breadcrumb Component */}
      {/* <Breadcrumb
        items={[
          { label: "Contact", href: "/contact" },
        ]}
      /> */}

      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              badge={hero.badge}
              title={hero.title}
              description={hero.description}
              align="center"
            />
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-heading font-display font-bold text-text-primary mb-4">
                {contactInfo.title}
              </h2>
              <p className="text-text-secondary mb-8">
                {contactInfo.description}
              </p>

              <div className="space-y-6">
                {contactInfo.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-text-primary hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-text-primary">{item.value}</p>
                      )}
                      {item.description && (
                        <p className="text-sm text-text-muted mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm font-medium text-text-primary mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {Object.entries(siteData.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-bg-muted hover:bg-primary hover:text-text-white rounded-lg flex items-center justify-center text-text-secondary transition-colors capitalize"
                      aria-label={platform}
                    >
                      {platform[0].toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-bg-light rounded-2xl p-6 lg:p-10">
                <h2 className="text-xl font-display font-bold text-text-primary mb-2">
                  {form.title}
                </h2>
                <p className="text-text-secondary mb-8">
                  {form.description}
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section - Using Accordion Component */}
      <section className="py-section bg-bg-muted">
        <Container size="sm">
          <SectionHeader
            title={faq.title}
            align="center"
          />

          <Accordion 
            items={accordionItems} 
            allowMultiple={false}
          />
        </Container>
      </section>
    </>
  );
}
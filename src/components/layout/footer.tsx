import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import siteData from "@/data/siteConfig.json";
import footerData from "@/data/footer.json";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  facebook: <Facebook className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-text-inverse">
      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src="/icon.png"
                    alt="Mark Repair Services"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col text-left -ml-2">
                  <span className="font-display font-bold text-xl text-text-white group-hover:text-accent transition-colors">
                    Mark Repair
                  </span>
                  <span className="text-xs text-text-light -mt-1">
                    Services
                  </span>
                </div>
              </Link>
              <p className="text-text-light mb-6 leading-relaxed">
                {footerData.companyDescription}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {Object.entries(siteData.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary-light hover:bg-primary flex items-center justify-center transition-colors"
                    aria-label={platform}
                  >
                    {iconMap[platform]}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg text-text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-light hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-lg text-text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerData.serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-light hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-lg text-text-white mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="flex items-start gap-3 text-text-light hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{siteData.contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="flex items-start gap-3 text-text-light hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{siteData.contact.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-light">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{siteData.contact.address}</span>
                </li>
              </ul>

              {/* Business Hours */}
              <div className="mt-6 pt-6 border-t border-secondary-light">
                <h5 className="font-semibold text-text-white mb-3">Business Hours</h5>
                <ul className="space-y-2 text-text-light text-sm">
                  <li>{siteData.businessHours.weekdays}</li>
                  <li>{siteData.businessHours.saturday}</li>
                  <li>{siteData.businessHours.sunday}</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-light py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-text-light text-sm">
            <p>
              © {currentYear} {siteData.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerData.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
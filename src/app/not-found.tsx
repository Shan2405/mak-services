import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-bg-light py-16">
      <Container size="sm">
        <div className="text-center">
          {/* 404 Visual */}
          <div className="relative mb-8">
            <span className="text-[150px] lg:text-[200px] font-display font-bold text-primary/10 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-heading font-display font-bold text-text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              href="/"
              variant="primary"
              size="lg"
              icon={<Home className="w-5 h-5" />}
              iconPosition="left"
            >
              Back to Home
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
              iconPosition="left"
            >
              Contact Us
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-text-muted mb-4">
              Here are some helpful links:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Our Services
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/about"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                About Us
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/locations"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Locations
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/contact"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import legalData from "@/data/legal.json";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mark Repair Services",
  description: "Learn how Mark Repair Services collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const { privacyPolicy } = legalData;

  return (
    <>
      {/* Header */}
      <section className="bg-bg-light py-12 lg:py-16 border-b border-border">
        <Container size="sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-heading font-display font-bold text-text-primary">
                {privacyPolicy.title}
              </h1>
              <p className="text-text-muted text-sm">
                Last updated: {privacyPolicy.lastUpdated}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <Container size="sm">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-text-secondary leading-relaxed mb-8">
              {privacyPolicy.introduction}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {privacyPolicy.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-display font-bold text-text-primary mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.subtitle && (
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-text-secondary leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-text-muted text-sm">
                If you have any questions about this Privacy Policy, please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
import React from "react";
import Container from "@/components/ui/Container";
import { Phone, Clock, Shield } from "lucide-react";
import ServiceRequestForm from "../forms/ServiceRequestForm";

interface ContactCTAProps {
    title?: string;
    description?: string;
    showForm?: boolean;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
    title = "Ready to Get Started?",
    description = "Fill out the form for a free estimate or call us directly.",
    showForm = true,
}) => {
    return (
        <section className="py-section bg-bg-muted">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div>
                        <h2 className="text-heading font-display font-bold text-text-primary mb-4">
                            {title}
                        </h2>
                        <p className="text-lg text-text-secondary mb-8">
                            {description}
                        </p>

                        {/* Contact Options */}
                        <div className="space-y-4 mb-8">
                            <a
                                href="tel:(555) 123-4567"
                                className="flex items-center gap-4 p-4 bg-bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Call Us Now</p>
                                    <p className="font-semibold text-text-primary">(555) 123-4567</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-bg-white rounded-xl border border-border">
                                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Response Time</p>
                                    <p className="font-semibold text-text-primary">Within 24 Hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-success" />
                                Licensed & Insured
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-success" />
                                Free Estimates
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    {showForm && (
                        <div className="bg-bg-white rounded-2xl shadow-card p-6 lg:p-8">
                            <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                                Request a Free Estimate
                            </h3>
                            <p className="text-text-secondary text-sm mb-6">
                                Fill out the form and we'll get back to you quickly.
                            </p>
                            <ServiceRequestForm compact />
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default ContactCTA;
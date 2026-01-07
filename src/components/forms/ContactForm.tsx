"use client";

import React, { useState } from "react";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textArea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import contactData from "@/data/contact.json";
import { Send, CheckCircle, User, Mail, Phone, MapPin } from "lucide-react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    propertyArea: string;
    urgency: string;
    location: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const { form } = contactData;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        propertyArea: "",
        urgency: "",
        location: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                    {form.successMessage.title}
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                    {form.successMessage.description}
                </p>
                <Button
                    variant="primary"
                    className="mt-6"
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            service: "",
                            propertyArea: "",
                            urgency: "",
                            location: "",
                            message: "",
                        });
                    }}
                >
                    Submit Another Request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
                <Input
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    icon={<User className="w-5 h-5" />}
                />
                <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Contact Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
                <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    icon={<Mail className="w-5 h-5" />}
                />
                <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    icon={<Phone className="w-5 h-5" />}
                />
            </div>

            {/* Service Selection */}
            <div className="grid sm:grid-cols-2 gap-4">
                <Select
                    label="Service Needed"
                    name="service"
                    options={form.services}
                    placeholder="Select a service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                />
                <Select
                    label="Property Area"
                    name="propertyArea"
                    options={form.propertyAreas}
                    placeholder="Select area"
                    value={formData.propertyArea}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Urgency & Location */}
            <div className="grid sm:grid-cols-2 gap-4">
                <Select
                    label="Urgency Level"
                    name="urgency"
                    options={form.urgencyLevels}
                    placeholder="How urgent?"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Location / Zip Code"
                    name="location"
                    placeholder="Houston, TX or 77001"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    icon={<MapPin className="w-5 h-5" />}
                />
            </div>

            {/* Message */}
            <Textarea
                label="Describe Your Project"
                name="message"
                placeholder="Please provide details about the work you need done, including any specific requirements or questions..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
            />

            {/* Submit Button */}
            <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
            >
                {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>

            <p className="text-sm text-text-muted text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" className="text-primary hover:underline">
                    Terms of Service
                </a>
                .
            </p>
        </form>
    );
};

export default ContactForm;
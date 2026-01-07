"use client";

import React, { useState } from "react";
import Input from "@/components/ui/input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import contactData from "@/data/contact.json";
import { Send, CheckCircle } from "lucide-react";
import Textarea from "../ui/textArea";

interface ServiceRequestFormProps {
    preselectedService?: string;
    compact?: boolean;
}

const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({
    preselectedService = "",
    compact = false,
}) => {
    const { form } = contactData;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: preselectedService,
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
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary mb-2">
                    Request Submitted!
                </h3>
                <p className="text-text-secondary text-sm">
                    We'll contact you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label={compact ? undefined : "Full Name"}
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <div className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
                <Input
                    label={compact ? undefined : "Email"}
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    label={compact ? undefined : "Phone"}
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <Select
                label={compact ? undefined : "Service Needed"}
                name="service"
                options={form.services}
                placeholder="Select a service"
                value={formData.service}
                onChange={handleChange}
                required
            />

            {!compact && (
                <Textarea
                    label="Additional Details"
                    name="message"
                    placeholder="Briefly describe your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                />
            )}

            <Button
                type="submit"
                variant="accent"
                size={compact ? "md" : "lg"}
                className="w-full"
                disabled={isSubmitting}
                icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
            >
                {isSubmitting ? "Submitting..." : "Get Free Estimate"}
            </Button>
        </form>
    );
};

export default ServiceRequestForm;
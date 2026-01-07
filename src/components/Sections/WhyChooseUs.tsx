import React from "react";
import Container from "@/components/ui/Container";
import homepageData from "@/data/homePage.json";
import { Shield, Clock, DollarSign, Award, Users, Headphones } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
    shield: <Shield className="w-7 h-7" />,
    clock: <Clock className="w-7 h-7" />,
    dollar: <DollarSign className="w-7 h-7" />,
    award: <Award className="w-7 h-7" />,
    users: <Users className="w-7 h-7" />,
    headphones: <Headphones className="w-7 h-7" />,
};

const WhyChooseUs: React.FC = () => {
    const { whyChooseUs } = homepageData;

    return (
        <section className="py-section bg-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <Container className="relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-text-white/10 text-text-white px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold">{whyChooseUs.badge}</span>
                    </div>
                    <h2 className="text-display font-display font-bold text-text-white mb-4">
                        {whyChooseUs.title}
                    </h2>
                    <p className="text-lg text-text-light">
                        {whyChooseUs.description}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whyChooseUs.features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-secondary-light/50 backdrop-blur-sm border border-text-white/10 rounded-xl p-6 hover:bg-secondary-light hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-text-white transition-colors">
                                {iconMap[feature.icon]}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-display font-bold text-text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-text-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
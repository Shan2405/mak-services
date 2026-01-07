import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import aboutData from "@/data/about.json";
import { Heart, Shield, Handshake, Clock, CheckCircle, Award } from "lucide-react";
import type { Metadata } from "next";
import CTASection from "@/components/Sections/CTA";

export const metadata: Metadata = {
  title: "About Us | Mark Repair Services",
  description: "Learn about Mark Repair Services - your trusted partner for home repair, renovation, and maintenance solutions. Over 15 years of experience serving Texas and Florida.",
};

const iconMap: { [key: string]: React.ReactNode } = {
  heart: <Heart className="w-7 h-7" />,
  shield: <Shield className="w-7 h-7" />,
  handshake: <Handshake className="w-7 h-7" />,
  clock: <Clock className="w-7 h-7" />,
};

export default function AboutPage() {
  const { hero, mission, story, team, stats, certifications } = aboutData;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold">{hero.badge}</span>
              </div>
              <h1 className="text-hero font-display font-bold text-text-primary mb-6">
                {hero.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                {hero.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl lg:text-3xl font-display font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={hero.image}
                  alt="Mark Repair Services Team"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -z-10 w-full h-full bg-primary/10 rounded-2xl top-4 -right-4" />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-section bg-bg-white">
        <Container>
          <SectionHeader
            title={mission.title}
            description={mission.description}
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {mission.values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-bg-light rounded-xl hover:shadow-card transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-5">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-section bg-bg-muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={story.image}
                  alt="Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -z-10 w-full h-full bg-accent/10 rounded-2xl top-4 -left-4" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-heading font-display font-bold text-text-primary mb-6">
                {story.title}
              </h2>
              <div className="space-y-4">
                {story.content.map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-section bg-bg-white">
        <Container>
          <SectionHeader
            title={team.title}
            description={team.description}
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.members.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-section bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-text-white" />
            </div>
            <h2 className="text-heading font-display font-bold text-text-white mb-4">
              {certifications.title}
            </h2>
            <p className="text-lg text-text-light mb-10">
              {certifications.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {certifications.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary-light/50 backdrop-blur-sm border border-text-white/10 rounded-xl px-4 py-3"
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
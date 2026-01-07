"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  const { badge, title, description, testimonials, stats } = testimonialsData;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-section bg-bg-muted">
      <Container>
        {/* Section Header - Using SectionHeader Component */}
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          align="center"
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-6 h-6 text-warning fill-warning" />
              <span className="text-2xl lg:text-3xl font-display font-bold text-text-primary">
                {stats.averageRating}
              </span>
            </div>
            <p className="text-sm text-text-muted">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-1">
              {stats.totalReviews}+
            </div>
            <p className="text-sm text-text-muted">Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-display font-bold text-text-primary mb-1">
              {stats.satisfactionRate}%
            </div>
            <p className="text-sm text-text-muted">Satisfied</p>
          </div>
        </div>

        {/* Main Testimonial - Using TestimonialCard Component */}
        <div className="max-w-4xl mx-auto">
          <TestimonialCard
            name={testimonials[activeIndex].name}
            location={testimonials[activeIndex].location}
            rating={testimonials[activeIndex].rating}
            text={testimonials[activeIndex].text}
            service={testimonials[activeIndex].service}
            avatar={testimonials[activeIndex].avatar}
            variant="default"
          />

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-bg-white border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-bg-white border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials
            .filter((_, index) => index !== activeIndex)
            .slice(0, 3)
            .map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                text={testimonial.text}
                service={testimonial.service}
                avatar={testimonial.avatar}
                variant="compact"
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
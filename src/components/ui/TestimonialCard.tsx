import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  avatar: string;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  text,
  service,
  avatar,
  variant = "default",
  className = "",
}) => {
  const renderStars = () => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-warning fill-warning" : "text-border"
          }`}
        />
      ))}
    </div>
  );

  if (variant === "compact") {
    return (
      <div className={`bg-bg-white border border-border rounded-xl p-5 ${className}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <Image src={avatar} alt={name} fill className="object-cover" sizes="40px" />
          </div>
          <div>
            <div className="font-semibold text-text-primary text-sm">{name}</div>
            <div className="text-xs text-text-muted">{location}</div>
          </div>
          <div className="ml-auto">{renderStars()}</div>
        </div>
        <p className="text-text-secondary text-sm line-clamp-3">{text}</p>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className={`bg-primary text-text-white rounded-2xl p-8 relative overflow-hidden ${className}`}>
        {/* Background Pattern */}
        <div className="absolute top-4 right-4 opacity-20">
          <Quote className="w-24 h-24" />
        </div>

        <div className="relative">
          {renderStars()}
          <blockquote className="text-xl leading-relaxed my-6">
            "{text}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-text-white/30">
              <Image src={avatar} alt={name} fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-text-white/80 text-sm">{location}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-bg-white border border-border rounded-xl p-6 ${className}`}>
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Rating */}
      <div className="mb-4">{renderStars()}</div>

      {/* Text */}
      <blockquote className="text-text-primary leading-relaxed mb-6">
        "{text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image src={avatar} alt={name} fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <div className="font-semibold text-text-primary">{name}</div>
            <div className="text-sm text-text-muted">{location}</div>
          </div>
        </div>
        <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
          {service}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
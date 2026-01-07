// Update src/components/ui/ServiceCard.tsx - add ImagePlaceholder fallback

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Layers, Droplet, Zap, Hammer, FenceIcon, DoorOpen, Wrench } from "lucide-react";
import ImagePlaceholder from "../common/ImagePlaceHolder";

const iconMap: { [key: string]: React.ReactNode } = {
  sparkles: <Sparkles className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  droplet: <Droplet className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  hammer: <Hammer className="w-6 h-6" />,
  fence: <FenceIcon className="w-6 h-6" />,
  "door-open": <DoorOpen className="w-6 h-6" />,
  wrench: <Wrench className="w-6 h-6" />,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
  variant?: "default" | "featured" | "minimal";
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  image,
  variant = "default",
  className = "",
}) => {
  if (variant === "featured") {
    return (
      <Link
        href={href}
        className={`group relative block rounded-2xl overflow-hidden aspect-4/3 shadow-card hover:shadow-card-hover transition-all ${className}`}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder
            aspectRatio="auto"
            text={title}
            className="absolute inset-0"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/60 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="w-12 h-12 bg-text-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-text-white mb-4 group-hover:bg-primary transition-colors">
            {iconMap[icon]}
          </div>
          <h3 className="text-xl font-display font-bold text-text-white mb-2">
            {title}
          </h3>
          <p className="text-text-light text-sm line-clamp-2 mb-4">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-text-white font-semibold text-sm group-hover:gap-3 transition-all">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "minimal") {
    return (
      <Link
        href={href}
        className={`group flex items-center gap-4 p-4 rounded-xl hover:bg-bg-light transition-colors ${className}`}
      >
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-text-white transition-colors shrink-0">
          {iconMap[icon]}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors truncate">
            {title}
          </h3>
          <p className="text-sm text-text-muted truncate">{description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={href}
      className={`group block bg-bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-card-hover transition-all ${className}`}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-text-white transition-colors">
        {iconMap[icon]}
      </div>
      <h3 className="text-lg font-display font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
        Learn More
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
};

export default ServiceCard;
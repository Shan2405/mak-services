import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  href,
  hover = true,
  padding = "md",
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const baseClasses = `
    bg-bg-white border border-border rounded-xl
    ${paddingClasses[padding]}
    ${hover ? "hover:border-primary/30 hover:shadow-card-hover transition-all duration-300" : ""}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={`block ${baseClasses}`}>
        {children}
      </Link>
    );
  }

  return <div className={baseClasses}>{children}</div>;
};

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  aspectRatio = "video",
  className = "",
}) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} rounded-lg overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

interface CardTitleProps {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  as: Component = "h3",
  className = "",
}) => (
  <Component className={`font-display font-bold text-text-primary ${className}`}>
    {children}
  </Component>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "" }) => (
  <p className={`text-text-secondary text-sm leading-relaxed ${className}`}>
    {children}
  </p>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = "" }) => (
  <div className={`mt-4 pt-4 border-t border-border ${className}`}>{children}</div>
);

export {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
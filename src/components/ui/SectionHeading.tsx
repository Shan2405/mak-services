import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg" | "xl";
  className?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  align = "center",
  titleSize = "lg",
  className = "",
  light = false,
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const titleSizeClasses = {
    sm: "text-[var(--font-2xl)] md:text-[var(--font-3xl)]",
    md: "text-[var(--font-3xl)] md:text-[var(--font-4xl)]",
    lg: "text-[var(--font-4xl)] md:text-[var(--font-5xl)]",
    xl: "text-[var(--font-5xl)] md:text-[var(--font-6xl)]",
  };

  const textColors = light
    ? {
      subtitle: "text-[var(--color-secondary-300)]",
      title: "text-[var(--color-text-inverse)]",
      description: "text-[var(--color-neutral-300)]",
    }
    : {
      subtitle: "text-[var(--color-secondary-500)]",
      title: "text-[var(--color-text-primary)]",
      description: "text-[var(--color-text-secondary)]",
    };

  return (
    <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span
          className={`
            inline-block
           text-(--font-sm) md:text-(--font-base)
            font-semibold
            uppercase
            tracking-wider
            mb-3
            ${textColors.subtitle}
          `}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`
          font-bold
          leading-tight
          mb-4
          ${titleSizeClasses[titleSize]}
          ${textColors.title}
        `}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`
            text-(--font-lg) md:text-(--font-xl)
            leading-relaxed
            ${textColors.description}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
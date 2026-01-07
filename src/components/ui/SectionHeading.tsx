import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title?: string;
  headline?: string;
  subtitle?: string;
  subheadline?: string;
  description?: string;
  align?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg" | "xl";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  headline,
  subtitle,
  subheadline,
  description,
  align = "center",
  titleSize,
  size,
  className = "",
  light = false,
}) => {
  const displayTitle = title || headline || "";
  const displaySubtitle = subtitle || subheadline;
  const displaySize = (titleSize || size || "lg") as keyof typeof titleSizeClasses;
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
      {badge && (
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4
            ${light ? "bg-white/10 text-white" : "bg-primary/10 text-primary"}
          `}
        >
          <span className="text-sm font-semibold">{badge}</span>
        </div>
      )}
      {displaySubtitle && (
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
          {displaySubtitle}
        </span>
      )}
      <h2
        className={`
          font-bold
          leading-tight
          mb-4
          ${titleSizeClasses[displaySize]}
          ${textColors.title}
        `}
      >
        {displayTitle}
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
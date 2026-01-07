import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) => {
  return (
    <div
      className={`
        max-w-3xl mb-12 lg:mb-16
        ${align === "center" ? "mx-auto text-center" : ""}
        ${className}
      `}
    >
      {badge && (
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4
            ${light ? "bg-text-white/10 text-text-white" : "bg-primary/10 text-primary"}
          `}
        >
          <span className="text-sm font-semibold">{badge}</span>
        </div>
      )}
      <h2
        className={`
          text-display font-display font-bold mb-4
          ${light ? "text-text-white" : "text-text-primary"}
        `}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`
            text-lg leading-relaxed
            ${light ? "text-text-light" : "text-text-secondary"}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
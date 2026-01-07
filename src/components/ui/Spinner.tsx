import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: "primary" | "white" | "accent";
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
  color = "primary",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-3",
    xl: "w-14 h-14 border-4",
  };

  const colorClasses = {
    primary: "border-primary/20 border-t-primary",
    white: "border-text-white/20 border-t-text-white",
    accent: "border-accent/20 border-t-accent",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-full animate-spin
        ${className}
      `}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
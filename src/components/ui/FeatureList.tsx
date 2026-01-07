import React from "react";
import { CheckCircle, Check, Star, ArrowRight } from "lucide-react";

interface FeatureItem {
  text: string;
  description?: string;
}

interface FeatureListProps {
  features: (string | FeatureItem)[];
  variant?: "check" | "checkCircle" | "star" | "arrow";
  columns?: 1 | 2 | 3;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  features,
  variant = "checkCircle",
  columns = 1,
  size = "md",
  className = "",
}) => {
  const iconMap = {
    check: <Check className="w-5 h-5" />,
    checkCircle: <CheckCircle className="w-5 h-5" />,
    star: <Star className="w-5 h-5 fill-current" />,
    arrow: <ArrowRight className="w-5 h-5" />,
  };

  const iconColorMap = {
    check: "text-success",
    checkCircle: "text-success",
    star: "text-warning",
    arrow: "text-primary",
  };

  const sizeClasses = {
    sm: "text-sm gap-2",
    md: "text-base gap-3",
    lg: "text-lg gap-4",
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <ul className={`grid ${columnClasses[columns]} gap-3 ${className}`}>
      {features.map((feature, index) => {
        const isObject = typeof feature === "object";
        const text = isObject ? feature.text : feature;
        const description = isObject ? feature.description : undefined;

        return (
          <li
            key={index}
            className={`flex items-start ${sizeClasses[size]} text-text-secondary`}
          >
            <span className={`shrink-0 mt-0.5 ${iconColorMap[variant]}`}>
              {iconMap[variant]}
            </span>
            <div>
              <span className={description ? "font-medium text-text-primary" : ""}>
                {text}
              </span>
              {description && (
                <p className="text-sm text-text-muted mt-1">{description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FeatureList;
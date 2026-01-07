import React from "react";

interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  className?: string;
  lines?: number;
  animation?: "pulse" | "wave" | "none";
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  width,
  height,
  className = "",
  lines = 1,
  animation = "pulse",
}) => {
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-shimmer",
    none: "",
  };

  const baseClasses = `bg-bg-muted ${animationClasses[animation]}`;

  const variantClasses = {
    text: "rounded h-4",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-lg",
  };

  const style: React.CSSProperties = {
    width: width ?? (variant === "text" ? "100%" : undefined),
    height: height ?? (variant === "circular" ? width : undefined),
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: index === lines - 1 ? "75%" : "100%",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

// Preset skeleton components
const SkeletonCard: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`p-6 bg-bg-white border border-border rounded-xl ${className}`}>
    <Skeleton variant="rounded" height={160} className="mb-4" />
    <Skeleton variant="text" width="60%" className="mb-2" />
    <Skeleton variant="text" lines={2} />
  </div>
);

const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = "",
}) => (
  <Skeleton
    variant="circular"
    width={size}
    height={size}
    className={className}
  />
);

const SkeletonButton: React.FC<{ className?: string; size?: "sm" | "md" | "lg" }> = ({ 
  className = "",
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-24 h-9",
    md: "w-32 h-11",
    lg: "w-40 h-12",
  };

  return (
    <Skeleton 
      variant="rounded" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

const SkeletonText: React.FC<{ 
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}> = ({ 
  lines = 1,
  className = "",
  lastLineWidth = "75%"
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton 
        key={index}
        variant="text" 
        width={index === lines - 1 ? lastLineWidth : "100%"}
      />
    ))}
  </div>
);

const SkeletonImage: React.FC<{ 
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  className?: string;
}> = ({ 
  aspectRatio = "video",
  className = ""
}) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  return (
    <Skeleton 
      variant="rounded" 
      className={`${aspectClasses[aspectRatio]} ${className}`}
    />
  );
};

export { 
  Skeleton, 
  SkeletonCard, 
  SkeletonAvatar, 
  SkeletonButton,
  SkeletonText,
  SkeletonImage
};
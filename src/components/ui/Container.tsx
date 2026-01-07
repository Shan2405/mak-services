import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl" | "full";
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={`
        mx-auto w-full px-4 sm:px-6 lg:px-8
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default Container;
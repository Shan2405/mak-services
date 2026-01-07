import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variantStyles = {
    primary: `
      bg-primary text-text-white
      hover:bg-primary-dark
      focus-visible:ring-primary
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-secondary text-text-white
      hover:bg-secondary-light
      focus-visible:ring-secondary
      shadow-md hover:shadow-lg
    `,
    accent: `
      bg-accent text-text-white
      hover:bg-accent-dark
      focus-visible:ring-accent
      shadow-md hover:shadow-lg
    `,
    outline: `
      bg-transparent text-primary
      border-2 border-primary
      hover:bg-primary hover:text-text-white
      focus-visible:ring-primary
    `,
    ghost: `
      bg-transparent text-text-primary
      hover:bg-bg-muted
      focus-visible:ring-primary
    `,
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="w-5 h-5">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="w-5 h-5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {content}
    </button>
  );
};

export default Button;
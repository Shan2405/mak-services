import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      icon,
      iconPosition = "left",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-primary mb-2"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {icon && iconPosition === "left" && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`
              w-full px-4 py-3 rounded-lg border bg-bg-white
              text-text-primary placeholder:text-text-muted
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              disabled:bg-bg-muted disabled:cursor-not-allowed
              ${icon && iconPosition === "left" ? "pl-12" : ""}
              ${icon && iconPosition === "right" ? "pr-12" : ""}
              ${error ? "border-error focus:ring-error/20 focus:border-error" : "border-border"}
              ${className}
            `}
            {...props}
          />

          {icon && iconPosition === "right" && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
              {icon}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-sm text-error">{error}</p>
        )}

        {helperText && !error && (
          <p className="mt-1.5 text-sm text-text-muted">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
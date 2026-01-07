"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export default function AnimatedCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  valueClassName,
  labelClassName,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Parse numeric value
  const numericValue = typeof value === "string" 
    ? parseFloat(value.replace(/[^0-9.]/g, "")) 
    : value;
  
  const isNumeric = !isNaN(numericValue);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && isNumeric) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue, isNumeric]);

  useEffect(() => {
    if (!isNumeric) {
      setDisplayValue(String(value));
      return;
    }

    const unsubscribe = springValue.on("change", (latest) => {
      // Handle decimal values
      if (numericValue % 1 !== 0) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.round(latest).toString());
      }
    });

    return () => unsubscribe();
  }, [springValue, numericValue, value, isNumeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      <div
        className={cn(
          "font-heading text-4xl font-bold text-text-primary md:text-5xl",
          valueClassName
        )}
      >
        <span className="text-primary">{prefix}</span>
        {isNumeric ? displayValue : value}
        <span className="text-primary">{suffix}</span>
      </div>
      <p
        className={cn(
          "mt-2 text-sm text-text-secondary md:text-base",
          labelClassName
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}

// Stats Grid Component
interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
  variant?: "default" | "card" | "minimal";
}

export function StatsGrid({
  stats,
  columns = 4,
  className,
  variant = "default",
}: StatsGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  const variantStyles = {
    default: "",
    card: "bg-surface-elevated rounded-2xl p-6",
    minimal: "",
  };

  // Parse value to extract prefix/suffix
  const parseValue = (value: string): { num: string; prefix: string; suffix: string } => {
    const match = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
    if (match) {
      return { prefix: match[1], num: match[2], suffix: match[3] };
    }
    return { prefix: "", num: value, suffix: "" };
  };

  return (
    <div
      className={cn(
        "grid gap-8",
        gridCols[columns],
        className
      )}
    >
      {stats.map((stat, index) => {
        const { num, prefix, suffix } = parseValue(stat.value);
        return (
          <div
            key={index}
            className={cn(
              "relative",
              variantStyles[variant],
              variant === "default" && index < stats.length - 1 && "lg:border-r lg:border-border"
            )}
          >
            <AnimatedCounter
              value={num}
              label={stat.label}
              prefix={stat.prefix || prefix}
              suffix={stat.suffix || suffix}
            />
          </div>
        );
      })}
    </div>
  );
}
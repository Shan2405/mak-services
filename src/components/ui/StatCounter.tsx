"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extract numeric value
  const numericValue = typeof value === "string" 
    ? parseInt(value.replace(/\D/g, ""), 10) 
    : value;

  // Check if value is just a string (like "24/7")
  const isStringOnly = typeof value === "string" && isNaN(numericValue);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isStringOnly) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (numericValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, duration, isStringOnly]);

  const displayValue = isStringOnly 
    ? value 
    : `${prefix}${count.toLocaleString()}${suffix}`;

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-1">
        {displayValue}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  );
};

interface StatsGridProps {
  stats: Array<{
    value: number | string;
    label: string;
    prefix?: string;
    suffix?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  columns = 4,
  className = "",
}) => {
  const columnClasses = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6 lg:gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <StatCounter
          key={index}
          value={stat.value}
          label={stat.label}
          prefix={stat.prefix}
          suffix={stat.suffix}
        />
      ))}
    </div>
  );
};

export { StatCounter, StatsGrid };
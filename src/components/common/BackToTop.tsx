"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  threshold?: number;
  smooth?: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 400,
  smooth = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-100
        cursor-pointer
        w-12 h-12 rounded-full
        bg-primary text-text-white
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300
        hover:bg-primary-dark
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
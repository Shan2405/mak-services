"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollPosition {
  x: number;
  y: number;
  direction: "up" | "down" | null;
  isAtTop: boolean;
  isAtBottom: boolean;
}

export function useScrollPosition(threshold: number = 0): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
    isAtTop: true,
    isAtBottom: false,
  });

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    const currentX = window.scrollX;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    setScrollPosition((prev) => ({
      x: currentX,
      y: currentY,
      direction: currentY > prev.y ? "down" : currentY < prev.y ? "up" : prev.direction,
      isAtTop: currentY <= threshold,
      isAtBottom: currentY >= maxScroll - threshold,
    }));
  }, [threshold]);

  useEffect(() => {
    // Set initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollPosition;
}

export function useScrollDirection(): "up" | "down" | null {
  const { direction } = useScrollPosition();
  return direction;
}

export function useIsScrolled(threshold: number = 20): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}
"use client";

import { useState, useEffect } from "react";

interface BackToTopProps {
  threshold?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function BackToTop({ 
  threshold = 300, 
  className = "",
  children 
}: BackToTopProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 z-50 cursor-pointer ${
        showBackToTop 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      } ${className}`}
      aria-label="Back to top"
    >
      {children || (
        <span className="text-sm flex items-center gap-2">
          Back to Top
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </span>
      )}
    </button>
  );
} 
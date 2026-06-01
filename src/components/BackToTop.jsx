import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating BackToTop component with a premium circular progress indicator.
 * Displays when scrolled 400px down and shows scroll progress dynamically.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress dimensions (r = 18, circumference = 2 * PI * 18 = 113.1)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-2xl border border-gray-100 transition-all duration-500 transform hover:scale-110 active:scale-95 group focus:outline-none ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="#F1F5F9"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="#0A4D8C"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out"
        />
      </svg>
      <ArrowUp className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300 relative z-10" />
    </button>
  );
}

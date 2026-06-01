import { useEffect } from 'react';

/**
 * Custom React hook that sets up an IntersectionObserver to watch for elements
 * with the '.reveal-hidden' class and add the '.reveal-visible' class when they
 * enter the viewport, creating premium scroll reveal animations.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-hidden');
    
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Unobserve the element once it has been revealed to optimize performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card/section is visible
        rootMargin: '0px 0px -80px 0px', // Trigger slightly before the element fully enters
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []); // Run on initial mount
}

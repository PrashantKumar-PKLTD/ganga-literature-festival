import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting];
}

export default function ImageReveal({ src, alt, className = "", imgClassName = "", delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={imgClassName}
      />
    </div>
  );
}

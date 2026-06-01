import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-40 bg-govblue text-white w-11 h-11 rounded-full shadow-lg border border-govblue-dark flex items-center justify-center font-bold text-lg hover:bg-govblue-light active:scale-95 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ▲
    </button>
  );
}

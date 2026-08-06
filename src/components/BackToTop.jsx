import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-antiquegold/80 bg-charcoal text-ivory shadow-editorial transition-all duration-300 hover:bg-terracotta hover:text-ivory hover:border-terracotta active:scale-95 hover:-translate-y-0.5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  );
}

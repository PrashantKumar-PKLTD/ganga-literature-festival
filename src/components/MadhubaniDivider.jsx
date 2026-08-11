export default function MadhubaniDivider({ variant = "default", className = "" }) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 text-saffron select-none ${className}`}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-saffron/60" />
        <span className="text-[10px] tracking-[0.4em] font-serif font-bold text-gold uppercase">♦   ♦   ♦</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-saffron/60" />
      </div>
    );
  }

  if (variant === "floral") {
    return (
      <div className={`relative flex items-center justify-center py-6 select-none ${className}`}>
        <div className="absolute inset-0 flex items-center px-8">
          <div className="w-full border-t border-gold/30" />
        </div>
        <div className="relative flex items-center gap-4 bg-cream px-6 py-1 text-gold">
          <svg className="h-5 w-5 fill-current text-saffron opacity-90" viewBox="0 0 24 24">
            <path d="M12 2C10.5 5 7 8 2 12c5 4 8.5 7 10 10 1.5-3 5-6 10-10-5-4-8.5-7-10-10z" />
          </svg>
          <span className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-deep-saffron">
            Ganga Literature Festival
          </span>
          <svg className="h-5 w-5 fill-current text-saffron opacity-90" viewBox="0 0 24 24">
            <path d="M12 2C10.5 5 7 8 2 12c5 4 8.5 7 10 10 1.5-3 5-6 10-10-5-4-8.5-7-10-10z" />
          </svg>
        </div>
      </div>
    );
  }

  // Default Madhubani Geometric Line Pattern
  return (
    <div className={`relative flex flex-col items-center justify-center my-10 select-none ${className}`}>
      <div className="flex items-center justify-center w-full max-w-4xl px-4 gap-4">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-saffron" />
        <svg className="w-8 h-8 text-saffron shrink-0 opacity-85" viewBox="0 0 40 40" fill="none">
          {/* Madhubani Sun / Lotus Center Motif */}
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.2" />
          <polygon points="20,4 23,12 31,8 26,16 36,20 26,24 31,32 23,28 20,36 17,28 9,32 14,24 4,20 14,16 9,8 17,12" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </svg>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-gold/40 to-saffron" />
      </div>
    </div>
  );
}

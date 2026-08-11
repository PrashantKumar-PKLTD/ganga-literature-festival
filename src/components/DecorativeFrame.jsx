export default function DecorativeFrame({ children, className = "", dark = false }) {
  const borderColor = dark ? "border-gold/40" : "border-gold/30";
  const cornerColor = dark ? "text-gold" : "text-saffron";

  return (
    <div className={`relative p-6 sm:p-10 border-2 ${borderColor} ${dark ? "bg-dark/80 text-white" : "bg-cream/80 text-dark"} ${className}`}>
      {/* Corner Motifs */}
      <svg className={`absolute top-2 left-2 w-6 h-6 ${cornerColor} opacity-80`} viewBox="0 0 24 24" fill="none">
        <path d="M2 2H10V4H4V10H2V2Z" fill="currentColor" />
        <circle cx="6" cy="6" r="2" fill="currentColor" />
      </svg>

      <svg className={`absolute top-2 right-2 w-6 h-6 ${cornerColor} opacity-80`} viewBox="0 0 24 24" fill="none">
        <path d="M22 2H14V4H20V10H22V2Z" fill="currentColor" />
        <circle cx="18" cy="6" r="2" fill="currentColor" />
      </svg>

      <svg className={`absolute bottom-2 left-2 w-6 h-6 ${cornerColor} opacity-80`} viewBox="0 0 24 24" fill="none">
        <path d="M2 22H10V20H4V14H2V22Z" fill="currentColor" />
        <circle cx="6" cy="18" r="2" fill="currentColor" />
      </svg>

      <svg className={`absolute bottom-2 right-2 w-6 h-6 ${cornerColor} opacity-80`} viewBox="0 0 24 24" fill="none">
        <path d="M22 22H14V20H20V14H22V22Z" fill="currentColor" />
        <circle cx="18" cy="18" r="2" fill="currentColor" />
      </svg>

      {/* Inner Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

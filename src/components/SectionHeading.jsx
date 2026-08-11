export default function SectionHeading({ eyebrow, title, align = "center", intro, inverted = false, showDiamonds = true }) {
  const centered = align === "center";
  const titleColor = inverted ? "text-cream" : "text-dark";
  const introColor = inverted ? "text-cream/70" : "text-dark/70";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2 sm:gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-7 shrink-0 bg-saffron sm:w-12" />
          {showDiamonds && <span className="h-1.5 w-1.5 rotate-45 bg-saffron shrink-0" />}
          <span className="min-w-0 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-saffron sm:text-xs sm:tracking-[0.28em]">
            {eyebrow}
          </span>
          {showDiamonds && <span className="h-1.5 w-1.5 rotate-45 bg-saffron shrink-0" />}
          <span className="h-px w-7 shrink-0 bg-saffron sm:w-12" />
        </div>
      )}
      {title && (
        <h2 className={`font-serif text-3xl font-light uppercase leading-[0.95] sm:text-4xl md:text-5xl lg:text-6xl ${titleColor}`}>
          {title}
        </h2>
      )}
      {intro && <p className={`mt-4 text-sm leading-relaxed sm:text-base md:mt-5 md:text-lg md:leading-8 ${introColor}`}>{intro}</p>}
    </div>
  );
}


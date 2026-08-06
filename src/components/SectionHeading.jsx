export default function SectionHeading({ eyebrow, title, align = "center", intro, inverted = false }) {
  const centered = align === "center";
  const titleColor = inverted ? "text-[#F8F5EE]" : "text-[#2D2D2D]";
  const introColor = inverted ? "text-[#F8F5EE]/75" : "text-[#2D2D2D]/75";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2 sm:gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rotate-45 bg-[#A85032] shrink-0 shadow-sm" />
          <span className="h-px w-6 shrink-0 bg-[#C8A24A]/80 sm:w-10" />
          <span className="min-w-0 text-[10px] font-bold uppercase leading-4 tracking-[0.2em] text-[#A85032] sm:text-xs sm:tracking-[0.28em]">
            ❖ {eyebrow} ❖
          </span>
          <span className="h-px w-6 shrink-0 bg-[#C8A24A]/80 sm:w-10" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#A85032] shrink-0 shadow-sm" />
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

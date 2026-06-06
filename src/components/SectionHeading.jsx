export default function SectionHeading({ eyebrow, title, align = "center", intro, inverted = false }) {
  const centered = align === "center";
  const titleColor = inverted ? "text-white" : "text-black";
  const introColor = inverted ? "text-white/70" : "text-black/65";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2 sm:gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-7 shrink-0 bg-[#b58b32] sm:w-12" />
          <span className="min-w-0 text-[10px] font-black uppercase leading-4 tracking-[0.16em] text-[#b58b32] sm:text-xs sm:tracking-[0.28em]">
            {eyebrow}
          </span>
          <span className="h-px w-7 shrink-0 bg-[#b58b32] sm:w-12" />
        </div>
      )}
      <h2 className={`font-serif text-3xl font-medium uppercase leading-[0.95] sm:text-4xl md:text-6xl ${titleColor}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-sm leading-7 sm:text-base md:mt-5 md:text-lg md:leading-8 ${introColor}`}>{intro}</p>}
    </div>
  );
}

export default function SectionHeading({ eyebrow, title, align = "center", intro, inverted = false }) {
  const centered = align === "center";
  const titleColor = inverted ? "text-white" : "text-black";
  const introColor = inverted ? "text-white/70" : "text-black/65";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-12 bg-[#b58b32]" />
          <span className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            {eyebrow}
          </span>
          <span className="h-px w-12 bg-[#b58b32]" />
        </div>
      )}
      <h2 className={`font-serif text-4xl font-medium uppercase leading-none md:text-6xl ${titleColor}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base leading-8 md:text-lg ${introColor}`}>{intro}</p>}
    </div>
  );
}

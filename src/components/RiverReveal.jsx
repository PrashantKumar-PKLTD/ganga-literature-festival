export default function RiverReveal() {
  const pathD = `M -120,-110 
                 L 40,25 
                 C 150,100 250,200 330,274 
                 C 450,380 500,420 600,385 
                 C 700,350 780,350 850,375 
                 C 950,410 1020,400 1035,470 
                 C 1060,580 1000,750 940,900`;

  return (
    <svg
      id="riverRevealSvg"
      width="100%"
      height="100%"
      viewBox="0 0 1210 829"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* 
        INVISIBLE CALCULATION PATH
        Must be outside <defs> for getPointAtLength and getTotalLength to work in all browsers.
      */}
      <path
        id="riverCalcPath"
        d={pathD}
        fill="none"
        stroke="none"
      />

      <defs>
        <filter id="blueRiver" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.08
                    0 0 0 0 0.28
                    0 0 0 0 0.65
                    0 0 0 1 0"
          />
        </filter>

        <mask id="riverMask" maskUnits="userSpaceOnUse">
          <rect width="1210" height="829" fill="black" />
          {/* ACTUAL MASK PATH */}
          <path
            id="riverMaskPath"
            d={pathD}
            fill="none"
            stroke="white"
            strokeWidth="600"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
      </defs>

      <image
        href="/riverpath2.svg"
        x="0"
        y="0"
        width="1210"
        height="829"
        preserveAspectRatio="xMidYMid meet"
        mask="url(#riverMask)"
        filter="url(#blueRiver)"
      />
    </svg>
  );
}

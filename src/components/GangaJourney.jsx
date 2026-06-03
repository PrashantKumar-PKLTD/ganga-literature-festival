import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gangaCities } from "../data/gangaCities";
import CityMarkers from "./CityMarkers";
import RiverReveal from "./RiverReveal";

gsap.registerPlugin(ScrollTrigger);

const TL_DURATION = 20;

export default function GangaJourney({
  className = "",
  scrollScrub = 0.45,
  scrollStart = "top top",
  scrollEnd = "bottom bottom",
  scrollTriggerSelector,
}) {
  const journeyRef = useRef(null);
  const cityLayerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = journeyRef.current;
      const cityLayer = cityLayerRef.current;
      const animationTrigger = scrollTriggerSelector
        ? document.querySelector(scrollTriggerSelector)
        : trigger;
      const calcPath = trigger?.querySelector("#riverCalcPath");
      const maskPath = trigger?.querySelector("#riverMaskPath");
      if (!trigger || !animationTrigger || !cityLayer || !maskPath || !calcPath) return;

      const pathLength = calcPath.getTotalLength();

      // Setup the mask path stroke
      gsap.set(maskPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // The strokeWidth is 400, meaning a 200px radius sweep circle.
      // We calculate exactly when the front edge of this sweep reaches the city.
      function getRevealRatio(path, point) {
        const len = path.getTotalLength();
        if (!len || len === 0) return 0; // Safeguard against NaN crashes

        const effectiveRadius = 270; // calibrated to sync with the massive brush radius
        const samples = 400; // High res sampling for perfect accuracy

        for (let i = 0; i <= samples; i++) {
          const l = (i / samples) * len;
          const p = path.getPointAtLength(l);
          const dist = Math.hypot(p.x - point.x, p.y - point.y);
          if (dist <= effectiveRadius) {
            return l / len;
          }
        }

        // Fallback: just return the closest point ratio
        let closestDist = Infinity;
        let closestLen = 0;
        for (let i = 0; i <= samples; i++) {
          const l = (i / samples) * len;
          const p = path.getPointAtLength(l);
          const dist = Math.hypot(p.x - point.x, p.y - point.y);
          if (dist < closestDist) {
            closestDist = dist;
            closestLen = l;
          }
        }
        return closestLen / len;
      }

      // Pre-calculate physical reveal ratios for all cities using the reliable calcPath
      const cityRatios = gangaCities.map((city) =>
        getRevealRatio(calcPath, city.marker)
      );

      // ── Single unified timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationTrigger,
          start: scrollStart,
          end: scrollEnd,
          scrub: scrollScrub,
          onUpdate: (self) => setActiveCity(self.progress),
        },
      });

      tl.to({}, { duration: TL_DURATION }, 0);

      // 1) Animate the sweeping mask path along the river
      tl.to(
        maskPath,
        { strokeDashoffset: 0, ease: "none", duration: TL_DURATION },
        0
      );

      // ── City elements — initial hidden state ──
      const cityNodes = gsap.utils.toArray(".ganga-city", cityLayer);

      cityNodes.forEach((node) => {
        const name = node.querySelector(".ganga-city__name");
        const image = node.querySelector(".ganga-city__image");

        gsap.set(name, { autoAlpha: 0, y: 8 });
        if (image) {
          gsap.set(image, { autoAlpha: 0, y: 12, scale: 0.97, transformOrigin: "center center" });
        }
      });

      // ── City appearance — perfectly synced to mask path ──
      cityNodes.forEach((node, index) => {
        const name = node.querySelector(".ganga-city__name");
        const image = node.querySelector(".ganga-city__image");

        const startAt = cityRatios[index] * TL_DURATION;

        tl.to(name, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, startAt);
        if (image) {
          tl.to(
            image,
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" },
            startAt + 0.18
          );
        }
      });

      // ── Active city highlight ──
      let activeCityIndex = -1;
      function setActiveCity(scrollProgress) {
        const nextActiveIndex = cityRatios.reduce(
          (activeIdx, ratio, idx) => (scrollProgress >= ratio ? idx : activeIdx),
          -1
        );

        if (nextActiveIndex === activeCityIndex) return;
        activeCityIndex = nextActiveIndex;

        cityNodes.forEach((node, index) => {
          const isActive = index === activeCityIndex;
          node.classList.toggle("is-active", isActive);
          const nameEl = node.querySelector(".ganga-city__name");
          gsap.to(nameEl, {
            scale: isActive ? 1.08 : 1,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
            transformOrigin: "center center"
          });
        });
      }

      ScrollTrigger.refresh();
    }, journeyRef);

    return () => ctx.revert();
  }, [scrollEnd, scrollScrub, scrollStart, scrollTriggerSelector]);

  return (
    <section ref={journeyRef} className={`ganga-journey journey ${className}`.trim()}>
      <div className="ganga-journey__sticky">
        <RiverReveal />
        <div ref={cityLayerRef} className="ganga-journey__cities">
          <CityMarkers cities={gangaCities} />
        </div>
      </div>
    </section>
  );
}

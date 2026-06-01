import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import '../style/gallery.css'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const gallery = [
    {
      image: "https://musephotographyawards.com/upload/entry/thumb/1767605119_thumb_205614.jpg",
      name: "Transcendence - between two worlds"
    },
    {
      image: "https://musephotographyawards.com/upload/entry/thumb/206074-1772148234.jpg",
      name: "Solar Ascendant"
    },
    {
      image: "https://musephotographyawards.com/upload/entry/thumb/205350-1760959280.jpg",
      name: "New born moon"
    },
    {
      image: "https://musephotographyawards.com/upload/entry/thumb/205850-1771102634.jpg",
      name: "Evanescent"
    },
    {
      image: "https://musephotographyawards.com/upload/entry/thumb/1770630581_thumb_205501.jpg",
      name: "Red Spirit Rising"
    }
  ]

  useGSAP(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    
    let mm = gsap.matchMedia();

    // DESKTOP: Screen width is greater than 768px
    mm.add("(min-width: 769px)", () => {
      const scrollAmount = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollAmount - 60,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    });

    // MOBILE: Automatically kills GSAP tracking so it doesn't break normal touch scrolling
    return () => mm.revert(); 
  }, { scope: containerRef });

  return (
    <div className='gallery-pin-wrapper' ref={containerRef}>
      
      <div className='gallery-static-header'>
        <span className='gallery-tag'>// SUBMISSIONS</span>
        <h2 className='gallery-title'>
          FEATURED <br /><span className='outline-text'>EXHIBITS</span>
        </h2>
      </div>

      <div className='gallery-track' ref={trackRef}>
        {gallery.map((item, index) => (
          <div className='gallery-item' key={index}>
            <div className='gallery-image-box'>
              <img src={item.image} alt={item.name} />
              <div className='gallery-hud-index'>[ 0{index + 1} ]</div>
            </div>
            <h3 className='gallery-item-name'>{item.name}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Gallery
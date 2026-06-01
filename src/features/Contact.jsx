import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import '../style/contact.css'

const Contact = () => {
  const containerRef = useRef(null);
  const magneticRef = useRef(null);

  useGSAP(() => {
    const element = magneticRef.current;
    if (!element) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      // Calculate cursor position relative to the center of the element
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Smoothly attract the button toward the cursor (Desktop Lens Effect)
      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onMouseLeave = () => {
      // Snaps back to absolute center when mouse leaves
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    };

    // Attach listeners
    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <section className='contact-section' ref={containerRef}>
      <div className='contact-container'>
        
        <span className='contact-tag'>// RESOLUTION CENTER</span>
        
        <h2 className='contact-title'>
          STILL HAVE <br /><span className='outline-text'>QUESTIONS?</span>
        </h2>
        
        <p className='contact-description'>
          If you couldn't find your answer inside the telemetry framework, drop our global support line an email. Our operations team will resolve your clearance immediately.
        </p>

        {/* GSAP Magnetic Email Target Wrapper */}
        <div className='magnetic-wrapper'>
          <a 
            href='mailto:summit@photography.com' 
            className='contact-email-link' 
            ref={magneticRef}
          >
            <span className='email-hud-text'>[ INITIATE CORRESPONDENCE ]</span>
            <span className='email-address'>summit@photography.com</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import '../style/navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Store elements safely inside an array for staggered animations
  linksRef.current = [];
  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const { contextSafe } = useGSAP({ scope: containerRef });

  // GSAP Menu Trigger Mechanics
  const toggleMenu = contextSafe(() => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      // Open Menu Animation
      gsap.to(menuRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.6,
        ease: 'power4.inOut'
      });

      gsap.fromTo(linksRef.current, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.25 }
      );
    } else {
      // Close Menu Animation
      gsap.to(menuRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.5,
        ease: 'power4.inOut'
      });
    }
  });

  return (
    <nav className='navbar-section' ref={containerRef}>
      <div className='navbar-container'>
        
        {/* Core Branding */}
        <a href='#hero' className='nav-logo'>
          BLACKOUT<span className='logo-dot'>.</span>
        </a>

        {/* Tactical Interaction Trigger */}
        <button 
          className={`nav-trigger-btn ${isOpen ? 'menu-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Control"
        >
          <span className='trigger-line line-top'></span>
          <span className='trigger-line line-bottom'></span>
        </button>

      </div>

      {/* Fullscreen Overlay Portal */}
      <div className='fullscreen-menu' ref={menuRef}>
        <div className='menu-bg-grain'></div>
        
        <div className='menu-content-box'>
          <span className='menu-hud-tag'>// NAVIGATION PORTAL</span>
          
          <div className='menu-links-list'>
            <a href='#hero' ref={addToRefs} onClick={toggleMenu} className='menu-link-item'>
              <span className='link-num'>01 //</span> OVERVIEW
            </a>
            <a href='#timeline' ref={addToRefs} onClick={toggleMenu} className='menu-link-item'>
              <span className='link-num'>02 //</span> TIMELINE
            </a>
            <a href='#gallery' ref={addToRefs} onClick={toggleMenu} className='menu-link-item'>
              <span className='link-num'>03 //</span> EXHIBITS
            </a>
            <a href='#register' ref={addToRefs} onClick={toggleMenu} className='menu-link-item'>
              <span className='link-num'>04 //</span> SECURE PASS
            </a>
            <a href='#faq' ref={addToRefs} onClick={toggleMenu} className='menu-link-item'>
              <span className='link-num'>05 //</span> INTEL/FAQ
            </a>
          </div>

          {/* Overlay Status Footer */}
          <div className='menu-footer-hud'>
            <span>LATENCY: NOMINAL</span>
            <span>SYSTEM LAYER_01</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
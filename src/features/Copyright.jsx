import React from 'react'
import '../style/copyright.css'

const Copyright = () => {
  // Automatically pulls the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className='copyright-section'>
      <div className='copyright-container'>
        
        {/* Left Side: Dynamic Data Stamp */}
        <div className='copyright-left'>
          <p className='copyright-text'>
            © {currentYear} BLACKOUT SUMMIT. ALL RIGHTS RESERVED.
          </p>
          <span className='system-pulse-stamp'>
            <span className='pulse-dot'></span> LAYER_01 // SECURE_NODE
          </span>
        </div>

        {/* Right Side: Technical Utility Anchors */}
        <div className='copyright-right'>
          <a href='#terms' className='footer-link'>[ TERMS OF CLEARANCE ]</a>
          <a href='#privacy' className='footer-link'>[ PRIVACY TELEMETRY ]</a>
        </div>

      </div>
    </footer>
  )
}

export default Copyright
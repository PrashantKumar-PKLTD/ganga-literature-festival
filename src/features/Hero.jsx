import '../style/hero.css'
import React from 'react'


const Hero = () => {
  return (
    <div className='hero-box'>
      {/* Viewfinder corner frames for that camera aesthetic */}
      <div className='viewfinder-frame tl'></div>
      <div className='viewfinder-frame tr'></div>
      <div className='viewfinder-frame bl'></div>
      <div className='viewfinder-frame br'></div>

      <div className='hero-overlay'>
        
        {/* Top Meta Info */}
        <div className='hero-meta-top'>
          <div className='meta-badge'>[ ISO 400 ]</div>
          <div className='meta-badge shutter-live'>
            <span className='shutter-dot'></span> REC 2026
          </div>
          <div className='meta-badge'>F/2.8</div>
        </div>

        {/* Main Center Content */}
        <div className='hero-content'>
          <p className='hero-subtitle'>INTERNATIONAL PHOTOGRAPHY SUMMIT</p>
          <h1 className='hero-title'>
            THE ART OF <br />
            <span className='outline-text'>THE LENS</span>
          </h1>
          <p className='hero-description'>
            Master the light. Capture raw emotion. Join 50+ legendary photojournalists, commercial directors, and visual storytellers for our annual summit.
          </p>
          
          <div className='hero-action-row'>
            <button className='cta-shutter'>REGISTER PASS</button>
            <button className='cta-outline'>VIEW SCHEDULE</button>
          </div>
        </div>

        {/* Technical Grid Info at the Bottom */}
        <div className='hero-technical-footer'>
          <div className='tech-block'>
            <span className='tech-label'>LOCATION</span>
            <span className='tech-val'>METROPOLIS ARTS CENTER</span>
          </div>
          <div className='tech-border'></div>
          <div className='tech-block'>
            <span className='tech-label'>DATE</span>
            <span className='tech-val'>OCTOBER 14-17, 2026</span>
          </div>
          <div className='tech-border'></div>
          <div className='tech-block'>
            <span className='tech-label'>PORTFOLIOS</span>
            <span className='tech-val'>1,200+ SUBMISSIONS</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
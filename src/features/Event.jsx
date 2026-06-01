import React from 'react'
import '../style/event.css'

const Event = () => {
  return (
    <section className='event-section'>
      <div className='event-container'>
        
        {/* Left Block */}
        <div className='event-block text-block'>
          <span className='section-tag'>// INSIDE THE SUMMIT</span>
          <h2 className='event-heading'>
            EXPLORE YOUR <br />
            <span className='outline-text'>CREATIVITY</span>
          </h2>
          <p className='event-description'>
            Meet the world’s top-class visual pioneers. Share your perspective, absorb elite field experience, and push your glass to its absolute limits.
          </p>
        </div>

        {/* Right Block (The NASA Prize) */}
        <div className='event-block prize-block'>
          <div className='lens-bracket-top'></div>
          <span className='prize-tag'>[ THE ULTIMATE PASSPORT ]</span>
          <h3 className='prize-title'>GO BEYOND ATMOSPHERE</h3>
          <p className='prize-description'>
            The top photographer from the summit will win an exclusive, once in a lifetime pass to shoot inside a <strong>NASA Spacecraft Facility</strong>. From deep space machinery to cosmic engineering your lens enters the ultimate frontier.
          </p>
          <div className='lens-bracket-bottom'></div>
        </div>

      </div>
    </section>
  )
}

export default Event
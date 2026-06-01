import React, { useState } from 'react'
import '../style/register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tier: 'standard',
    portfolio: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Intel Submitted:", formData);
    alert("Pass Secured. Welcome to the Frontier.");
  };

  return (
    <section className='register-section'>
      <div className='register-container'>
        
        {/* Left Informational Column */}
        <div className='register-info-side'>
          <span className='register-tag'>// ACCESS PORTAL</span>
          <h2 className='register-title'>
            SECURE YOUR <br /><span className='outline-text'>SUMMIT PASS</span>
          </h2>
          <p className='register-notice'>
            Spaces are strictly limited to maintain portfolio review quality. Registering automatically enters your submission into the running for the grand **NASA Spacecraft Facility** shooting pass.
          </p>
          <div className='portal-status'>
            <span className='status-indicator'></span> REGISTRATION GATEWAY: OPEN
          </div>
        </div>

        {/* Right Form Column */}
        <div className='register-form-side'>
          <form onSubmit={handleSubmit} className='summit-form'>
            
            <div className='input-group'>
              <label htmlFor='name'>[ VISUAL ARTIST NAME ]</label>
              <input 
                type='text' 
                id='name' 
                name='name' 
                required 
                placeholder='e.g., Jane Doe' 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='input-group'>
              <label htmlFor='email'>[ DIGITAL CORRESPONDENCE ]</label>
              <input 
                type='email' 
                id='email' 
                name='email' 
                required 
                placeholder='yourname@domain.com' 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='input-group'>
              <label htmlFor='tier'>[ ACCESS LEVEL ]</label>
              <select id='tier' name='tier' value={formData.tier} onChange={handleChange}>
                <option value='standard'>STANDARD ACCESS // 3 DAYS</option>
                <option value='vip'>VIP TIER // INCLUDES JURY PANEL DINNER</option>
                <option value='student'>CREATIVE STUDENT PASS // ID REQUIRED</option>
              </select>
            </div>

            <div className='input-group'>
              <label htmlFor='portfolio'>[ PORTFOLIO LINK — OPTIONAL ]</label>
              <input 
                type='url' 
                id='portfolio' 
                name='portfolio' 
                placeholder='https://behance.net/yourprofile' 
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            <button type='submit' className='submit-shutter-btn'>
              INITIATE REGISTRATION
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Register
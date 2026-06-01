import React from 'react'
import '../style/speaker.css'

const Speaker = () => {
  const guests = [
    {
      image: "https://www.wpeawards.com/upload/profile/8508.jpg",
      name: "Arne birvin",
      role: "Visual Journalist"
    },
    {
      image: "https://www.wpeawards.com/upload/profile/8204.jpg",
      name: "Anna almen",
      role: "Fashion & Editorial"
    },
    {
      image: "https://www.wpeawards.com/upload/profile/10616.jpg",
      name: "Marta Losiewicz",
      role: "Fine Art Photographer"
    },
    {
      image: "https://www.wpeawards.com/upload/profile/9852.jpg",
      name: "Franklin Neto",
      role: "Commercial Director"
    }
  ]

  return (
    <section className='speaker-section'>
      <div className='speaker-container'>
        
        {/* Section Header */}
        <div className='speaker-header'>
          <span className='speaker-tag'>// KEYNOTE PANEL</span>
          <h2 className='speaker-title'>
            MEET OUR <span className='outline-text'>GUESTS</span>
          </h2>
        </div>

        {/* Responsive Grid Map */}
        <div className='speaker-grid'>
          {guests.map((guest, index) => (
            <div className='speaker-card' key={index}>
              <div className='image-frame'>
                <img src={guest.image} alt={guest.name} className='speaker-img' />
                <div className='frame-viewfinder'></div>
              </div>
              <div className='speaker-info'>
                <h3 className='speaker-name'>{guest.name}</h3>
                <span className='speaker-role'>{guest.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Speaker
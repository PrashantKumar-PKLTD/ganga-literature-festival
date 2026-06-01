import React from 'react'
import '../style/timeline.css'

const Timeline = () => {
  const schedule = [
    {
      day: "DAY 01",
      title: "THE REVEAL & GAZE",
      desc: "Unveiling the core summit themes, assignment briefings, and introductory keynotes by our visual pioneers."
    },
    {
      day: "DAY 02",
      title: "THE FIELD CRUCIBLE",
      desc: "Live portfolio reviews, structural masterclasses, and hands-on street and conceptual shooting labs."
    },
    {
      day: "DAY 03",
      title: "COSMIC JUDGMENT",
      desc: "Final project submissions, elite jury selections, and the official announcement of the NASA Spacecraft Facility pass winner."
    }
  ]

  return (
    <section className='timeline-section'>
      <div className='timeline-container'>
        
        {/* Header Block */}
        <div className='timeline-header'>
          <span className='timeline-tag'>// EVENT INTEL</span>
          <h2 className='timeline-main-title'>
            3 DAYS <span className='outline-text'>TIMELINE</span>
          </h2>
        </div>

        {/* Vertical Flow Track */}
        <div className='timeline-track'>
          {schedule.map((item, index) => (
            <div className='timeline-row' key={index}>
              
              {/* Day Flag */}
              <div className='time-meta'>
                <span className='day-badge'>{item.day}</span>
              </div>

              {/* Connecting Line Node */}
              <div className='timeline-node-column'>
                <div className='node-dot'></div>
                {index !== schedule.length - 1 && <div className='node-connector'></div>}
              </div>

              {/* Description Block */}
              <div className='timeline-content-box'>
                <h3 className='row-title'>{item.title}</h3>
                <p className='row-desc'>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Timeline
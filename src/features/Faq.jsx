import React, { useState } from 'react'
import '../style/faq.css'

const Faq = () => {
  // Track which accordion item is currently active/open
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "I am a student. Can I participate?",
      answer: "Absolutely. We heavily encourage emerging talent. Student entry is completely free for this summit, provided you submit a valid institutional ID during registration."
    },
    {
      question: "What gear do I need to bring?",
      answer: "Bring your camera body and your preferred choice of glass. For the masterclasses, a laptop with your preferred editing workspace pre-installed is highly recommended."
    },
    {
      question: "How is the NASA Spacecraft Facility winner selected?",
      answer: "Our keynote panel juries will evaluate submissions based on creative composition, technical precision, and raw narrative impact throughout the day 2 crucible assignments."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='faq-section'>
      <div className='faq-container'>
        
        {/* Section Header */}
        <div className='faq-header'>
          <span className='faq-tag'>// INTEL & HELP</span>
          <h2 className='faq-title'>
            FREQUENTLY ASKED <br /><span className='outline-text'>QUESTIONS</span>
          </h2>
        </div>

        {/* Accordion List Wrapper */}
        <div className='faq-accordion-list'>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className='faq-question-row'>
                  <h3 className='faq-question-text'>[ 0{index + 1} ] &nbsp; {item.question}</h3>
                  <span className='faq-icon-arrow'></span>
                </div>
                
                <div className='faq-answer-block'>
                  <p className='faq-answer-text'>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default Faq
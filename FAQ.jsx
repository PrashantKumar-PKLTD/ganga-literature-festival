import { useState } from "react";
import { FAQS } from "../data/misc";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="glf-section glf-faq">
      <div className="glf-container" style={{ textAlign: "center" }}>
        <div className="glf-section-tag" style={{ justifyContent: "center" }}>Frequently Asked</div>
        <h2 className="glf-section-title">Common <span>Questions</span></h2>
      </div>
      <div className="glf-container">
        <div className="glf-faq-list">
          {FAQS.map((faq, i) => (
            <div className="glf-faq-item" key={i}>
              <div className="glf-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span className="glf-faq-q-text">{faq.q}</span>
                <div className={`glf-faq-icon${open === i ? " open" : ""}`}>
                  {open === i ? "−" : "+"}
                </div>
              </div>
              <div className={`glf-faq-a${open === i ? " open" : ""}`}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

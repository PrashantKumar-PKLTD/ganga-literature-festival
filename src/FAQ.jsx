import { useState } from "react";
import { FAQS } from "./data/misc";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="c-section c-faq">
      <div className="c-container">
        <div className="c-faq-grid">
          <div>
            <div className="c-tag">FAQ</div>
            <h2 className="c-title">Common <span>Questions</span></h2>
            <p className="c-sub">Everything you need to know about the Ganga Literature Festival 2026.</p>
            <div className="c-faq-list" style={{ marginTop: 32 }}>
              {FAQS.map((faq, i) => (
                <div className="c-faq-item" key={i}>
                  <div className="c-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                    <span className="c-faq-q-text">{faq.q}</span>
                    <div className={`c-faq-icon${open === i ? " open" : ""}`}>{open === i ? "−" : "+"}</div>
                  </div>
                  <div className={`c-faq-a${open === i ? " open" : ""}`}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="c-faq-cta">
              <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
              <div className="c-faq-cta-title">Still have questions?</div>
              <p className="c-faq-cta-text">Our team is happy to help. Reach out to us and we'll get back to you within 24 hours.</p>
              <a href="#contact" className="btn-primary">Contact Us →</a>
            </div>
            <div style={{ marginTop: 20, background: "#EBF1FC", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>📋</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#1A3C6E", marginBottom: 8 }}>Press & Media</div>
              <p style={{ fontSize: 13, color: "#9AA3B0", lineHeight: 1.6, marginBottom: 16 }}>Journalists and content creators can apply for media accreditation via our press kit.</p>
              <a href="#contact" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>Get Press Kit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

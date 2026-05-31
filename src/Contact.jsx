const INFO = [
  { icon: "📍", label: "Venue", value: "Gyan Bhawan, Beer Chand Patel Marg\nPatna — 800 001, Bihar", color: "orange" },
  { icon: "✉️", label: "Email", value: "info@gangalitfest.in\npress@gangalitfest.in", color: "blue" },
  { icon: "📞", label: "Phone", value: "+91 612 222 0000\n+91 98300 00000 (WhatsApp)", color: "teal" },
];

export default function Contact() {
  return (
    <section id="contact" className="c-section c-contact">
      <div className="c-container">
        <div className="c-contact-grid">
          <div>
            <div className="c-tag">Contact</div>
            <h2 className="c-title">Get in <span>Touch</span></h2>
            <p className="c-sub">For partnerships, media accreditation, speaker nominations, or general enquiries.</p>
            <div className="c-contact-items">
              {INFO.map((item) => (
                <div className="c-contact-item" key={item.label}>
                  <div className={`c-contact-icon ${item.color}`}>{item.icon}</div>
                  <div>
                    <div className="c-contact-item-label">{item.label}</div>
                    <div className="c-contact-item-value">
                      {item.value.split("\n").map((l, i) => <div key={i}>{l}</div>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="c-social-row">
              {["𝕏", "in", "f", "▶"].map((icon, i) => (
                <a className="c-social-btn" href="#" key={i}>{icon}</a>
              ))}
            </div>
          </div>
          <div className="c-map-box">
            <div className="c-map-img" style={{ background: "#EEF0F4", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, minHeight: 280 }}>
              <span style={{ fontSize: 48 }}>🗺️</span>
              <span style={{ fontSize: 14, color: "#9AA3B0", fontWeight: 600 }}>Gyan Bhawan, Patna</span>
            </div>
            <div className="c-map-info">
              <div>
                <div className="c-map-address">Gyan Bhawan, Beer Chand Patel Marg</div>
                <div className="c-map-sub">Patna — 800 001, Bihar, India</div>
              </div>
              <a href="https://maps.google.com/?q=Gyan+Bhawan+Patna" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 13, padding: "10px 18px" }}>Open Maps →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

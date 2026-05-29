const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Venue Address",
    value: "Gyan Bhawan, Beer Chand Patel Marg\nPatna — 800 001, Bihar, India",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@gangalitfest.in\npress@gangalitfest.in",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 612 222 0000\n+91 98300 00000 (WhatsApp)",
  },
];

const SOCIAL_LINKS = ["𝕏", "in", "f", "▶"];

export default function Contact() {
  return (
    <section id="contact" className="glf-section glf-contact">
      <div className="glf-container">
        <div className="glf-contact-grid">
          <div>
            <div className="glf-section-tag">Get in Touch</div>
            <h2 className="glf-section-title">Contact <span>Us</span></h2>
            <p className="glf-section-sub">
              For partnerships, media accreditation, speaker nominations, or general enquiries, we'd love to hear from you.
            </p>
            <div className="glf-contact-details">
              {CONTACT_INFO.map((item) => (
                <div className="glf-contact-item" key={item.label}>
                  <div className="glf-contact-icon">{item.icon}</div>
                  <div>
                    <div className="glf-contact-item-label">{item.label}</div>
                    <div className="glf-contact-item-value">
                      {item.value.split("\n").map((line, i) => (
                        <span key={i}>{line}{i === 0 && <br />}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="glf-social-links">
              {SOCIAL_LINKS.map((icon, i) => (
                <a className="glf-social-link" href="#" key={i}>{icon}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="glf-map-placeholder">
              <div className="glf-map-placeholder-icon">🗺️</div>
              <div className="glf-map-placeholder-text">Gyan Bhawan, Patna</div>
              <a
                href="https://maps.google.com/?q=Gyan+Bhawan+Patna"
                target="_blank"
                rel="noreferrer"
                className="glf-btn-outline"
                style={{ marginTop: 8, fontSize: 12 }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

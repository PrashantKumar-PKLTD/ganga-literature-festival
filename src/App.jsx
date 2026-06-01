import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";

function Schedule() {
  const [day, setDay] = useState(1);
  const typeColors = { ceremony: "#D4AF37", keynote: "#0AADA6", panel: "#7FB77E", workshop: "#B07FD4", reading: "#D4AF37", launch: "#E88080" };
  return (
    <section id="schedule" className="schedule">
      <div className="schedule__header">
        <div className="section-tag">Festival Programme</div>
        <h2 className="section-title">Event <span>Schedule</span></h2>
      </div>
      <div className="schedule__tabs">
        {[1, 2].map(d => (
          <button key={d} className={`schedule__tab ${day === d ? "active" : ""}`} onClick={() => setDay(d)}>
            Day {d} — {d === 1 ? "14 November" : "15 November"}
          </button>
        ))}
      </div>
      <div className="schedule__list">
        {SCHEDULE.filter(s => s.day === day).map((item, i) => (
          <div className="schedule-card" key={i}>
            <div className="schedule-card__time">
              <div className="schedule-card__time-text">{item.time}</div>
              <div className="schedule-card__type" style={{ color: typeColors[item.type], borderColor: typeColors[item.type] }}>{item.type}</div>
            </div>
            <div className="schedule-card__dot" style={{ background: typeColors[item.type] }} />
            <div className="schedule-card__content">
              <div className="schedule-card__title">{item.session}</div>
              <div className="schedule-card__desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header">
        <div className="section-tag">Gallery</div>
        <h2 className="section-title">Moments from <span>Past Editions</span></h2>
      </div>
      <div className="gallery__grid">
        {GALLERY.map((img, i) => (
          <div className={`gallery__item gallery__item--${img.size}`} key={i}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery__item-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sponsors() {
  const tiers = ["Title Sponsor", "Gold", "Silver", "Knowledge", "Media"];
  return (
    <section id="sponsors" className="sponsors">
      <div className="sponsors__header">
        <div className="section-tag">Our Partners</div>
        <h2 className="section-title">Powered By <span>Visionaries</span></h2>
        <p className="section-sub">Institutions and organisations that believe in the power of literature.</p>
      </div>
      {tiers.map(tier => {
        const items = SPONSORS.filter(s => s.tier === tier);
        if (!items.length) return null;
        return (
          <div className="sponsors__tier" key={tier}>
            <div className="sponsors__tier-label">{tier === "Title Sponsor" ? "🏆 Title Sponsor" : tier === "Gold" ? "🥇 Gold Sponsors" : tier === "Silver" ? "🥈 Silver Sponsors" : tier === "Knowledge" ? "🎓 Knowledge Partners" : "📺 Media Partners"}</div>
            <div className={`sponsors__tier-grid sponsors__tier-grid--${tier.toLowerCase().replace(" ", "-")}`}>
              {items.map((s, i) => (
                <div className="sponsor-card" key={i}>
                  <div className="sponsor-card__logo">{s.logo}</div>
                  <div className="sponsor-card__name">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function Registration() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", category: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); if (form.name && form.email) setSubmitted(true); };
  return (
    <section id="register" className="registration">
      <div className="registration__bg" />
      <div className="registration__inner">
        <div className="registration__left">
          <div className="section-tag light">Register Now</div>
          <h2 className="section-title light">Secure Your <span>Festival Pass</span></h2>
          <p className="registration__sub">Join thousands of literature lovers, authors, and scholars at GLF 2026.</p>
          <div className="registration__passes">
            {[["Student Pass", "Valid ID · All open sessions", "Free"], ["Delegate Pass", "Priority seating · 3 workshops", "₹999"], ["VIP Pass", "All sessions · Gala dinner · Meet & greet", "₹2,999"]].map(([n, d, p]) => (
              <div className="reg-pass" key={n}>
                <div><div className="reg-pass__name">{n}</div><div className="reg-pass__desc">{d}</div></div>
                <div className="reg-pass__price">{p}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="registration__form-wrap">
          <div className="registration__form-card">
            <h3 className="registration__form-title">Register for GLF 2026</h3>
            <p className="registration__form-sub">Fill in your details and we'll send you a confirmation.</p>
            {submitted ? (
              <div className="registration__success">✓ Registration received! Confirmation sent to {form.email}</div>
            ) : (
              <form className="reg-form" onSubmit={handleSubmit}>
                <div className="reg-form__row">
                  <div className="reg-form__group">
                    <label>Full Name *</label>
                    <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="reg-form__group">
                    <label>Email *</label>
                    <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="reg-form__row">
                  <div className="reg-form__group">
                    <label>Phone</label>
                    <input name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="reg-form__group">
                    <label>Pass Category</label>
                    <select name="category" value={form.category} onChange={handleChange}>
                      <option value="">Select pass</option>
                      <option value="student">Student — Free</option>
                      <option value="delegate">Delegate — ₹999</option>
                      <option value="vip">VIP — ₹2,999</option>
                    </select>
                  </div>
                </div>
                <div className="reg-form__group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell us about yourself..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-gold">Complete Registration →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="faq">
      <div className="faq__header">
        <div className="section-tag">FAQ</div>
        <h2 className="section-title">Common <span>Questions</span></h2>
      </div>
      <div className="faq__list">
        {FAQS.map((faq, i) => (
          <div className={`faq__item ${open === i ? "open" : ""}`} key={i}>
            <div className="faq__q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{faq.q}</span>
              <div className="faq__icon">{open === i ? "−" : "+"}</div>
            </div>
            {open === i && <div className="faq__a">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__grid">
        <div>
          <div className="section-tag">Contact Us</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-sub">For partnerships, media accreditation, speaker nominations, or general enquiries.</p>
          <div className="contact__items">
            {[["📍", "Venue", "Gyan Bhawan, Beer Chand Patel Marg\nPatna — 800 001, Bihar"], ["✉️", "Email", "info@gangalitfest.in\npress@gangalitfest.in"], ["📞", "Phone", "+91 612 222 0000\n+91 98300 00000"]].map(([icon, label, value]) => (
              <div className="contact__item" key={label}>
                <div className="contact__item-icon">{icon}</div>
                <div>
                  <div className="contact__item-label">{label}</div>
                  <div className="contact__item-value">{value.split("\n").map((l, i) => <div key={i}>{l}</div>)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="contact__social">
            {["𝕏", "in", "f", "▶"].map((icon, i) => <a href="#" key={i} className="contact__social-btn">{icon}</a>)}
          </div>
        </div>
        <div className="contact__map">
          <div className="contact__map-placeholder">
            <span style={{ fontSize: 48 }}>🗺️</span>
            <span>Gyan Bhawan, Patna</span>
            <a href="https://maps.google.com/?q=Gyan+Bhawan+Patna" target="_blank" rel="noreferrer" className="btn-gold" style={{ marginTop: 16, fontSize: 13 }}>Open in Google Maps →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">GLF</div>
          <div className="footer__brand-name">Ganga Literature Festival 2026</div>
          <p className="footer__brand-desc">Bihar's premier annual literary festival celebrating the power of stories on the banks of the sacred Ganga.</p>
        </div>
        <div className="footer__cols">
          <div>
            <div className="footer__col-title">Quick Links</div>
            <ul className="footer__links">
              {["About", "Speakers", "Schedule", "Gallery", "Register"].map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Resources</div>
            <ul className="footer__links">
              {["Press Kit", "Volunteer", "Sponsorship", "Media Accreditation"].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Festival Info</div>
            <ul className="footer__links">
              <li><a href="#">14–15 November 2026</a></li>
              <li><a href="#">Gyan Bhawan, Patna</a></li>
              <li><a href="#">info@gangalitfest.in</a></li>
              <li><a href="#">+91 612 222 0000</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div>© 2026 <span style={{ color: "#D4AF37" }}>Ganga Literature Festival</span>. All rights reserved. GLF Trust, Patna.</div>
        <div>Built with <span style={{ color: "#D4AF37" }}>♥</span> in Patna</div>
      </div>
    </footer>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

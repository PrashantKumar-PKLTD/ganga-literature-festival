import { useState, useEffect, useRef } from "react";
import "./styles/global.css";

// ── DATA ──────────────────────────────────────────────────────────────────────
const SPEAKERS = [
  { id: 1, name: "Amish Tripathi", role: "Author", org: "Novelist & Bestselling Author", img: "https://i.pravatar.cc/400?img=11", topic: "Mythology & Fiction" },
  { id: 2, name: "Anita Nair", role: "Author", org: "Fiction Writer", img: "https://i.pravatar.cc/400?img=47", topic: "Contemporary Literature" },
  { id: 3, name: "Ruskin Bond", role: "Author", org: "Writer", img: "https://i.pravatar.cc/400?img=52", topic: "Hills & Memory" },
  { id: 4, name: "Arundhati Roy", role: "Author", org: "Writer & Activist", img: "https://i.pravatar.cc/400?img=45", topic: "Fiction as Politics" },
  { id: 5, name: "Shashi Tharoor", role: "Author & MP", org: "Parliament of India", img: "https://i.pravatar.cc/400?img=15", topic: "Colonial Reckoning" },
  { id: 6, name: "Vikram Seth", role: "Author & Poet", org: "Independent", img: "https://i.pravatar.cc/400?img=13", topic: "The Long Novel" },
];

const SCHEDULE = [
  { time: "09:00 AM", session: "Opening Ceremony & Inaugural Address", desc: "Welcome by Chief Minister of Bihar, lighting of the lamp, cultural performances.", type: "ceremony", day: 1 },
  { time: "10:30 AM", session: "Keynote: Rivers, Roots & Rasa", desc: "How the Ganga shaped literature, philosophy and identity across centuries.", type: "keynote", day: 1 },
  { time: "12:00 PM", session: "Panel: Writing the Margins", desc: "Representation of marginalized voices in contemporary Indian literature.", type: "panel", day: 1 },
  { time: "02:00 PM", session: "Workshop: The Craft of Translation", desc: "Translating Hindi and Maithili literature — nuance, loss and creative recovery.", type: "workshop", day: 1 },
  { time: "04:00 PM", session: "Poetry Recitation: Voices of the River", desc: "Poems from Vidyapati to contemporary voices as the sun sets over the Ganga.", type: "reading", day: 1 },
  { time: "09:30 AM", session: "Morning Dialogue: Bihar & the World", desc: "Bihari authors on global reception of regional literature.", type: "keynote", day: 2 },
  { time: "11:00 AM", session: "Panel: Digital Age & Storytelling", desc: "How AI, social media and podcasts are reshaping narrative structures.", type: "panel", day: 2 },
  { time: "01:00 PM", session: "Book Launch: The Sandbank Chronicles", desc: "Official launch of the award-winning debut novel.", type: "launch", day: 2 },
  { time: "03:00 PM", session: "Children's Literature Spotlight", desc: "From Ramdhari Singh Dinkar to today's graphic novelists.", type: "panel", day: 2 },
  { time: "05:30 PM", session: "Closing Gala & Cultural Evening", desc: "Valedictory, awards, Baul music and cultural dinner under the stars.", type: "ceremony", day: 2 },
];

const FAQS = [
  { q: "Who can attend the Ganga Literature Festival?", a: "The festival is open to everyone — students, authors, researchers, publishers, journalists, and literature enthusiasts. Some sessions require prior registration due to limited seating." },
  { q: "Is there a registration fee?", a: "General passes are free for students with valid ID. Delegate passes (₹999) and VIP passes (₹2,999) are available for priority seating, workshops, and gala dinner." },
  { q: "Where exactly is the venue?", a: "Gyan Bhawan, Beer Chand Patel Marg, Patna — 800 001, Bihar. Easily accessible via Patna Junction railway station." },
  { q: "Will sessions be livestreamed?", a: "Selected keynotes and panels will be livestreamed on our YouTube channel. Workshop recordings available to registered participants within 7 days." },
  { q: "Are there opportunities for debut authors?", a: "Yes! Open-mic slots, a New Voices panel, and a manuscript consultation programme are available. Apply through the registration form." },
];

const STATES = [
  { num: "01", name: "Uttarakhand", tag: "The Origin of Purity", desc: "Ancient Sanskrit traditions, spiritual philosophy, Vedic literature flowing from the Himalayan glaciers.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { num: "02", name: "Uttar Pradesh", tag: "The Heartland of Heritage", desc: "Hindi literature, Awadhi culture, Banaras storytelling from the world's oldest living city.", img: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80" },
  { num: "03", name: "Bihar", tag: "The Land of Knowledge", desc: "Nalanda, ancient scholarship, Buddhist influence — the original seat of India's intellectual tradition.", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80" },
  { num: "04", name: "West Bengal", tag: "The Ocean of Culture", desc: "Rabindranath Tagore, Bankim Chandra, modern Bengali literature flowing into the Bay of Bengal.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
];

const SPONSORS = [
  { tier: "Title Sponsor", name: "Bihar Tourism", logo: "🏛️" },
  { tier: "Gold", name: "State Bank of India", logo: "🏦" },
  { tier: "Gold", name: "BPCL", logo: "⚡" },
  { tier: "Gold", name: "Air India", logo: "✈️" },
  { tier: "Silver", name: "Penguin Random House", logo: "📚" },
  { tier: "Silver", name: "Harper Collins", logo: "📖" },
  { tier: "Knowledge", name: "Nalanda University", logo: "🎓" },
  { tier: "Knowledge", name: "IIT Patna", logo: "🔬" },
  { tier: "Media", name: "NDTV", logo: "📺" },
  { tier: "Media", name: "The Hindu", logo: "📰" },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", alt: "Festival Opening", size: "large" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", alt: "Panel Discussion", size: "small" },
  { src: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&q=80", alt: "Riverside Reading", size: "small" },
  { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80", alt: "Book Launches", size: "small" },
  { src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80", alt: "Workshop", size: "large" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80", alt: "Cultural Evening", size: "small" },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About", "Journey", "Speakers", "Schedule", "Gallery", "Sponsors", "Contact"];
  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <a href="#home" className="nav__logo">
            <div className="nav__logo-emblem">
              <span>GLF</span>
            </div>
            <div className="nav__logo-text">
              <span className="nav__logo-name">Ganga Literature Festival</span>
              <span className="nav__logo-year">Patna · 2026</span>
            </div>
          </a>
          <ul className="nav__links">
            {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
          </ul>
          <a href="#register" className="nav__cta">Register Now</a>
          <button className="nav__hamburger" onClick={() => setMenuOpen(true)}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>)}
        <a href="#register" className="btn-gold" onClick={() => setMenuOpen(false)}>Register Now</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1800&q=90" alt="Ganga" className="hero__img" />
        <div className="hero__overlay" />
      </div>
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => <div key={i} className="hero__particle" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, animationDuration: `${4 + Math.random() * 4}s` }} />)}
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          14–15 November 2026 · Gyan Bhawan, Patna
        </div>
        <h1 className="hero__title">
          Ganga<br />
          <span className="hero__title-gold">Literature</span><br />
          Festival 2026
        </h1>
        <p className="hero__tagline">Where Words Flow Like the Ganga</p>
        <p className="hero__desc">A confluence of writers, thinkers, poets, and storytellers from across India and the world.</p>
        <div className="hero__stats">
          {[["4", "States"], ["100+", "Speakers"], ["50+", "Sessions"], ["5000+", "Attendees"]].map(([n, l]) => (
            <div className="hero__stat" key={l}>
              <span className="hero__stat-num">{n}</span>
              <span className="hero__stat-label">{l}</span>
            </div>
          ))}
        </div>
        <div className="hero__btns">
          <a href="#register" className="btn-gold">Register Now</a>
          <a href="#journey" className="btn-ghost">Explore The Journey</a>
        </div>
      </div>
      <div className="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

function Journey() {
  const [active, setActive] = useState(0);
  return (
    <section id="journey" className="journey">
      <div className="journey__header">
        <div className="section-tag">The Journey of Ganga</div>
        <h2 className="section-title">Flowing Through <span>4 States.</span><br />Uniting Millions of Stories.</h2>
        <p className="section-sub">From the Himalayas to the Bay of Bengal, the Ganga carries not just water, but civilization, culture and countless stories.</p>
      </div>
      <div className="journey__river">
        <div className="journey__river-line">
          {STATES.map((s, i) => (
            <div key={i} className={`journey__node ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>
              <div className="journey__node-dot" />
              <span className="journey__node-label">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="journey__content">
        <div className="journey__img-wrap">
          <img src={STATES[active].img} alt={STATES[active].name} className="journey__img" />
          <div className="journey__img-overlay" />
          <div className="journey__img-badge">{STATES[active].num}</div>
        </div>
        <div className="journey__info">
          <div className="journey__info-tag">{STATES[active].tag}</div>
          <h3 className="journey__info-title">{STATES[active].name}</h3>
          <p className="journey__info-desc">{STATES[active].desc}</p>
          <div className="journey__nav">
            {STATES.map((s, i) => (
              <button key={i} className={`journey__nav-btn ${active === i ? "active" : ""}`} onClick={() => setActive(i)}>
                <span>{s.num}</span>
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <div className="about__left">
          <div className="section-tag">About The Festival</div>
          <h2 className="section-title">Bihar's Premier <span>Literary Gathering</span></h2>
          <p className="about__text">The Ganga Literature Festival is an annual celebration of the written and spoken word, held in the historic city of Patna on the banks of the sacred Ganga.</p>
          <p className="about__text">Bringing together Nobel laureates, Booker Prize winners, debut novelists, translators, and readers in intimate conversation — GLF has grown into a landmark cultural event drawing participants from across India and the world.</p>
          <div className="about__timeline">
            {[["2022", "Inaugural Edition — 50 authors, 2000 attendees"], ["2023", "Expansion — 75 authors, 3 states represented"], ["2024", "International — First global author participation"], ["2026", "5th Edition — Bihar's largest literary gathering"]].map(([yr, ev]) => (
              <div className="about__timeline-item" key={yr}>
                <div className="about__timeline-year">{yr}</div>
                <div className="about__timeline-event">{ev}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about__right">
          <div className="about__stats-grid">
            {[["4", "States", "🗺️"], ["100+", "Authors", "✍️"], ["50+", "Sessions", "🎤"], ["5000+", "Attendees", "👥"]].map(([n, l, icon]) => (
              <div className="about__stat-card" key={l}>
                <div className="about__stat-icon">{icon}</div>
                <div className="about__stat-num">{n}</div>
                <div className="about__stat-label">{l}</div>
              </div>
            ))}
          </div>
          <div className="about__quote">
            <div className="about__quote-mark">"</div>
            <p>Literature is the meeting of rivers — each voice a tributary flowing into the great ocean of human experience.</p>
            <div className="about__quote-author">— GLF Vision 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section id="speakers" className="speakers">
      <div className="speakers__header">
        <div className="section-tag">Distinguished Speakers</div>
        <h2 className="section-title">Voices That <span>Shape the World</span></h2>
        <p className="section-sub">From Nobel laureates to debut novelists — a gathering of the finest literary minds.</p>
      </div>
      <div className="speakers__grid">
        {SPEAKERS.map(s => (
          <div className="speaker-card" key={s.id}>
            <div className="speaker-card__img-wrap">
              <img src={s.img} alt={s.name} className="speaker-card__img" />
              <div className="speaker-card__overlay">
                <div className="speaker-card__topic">{s.topic}</div>
              </div>
            </div>
            <div className="speaker-card__body">
              <div className="speaker-card__name">{s.name}</div>
              <div className="speaker-card__role">{s.role}</div>
              <div className="speaker-card__org">{s.org}</div>
              <div className="speaker-card__links">
                {["in", "𝕏", "f"].map((icon, i) => <a href="#" key={i} className="speaker-card__link">{icon}</a>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.title = "Ganga Literature Festival 2026 | Patna, Bihar"; }, []);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Journey />
      <About />
      <Speakers />
      <Schedule />
      <Gallery />
      <Sponsors />
      <Registration />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

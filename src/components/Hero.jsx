export default function Hero() {
  return (
    <section id="home" className="glf-hero">
      <div className="glf-hero-bg-pattern" />
      <div className="glf-hero-glow" />
      <div className="glf-hero-glow2" />
      <div className="glf-hero-inner">
        <div className="glf-hero-eyebrow">
          <span />
          Annual Literary Gathering — Patna, Bihar
        </div>
        <h1 className="glf-hero-title">Ganga Literature</h1>
        <p className="glf-hero-title-italic">Festival 2026</p>
        <p className="glf-hero-desc">
          Where words flow like the sacred river — a celebration of stories, ideas, and the enduring power of literature at the heart of Bihar's cultural capital.
        </p>
        <div className="glf-hero-cta">
          <a href="#register" className="glf-btn-primary">Register Now →</a>
          <a href="#about" className="glf-btn-outline">Explore Festival</a>
        </div>
        <div className="glf-hero-meta">
          <div className="glf-hero-meta-item">
            <div className="glf-hero-meta-icon">📅</div>
            <div className="glf-hero-meta-content">
              <span className="glf-hero-meta-label">Date</span>
              <span className="glf-hero-meta-value">14–15 November 2026</span>
            </div>
          </div>
          <div className="glf-hero-meta-item">
            <div className="glf-hero-meta-icon">📍</div>
            <div className="glf-hero-meta-content">
              <span className="glf-hero-meta-label">Venue</span>
              <span className="glf-hero-meta-value">Gyan Bhawan, Patna</span>
            </div>
          </div>
          <div className="glf-hero-meta-item">
            <div className="glf-hero-meta-icon">🎭</div>
            <div className="glf-hero-meta-content">
              <span className="glf-hero-meta-label">Sessions</span>
              <span className="glf-hero-meta-value">40+ Events, 2 Days</span>
            </div>
          </div>
        </div>
      </div>
      <div className="glf-hero-scroll">Scroll</div>
    </section>
  );
}

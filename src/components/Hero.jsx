export default function Hero() {
  return (
    <section id="home" className="c-hero">
      <div className="c-hero-bg" />
      <div className="c-hero-dots" />
      <div className="c-hero-shape" />
      <div className="c-hero-shape2" />
      <div className="c-hero-inner">
        <div>
          <div className="c-hero-badge">
            <span />
            14–15 November 2026 · Patna, Bihar
          </div>
          <h1 className="c-hero-title">
            Ganga <span>Literature</span><br />Festival 2026
          </h1>
          <p className="c-hero-desc">
            Bihar's grandest annual celebration of words, ideas, and stories — where authors, thinkers, and readers gather on the banks of the sacred Ganga.
          </p>
          <div className="c-hero-btns">
            <a href="#register" className="btn-white">Register Now →</a>
            <a href="#about" className="btn-outline" style={{ color: "rgba(255,255,255,0.8)", borderColor: "rgba(255,255,255,0.3)" }}>Learn More</a>
          </div>
          <div className="c-hero-stats">
            {[["200+", "Authors"], ["40+", "Sessions"], ["15K+", "Attendees"], ["2", "Days"]].map(([n, l]) => (
              <div className="c-hero-stat" key={l}>
                <span className="c-hero-stat-num">{n}</span>
                <span className="c-hero-stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="c-hero-right">
          {[
            { icon: "📅", label: "Date", value: "14–15 November 2026", color: "orange" },
            { icon: "📍", label: "Venue", value: "Gyan Bhawan, Patna", color: "teal" },
            { icon: "🎟️", label: "Entry", value: "Free for Students", color: "yellow" },
          ].map((c) => (
            <div className="c-hero-card" key={c.label}>
              <div className={`c-hero-card-icon ${c.color}`}>{c.icon}</div>
              <div>
                <div className="c-hero-card-label">{c.label}</div>
                <div className="c-hero-card-value">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

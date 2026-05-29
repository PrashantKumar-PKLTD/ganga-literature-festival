const FEATURES = [
  { icon: "📚", title: "200+ Authors", desc: "National & international voices", bg: "#FEF0EB" },
  { icon: "🎤", title: "40+ Sessions", desc: "Panels, workshops & readings", bg: "#EBF1FC" },
  { icon: "🌍", title: "30+ Languages", desc: "Literature across cultures", bg: "#E6FAF9" },
  { icon: "🏆", title: "5th Edition", desc: "A decade of literary legacy", bg: "#FFFBEB" },
];

export default function About() {
  return (
    <section id="about" className="c-section c-about">
      <div className="c-container">
        <div className="c-about-grid">
          <div className="c-about-img">
            <img
              className="c-about-img-main"
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=85"
              alt="Festival"
            />
            <div className="c-about-img-badge">
              <div className="c-about-img-badge-num">5th</div>
              <div className="c-about-img-badge-text">Edition</div>
            </div>
            <div className="c-about-img-card">
              <div className="c-about-img-card-icon">🏅</div>
              <div>
                <div className="c-about-img-card-num">15,000+</div>
                <div className="c-about-img-card-label">Past Attendees</div>
              </div>
            </div>
          </div>
          <div>
            <div className="c-tag">About the Festival</div>
            <h2 className="c-title">Bihar's Premier <span>Literary Gathering</span></h2>
            <p className="c-sub" style={{ marginBottom: 16 }}>
              The Ganga Literature Festival is an annual celebration of the written and spoken word, held in the historic city of Patna on the banks of the sacred Ganga.
            </p>
            <p className="c-sub" style={{ marginBottom: 32 }}>
              Bringing together Nobel laureates, Booker Prize winners, debut novelists, translators, and readers — every session sparks conversation and forges new connections between authors and their audiences.
            </p>
            <div className="c-about-features">
              {FEATURES.map((f) => (
                <div className="c-about-feature" key={f.title}>
                  <div className="c-about-feature-icon" style={{ background: f.bg }}>{f.icon}</div>
                  <div>
                    <div className="c-about-feature-title">{f.title}</div>
                    <div className="c-about-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

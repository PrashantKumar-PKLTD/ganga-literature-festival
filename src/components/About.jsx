export default function About() {
  return (
    <section id="about" className="glf-section glf-about">
      <div className="glf-container">
        <div className="glf-about-grid">
          <div className="glf-about-visual">
            <div className="glf-about-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=85"
                alt="Literature Festival"
              />
              <div className="glf-about-img-border" />
              <div className="glf-about-badge">
                <div className="glf-about-badge-num">5th</div>
                <div className="glf-about-badge-text">Edition 2026</div>
              </div>
            </div>
            <div className="glf-about-stats">
              {[["200+", "Authors"], ["40+", "Sessions"], ["15K+", "Attendees"], ["30+", "Languages"]].map(([n, l]) => (
                <div className="glf-about-stat" key={l}>
                  <div className="glf-about-stat-num">{n}</div>
                  <div className="glf-about-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="glf-section-tag">About the Festival</div>
            <h2 className="glf-section-title">
              A Confluence of <span>Words & Ideas</span>
            </h2>
            <p className="glf-section-sub" style={{ marginBottom: 24 }}>
              The Ganga Literature Festival is Bihar's premier annual celebration of the written and spoken word. Held in the historic city of Patna on the banks of the Ganga, it brings together Nobel laureates, Booker Prize winners, debut novelists, translators, and readers in intimate conversation.
            </p>
            <p className="glf-section-sub" style={{ marginBottom: 24 }}>
              Born from the belief that literature is the most democratic form of human expression, GLF has grown from a small gathering of writers into a landmark cultural event that draws participants from across India and around the world.
            </p>
            <p className="glf-section-sub" style={{ marginBottom: 40 }}>
              From poetry readings at dusk to panel discussions on the future of storytelling, from translation workshops to children's literature showcases — every session is crafted to spark conversation and forge new connections between authors and their audiences.
            </p>
            <a href="#register" className="glf-btn-primary">Join the Festival →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import SPEAKERS from "../data/speakers";

export function SpeakerCard({ speaker }) {
  return (
    <div className="glf-speaker-card">
      <div className="glf-speaker-img">
        <img src={speaker.img} alt={speaker.name} />
      </div>
      <div className="glf-speaker-overlay">
        <div>
          <div className="glf-speaker-topic">{speaker.topic}</div>
          <div className="glf-speaker-name">{speaker.name}</div>
          <div className="glf-speaker-role">{speaker.designation} · {speaker.org}</div>
        </div>
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="glf-section glf-speakers">
      <div className="glf-container">
        <div className="glf-section-tag">Featured Speakers</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <h2 className="glf-section-title">
            Voices That <span>Shape the World</span>
          </h2>
          <p className="glf-section-sub" style={{ marginBottom: 0 }}>
            From Nobel laureates to debut novelists — a diverse gathering of literary minds.
          </p>
        </div>
        <div className="glf-speakers-grid">
          {SPEAKERS.map((s) => (
            <SpeakerCard key={s.id} speaker={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

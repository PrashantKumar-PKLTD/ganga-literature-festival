import SPEAKERS from "./speakers";

export function SpeakerCard({ speaker }) {
  return (
    <div className="c-speaker-card">
      <div className="c-speaker-img">
        <img src={speaker.img} alt={speaker.name} />
        <span className="c-speaker-topic-badge">{speaker.topic}</span>
      </div>
      <div className="c-speaker-body">
        <div className="c-speaker-name">{speaker.name}</div>
        <div className="c-speaker-role">{speaker.designation}</div>
        <div className="c-speaker-org">{speaker.org}</div>
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="c-section c-speakers">
      <div className="c-container">
        <div className="c-speakers-header">
          <div>
            <div className="c-tag">Featured Speakers</div>
            <h2 className="c-title">Meet the <span>Voices</span></h2>
          </div>
          <p className="c-sub">From Nobel laureates to debut novelists — a diverse gathering of literary minds.</p>
        </div>
        <div className="c-speakers-grid">
          {SPEAKERS.map((s) => <SpeakerCard key={s.id} speaker={s} />)}
        </div>
      </div>
    </section>
  );
}

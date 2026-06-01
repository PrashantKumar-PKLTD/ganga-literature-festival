import { useState } from "react";
import SCHEDULE from "../data/schedule";

export function ScheduleCard({ item }) {
  return (
    <div className="c-schedule-card">
      <div className="c-schedule-time-col">
        <div className="c-schedule-time">{item.time}</div>
        <span className={`c-schedule-type ${item.type}`}>{item.type}</span>
      </div>
      <div className="c-schedule-content">
        <div>
          <div className="c-schedule-title">{item.session}</div>
          <div className="c-schedule-desc">{item.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  return (
    <section id="schedule" className="c-section c-schedule">
      <div className="c-container">
        <div className="c-tag">Programme</div>
        <h2 className="c-title">Event <span>Schedule</span></h2>
        <div className="c-schedule-tabs">
          {[1, 2].map((d) => (
            <button key={d} className={`c-schedule-tab${activeDay === d ? " active" : ""}`} onClick={() => setActiveDay(d)}>
              Day {d} — {d === 1 ? "14 November" : "15 November"}
            </button>
          ))}
        </div>
        <div className="c-schedule-list">
          {SCHEDULE.filter((s) => s.day === activeDay).map((item, i) => (
            <ScheduleCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

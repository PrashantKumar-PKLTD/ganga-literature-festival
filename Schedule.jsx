import { useState } from "react";
import SCHEDULE from "../data/schedule";

export function ScheduleCard({ item }) {
  return (
    <div className="glf-schedule-item">
      <div className="glf-schedule-time-col">
        <span className="glf-schedule-time">{item.time}</span>
        <span className={`glf-schedule-type-badge ${item.type}`}>{item.type}</span>
      </div>
      <div className="glf-schedule-content-col">
        <div className="glf-schedule-title">{item.session}</div>
        <div className="glf-schedule-desc">{item.desc}</div>
      </div>
    </div>
  );
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const filtered = SCHEDULE.filter((s) => s.day === activeDay);

  return (
    <section id="schedule" className="glf-section glf-schedule">
      <div className="glf-container">
        <div className="glf-section-tag">Event Programme</div>
        <h2 className="glf-section-title">Festival <span>Schedule</span></h2>
        <div className="glf-schedule-tabs">
          {[1, 2].map((d) => (
            <button
              key={d}
              className={`glf-schedule-tab${activeDay === d ? " active" : ""}`}
              onClick={() => setActiveDay(d)}
            >
              Day {d} — {d === 1 ? "14 Nov" : "15 Nov"}
            </button>
          ))}
        </div>
        <div className="glf-schedule-items">
          {filtered.map((item, i) => (
            <ScheduleCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

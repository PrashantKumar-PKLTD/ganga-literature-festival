import { useState } from "react";

const PASSES = [
  { name: "Student Pass", desc: "Valid ID required · All open sessions", price: "Free", value: "student" },
  { name: "Delegate Pass", desc: "Priority seating · 3 workshops", price: "₹999", value: "delegate" },
  { name: "VIP Pass", desc: "All sessions · Gala dinner · Meet & greet", price: "₹2,999", value: "vip" },
];

export default function Registration() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", category: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); if (form.name && form.email) setSubmitted(true); };

  return (
    <section id="register" className="c-section c-registration">
      <div className="c-container">
        <div className="c-reg-grid">
          <div>
            <div className="c-tag" style={{ background: "rgba(241,90,43,0.2)", color: "#FFA07A" }}>Register Now</div>
            <h2 className="c-reg-title">Secure Your <span>Festival Pass</span></h2>
            <p className="c-reg-sub">Join thousands of literature lovers, authors, and scholars at GLF 2026.</p>
            <div className="c-reg-passes">
              {PASSES.map((p) => (
                <div className="c-reg-pass" key={p.value}>
                  <div>
                    <div className="c-reg-pass-name">{p.name}</div>
                    <div className="c-reg-pass-desc">{p.desc}</div>
                  </div>
                  <div className="c-reg-pass-price">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="c-form-card">
            <div className="c-form-title">Register for GLF 2026</div>
            <div className="c-form-subtitle">Fill in your details and we'll send you a confirmation.</div>
            {submitted ? (
              <div className="c-form-success">✓ Registration received! Confirmation sent to {form.email}</div>
            ) : (
              <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form-row">
                  <div className="c-form-group">
                    <label className="c-form-label">Full Name *</label>
                    <input name="name" className="c-form-input" placeholder="Ramesh Gupta" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="c-form-group">
                    <label className="c-form-label">Email *</label>
                    <input name="email" type="email" className="c-form-input" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="c-form-row">
                  <div className="c-form-group">
                    <label className="c-form-label">Phone</label>
                    <input name="phone" className="c-form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="c-form-group">
                    <label className="c-form-label">Pass Category</label>
                    <select name="category" className="c-form-select" value={form.category} onChange={handleChange}>
                      <option value="">Select pass</option>
                      {PASSES.map((p) => <option key={p.value} value={p.value}>{p.name} — {p.price}</option>)}
                    </select>
                  </div>
                </div>
                <div className="c-form-group">
                  <label className="c-form-label">Message</label>
                  <textarea name="message" className="c-form-textarea" placeholder="Tell us about yourself..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>Complete Registration →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

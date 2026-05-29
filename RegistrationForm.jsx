import { useState } from "react";

const PASSES = [
  { name: "Student Pass", desc: "Valid student ID required · All open sessions", price: "Free", value: "student" },
  { name: "Delegate Pass", desc: "Priority seating · 3 workshops included", price: "₹999", value: "delegate" },
  { name: "VIP Pass", desc: "All sessions · Gala dinner · Author meet & greet", price: "₹2,999", value: "vip" },
];

export default function Registration() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", category: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section id="register" className="glf-section glf-registration">
      <div className="glf-container">
        <div className="glf-reg-grid">
          <div className="glf-reg-info">
            <div className="glf-section-tag">Register Now</div>
            <h2 className="glf-section-title">Secure Your <span>Festival Pass</span></h2>
            <p className="glf-section-sub">
              Join thousands of literature lovers, authors, and scholars at the Ganga Literature Festival 2026. Choose the pass that suits you.
            </p>
            <div className="glf-reg-passes">
              {PASSES.map((p) => (
                <div className="glf-reg-pass" key={p.value}>
                  <div>
                    <div className="glf-reg-pass-name">{p.name}</div>
                    <div className="glf-reg-pass-desc">{p.desc}</div>
                  </div>
                  <div className="glf-reg-pass-price">{p.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="glf-form-success">
                ✓ Registration received! We'll send your confirmation to {form.email} shortly.
              </div>
            ) : (
              <form className="glf-form" onSubmit={handleSubmit}>
                <div className="glf-form-row">
                  <div className="glf-form-group">
                    <label className="glf-form-label">Full Name *</label>
                    <input name="name" className="glf-form-input" placeholder="Ramesh Gupta" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="glf-form-group">
                    <label className="glf-form-label">Email Address *</label>
                    <input name="email" type="email" className="glf-form-input" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="glf-form-row">
                  <div className="glf-form-group">
                    <label className="glf-form-label">Phone Number</label>
                    <input name="phone" className="glf-form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="glf-form-group">
                    <label className="glf-form-label">Pass Category</label>
                    <select name="category" className="glf-form-select" value={form.category} onChange={handleChange}>
                      <option value="">Select a pass</option>
                      {PASSES.map((p) => (
                        <option key={p.value} value={p.value}>{p.name} — {p.price}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="glf-form-group">
                  <label className="glf-form-label">Tell us about yourself</label>
                  <textarea name="message" className="glf-form-textarea" placeholder="Are you a first-time author? A researcher? A bookworm? Let us know..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="glf-btn-primary" style={{ alignSelf: "flex-start" }}>
                  Complete Registration →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

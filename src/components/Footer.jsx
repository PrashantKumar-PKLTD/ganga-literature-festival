const QUICK_LINKS = ["About", "Speakers", "Schedule", "Gallery", "Register"];
const RESOURCES = ["Press Kit", "Media Accreditation", "Volunteer", "Sponsorship", "Code of Conduct"];

export default function Footer() {
  return (
    <footer className="glf-footer">
      <div className="glf-container">
        <div className="glf-footer-top">
          <div className="glf-footer-grid">
            <div>
              <a href="#home" className="glf-logo" style={{ textDecoration: "none" }}>
                <div className="glf-logo-emblem">G</div>
                <div className="glf-logo-text">
                  <span className="glf-logo-name">Ganga Lit Fest</span>
                  <span className="glf-logo-sub">Patna 2026</span>
                </div>
              </a>
              <p className="glf-footer-brand-desc">
                Bihar's premier annual literary festival, celebrating the power of stories on the banks of the sacred Ganga. A cultural gathering for readers, writers, and thinkers from across the world.
              </p>
            </div>

            <div>
              <div className="glf-footer-col-title">Quick Links</div>
              <ul className="glf-footer-links">
                {QUICK_LINKS.map((l) => (
                  <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="glf-footer-col-title">Resources</div>
              <ul className="glf-footer-links">
                {RESOURCES.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="glf-footer-col-title">Festival Info</div>
              <ul className="glf-footer-links">
                <li><a href="#">14–15 November 2026</a></li>
                <li><a href="#">Gyan Bhawan, Patna</a></li>
                <li><a href="#">info@gangalitfest.in</a></li>
                <li><a href="#">+91 612 222 0000</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glf-footer-bottom">
          <div className="glf-footer-copy">
            © 2026 <span>Ganga Literature Festival</span>. All rights reserved. Organised by GLF Trust, Patna.
          </div>
          <div className="glf-footer-copy">
            Built with <span>♥</span> in Patna
          </div>
        </div>
      </div>
    </footer>
  );
}

const QUICK = ["About", "Speakers", "Schedule", "Gallery", "Register"];
const RESOURCES = ["Press Kit", "Media Accreditation", "Volunteer", "Sponsorship", "Code of Conduct"];

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-container">
        <div className="c-footer-top">
          <div className="c-footer-grid">
            <div>
              <a href="#home" className="c-logo" style={{ textDecoration: "none" }}>
                <div className="c-logo-box">G</div>
                <div>
                  <div className="c-logo-name" style={{ color: "#fff" }}>Ganga Lit Fest</div>
                  <div className="c-logo-sub">Patna 2026</div>
                </div>
              </a>
              <p className="c-footer-desc">Bihar's premier annual literary festival celebrating the power of stories on the banks of the sacred Ganga.</p>
            </div>
            <div>
              <div className="c-footer-col-title">Quick Links</div>
              <ul className="c-footer-links">
                {QUICK.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="c-footer-col-title">Resources</div>
              <ul className="c-footer-links">
                {RESOURCES.map((l) => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="c-footer-col-title">Festival Info</div>
              <ul className="c-footer-links">
                <li><a href="#">14–15 November 2026</a></li>
                <li><a href="#">Gyan Bhawan, Patna</a></li>
                <li><a href="#">info@gangalitfest.in</a></li>
                <li><a href="#">+91 612 222 0000</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="c-footer-bottom">
          <div className="c-footer-copy">© 2026 <span>Ganga Literature Festival</span>. All rights reserved. GLF Trust, Patna.</div>
          <div className="c-footer-copy">Built with <span>♥</span> in Patna</div>
        </div>
      </div>
    </footer>
  );
}

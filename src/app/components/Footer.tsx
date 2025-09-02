export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">Your Hospital</div>
            <small>Compassionate, comprehensive healthcare for your community.</small>
          </div>
          <div>
            <strong>Quick Links</strong>
            <div className="stack">
              <a href="/services">Services</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div>
            <strong>Contact</strong>
            <div className="stack">
              <small>123 Health Ave, Wellness City</small>
              <small>(123) 456-7890</small>
              <small>care@example.com</small>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          © {new Date().getFullYear()} Your Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
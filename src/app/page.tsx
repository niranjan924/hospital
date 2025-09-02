export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Compassionate Care, Close to Home</h1>
        <p className="lead">
          From emergency services to specialized clinics, we’re here for your health.
        </p>
        <div>
          <a className="btn" href="/services">Explore Services</a>
        </div>
      </section>

      <section className="section">
        <h2>Why Choose Us</h2>
        <div className="card-grid">
          <div className="card"><h3>Expert Physicians</h3><p className="muted">Board-certified teams across specialties.</p></div>
          <div className="card"><h3>Modern Facilities</h3><p className="muted">State-of-the-art diagnostic and surgical suites.</p></div>
          <div className="card"><h3>Patient-Centered</h3><p className="muted">Care plans tailored to your unique needs.</p></div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <span className="badge">Trusted by our community</span>
          <h2 className="text-center">By the Numbers</h2>
          <div className="stats">
            <div className="stat"><strong>250k+</strong><span className="muted">Patients served</span></div>
            <div className="stat"><strong>1,200+</strong><span className="muted">Dedicated staff</span></div>
            <div className="stat"><strong>98%</strong><span className="muted">Satisfaction</span></div>
            <div className="stat"><strong>30+</strong><span className="muted">Years of care</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>What Our Patients Say</h2>
        <div className="testimonials">
          <div className="quote">
            “Every nurse and doctor treated me like family.”
            <cite>— Maria S.</cite>
          </div>
          <div className="quote">
            “Fast, professional, and compassionate. Best ER experience I’ve had.”
            <cite>— Jonathan R.</cite>
          </div>
          <div className="quote">
            “State-of-the-art facilities and outstanding specialists.”
            <cite>— Priya K.</cite>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container text-center">
          <h2>Ready to put your health first?</h2>
          <p className="lead">Book an appointment or talk to our care team today.</p>
          <a className="btn cta" href="/contact">Book Now</a>
        </div>
      </section>
    </>
  );
}
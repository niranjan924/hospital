export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Compassionate Care, Close to Home</h1>
        <p className="muted">
          From emergency services to specialized clinics, we’re here for your health.
        </p>
        <div>
          <a className="btn" href="/services">Explore Services</a>
        </div>
      </section>

      <section>
        <h2>Why Choose Us</h2>
        <div className="card-grid">
          <div className="card"><h3>Expert Physicians</h3><p className="muted">Board-certified teams across specialties.</p></div>
          <div className="card"><h3>Modern Facilities</h3><p className="muted">State-of-the-art diagnostic and surgical suites.</p></div>
          <div className="card"><h3>Patient-Centered</h3><p className="muted">Care plans tailored to your unique needs.</p></div>
        </div>
      </section>
    </>
  );
}
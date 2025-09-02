export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <>
      <h1>About Us</h1>
      <p className="lead">
        For over 30 years, Your Hospital has provided comprehensive healthcare
        to our community with a focus on safety, quality, and compassion.
      </p>
      <div className="card">
        <h3>Our Mission</h3>
        <p>
          To deliver exceptional, patient-centered care while advancing health
          through education and innovation.
        </p>
      </div>

      <section className="section">
        <h2>Our Values</h2>
        <div className="card-grid">
          <div className="card"><h3>Compassion</h3><p className="muted">We treat everyone with dignity and empathy.</p></div>
          <div className="card"><h3>Excellence</h3><p className="muted">We pursue the highest standards in care and safety.</p></div>
          <div className="card"><h3>Collaboration</h3><p className="muted">We work as one team with our patients and partners.</p></div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="stack-lg">
            <div className="card"><strong>1992</strong> — Founded to serve Wellness City and surrounding communities.</div>
            <div className="card"><strong>2008</strong> — Opened the Heart & Vascular Center.</div>
            <div className="card"><strong>2019</strong> — Expanded Emergency Department to 40 beds.</div>
            <div className="card"><strong>2024</strong> — Launched telehealth services across specialties.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Leadership</h2>
        <div className="card-grid">
          <div className="card"><h3>Dr. Alex Chen</h3><p className="muted">Chief Medical Officer</p></div>
          <div className="card"><h3>Jamie Rivera, RN</h3><p className="muted">Chief Nursing Officer</p></div>
          <div className="card"><h3>Sam Patel</h3><p className="muted">Chief Operations Officer</p></div>
        </div>
      </section>
    </>
  );
}
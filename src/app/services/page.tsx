export const dynamic = 'force-static';

const services = [
  { title: 'Emergency Care', desc: '24/7 emergency department for urgent needs.' },
  { title: 'Cardiology', desc: 'Comprehensive heart health diagnostics and treatment.' },
  { title: 'Orthopedics', desc: 'Joint, bone, and sports injury care.' },
  { title: 'Pediatrics', desc: 'Compassionate care for children and adolescents.' },
  { title: 'Radiology', desc: 'Advanced imaging including MRI, CT, and ultrasound.' },
  { title: 'Oncology', desc: 'Integrated cancer care from diagnosis to survivorship.' }
];

export default function ServicesPage() {
  return (
    <>
      <h1>Our Services</h1>
      <p className="lead">Comprehensive care across key medical specialties.</p>

      <section className="section-alt">
        <div className="container text-center">
          <h2>Featured Care Programs</h2>
          <p className="muted">Integrated, multidisciplinary care for complex conditions.</p>
          <div className="card-grid">
            <div className="card"><h3>Heart Health Program</h3><p className="muted">From prevention to advanced interventions.</p></div>
            <div className="card"><h3>Joint & Spine Center</h3><p className="muted">Personalized plans to get you moving again.</p></div>
            <div className="card"><h3>Cancer Care Institute</h3><p className="muted">Compassionate, coordinated oncology services.</p></div>
          </div>
        </div>
      </section>
      <div className="card-grid">
        {services.map(s => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="card">
          <h3>Not sure which service you need?</h3>
          <p className="muted">Talk to our referral team and we’ll guide you to the right clinic.</p>
          <a className="btn" href="/contact">Get Guidance</a>
        </div>
      </section>
    </>
  );
}
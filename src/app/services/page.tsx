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
      <p className="muted">Comprehensive care across key medical specialties.</p>
      <div className="card-grid">
        {services.map(s => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p className="muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
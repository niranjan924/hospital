export default function ContactPage() {
  return (
    <>
      <h1>Contact Us</h1>
      <p className="lead">We’re here to help. Reach out with questions or to book an appointment.</p>

      <section className="section-alt">
        <div className="container">
          <div className="card-grid">
            <div className="card">
              <h3>General Inquiries</h3>
              <p className="muted">(123) 456-7890<br/>care@example.com</p>
            </div>
            <div className="card">
              <h3>Appointments</h3>
              <p className="muted">Call our scheduling team or use the form below.</p>
            </div>
            <div className="card">
              <h3>Emergency</h3>
              <p className="muted">Dial 911 or visit our Emergency Department, open 24/7.</p>
            </div>
          </div>
        </div>
      </section>
      <form>
        <div><label htmlFor="name">Name</label><input id="name" required /></div>
        <div><label htmlFor="email">Email</label><input id="email" type="email" required /></div>
        <div><label htmlFor="message">Message</label><textarea id="message" rows={5} /></div>
        <button className="btn" type="submit">Send</button>
      </form>

      <section className="section">
        <h2>Visit Us</h2>
        <div className="card">
          <p className="muted">123 Health Ave, Wellness City</p>
          <div style={{ height: 240, background: '#e5e7eb', borderRadius: 12 }} />
        </div>
      </section>
    </>
  );
}
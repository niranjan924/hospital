'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement & { name: { value: string }; email: { value: string }; message: { value: string } };
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      setStatus('Message sent. We will get back to you soon.');
      form.reset();
    } catch (e) {
      setStatus('Sorry, there was a problem sending your message.');
    } finally {
      setSubmitting(false);
    }
  }

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
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Name</label><input id="name" name="name" required /></div>
        <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
        <div><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} required /></div>
        <button className="btn" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send'}</button>
      </form>
      {status && <p className="muted" style={{ marginTop: 8 }}>{status}</p>}

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
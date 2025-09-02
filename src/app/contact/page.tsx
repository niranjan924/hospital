export default function ContactPage() {
  return (
    <>
      <h1>Contact Us</h1>
      <p className="muted">We’re here to help. Reach out with questions or to book an appointment.</p>
      <form>
        <div><label htmlFor="name">Name</label><input id="name" required /></div>
        <div><label htmlFor="email">Email</label><input id="email" type="email" required /></div>
        <div><label htmlFor="message">Message</label><textarea id="message" rows={5} /></div>
        <button className="btn" type="submit">Send</button>
      </form>
    </>
  );
}
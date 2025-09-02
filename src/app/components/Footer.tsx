export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Your Hospital. All rights reserved.</div>
        <div className="muted">123 Health Ave, Wellness City, (123) 456-7890</div>
      </div>
    </footer>
  );
}
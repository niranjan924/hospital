'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          {/* <img src="/hospital-logo.svg" alt="" height={24} /> */}
          <span>Your Hospital</span>
        </Link>
        <div className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
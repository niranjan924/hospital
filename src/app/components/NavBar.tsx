'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          {/* <img src="/hospital-logo.svg" alt="" height={24} /> */}
          <span>Your Hospital</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(v => !v)}
        >
          <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
          Menu
        </button>

        <div className="nav-actions">
          <div className="nav-links">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Link className="btn cta" href="/contact">Book Appointment</Link>
        </div>
      </div>

      {open && (
        <div id="primary-navigation" className="nav-collapsible">
          <div className="stack">
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link className="btn cta btn-block" href="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
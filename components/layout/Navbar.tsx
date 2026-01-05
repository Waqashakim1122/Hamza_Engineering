'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Simple navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Desktop Nav Links - Right Side */}
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar__item">
                <Link
                  href={link.href}
                  className={`navbar__link ${isActive(link.href) ? 'navbar__link--active' : ''}`}
                >
                  <span className="navbar__link-text">{link.name}</span>
                  <span className="navbar__link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="navbar__cta">
            <a 
              href="/contact" 
              className="navbar__cta-button"
            >
              <span>Get Quote</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle - Professional Design */}
      <button
        className={`navbar__mobile-toggle ${isScrolled ? 'navbar__mobile-toggle--scrolled' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className={`navbar__mobile-toggle-icon ${isMenuOpen ? 'navbar__mobile-toggle-icon--close' : ''}`}>
          <span className="navbar__mobile-toggle-line"></span>
          <span className="navbar__mobile-toggle-line"></span>
          <span className="navbar__mobile-toggle-line"></span>
        </span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`navbar__mobile-overlay ${isMenuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu - Professional Design */}
      <div className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {/* Professional Mobile Header */}
        <div className="navbar__mobile-header">
          <div className="navbar__mobile-brand">
            <div className="navbar__mobile-logo">
              <img
                src="/images/logo.png"
                alt="Hamza Engineering"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className="navbar__mobile-title">HAMZA ENGINEERING</h3>
              <p className="navbar__mobile-subtitle">Industrial Solutions</p>
            </div>
          </div>
          <button 
            className="navbar__mobile-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="navbar__mobile-close-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Content */}
        <div className="navbar__mobile-content">
          <ul className="navbar__mobile-list">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar__mobile-item">
                <Link
                  href={link.href}
                  className={`navbar__mobile-link ${isActive(link.href) ? 'navbar__mobile-link--active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="navbar__mobile-link-text">{link.name}</span>
                  <span className="navbar__mobile-link-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Professional Mobile CTA - Centered */}
          <div className="navbar__mobile-cta">
            <a 
              href="/contact" 
              className="navbar__mobile-cta-button"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Request Quote</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
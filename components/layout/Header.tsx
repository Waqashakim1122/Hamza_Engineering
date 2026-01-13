'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          {/* Logo & Branding */}
          <Link href="/" className="header__brand">
            <div className="header__logo">
              <img
                src="/images/logo.png"
                alt="Hamza Engineering Logo"
                width={70}
                height={70}
              />
            </div>
            <div className="header__text">
              <h1 className="header__title">HAMZA ENGINEERING</h1>
              <p className="header__subtitle">Industrial Machinery Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="header__nav-item">
                  <Link
                    href={link.href}
                    className={`header__nav-link ${isActive(link.href) ? 'header__nav-link--active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <Link href="/contact" className="header__cta">
              <span>Get Quote</span>
              <ArrowRight size={16} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="header__mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="header__overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - REMOVED THE LOGO FROM HERE */}
      <div className={`header__mobile ${isMenuOpen ? 'header__mobile--open' : ''}`}>
        
        {/* Mobile Header - SIMPLIFIED WITHOUT LOGO */}
        <div className="header__mobile-header">
          <div className="header__mobile-brand">
            {/* Removed logo container */}
            <div>
              <h2 className="header__mobile-title">HAMZA ENGINEERING</h2>
              <p className="header__mobile-subtitle">Industrial Machinery Solutions</p>
            </div>
          </div>
          {/* Close button at top right */}
          <button
            className="header__mobile-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="header__mobile-nav">
          <ul className="header__mobile-list">
            {navLinks.map((link) => (
              <li key={link.name} className="header__mobile-item">
                <Link
                  href={link.href}
                  className={`header__mobile-link ${isActive(link.href) ? 'header__mobile-link--active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={18} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          
        </nav>
      </div>
    </>
  );
}

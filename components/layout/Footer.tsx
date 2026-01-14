import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          
          {/* Company Info Column */}
          <div className="footer__column footer__column--info">
            <div className="footer__logo-group">
              <img
                src="/images/logo.png" 
                alt="Hamza Engineering"
                className="footer__logo-img"
              />
              <div className="footer__brand-text">
                <h2 className="footer__brand-name">HAMZA ENGINEERING</h2>
                <span className="footer__brand-tagline">Industrial Machinery Solutions</span>
              </div>
            </div>
            
            <p className="footer__brand-desc">
              Leading provider of precision engineering solutions for industrial manufacturing. 
              Specialized in high-quality machining, fabrication, and custom components.
            </p>
            
            <div className="footer__contact-list">
              <a href="tel:+923001234567" className="footer__contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +92 300 1234567
              </a>
              <a href="mailto:info@hamzaengineering.com" className="footer__contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                info@hamzaengineering.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3 className="footer__col-title">QUICK LINKS</h3>
            <ul className="footer__nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services/Products */}
          <div className="footer__column">
            <h3 className="footer__col-title">OUR SERVICES</h3>
            <ul className="footer__nav-list">
              <li><Link href="/products/category/resin-plant">Resin Plants</Link></li>
              <li><Link href="/products/category/polymer-plant">Polymer Plants</Link></li>
              <li><Link href="/products/category/bead-mills">Bead Mills</Link></li>
              <li><Link href="/products/attritor-stirred-ball-mill">Attritor Mill</Link></li>
              <li><Link href="/products/category/dispersers">Dispersers</Link></li>
              <li><Link href="/products/category/vessels-tanks">Vessels & Tanks</Link></li>
            </ul>
          </div>

          {/* Industries Served */}
          <div className="footer__column">
            <h3 className="footer__col-title">INDUSTRIES SERVED</h3>
            <ul className="footer__nav-list">
              <li><Link href="/industries/paint-manufacturing">Paint Manufacturing</Link></li>
              <li><Link href="/industries/powder-coating">Powder Coating</Link></li>
              <li><Link href="/industries/chemical-resins">Chemical Resins</Link></li>
              <li><Link href="/industries/polymers">Polymers</Link></li>
              <li><Link href="/industries">All Industries</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">&copy; {currentYear} <strong>Hamza Engineering</strong>. All rights reserved.</p>
          
          <div className="footer__social-links">
            <a href="#" className="footer__social-item footer__social-item--li" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="footer__social-item footer__social-item--x" aria-label="X">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="footer__social-item footer__social-item--ig" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="footer__social-item footer__social-item--fb" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>

          <div className="footer__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

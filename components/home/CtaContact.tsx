import Link from 'next/link';

export default function CtaContact() {
  return (
    <section className="cta-contact">
      <div className="cta-contact__container">
        {/* Eyebrow - matches Industries section */}
        <span className="cta-contact__eyebrow">Get Started</span>
        
        {/* Title - NO BLUE BAR/LINE like Industries section */}
        <h2 className="cta-contact__title">Ready for Industrial Solutions?</h2>
        
        {/* Subtitle - matches Industries section */}
        <p className="cta-contact__subtitle">
          Our engineering team delivers custom solutions that meet the toughest industrial standards.
        </p>
        
        {/* Action Buttons */}
        <div className="cta-contact__actions">
          <Link href="/contact" className="cta-contact__btn cta-contact__btn--primary">
            Get Your Quote
          </Link>
          <Link href="/services" className="cta-contact__btn cta-contact__btn--secondary">
            Our Services
          </Link>
        </div>
        
        {/* Optional Contact Note */}
        <div className="cta-contact__note">
          📞 Call for immediate consultation: +1 (555) 123-4567
        </div>
      </div>
    </section>
  );
}
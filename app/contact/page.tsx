// app/contact/page.tsx
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact Us | Hamza Engineering',
  description: 'Get in touch with Hamza Engineering for quotes, technical inquiries, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      
      {/* Section Divider - Industries Style */}
      <section className="contact-section-divider">
        <div className="container">
          <span className="contact-section-divider__eyebrow">Get in Touch</span>
          <h2 className="contact-section-divider__heading">
            Contact Us Today
          </h2>
          <p className="contact-section-divider__description">
            Providing specialized industrial solutions across key sectors with precision
            engineering and innovative manufacturing technologies.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-grid__form">
              <ContactForm />
            </div>
            <div className="contact-grid__info">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
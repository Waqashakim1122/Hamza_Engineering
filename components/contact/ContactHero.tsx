// components/ContactHero.tsx
"use client";

export default function ContactHero() {
  return (
    <section className="about-hero" aria-label="Contact Hamza Engineering">
      {/* Content Panel */}
      <div className="about-hero__content">
        <div className="about-hero__content-inner">
          <span className="about-hero__eyebrow">Get In Touch</span>

          <h1 className="about-hero__heading">
            <span className="about-hero__heading-line">Contact</span>
            <span className="about-hero__heading-line">HAMZA</span>
            <span className="about-hero__heading-line">ENGINEERING</span>
          </h1>

          <p className="about-hero__subheading">Industrial Solutions Since 2009</p>

          <div className="about-hero__description">
            <p className="about-hero__description-text">
              Get in touch with our team for quotes, technical inquiries, 
              or partnership opportunities. Our experts are ready to provide 
              customized solutions for your industrial needs.
            </p>
          </div>
        </div>
      </div>

      {/* Image Panel */}
      <div className="about-hero__media" aria-hidden="true">
        <img
          src="https://i.pinimg.com/originals/d9/4e/2b/d94e2b8dd3fa29d2b72b8e4a644c9f3e.jpg"
          alt="Hamza Engineering Manufacturing Facility"
          className="about-hero__image"
        />
        <div className="about-hero__media-overlay" />
      </div>
    </section>
  );
}
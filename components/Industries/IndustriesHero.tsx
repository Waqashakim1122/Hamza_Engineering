"use client";

export default function IndustriesHero() {
  return (
    <section className="industries-hero" aria-label="Industries We Serve">
      {/* Content Panel */}
      <div className="industries-hero__content">
        <div className="industries-hero__content-inner">
          <span className="industries-hero__eyebrow">Our Expertise</span>

          <h1 className="industries-hero__heading">
            <span className="industries-hero__heading-line">Industries</span>
            <span className="industries-hero__heading-line">We</span>
            <span className="industries-hero__heading-line">Serve</span>
          </h1>

          <p className="industries-hero__subheading">Global Industrial Solutions</p>

          <div className="industries-hero__description">
            <p className="industries-hero__description-text">
              Delivering specialized engineering solutions across multiple sectors,
              from chemical processing to pharmaceuticals and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Image Panel */}
      <div className="industries-hero__media" aria-hidden="true">
        <img
          src="https://cdn.open-pr.com/L/7/L712710945_g.jpg"
          alt="Industrial Manufacturing Facility"
          className="industries-hero__image"
        />
        <div className="industries-hero__media-overlay" />
      </div>
    </section>
  );
}
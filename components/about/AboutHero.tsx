"use client";

export default function AboutHero() {
  return (
    <section className="about-hero" aria-label="About Hamza Engineering">
      {/* Content Panel */}
      <div className="about-hero__content">
        <div className="about-hero__content-inner">
          <span className="about-hero__eyebrow">About Our Company</span>

          <h1 className="about-hero__heading">
            <span className="about-hero__heading-line">About</span>
            <span className="about-hero__heading-line">HAMZA</span>
            <span className="about-hero__heading-line">ENGINEERING</span>
          </h1>

          <p className="about-hero__subheading">Industrial Excellence Since 2009</p>

          <div className="about-hero__description">
            <p className="about-hero__description-text">
              Specializing in high-tolerance machined components, custom fabrication,
              and industrial equipment manufacturing for global industries.
            </p>
          </div>
        </div>
      </div>

      {/* Image Panel */}
      <div className="about-hero__media" aria-hidden="true">
        <img
          src="https://www.warehousesteelstructures.com/photo/pl168655919-customized_prefabricated_steel_office_building_with_kfc_door_steel_door_pvc_door.jpg"
          alt="Hamza Engineering Manufacturing Facility"
          className="about-hero__image"
        />
        <div className="about-hero__media-overlay" />
      </div>
    </section>
  );
}
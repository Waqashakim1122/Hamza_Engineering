"use client";

export default function ProductsHero() {
  return (
    <section className="products-hero" aria-label="Hamza Engineering Products">
      {/* Content Panel */}
      <div className="products-hero__content">
        <div className="products-hero__content-inner">
          <span className="products-hero__eyebrow">Industrial Engineering</span>

          <h1 className="products-hero__heading">
            <span className="products-hero__heading-line">OUR</span>
            <span className="products-hero__heading-line">PRECISION</span>
            <span className="products-hero__heading-line">PRODUCTS</span>
          </h1>

          <p className="products-hero__subheading">Advanced Engineering Solutions</p>

          <div className="products-hero__description">
            <p className="products-hero__description-text">
              Engineered components built with advanced CNC machining, fabrication, 
              and quality control for demanding industrial applications.
            </p>
          </div>
        </div>
      </div>

      {/* Image Panel */}
      <div className="products-hero__media" aria-hidden="true">
        <img
          src="https://www.vma-getzmann.com/fileadmin/user_upload/langing-pages/dissolver.jpg"
          alt="Hamza Engineering Manufacturing Products"
          className="products-hero__image"
        />
        <div className="products-hero__media-overlay" />
      </div>
    </section>
  );
}
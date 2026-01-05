import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      {/* Content Panel */}
      <div className="hero__content">
        <div className="hero__content-inner">
          <span className="hero__eyebrow">Engineering Excellence</span>

          <h1 className="hero__heading">
            <span className="hero__heading-line">Precision</span>
            <span className="hero__heading-line">Engineering</span>
          </h1>

          <p className="hero__subheading">Industrial Excellence</p>

          <div className="hero__description">
            <p className="hero__description-text">
              High-tolerance machined components and turnkey solutions for
              global industries.
            </p>
          </div>

          <Link href="/contact" className="hero__cta">
            <span>Request Quote</span>
            <ArrowRight className="hero__cta-icon" size={18} />
          </Link>
        </div>
      </div>

      {/* Video Panel */}
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-tank.mp4" type="video/mp4" />
        </video>
        <div className="hero__media-overlay" />
      </div>
    </section>
  );
}
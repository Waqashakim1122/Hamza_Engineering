"use client";

import { CheckCircle } from 'lucide-react';

export default function CompanyProfile() {
  const keyPoints = [
    "High-tolerance machined components and turnkey solutions",
    "Specialized in resin plants, polymer processing, and industrial equipment",
    "Serving paints, coatings, chemical resins, and manufacturing sectors",
    "Global reach with precision engineering and quality assurance"
  ];

  return (
    <section className="company-profile-section">
      <div className="company-profile__container">
        {/* Main Title at Top */}
        <div className="company-profile__main-title">
          <span className="company-profile__eyebrow">About Us</span>
          <h2 className="company-profile__title">Company Profile</h2>
        </div>

        {/* Two Column Content */}
        <div className="company-profile__content-grid">
          {/* Left Column - Text */}
          <div className="company-profile__text">
            <div className="company-profile__description">
              <p>
                <strong>Hamza Engineering</strong> is a premier industrial engineering firm 
                specializing in precision machining, custom fabrication, and industrial 
                equipment manufacturing. Since our founding, we've delivered high-tolerance 
                machined components and turnkey solutions for global industries.
              </p>
              
              <p>
                Our expertise spans across multiple sectors including paints & coatings, 
                chemical resins, polymers, powder coating, and various manufacturing 
                applications. We provide specialized industrial solutions with precision 
                engineering and innovative manufacturing technologies.
              </p>
              
              <p>
                With state-of-the-art facilities and a team of skilled engineers, 
                we ensure every project meets the highest standards of quality, 
                reliability, and performance.
              </p>
            </div>

            {/* Key Points Grid */}
            <div className="company-profile__points-grid">
              {keyPoints.map((point, index) => (
                <div key={index} className="point-item">
                  <CheckCircle size={18} className="point-icon" />
                  <p className="point-text">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Half Size Video Card */}
          <div className="company-profile__video-card">
            <div className="video-placeholder">
              <div className="video-placeholder__content">
                <div className="video-placeholder__badge">
                  VIDEO COMING SOON
                </div>
                <div className="video-placeholder__main-text">
                  Facility Tour &<br />
                  Manufacturing Process
                </div>
                <div className="video-placeholder__sub-text">
                  Showcasing our precision engineering capabilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
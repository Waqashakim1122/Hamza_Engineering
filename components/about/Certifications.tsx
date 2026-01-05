export default function Certifications() {
  const certifications = [
    { name: 'ISO 9001:2015', alt: 'ISO 9001:2015 Quality Management Certified', src: '/images/certifications/iso-9001.png' },
    { name: 'AS9100', alt: 'AS9100 Aerospace Quality Certified', src: '/images/certifications/as9100.png' },
    { name: 'ISO 14001', alt: 'ISO 14001 Environmental Management Certified', src: '/images/certifications/iso-14001.png' },
    // Add more: { name: 'OHSAS 18001', alt: '...', src: '/images/certifications/ohsas.png' }
  ];

  return (
    <section className="certifications">
      <div className="certifications__container">
        <h2 className="section-title">Quality & Compliance</h2>
        <div className="certifications__content">
          <p className="certifications__text">
            We operate under a certified ISO 9001:2015 quality management system, 
            with rigorous process controls and continuous improvement at the core of our operations.
          </p>
          <div className="certifications__badges">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-badge">
                <img src={cert.src} alt={cert.alt} className="cert-badge__img" />
                <span className="cert-badge__name">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
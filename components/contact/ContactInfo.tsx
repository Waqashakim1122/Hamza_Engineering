// components/contact/ContactInfo.tsx
export default function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: 'Address',
      content: ['Plot No. 123, Industrial Area Phase II', 'Lahore, Punjab, Pakistan'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Phone',
      content: ['+92 300 1234567', '+92 321 9876543'],
      link: 'tel:+923001234567',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      content: ['info@hamzaengineering.com', 'sales@hamzaengineering.com'],
      link: 'mailto:info@hamzaengineering.com',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Working Hours',
      content: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="contact-info">
      <div className="contact-info__header">
        <h2 className="contact-info__title">Get in Touch</h2>
        <p className="contact-info__description">
          We're here to help and answer any questions you might have. We look forward to hearing from you.
        </p>
      </div>

      <div className="contact-details">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-detail">
            <div className="contact-detail__icon">{detail.icon}</div>
            <div className="contact-detail__content">
              <h3 className="contact-detail__title">{detail.title}</h3>
              {detail.link ? (
                <a href={detail.link} className="contact-detail__link">
                  {detail.content.map((line, i) => (
                    <span key={i} className="contact-detail__line">{line}</span>
                  ))}
                </a>
              ) : (
                detail.content.map((line, i) => (
                  <p key={i} className="contact-detail__text">{line}</p>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <div className="map-placeholder">
          <div className="map-overlay">
            <div className="map-content">
              <h3 className="map-title">Our Location</h3>
              <p className="map-description">
                Visit our manufacturing facility in Lahore's industrial area
              </p>
              <a 
                href="https://goo.gl/maps/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
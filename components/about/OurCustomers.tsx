"use client";


export default function OurCustomers() {
  const customers = [
    {
      id: 1,
      name: "Diamond Paints",
      website: "https://www.diamondpaints.com/",
      logo: "/images/Our Customers/diamondpaints.avif",
      brand: "diamond",
      color: "#135fa8"
    },
    {
      id: 2,
      name: "Champion Paints",
      website: "https://championpaints.com/",
      logo: "/images/Our Customers/championpaints.jpg",
      brand: "champion",
      color: "#b91c1c"
    },
    {
      id: 3,
      name: "Nelson Paints",
      website: "https://nelsonpaints.com/",
      logo: "/images/Our Customers/nelsonpaints.png",
      brand: "nelson",
      color: "#6d28d9"
    },
  ];

  // Double the array for seamless infinite loop
  const duplicatedCustomers = [...customers, ...customers];

  return (
    <section className="our-customers-section">
      <div className="our-customers__container">
        {/* Header */}
        <div className="our-customers__header">
          <span className="our-customers__eyebrow">Trusted Partners</span>
          <h2 className="our-customers__title">Our Customers</h2>
          <p className="our-customers__subtitle">
            We proudly Services with leading paint and coatings manufacturers.
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="customers-marquee">
          <div className="customers-track">
            {duplicatedCustomers.map((customer, index) => (
              <a
                key={`${customer.id}-${index}`}
                href={customer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="customer-card"
                style={{ "--brand-color": customer.color } as React.CSSProperties}
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="customer-logo"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="customers-divider">
          <span className="divider-text">
            And many more satisfied clients worldwide
          </span>
        </div>
      </div>
    </section>
  );
}

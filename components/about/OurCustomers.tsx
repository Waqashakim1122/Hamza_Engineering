// components/about/OurCustomers.tsx
"use client";

import Link from 'next/link';

export default function OurCustomers() {
  const customers = [
    {
      id: 1,
      name: "Diamond Paints",
      slug: "diamond-paints",  // This will be used for the internal link
      website: "https://www.diamondpaints.com/",
      logo: "/images/Our Customers/diamondpaints.avif",
      brand: "diamond",
      color: "#135fa8"
    },
    {
      id: 2,
      name: "Champion Paints",
      slug: "champion-paints",
      website: "https://championpaints.com/",
      logo: "/images/Our Customers/championpaints.jpg",
      brand: "champion",
      color: "#b91c1c"
    },
    {
      id: 3,
      name: "Nelson Paints",
      slug: "nelson-paints",
      website: "https://nelsonpaints.com/",
      logo: "/images/Our Customers/nelsonpaints.png",
      brand: "nelson",
      color: "#6d28d9"
    },
    {
      id: 4,
      name: "Corona Paints",
      slug: "corona-paints",
      website: "https://coronapaints.com.pk/",
      logo: "/images/Our Customers/coronapaints.png",
      brand: "corona",
      color: "#059669"
    },
    {
      id: 5,
      name: "Master Paints",
      slug: "master-paints",
      website: "https://masterpaints.com/",
      logo: "/images/Our Customers/theme-logo_25k1-9a.png",
      brand: "master",
      color: "#960583"
    },
  ];

  // Double the array for seamless infinite loop
  const duplicatedCustomers = [...customers, ...customers];

  return (
    <section className="our-customers-section" id="our-customers">
      <div className="our-customers__container">
        {/* Header */}
        <div className="our-customers__header">
          <span className="our-customers__eyebrow">Trusted Partners</span>
          <h2 className="our-customers__title">Our Customers</h2>
          <p className="our-customers__subtitle">
            We proudly partner with leading paint and coatings manufacturers. Click any logo to learn more about our partnership.
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="customers-marquee">
          <div className="customers-track">
            {duplicatedCustomers.map((customer, index) => (
              <Link
                key={`${customer.id}-${index}`}
                href={`/customers/${customer.slug}`}
                className="customer-card"
                style={{ "--brand-color": customer.color } as React.CSSProperties}
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="customer-logo"
                />
              </Link>
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

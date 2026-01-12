// components/Industries.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { industriesData, IndustryType } from '@/data/industriesData';

export default function Industries() {
  // Filter to show only these 4 industries (excluding 'paints-and-coatings')
  const selectedIndustries = [
    'paint-manufacturing',
    'powder-coating',
    'chemical-resins',
    'polymers'
  ];

  // Get industries in the specified order, with proper type handling
  const filteredIndustries = selectedIndustries
    .map(slug => industriesData.find(ind => ind.slug === slug))
    .filter((industry): industry is IndustryType => industry !== undefined);

  return (
    <section className="industries">
      <div className="industries__container">
        <div className="section-header">
          <span className="section-eyebrow">Industrial Sectors</span>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Providing specialized industrial solutions across key sectors with precision engineering 
            and innovative manufacturing technologies.
          </p>
        </div>
        
        <div className="industries__grid">
          {filteredIndustries.map((industry) => (
            <Link
              href={`/industries/${industry.slug}`}
              key={industry.id}
              className="industries__card-link"
            >
              <div className="industries__card">
                <div className="industries__image-wrapper">
                  <Image
                    src={industry.image}
                    alt={`${industry.name} industry`}
                    width={400}
                    height={400}
                    className="industries__image"
                    priority={industry.id <= 3}
                  />
                </div>
                <h3 className="industries__name">{industry.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

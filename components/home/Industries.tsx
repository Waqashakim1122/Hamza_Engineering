// components/Industries.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { industriesData } from '@/data/industriesData';

export default function Industries() {
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
          {industriesData.map((industry) => (
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
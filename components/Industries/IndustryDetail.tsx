// components/industries/IndustryDetail.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { industriesData } from '@/data/industriesData';

interface IndustryDetailProps {
  industrySlug: string;
}

export default function IndustryDetail({ industrySlug }: IndustryDetailProps) {
  const industry = industriesData.find(ind => ind.slug === industrySlug);

  if (!industry) {
    return (
      <div className="industry-not-found">
        <h2>Industry Not Found</h2>
        <Link href="/industries" className="back-button">
          ← Back to Industries
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-industry-page">
      {/* Back Button */}
      <div className="page-nav">
        <Link href="/industries" className="back-link">
          ← Back to Industries
        </Link>
      </div>

      {/* Main Heading */}
      <header className="blog-header">
        <div className="section-eyebrow" style={{
          display: 'block',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: '#3b82f6',
          fontWeight: '700',
          marginBottom: '12px'
        }}>
          INDUSTRY DEEP DIVE
        </div>
        <h1 className="blog-title">{industry.name}</h1>
        <p className="blog-excerpt">{industry.description}</p>
      </header>

      {/* Featured Image */}
      <div className="featured-image">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          priority
          className="blog-main-image"
        />
      </div>

      {/* Blog Content */}
      <article className="blog-content">
        <div className="content-wrapper">
          {/* Introduction */}
          <div className="content-section">
            <p className="blog-text">{industry.content.introduction}</p>
          </div>

          {/* Categories Section */}
          <div className="content-section">
            <p className="blog-text">
              {industry.name} can be categorized in several ways:
            </p>
            
            <div className="categories-section">
              {industry.categories.map((category, index) => (
                <div key={index} className="category-item">
                  <p className="category-label">{category.title}:</p>
                  <ul className="category-list">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Section */}
          <div className="content-section">
            <p className="blog-text">{industry.content.expertise}</p>
          </div>

          {/* Equipment Section */}
          <div className="content-section">
            <p className="blog-text">
              We provide a range of equipment and solutions for {industry.name} production:
            </p>
            
            <div className="equipment-section">
              {industry.content.equipment.map((item, index) => (
                <div key={index} className="equipment-item">
                  <p className="equipment-description">
                    <span className="equipment-name">{item.title}:</span> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Industries */}
      <section className="blog-related">
        <h2 className="related-heading">Related Industries</h2>
        <div className="related-grid">
          {industriesData
            .filter(ind => ind.id !== industry.id)
            .slice(0, 6) // Show more since cards are small
            .map(related => (
              <Link
                key={related.id}
                href={`/industries/${related.slug}`}
                className="related-post"
              >
                <div className="related-image">
                  <Image
                    src={related.image}
                    alt={related.name}
                    width={180}
                    height={100}
                    className="related-img"
                  />
                </div>
                <div className="related-info">
                  <h3 className="related-title">{related.name}</h3>
                  <span className="read-more">View →</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
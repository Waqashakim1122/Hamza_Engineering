// web/components/products/ProductDetail.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, products, productCategories } from '@/data/productsData';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'applications'>('specs');
  const [selectedImage, setSelectedImage] = useState(0);

  const category = productCategories.find(cat => cat.slug === product.category);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div className="product-detail">
      {/* Breadcrumb */}
      <nav className="product-breadcrumb">
        <div className="breadcrumb-container">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={`/products#${product.category}`} className="breadcrumb-category">
            {category?.name}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>
      </nav>

      {/* Main Section */}
      <section className="product-main">
        <div className="product-main-container">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="gallery-main-image">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="main-product-image"
                onError={(e) => {
                  e.currentTarget.src = '/images/products/placeholder.jpg';
                }}
              />
            </div>

            {images.length > 1 && (
              <div className="gallery-thumbnails">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail-button ${selectedImage === index ? 'thumbnail-active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1} for ${product.name}`}
                      fill
                      sizes="120px"
                      className="thumbnail-image"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-category-tag">
              {category?.name}
            </div>

            <h1 className="product-name">{product.name}</h1>

            <p className="product-full-description">{product.fullDescription}</p>

            <div className="product-cta-buttons">
              <Link href="/contact" className="cta-primary-button">
                Request a Quote
              </Link>
              <button className="cta-secondary-button">
                Download Brochure
              </button>
            </div>

            {/* Quick Specs */}
            <div className="quick-specifications">
              <h3 className="quick-specs-heading">Key Specifications</h3>
              <ul className="quick-specs-list">
                {Object.entries(product.specifications).slice(0, 6).map(([key, value]) => (
                  <li key={key} className="spec-item">
                    <span className="spec-label">{key}:</span>
                    <span className="spec-value">
                      {Array.isArray(value) ? value.join(', ') : value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="product-tabs-section">
        <div className="tabs-container">
          <div className="tabs-navigation">
            <button
              className={`tab-nav-item ${activeTab === 'specs' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Technical Specifications
            </button>
            <button
              className={`tab-nav-item ${activeTab === 'features' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features & Benefits
            </button>
            <button
              className={`tab-nav-item ${activeTab === 'applications' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>
          </div>

          <div className="tab-content-panel">
            {activeTab === 'specs' && (
              <div className="specs-content">
                <table className="specifications-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <th className="spec-key">{key}</th>
                        <td className="spec-value">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="feature-list-item">
                      {feature}
                    </li>
                  ))}
                </ul>

                {product.workingPrinciple && (
                  <div className="working-principle-section">
                    <h3 className="principle-title">Working Principle</h3>
                    <p className="principle-description">{product.workingPrinciple}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="applications-content">
                <ul className="applications-list">
                  {product.applications.map((app, index) => (
                    <li key={index} className="application-list-item">
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="related-container">
            <h2 className="related-heading">Related Products</h2>
            <div className="related-products-grid">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="related-product-card">
                  <div className="related-product-image">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="related-image"
                    />
                  </div>
                  <div className="related-product-info">
                    <h3 className="related-product-title">{p.name}</h3>
                    <p className="related-product-desc">{p.shortDescription}</p>
                    <span className="view-details-link">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA – Professional with Yellow Button */}
      <section className="product-final-cta">
        <div className="cta-inner">
          <h2 className="cta-headline">
            Need This Solution for Your Project?
          </h2>
          <p className="cta-subtext">
            Contact our engineering team for customized configurations, pricing, and technical consultation.
          </p>
          <Link href="/contact" className="cta-action-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
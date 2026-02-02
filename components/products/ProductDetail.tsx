// web/components/products/ProductDetail.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product, products, productCategories } from '@/data/productsData';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'applications'>('specs');
  const [selectedImage, setSelectedImage] = useState(0);

  const category = productCategories.find(cat => cat.slug === product.category);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div className="product-detail">
      {/* SIMPLE BREADCRUMB - Exactly like Category Page */}
      <nav className="product-breadcrumb">
        <Link href="/products">Products</Link>
        <span className="breadcrumb-separator">/</span>
        {category && (
          <>
            <Link href={`/products/category/${product.category}`}>
              {category.name}
            </Link>
            <span className="breadcrumb-separator">/</span>
          </>
        )}
        <span className="breadcrumb-current">{product.name}</span>
      </nav>

      {/* Main Product Section */}
      <section className="product-main">
        <div className="product-container">
          {/* Left - Image Gallery */}
          <div className="product-gallery-section">
            <div className="main-image-wrapper">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="main-image"
                onError={(e) => {
                  e.currentTarget.src = '/images/products/placeholder.jpg';
                }}
              />
            </div>

            {images.length > 1 && (
              <div className="thumbnails-wrapper">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail-btn ${selectedImage === index ? 'active-thumbnail' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="100px"
                      className="thumb-image"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right - Product Information */}
          <div className="product-info-section">
            <div className="category-badge">{category?.name}</div>

            <h1 className="product-heading">{product.name}</h1>

            <p className="product-desc">{product.fullDescription}</p>

            {/* CTA Buttons */}
            <div className="cta-buttons-group">
              <Link href="/contact" className="btn-request-quote">
                Request a Quote
              </Link>
            </div>

            {/* Quick Specifications */}
            <div className="quick-specs-box">
              <h3 className="specs-box-title">Key Specifications</h3>
              <ul className="specs-list">
                {Object.entries(product.specifications).slice(0, 6).map(([key, value]) => (
                  <li key={key} className="specs-list-item">
                    <span className="specs-key">{key}:</span>
                    <span className="specs-val">
                      {Array.isArray(value) ? value.join(', ') : value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="details-tabs-section">
        <div className="tabs-wrapper">
          <div className="tab-navigation">
            <button
              className={`nav-tab ${activeTab === 'specs' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Technical Specifications
            </button>
            <button
              className={`nav-tab ${activeTab === 'features' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features & Benefits
            </button>
            <button
              className={`nav-tab ${activeTab === 'applications' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              Applications
            </button>
          </div>

          <div className="tab-content-area">
            {activeTab === 'specs' && (
              <div className="tab-panel">
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <th className="table-header">{key}</th>
                        <td className="table-data">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-panel">
                <ul className="features-listing">
                  {product.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>

                {product.workingPrinciple && (
                  <div className="working-principle-box">
                    <h3 className="principle-title">Working Principle</h3>
                    <p className="principle-desc">{product.workingPrinciple}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="tab-panel">
                <ul className="applications-listing">
                  {product.applications.map((app, index) => (
                    <li key={index} className="application-item">
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
        <section className="related-products">
          <div className="related-wrapper">
            <h2 className="related-title">Related Products</h2>
            <div className="related-grid">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="related-product-item">
                  <div className="related-img-box">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="related-product-img"
                    />
                  </div>
                  <div className="related-info">
                    <h3 className="related-name">{p.name}</h3>
                    <p className="related-description">{p.shortDescription}</p>
                    <span className="view-link">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
       {/* Back to Categories - Exactly like Category Page */}
      <div className="category-types__back">
        <Link href={`/products/category/${product.category}`} className="back-to-categories">
          ← Back to {category?.name || 'Category'}
        </Link>
      </div>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-wrapper">
          <h2 className="cta-heading">Need This Solution for Your Project?</h2>
          <p className="cta-description">
            Contact our engineering team for customized configurations, pricing, and technical consultation.
          </p>
          <Link href="/contact" className="cta-btn">
            Get in Touch
          </Link>
        </div>
      </section>

     
    </div>
  );
}

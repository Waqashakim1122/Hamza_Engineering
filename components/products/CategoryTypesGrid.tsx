// web/components/products/CategoryTypesGrid.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product, ProductCategory } from '@/data/productsData';

interface CategoryTypesGridProps {
  category: ProductCategory;
  products: Product[];
  mainCategories: ProductCategory[];
}

export default function CategoryTypesGrid({ 
  category, 
  products,
  mainCategories 
}: CategoryTypesGridProps) {
  
  return (
    <section className="category-types-section">
      <div className="category-types__container">
        {/* Breadcrumb */}
        <nav className="category-breadcrumb">
          <Link href="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{category.name}</span>
        </nav>
        
        {/* Category Header */}
        <header className="category-types__header">
          <h1 className="category-types__title">{category.name}</h1>
          <p className="category-types__description">{category.description}</p>
          <div className="category-types__meta">
            <span className="category-types__count">
              {products.length} Models Available
            </span>
            <span className="category-types__icon">{category.icon}</span>
          </div>
        </header>

        {/* Types Grid */}
        <div className="category-types__grid">
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="type-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href={`/products/${product.slug}`} className="type-card__link">
                <div className="type-card__image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="type-card__image"
                  />
                </div>

                <div className="type-card__info">
                  <h3 className="type-card__name">{product.name}</h3>
                  <p className="type-card__description">
                    {product.shortDescription}
                  </p>
                  <span className="type-card__action">
                    View Details →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Back to Categories */}
        <div className="category-types__back">
          <Link href="/products" className="back-to-categories">
            ← Back to All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
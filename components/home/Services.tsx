'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProductsByCategory } from '@/data/productsData';

const coreProducts = [
  { 
    id: 1, 
    name: 'Resin Plants', 
    img: '/images/core products/Resin Plants.png', 
    categorySlug: 'resin-plant' // Category slug
  },
  { 
    id: 2, 
    name: 'Polymer Processing Plants', 
    img: '/images/core products/Polymer Processing Plants.png', 
    categorySlug: 'polymer-plant' // Category slug
  },
  { 
    id: 3, 
    name: 'Bead Mills', 
    img: '/images/core products/bead-mills.webp', 
    categorySlug: 'bead-mills' // Category slug
  },
  { 
    id: 4, 
    name: 'Dispersers', 
    img: '/images/core products/high-speed-disperser.webp', 
    categorySlug: 'dispersers' // Category slug
  },
  { 
    id: 5, 
    name: 'Storage Tanks', 
    img: '/images/core products/movable-tank.webp', 
    categorySlug: 'vessels-tanks' // Category slug
  },
];

export default function CoreProducts() {
  return (
    <section className="core-products">
      <div className="core-products__container">
        <header className="core-products__header">
          <h2 className="core-products__title">Core Products</h2>
        </header>

        <div className="core-products__grid">
          {coreProducts.map((product) => {
            // Get products in this category
            const categoryProducts = getProductsByCategory(product.categorySlug);
            
            // If category has multiple products, link to category page
            // If only one product, link directly to that product detail
            const productLink = categoryProducts.length > 1 
              ? `/products/category/${product.categorySlug}`  // Multiple products → Category page
              : `/products/${categoryProducts[0]?.slug}`;      // Single product → Detail page
            
            return (
              <motion.article
                key={product.id}
                className="product-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Link href={productLink} className="product-item__link">
                  <div className="product-image-card">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="product-image"
                      priority={product.id <= 3}
                    />
                    <div className="product-overlay" />
                  </div>

                  <div className="product-info">
                    <h3 className="product-name-label">{product.name}</h3>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

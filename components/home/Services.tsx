'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Resin Plants', img: '/images/core products/Resin Plants.png', link: '/products/resin' },
  { id: 2, name: 'Polymer Processing Plants', img: '/images/core products/Polymer Processing Plants.png', link: '/products/polymer' },
  { id: 3, name: 'Bead Mills', img: '/images/core products/bead-mills.webp', link: '/products/bead-mills' },
  { id: 4, name: 'Dispersers', img: '/images/core products/high-speed-disperser.webp', link: '/products/dispersers' },
  { id: 5, name: 'Storage Tanks', img: '/images/core products/movable-tank.webp', link: '/products/tanks' },
];

export default function CoreProducts() {
  return (
    <section className="core-products">
      <div className="core-products__container">
        <header className="core-products__header">
          <span className="core-products__eyebrow">Industrial Engineering</span>
          <h2 className="core-products__title">Core Products</h2>
        </header>

        <div className="core-products__grid">
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="product-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href={product.link} className="product-item__link">
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
          ))}
        </div>
      </div>
    </section>
  );
}
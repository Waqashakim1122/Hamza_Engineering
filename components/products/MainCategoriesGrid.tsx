// web/components/products/MainCategoriesGrid.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  getMainCategoriesWithCount,
  getProductsByCategory  // ADD THIS IMPORT
} from '@/data/productsData';

export default function MainCategoriesGrid() {
  const mainCategories = getMainCategoriesWithCount();
  
  return (
    <section className="main-categories-section">
      <div className="main-categories__container">
        <header className="main-categories__header">
          <span className="main-categories__eyebrow">Product Range</span>
          <h2 className="main-categories__title">Our Main Product Lines</h2>
          <p className="main-categories__subtitle">
            Explore our complete range of industrial equipment and machinery
          </p>
        </header>

        <div className="main-categories__grid">
          {mainCategories.map((category) => {
            const categoryProducts = getProductsByCategory(category.slug); // Use the function
            
            return (
              <motion.article
                key={category.id}
                className="main-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Link 
                  href={
                    category.isMultiProduct 
                      ? `/products/category/${category.slug}` 
                      : `/products/${categoryProducts[0]?.slug}`
                  } 
                  className="main-category-card__link"
                >
                  <div className="main-category-card__image-container">
                    <Image
                      src={category.thumbnailImage}
                      alt={category.name}
                      width={400}
                      height={400}
                      className="main-category-card__image"
                      priority={true}
                    />
                    
                    {category.isMultiProduct && (
                      <div className="main-category-card__badge">
                        {category.productCount} Models
                      </div>
                    )}
                  </div>

                  <div className="main-category-card__info">
                    <h3 className="main-category-card__name">{category.name}</h3>
                    <p className="main-category-card__description">
                      {category.description}
                    </p>
                    
                    {category.isMultiProduct ? (
                      <span className="main-category-card__action">
                        View {category.productCount} Models →
                      </span>
                    ) : (
                      <span className="main-category-card__action">
                        View Details →
                      </span>
                    )}
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
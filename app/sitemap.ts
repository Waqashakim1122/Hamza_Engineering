import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ========== MAIN PAGES ==========
    {
      url: 'https://www.hamzaeng.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.hamzaeng.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ========== PRODUCTS MAIN ==========
    {
      url: 'https://www.hamzaeng.com/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ========== RESIN PLANT ==========
    {
      url: 'https://www.hamzaeng.com/products/category/resin-plant',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/products/resin-plant-lab-5kg',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/resin-plant-lab-20kg',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/resin-plant-small-batch-testing-200kg',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/resin-plant-3ton',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/resin-plant-6ton',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ========== POLYMER PLANT ==========
    {
      url: 'https://www.hamzaeng.com/products/category/polymer-plant',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/products/polymer-plant-lab-5ltr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/polymer-plant-lab-30ltr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/polymer-plant-lab-200ltr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/polymer-plant-2.5ton',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/polymer-plant-5Ton',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ========== BEAD MILLS ==========
    {
      url: 'https://www.hamzaeng.com/products/category/bead-mills',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-1LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-2LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-5LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-15LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-30LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-60LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/horizontal-bead-mill-150LTR',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/vertical-bead-mill',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ========== OTHER PRODUCTS ==========
    {
      url: 'https://www.hamzaeng.com/products/attritor-stirred-ball-mill',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/category/dispersers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/products/fdh-high-speed-disperser',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/vacuum-dispersing-machine',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/lab-dispersing-machine',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/category/mixers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/products/floor-standing-planetary-mixer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/category/vessels-tanks',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/products/movable-tank',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/products/storage-tank',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ========== INDUSTRIES ==========
    {
      url: 'https://www.hamzaeng.com/industries',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.hamzaeng.com/industries/paint-manufacturing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/industries/powder-coating',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/industries/chemical-resins',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.hamzaeng.com/industries/polymers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
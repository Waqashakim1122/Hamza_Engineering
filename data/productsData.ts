// web/data/productsData.ts
// Complete product catalog with all industrial equipment

export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  specifications: Record<string, string | string[]>;
  features: string[];
  applications: string[];
  workingPrinciple?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'resin-plant',
    name: 'Resin Plant',
    slug: 'resin-plant',
    description: 'Complete resin synthesis and processing systems with oil heating',
    icon: ''
  },
  {
    id: 'polymer-plant',
    name: 'Polymer Processing Plant',
    slug: 'polymer-plant',
    description: 'Advanced polymer manufacturing systems',
    icon: ''
  },
  {
    id: 'bead-mills',
    name: 'Bead Mills',
    slug: 'bead-mills',
    description: 'High-efficiency grinding and dispersion equipment',
    icon: ''
  },
  {
    id: 'attritor-mill',
    name: 'Attritor Stirred Ball Mill',
    slug: 'attritor-mill',
    description: 'Versatile stirred ball mill for fine grinding and dispersion',
    icon: ''
  },
  {
    id: 'dispersers',
    name: 'Dispersers',
    slug: 'dispersers',
    description: 'High-speed mixing and dispersing machines',
    icon: ''
  },
  {
    id: 'mixers',
    name: 'Industrial Mixers',
    slug: 'mixers',
    description: 'Heavy-duty mixing equipment for various industrial applications',
    icon: ''
  },
  {
    id: 'vessels-tanks',
    name: 'Vessels & Tanks',
    slug: 'vessels-tanks',
    description: 'Storage and movable tank solutions',
    icon: ''
  }
];

export const products: Product[] = [
  // 1. Resin Plant
  {
    id: 'resin-plant-001',
    name: 'Resin Plant Complete System',
    category: 'resin-plant',
    slug: 'resin-plant-complete-system',
    shortDescription: 'Complete resin synthesis and processing system with oil heating technology',
    fullDescription: 'Specialized equipment for resin synthesis, processing, and handling. Designed for epoxy, polyester, phenolic, or alkyd resins manufacturing.',
    image: '/images/products/resin-plant.jpg',
    specifications: {
      'Heating System': 'Oil heating (thermic fluid)',
      'Product Contact Material': 'SS316',
      'Non-Contact Material': 'SS304',
      'Control System': 'PLC-based control panel',
      'Safety Features': 'Safety valves, rupture discs, temperature/pressure sensors'
    },
    features: [
      'Oil heating (thermic fluid) system for precise temperature control',
      'All product-contact equipment in SS316',
      'Non-product-contact vessels in SS304',
      'Advanced safety systems with PLC control',
      'Condensers and distillation units for solvent recovery',
      'Complete filtration system for product quality'
    ],
    applications: [
      'Epoxy resin manufacturing',
      'Polyester resin production',
      'Phenolic resin synthesis',
      'Alkyd resin processing',
      'Industrial resin manufacturing'
    ]
  },

  // 2. Polymer Plant
  {
    id: 'polymer-plant-001',
    name: 'Polymer Processing Plant',
    category: 'polymer-plant',
    slug: 'polymer-processing-plant',
    shortDescription: 'Complete batch-operated polymer manufacturing system',
    fullDescription: 'Advanced polymer processing plant with jacketed reactors and steam heating for controlled polymerization.',
    image: '/images/products/polymer-plant.jpg',
    specifications: {
      'Process Type': 'Batch-operated',
      'Heating Method': 'Steam heating system',
      'Control': 'PLC-based with safety features',
      'Material': 'Stainless Steel (product contact)',
      'Safety': 'High temperature alarms, pressure relief valves, emergency shutdown'
    },
    features: [
      'Controlled polymerization process',
      'Steam heating for precise temperature regulation',
      'High-quality filtration system',
      'Real-time process monitoring',
      'Safety systems with emergency shutdown',
      'Complete automation with PLC control'
    ],
    applications: [
      'Polymer synthesis',
      'Resin manufacturing',
      'Chemical processing',
      'Pharmaceutical production',
      'Industrial polymer production'
    ]
  },

  // 3. Bead Mill
  {
    id: 'bead-mill-centex',
    name: 'Bead Mill',
    category: 'bead-mills',
    slug: 'bead-mill',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/centex-bead-mill.jpg',
    specifications: {
      'Technology': 'EcoMizer agitator disks with reverse feeding',
      'Bead Distribution': 'Homogenous throughout chamber',
      'Screen Surface': 'Large surface area for efficient separation',
      'Energy Efficiency': 'Lower specific energy requirement',
      'Temperature Control': 'Lower pressure reduces temperature issues',
      'Automation': 'Sophisticated control options available'
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Reverse-feeding design creates homogenous bead distribution',
      'No beads near screen enabling use of smaller grinding media',
      'Large screen surface for higher throughput',
      'Narrow particle size distribution',
      'No compression of grinding beads',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ],
    workingPrinciple: 'The unique EcoMizer agitator disks with reverse feeding create a homogenous bead distribution throughout the grinding chamber. The smart design ensures no beads are near the screen, enabling smaller bead usage for more efficient grinding. The large screen surface maintains lower pressure inside the chamber, reducing temperature issues and enabling higher throughput.'
  },

  // 4. Vertical Bead Mill
  {
    id: 'bead-mill-vertical',
    name: 'Vertical Bead Mill',
    category: 'bead-mills',
    slug: 'vertical-bead-mill',
    shortDescription: 'High-efficiency vertical bead mill with super high speed capability',
    fullDescription: 'Simple operation with easy maintenance. All maintenance can be completed quickly. Very easy to add grinding media from feeding hole.',
    image: '/images/products/vertical-bead-mill.jpg',
    specifications: {
      'Speed Range': '0-8000 rpm (Super high speed)',
      'Grinding Media': '0.03mm - 0.1mm',
      'Separation': 'Dynamic separation device, no screen design',
      'Seal Type': 'Two side mechanical seal',
      'Chamber Material': 'Silicon carbide',
      'Drive': 'Variable speed through VFD'
    },
    features: [
      'Super high speed: 0-8000rpm',
      'Dynamic separation device with no screen design',
      'Smaller grinding medium capability (0.03-0.1mm)',
      'Silicon carbide inner chamber for excellent cooling',
      'Two side mechanical seal',
      'Multiple grinding zone systems',
      'Closed and sealed system',
      'Precise temperature control'
    ],
    applications: [
      'Coating industry',
      'Cosmetic manufacturing',
      'Fine chemical processing',
      'Pharmaceutical production'
    ]
  },

  // 5. Attritor Stirred Ball Mill
  {
    id: 'attritor-ball-mill',
    name: 'Attritor Stirred Ball Mill',
    category: 'attritor-mill',
    slug: 'attritor-stirred-ball-mill',
    shortDescription: 'Versatile stirred ball mill for fine grinding and dispersion',
    fullDescription: 'Simple and effective method of grinding and dispersing fine and homogenous material. Ideal for pilot plant and scale up with repeatable results.',
    image: '/images/products/attritor-mill.jpg',
    specifications: {
      'Operation': 'Wet or dry',
      'Speed Range': 'o to 100 RPM',
      'Media Size': '1/8" to 3/8"',
      'Atmosphere': 'Can introduce inert atmospheres',
      'Temperature': 'Controlled temperature operation'
    },
    features: [
      'Much faster than conventional mills',
      'Wet or dry operation capability',
      'Controlled temperature and atmosphere',
      'Variable grinding speed',
      'No premixing necessary',
      'Ingredients can be added during grinding',
      'Stainless steel construction'
    ],
    applications: [
      'Fine grinding',
      'Pilot plant testing',
      'Fine material dispersion',
      'For Paint Coating and Ink industry'
    ]
  },

  // 6. High Speed Disperser
  {
    id: 'disperser-fdh',
    name: 'High Speed Disperser',
    category: 'dispersers',
    slug: 'fdh-high-speed-disperser',
    shortDescription: 'High-speed disperser for chemical and coating industries',
    fullDescription: 'Sawtooth-shaped dispersing impeller intensely stirs paste at high speed for thorough material processing.',
    image: '/images/products/fdh-disperser.jpg',
    specifications: {
      'Motor Power': '25kW - 100kW',
      'Speed Range': '0-1400 rpm',
      'Lift Height': '900mm - 1600mm',
      'Tank Capacity': '500L - 3000L',
      'Models': 'FDH11, FDH30, FDH45, FDH75'
    },
    features: [
      'More sufficient processing of materials',
      'Hydraulic lift ensures stability',
      'Large power with stronger processing ability',
      'Double shaft design for enhanced mixing',
      'Adjustable speed control',
      'Heavy-duty construction'
    ],
    applications: [
      'Chemical industry',
      'Printing ink manufacturing',
      'Paint production',
      'Coating materials',
      'Adhesives manufacturing'
    ]
  },

  // 7. Vacuum Dispersing Machine
  {
    id: 'disperser-fdz',
    name: 'Vacuum Dispersing Machine',
    category: 'dispersers',
    slug: 'vacuum-dispersing-machine',
    shortDescription: 'Multi-functional vacuum disperser for high-viscosity materials',
    fullDescription: 'Combines grinding, dispersing, emulsifying, and mixing functions for materials of different viscosities.',
    image: '/images/products/fdz-disperser.jpg',
    specifications: {
      'Motor Power': '25kW - 75kW',
      'Speed': '0-1400 rpm',
      'Volume': '200L - 1500L',
      'Vacuum': '≤-0.07 MPa',
      'Disc Diameter': '200mm - 400mm',
      'Models': 'FDZ200, FDZ400, FDZ600, FDZ1000'
    },
    features: [
      'Stable and reliable hydraulic lift',
      'Hermetical design decreasing solvent volatilization',
      'Different motor explosion-proof classes available',
      'Removable tank with brake wheels',
      'Vacuum operation capability',
      'Multi-functional processing'
    ],
    applications: [
      'Coating manufacturing',
      'Ink production',
      'High Viscosity Putty',
      'Pharmaceutical industry',
      'Cosmetics production'
    ]
  },

  // 8. Lab Dispersing Machine
  {
    id: 'lab-disperser-sdf400',
    name: 'Lab Dispersing Machine',
    category: 'dispersers',
    slug: 'lab-dispersing-machine',
    shortDescription: 'Multi-functional laboratory disperser for R&D and testing',
    fullDescription: 'Integrates mixing, sanding and dispersing functions into one unit. Ideal experimental equipment for laboratory personnel.',
    image: '/images/products/lab-disperser.jpg',
    specifications: {
      'Tank Size': '1L standard (2L, 5L available)',
      'Motor Type': 'Carbon brush motors standard',
      'Temperature Control': 'Optional jacket for heating/cooling',
      'Functions': 'Mixing, sanding, dispersing'
    },
    features: [
      'Multi-functional: mixing, sanding, dispersing',
      'Compact laboratory design',
      'Multiple tank size options',
      'Temperature control capability',
      'Easy to operate and clean',
      'Ideal for pre-production experiments'
    ],
    applications: [
      'Paint pre-production testing',
      'Pigment development',
      'Food slurry experiments',
      'R&D laboratory work',
      'Small batch testing'
    ]
  },

  // 9. Wall Mounted High-Speed Mixer
  {
    id: 'mixer-wall-mounted',
    name: 'Wall Mounted High-Speed Mixer',
    category: 'mixers',
    slug: 'wall-mounted-high-speed-Mixer',
    shortDescription: 'Space-saving wall-mounted Mixer for small-batch production',
    fullDescription: 'Wall-mounted high-speed Mixer widely used in Coating Industry. Saves production room significantly and especially suitable for small-batch production of products with many varieties.',
    image: '/images/products/wall-mounted-mixer.jpg',
    specifications: {
      'Materials Viscosity': '≤100,000 cps',
      'Production Capacity': '50L,700L',
      'Max Rotation Speed': '0 to 2800rpm',
      'Contact Material': 'SS304 stainless steel',
      'Models': 'SFSW-4, SFSW-7.5, SFSF-11, SFSF-15, SFSF-18.5, SFSF-22, SFSF-30'
    },
    features: [
      'Wall-mounted design saves significant production space',
      'High rotation speed up to 2800rpm for rapid Mixing',
      'Strong shearing force creates good suspension effect',
      'Manual rotation device for disc height adjustment',
      'Compact footprint ideal for limited spaces',
      'Quick dispersion of powder in liquid',
      'Different motor explosion-proof classes available'
    ],
    applications: [
      'Paint and ink manufacturing',
      'Adhesive production',
      'Small-batch multi-variety production'
    ],
    workingPrinciple: 'Through high-speed rotation of the Mixing disc, materials become annular flow, resulting in strong vortex flow that descends to the vortex bottom in spiral state. During this process, materials are dispersed, dissolved, mixed and emulsified efficiently due to strong shearing, crash and friction among particles.'
  },

  // 10. Floor Standing Mixer
  {
    id: 'mixer-floor-standing',
    name: 'Heavy Duty Floor Standing Mixer',
    category: 'mixers',
    slug: 'floor-standing-planetary-mixer',
    shortDescription: 'Floor Standing Planetary mixer suitable for Multiple industrial production',
    fullDescription: 'Floor Standing Planetary mixer suitable for Multiple industrial production.',
    image: '/images/products/wall-mounted-mixer.jpg',
    specifications: {
      'Capacity': 'as required',
      'Motor Power': 'as required',
      'Speed Range': '0 to 2800rpm',
      'Frame': 'Heavy-duty iron/steel',
      'Safety Features': 'Emergency stop',
      'Lift System': 'manual lift',
      'Material': 'Stainless steel bowl and attachments'
    },
    features: [
      'Heavy-duty mixer',
      'small to large batches'
    ],
    applications: [
      'Large Scale Mixing'
    ]
  },

  // 11. Movable Tank
  {
    id: 'movable-tank',
    name: 'Movable Tank',
    category: 'vessels-tanks',
    slug: 'movable-tank',
    shortDescription: 'Versatile stainless steel movable tank for storage, mixing, and transfer',
    fullDescription: 'High-quality movable tank designed for storage, temporary holding, and material transfer in industrial production. Features robust construction with mobility and easy cleaning.',
    image: '/images/products/single-layer-tank.jpg',
    specifications: {
      'Capacity Range': '50-1500L',
      'Material': 'SUS304 / SUS316L stainless steel',
      'Surface Finish': 'Mirror polished inside and outside',
      'Bottom Design': 'Inclined bottom for complete discharge',
      'Mobility': 'Equipped with brake wheels',
      'Discharge': 'Bottom discharge valve'
    },
    features: [
      'High-quality stainless steel construction',
      'Mirror polished surfaces for easy cleaning',
      'Inclined bottom ensures no residue',
      'Mobile design with brake wheels for easy positioning',
      'Bottom discharge valve compatible with pipelines',
      'Durable argon-arc welding',
      'Optional cover available',
      'Suitable for wide range of viscosities'
    ],
    applications: [
      'Chemical storage and transfer',
      'Paint and coating production',
      'Food and beverage processing',
      'Pharmaceutical materials',
      'Adhesives and resins',
      'General industrial storage'
    ]
  },

  // 12. Storage Tank
  {
    id: 'storage-tank',
    name: 'Storage Tank',
    category: 'vessels-tanks',
    slug: 'storage-tank',
    shortDescription: 'Heavy-duty stationary storage tank for large-scale industrial storage',
    fullDescription: 'Heavy-duty stationary storage tank designed for large-scale industrial storage applications. Available in stainless steel and mild steel construction.',
    image: '/images/products/storage-tank.jpg',
    specifications: {
      'Capacity Range': '10,000 LTR to 50,000 LTR',
      'Material': 'Stainless Steel 304, 316 and MS',
      'Type': 'Stationary (Non-movable)',
      'Construction': 'Heavy-duty industrial grade'
    },
    features: [
      'Large capacity storage',
      'Stainless Steel 304 and 316 options',
      'Mild Steel (MS) construction available',
      'Heavy-duty stationary design',
      'Industrial grade construction'
    ],
    applications: [
      'Large-scale chemical storage',
      'Industrial material storage',
      'Bulk storage applications'
    ]
  }
];

// Helper functions
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllCategories(): ProductCategory[] {
  return productCategories;
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(cat => cat.slug === slug);
}

// Get main product categories with their products count
export function getMainCategoriesWithCount() {
  return productCategories.map(category => {
    const categoryProducts = getProductsByCategory(category.slug);
    return {
      ...category,
      productCount: categoryProducts.length,
      isMultiProduct: categoryProducts.length > 1,
      thumbnailImage: categoryProducts[0]?.image || '/images/products/placeholder.jpg'
    };
  });
}

// Check if category has multiple products
export function hasMultipleProducts(categorySlug: string): boolean {
  return getProductsByCategory(categorySlug).length > 1;
}

// Get main categories only (for the main page)
export function getMainCategories() {
  return productCategories;
}

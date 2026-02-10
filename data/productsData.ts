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
  parentCategory?: string; // Added for subcategories
  isSubcategory?: boolean; // Added to identify subcategories
}

export const productCategories: ProductCategory[] = [
  // MAIN RESIN PLANT CATEGORY
  {
    id: 'resin-plant',
    name: 'Resin Plant',
    slug: 'resin-plant',
    description: 'Complete resin synthesis and processing systems with oil heating',
    icon: ''
  },
  // RESIN PLANT SUBCATEGORIES
  {
    id: 'resin-plant-lab',
    name: 'Lab & Research',
    slug: 'resin-plant-lab',
    description: 'Laboratory-scale resin plants for R&D and testing (5kg,20kg,200kg)',
    icon: '',
    parentCategory: 'resin-plant',
    isSubcategory: true
  },
  {
    id: 'resin-plant-production',
    name: 'Large Scale Production',
    slug: 'resin-plant-production',
    description: 'Industrial-scale resin production systems (3 Ton,6 Ton)',
    icon: '',
    parentCategory: 'resin-plant',
    isSubcategory: true
  },
  
  // MAIN POLYMER PLANT CATEGORY
  {
    id: 'polymer-plant',
    name: 'Polymer Processing Plant',
    slug: 'polymer-plant',
    description: 'Advanced polymer manufacturing systems',
    icon: ''
  },
  // POLYMER PLANT SUBCATEGORIES
  {
    id: 'polymer-plant-lab',
    name: 'Lab & Research',
    slug: 'polymer-plant-lab',
    description: 'Laboratory-scale polymer plants for R&D (5 LTR,30 LTR 200 LTR)',
    icon: '',
    parentCategory: 'polymer-plant',
    isSubcategory: true
  },
  {
    id: 'polymer-plant-production',
    name: 'Large Scale Production',
    slug: 'polymer-plant-production',
    description: 'Industrial-scale polymer production systems (2500 LTR ,5000 LTR)',
    icon: '',
    parentCategory: 'polymer-plant',
    isSubcategory: true
  },
  // MAIN BEAD MILLS CATEGORY (Parent)
  {
    id: 'bead-mills',
    name: 'Bead Mills',
    slug: 'bead-mills',
    description: 'High-efficiency grinding and dispersion equipment',
    icon: ''
  },
  // HORIZONTAL BEAD MILLS (Subcategory under Bead Mills)
  {
    id: 'horizontal-bead-mills',
    name: 'Horizontal Bead Mills',
    slug: 'horizontal-bead-mills',
    description: 'Maximum efficiency horizontal bead mills with EcoMizer technology',
    icon: '',
    parentCategory: 'bead-mills',
    isSubcategory: true
  },
  // VERTICAL BEAD MILLS (Subcategory under Bead Mills)
  {
    id: 'vertical-bead-mills',
    name: 'Vertical Bead Mills',
    slug: 'vertical-bead-mills',
    description: 'High-speed vertical bead mills for fine grinding applications',
    icon: '',
    parentCategory: 'bead-mills',
    isSubcategory: true
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
  // ==================== RESIN PLANT - LAB & RESEARCH ====================
  {
    id: 'resin-plant-lab-5kg',
    name: 'Resin Plant - Lab Scale 5 kg',
    category: 'resin-plant-lab',
    slug: 'resin-plant-lab-5kg',
    shortDescription: '',
    fullDescription: 'Compact resin plant designed for R&D, testing, and small-batch production. Ideal for formula development and quality control testing.',
    image: '/images/products/resin-plant-lab.jpg',
    specifications: {
      'Loading Capacity': '5 kg',
      'Scale': 'Laboratory',
      'Product Contact Material': 'SS',
      'Control System': 'Manual + Auto control panel',
      'Safety Features': 'Safety valves, temperature/pressure sensors'
    },
    features: [
      'Compact laboratory design',
      'SS Fabrication',
      'Manual + Auto control panel',
      'Ideal for R&D and formula development'
    ],
    applications: [
      'Research & Development',
      'Formula testing',
      'Quality control',
      'Educational purposes'
    ]
  },


  {
    id: 'resin-plant-lab-20kg',
    name: 'Resin Plant - Lab Scale 20 kg',
    category: 'resin-plant-lab',
    slug: 'resin-plant-lab-20kg',
    shortDescription: '',
    fullDescription: 'Mid-size laboratory resin plant for pilot production and extensive testing applications.',
    image: '/images/products/resin-plant-lab.jpg',
    specifications: {
      'Loading Capacity': '20 kg',
      'Scale': 'Laboratory',
      'Product Contact Material': 'SS',
      'Control System': 'Manual + Auto control panel',
      'Safety Features': 'Safety valves, temperature/pressure sensors'
    },
    features: [
      'Pilot-scale laboratory system',
      'All product-contact equipment in SS',
      'Manual + Auto control panel',
      'Suitable for pilot production'
    ],
    applications: [
      'Formula development',
      'Process optimization',
      'Pre-production testing',
      'Quality assurance'
    ]
  },

  {
    id: 'resin-plant-lab-200kg',
    name: 'Resin Plant -Small Batch Testing 200kg',
    category: 'resin-plant-lab',
    slug: 'resin-plant-small-batch-testing-200kg',
    shortDescription: '',
    fullDescription: 'Large-scale laboratory resin plant bridging the gap between R&D and commercial production.',
    image: '/images/products/resin-plant-lab.jpg',
    specifications: {
      'Loading Capacity': '200 kg',
      'Scale': 'Large Laboratory',
      'Heating System': 'Oil heating (thermic fluid)',
      'Product Contact Material': 'SS',
      'Control System': 'Manual + Auto control panel',
      'Filtration System': 'ON Demand',
      'Safety Features': 'Safety valves, rupture discs, temperature/pressure sensors'
    },
    features: [
      'Large laboratory capacity',
      'Oil heating system for precise control',
      'SS product-contact surfaces',
      'Advanced control panel (Manual + Auto)',
      'Complete filtration system on demand',
      'Thinning vessel with variable capacity on demand'
    ],
    applications: [
      'Pre-commercial production',
      'Process validation',
      'Medium batch production'
    ]
  },


  // ==================== RESIN PLANT - LARGE SCALE PRODUCTION ====================
  {
    id: 'resin-plant-3ton',
    name: 'Resin Plant - 3 Ton Production',
    category: 'resin-plant-production',
    slug: 'resin-plant-3ton',
    shortDescription: '',
    fullDescription: 'Complete industrial resin synthesis and processing system designed for commercial-scale production of epoxy, polyester, phenolic, or alkyd resins.',
    image: '/images/products/resin-plant.jpg',
    specifications: {
      'Production Capacity': '3 Ton',
      'Scale': 'Large Scale Production',
      'Heating System': 'Oil heating (thermic fluid)',
      'Product Contact Material': 'SS',
      'Non-Contact Material': 'SS',
      'Control System': 'Manual + Auto control panel',
      'Filtration System': 'Industrial grade',
      'Safety Features': 'Safety valves, rupture discs, temperature/pressure sensors, emergency shutdown'
    },
    features: [
      'Industrial-scale production capacity',
      'Oil heating (thermic fluid) system for precise temperature control',
      'All product-contact equipment in SS',
      'Non-product-contact vessels in SS',
      'Advanced safety systems with manual + auto control panel',
      'Condensers and distillation units for solvent recovery',
      'Complete industrial filtration system',
      'Thinning vessels with variable capacity'
    ],
    applications: [
      'Epoxy resin manufacturing',
      'Polyester resin production',
      'Phenolic resin synthesis',
      'Alkyd resin processing',
      'Industrial resin manufacturing',
      'Commercial paint production'
    ]
  },

  {
    id: 'resin-plant-6ton',
    name: 'Resin Plant - 6 Ton Production',
    category: 'resin-plant-production',
    slug: 'resin-plant-6ton',
    shortDescription: '',
    fullDescription: 'High-capacity industrial resin synthesis system for large-scale commercial production with enhanced automation and safety features.',
    image: '/images/products/resin-plant.jpg',
    specifications: {
      'Production Capacity': '6 Ton',
      'Scale': 'Large Scale Production',
      'Heating System': 'Oil heating (thermic fluid)',
      'Product Contact Material': 'SS',
      'Non-Contact Material': 'SS',
      'Control System': 'Manual + Auto control panel',
      'Filtration System': 'Industrial grade',
      'Safety Features': 'Safety valves, rupture discs, temperature/pressure sensors, emergency shutdown'
    },
    features: [
      'High-capacity industrial production',
      'Advanced oil heating (thermic fluid) system',
      'All product-contact equipment in SS',
      'Non-product-contact vessels in SS',
      'Comprehensive safety systems with manual + auto control',
      'Multiple condensers and distillation units',
      'Complete industrial filtration system',
      'Multiple thinning vessels with variable capacity',
      'Enhanced automation capabilities'
    ],
    applications: [
      'Large-scale epoxy resin manufacturing',
      'High-volume polyester resin production',
      'Commercial phenolic resin synthesis',
      'Industrial alkyd resin processing',
      'Mass production of industrial resins',
      'Large paint manufacturing facilities'
    ]
  },

  // ==================== POLYMER PLANT - LAB & RESEARCH ====================
  {
    id: 'polymer-plant-lab-5ltr',
    name: 'Polymer Plant - Lab Scale 5 LTR',
    category: 'polymer-plant-lab',
    slug: 'polymer-plant-lab-5ltr',
    shortDescription: 'Laboratory polymer processing plant with 5 liter capacity',
    fullDescription: 'Compact polymer processing system designed for research, development, and small-scale testing applications.',
    image: '/images/products/polymer-plant-lab.jpg',
    specifications: {
      'Loading Capacity': '5 LTR',
      'Scale': 'Lab & Research',
      'Process Type': 'Batch-operated',
      'Heating Method': 'Steam heating system',
      'Control System': 'Manual control with safety features',
      'Material': 'SS (product contact)',
      'Safety Features': 'Temperature alarms, pressure relief valves'
    },
    features: [
      'Compact laboratory design',
      'Controlled polymerization process',
      'Steam heating for temperature regulation',
      'High-quality filtration system',
      'Real-time monitoring',
      'Safety systems included',
      'Ideal for R&D purposes'
    ],
    applications: [
      'Research & Development',
      'Formula development',
      'Polymer testing',
      'Educational applications',
      'Small batch trials'
    ]
  },

  {
    id: 'polymer-plant-lab-30ltr',
    name: 'Polymer Plant - Lab Scale 30 LTR',
    category: 'polymer-plant-lab',
    slug: 'polymer-plant-lab-30ltr',
    shortDescription: 'Laboratory polymer processing plant with 30 liter capacity',
    fullDescription: 'Mid-size laboratory polymer plant for pilot production and process development applications.',
    image: '/images/products/polymer-plant-lab.jpg',
    specifications: {
      'Loading Capacity': '30 LTR',
      'Scale': 'Lab & Research',
      'Process Type': 'Batch-operated',
      'Heating Method': 'Steam heating system',
      'Control System': 'Manual + Auto control',
      'Material': 'SS (product contact)',
      'Safety Features': 'Temperature alarms, pressure relief valves, emergency shutdown'
    },
    features: [
      'Pilot-scale laboratory system',
      'Controlled polymerization process',
      'Steam heating for precise temperature control',
      'High-quality filtration system',
      'Real-time process monitoring',
      'Advanced safety features',
      'Manual + Auto control capabilities'
    ],
    applications: [
      'Pilot plant production',
      'Process development',
      'Scale-up studies',
      'Quality testing',
      'Pre-production trials'
    ]
  },

  {
    id: 'polymer-plant-lab-200ltr',
    name: 'Polymer Plant - Lab Scale 200 LTR',
    category: 'polymer-plant-lab',
    slug: 'polymer-plant-lab-200ltr',
    shortDescription: 'Large laboratory polymer processing plant with 200 liter capacity',
    fullDescription: 'Large-scale laboratory polymer plant for extensive testing and pre-commercial production.',
    image: '/images/products/polymer-plant-lab.jpg',
    specifications: {
      'Loading Capacity': '200 LTR',
      'Scale': 'Lab & Research',
      'Process Type': 'Batch-operated',
      'Heating Method': 'Steam heating system',
      'Control System': 'PLC-based with advanced safety features',
      'Material': 'SS (product contact)',
      'Safety Features': 'High temperature alarms, pressure relief valves, emergency shutdown'
    },
    features: [
      'Large laboratory capacity',
      'Controlled polymerization process',
      'Steam heating for precise temperature regulation',
      'High-quality filtration system',
      'Real-time process monitoring with PLC',
      'Comprehensive safety systems',
      'Complete automation capability',
      'Scale-up ready'
    ],
    applications: [
      'Large-scale testing',
      'Pre-commercial production',
      'Process validation',
      'Scale-up studies',
      'Medium batch manufacturing'
    ]
  },

  // ==================== POLYMER PLANT - LARGE SCALE PRODUCTION ====================
  {
    id: 'polymer-plant-2500ltr',
    name: 'Polymer Plant - 2500 LTR Production',
    category: 'polymer-plant-production',
    slug: 'polymer-plant-2500ltr',
    shortDescription: 'Industrial polymer processing plant with 2500 liter capacity',
    fullDescription: 'Complete industrial-scale polymer processing system for commercial production with advanced automation and control.',
    image: '/images/products/polymer-plant.jpg',
    specifications: {
      'Production Capacity': '2500 LTR (Ton)',
      'Scale': 'Large Scale Production',
      'Process Type': 'Batch-operated',
      'Heating Method': 'Steam heating system',
      'Control System': 'PLC-based with full automation',
      'Material': 'SS (product contact)',
      'Safety Features': 'High temperature alarms, pressure relief valves, emergency shutdown, automated safety systems'
    },
    features: [
      'Industrial-scale production capacity',
      'Controlled polymerization process',
      'Steam heating for precise temperature regulation',
      'High-quality industrial filtration system',
      'Real-time process monitoring',
      'Advanced PLC control and automation',
      'Comprehensive safety systems with emergency shutdown',
      'Complete production line integration capability'
    ],
    applications: [
      'Commercial polymer synthesis',
      'Industrial resin manufacturing',
      'Large-scale chemical processing',
      'Pharmaceutical production',
      'Industrial polymer production',
      'Mass production facilities'
    ]
  },

  {
    id: 'polymer-plant-5000ltr',
    name: 'Polymer Plant - 5000 LTR Production',
    category: 'polymer-plant-production',
    slug: 'polymer-plant-5000ltr',
    shortDescription: 'Large industrial polymer processing plant with 5000 liter capacity',
    fullDescription: 'High-capacity industrial polymer processing system for large-scale commercial production with state-of-the-art automation and safety.',
    image: '/images/products/polymer-plant.jpg',
    specifications: {
      'Production Capacity': '5000 LTR (Ton)',
      'Scale': 'Large Scale Production',
      'Process Type': 'Batch-operated',
      'Heating Method': 'Steam heating system',
      'Control System': 'Advanced PLC-based with full automation',
      'Material': 'SS (product contact)',
      'Safety Features': 'High temperature alarms, pressure relief valves, emergency shutdown, automated safety systems, redundant safety controls'
    },
    features: [
      'High-capacity industrial production',
      'Advanced controlled polymerization process',
      'Precision steam heating system for temperature regulation',
      'High-quality industrial filtration system',
      'Real-time process monitoring and data logging',
      'State-of-the-art PLC control and complete automation',
      'Comprehensive safety systems with emergency shutdown',
      'Complete production line integration',
      'Enhanced automation capabilities',
      'Redundant safety controls'
    ],
    applications: [
      'Large-scale polymer synthesis',
      'High-volume industrial resin manufacturing',
      'Commercial chemical processing',
      'Large pharmaceutical production',
      'Mass polymer production',
      'High-capacity manufacturing facilities'
    ]
  },

  // ==================== HORIZONTAL BEAD MILLS (Subcategory) - NOW 7 MODELS ====================
  {
    id: 'horizontal-bead-mill-001',
    name: 'Horizontal Bead Mill Model 1',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-1',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/centex-bead-mill.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
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

  {
    id: 'horizontal-bead-mill-002',
    name: 'Horizontal Bead Mill Model 2',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-2',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/horizontal-bead-mill-2.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ]
  },

  {
    id: 'horizontal-bead-mill-003',
    name: 'Horizontal Bead Mill Model 3',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-3',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/horizontal-bead-mill-3.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ]
  },

  {
    id: 'horizontal-bead-mill-004',
    name: 'Horizontal Bead Mill Model 4',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-4',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/horizontal-bead-mill-4.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ]
  },

  {
    id: 'horizontal-bead-mill-005',
    name: 'Horizontal Bead Mill Model 5',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-5',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/horizontal-bead-mill-5.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ]
  },

  {
    id: 'horizontal-bead-mill-006',
    name: 'Horizontal Bead Mill Model 6',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-6',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/horizontal-bead-mill-6.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ]
  },

  {
    id: 'horizontal-bead-mill-007',
    name: 'Horizontal Bead Mill Model 7',
    category: 'horizontal-bead-mills',
    slug: 'horizontal-bead-mill-model-7',
    shortDescription: 'Maximum efficiency bead mill with EcoMizer technology for superior wet grinding',
    fullDescription: 'The full-volume bead mill provides the highest levels of productivity for wet-grinding applications, achieving higher product quality with lower specific energy requirement while reducing grinding costs.',
    image: '/images/products/horizontal-bead-mill-7.jpg',
    specifications: {
      'Technology': '',
      'Bead Distribution': '',
      'Screen Surface': '',
      'Energy Efficiency': '',
      'Temperature Control': '',
      'Automation': ''
    },
    features: [
      'EcoMizer agitator disks for maximum energy efficiency',
      'Narrow particle size distribution',
      'Lower chamber pressure reduces temperature issues',
      'Cutting-edge technology with long service life',
      'Higher flow capability without quality compromise',
      'Reduced processing time and production costs'
    ],
    applications: [
      'Printing inks',
      'Paints and coatings',
      'Wet grinding and dispersing'
    ]
  },

  // ==================== VERTICAL BEAD MILLS (Subcategory) - NOW 1 MODEL ====================
  {
    id: 'vertical-bead-mill-001',
    name: 'Vertical Bead Mill',
    category: 'vertical-bead-mills',
    slug: 'vertical-bead-mill',
    shortDescription: 'High-efficiency vertical bead mill with super high speed capability',
    fullDescription: 'Simple operation with easy maintenance. All maintenance can be completed quickly. Very easy to add grinding media from feeding hole.',
    image: '/images/products/vertical-bead-mill.jpg',
    specifications: {
      'Speed Range': '0-8000 rpm (Super high speed)',
      'Grinding Media': '0.03mm - 0.1mm',
      'Separation System': 'Dynamic separation device, no screen design',
      'Seal Type': 'Two side mechanical seal',
      'Chamber Material': 'Silicon carbide',
      'Drive System': 'Variable speed through VFD'
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

  // ==================== ATTRITOR MILL ====================
  {
    id: 'attritor-ball-mill',
    name: 'Attritor Stirred Ball Mill',
    category: 'attritor-mill',
    slug: 'attritor-stirred-ball-mill',
    shortDescription: 'Versatile stirred ball mill for fine grinding and dispersion',
    fullDescription: 'Simple and effective method of grinding and dispersing fine and homogenous material. Ideal for pilot plant and scale up with repeatable results.',
    image: '/images/products/attritor-mill.jpg',
    specifications: {
      'Operation Mode': 'Wet or dry',
      'Speed Range': '0 to 100 RPM',
      'Media Size': '1/8" to 3/8"',
      'Atmosphere Control': 'Can introduce inert atmospheres',
      'Temperature Control': 'Controlled temperature operation'
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
      'Paint, coating and ink industry'
    ]
  },

  // ==================== DISPERSERS ====================
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
      'Available Models': 'FDH11, FDH30, FDH45, FDH75'
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

  {
    id: 'disperser-fdz',
    name: 'Vacuum Dispersing Machine',
    category: 'dispersers',
    slug: 'vacuum-dispersing-machine',
    shortDescription: 'Multi-functional vacuum disperser for high-viscosity materials',
    fullDescription: 'Dispersing, emulsifying, and mixing functions for materials of different viscosities.',
    image: '/images/products/fdz-disperser.jpg',
    specifications: {
      'Capacity': '1500 (LTR)',
      'Motor Power': '45 kw Approx',
      'Speed Range': 'Variable',
      'Vacuum Level': '≤-0.07 MPa',
      'Disc Diameter': '38 cm Approx',
      'Available ': ' With and without colling jacket and lid',
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
      'Coating industry',
      'Ink industry',
      'Pharmaceutical industry',
      'Cosmetics industry'
    ]
  },

  {
    id: 'lab-disperser-sdf400',
    name: 'Lab Dispersing Machine M1',
    category: 'dispersers',
    slug: 'lab-dispersing-machine',
    shortDescription: 'Multi-functional laboratory disperser for R&D and testing',
    fullDescription: 'Integrates mixing, sanding and dispersing functions into one unit. Ideal experimental equipment for laboratory personnel.',
    image: '/images/products/lab-disperser.jpg',
    specifications: {
      'Capacity': '0.5 to 5 (LTR)',
      'Motor power': '2.2kw approx',
      'Functions': 'Mixing,dispersing',
      'Frame': 'Adjustable',
      'Speed': 'Variable',
    },
    features: [
      'Multi-functional: mixing, dispersing',
      'Compact laboratory design',
      'Multiple tank size options',
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
   {
    id: 'lab-disperser-sdf400',
    name: 'Lab Dispersing Machine M2',
    category: 'dispersers',
    slug: 'lab-dispersing-machine',
    shortDescription: 'Multi-functional laboratory disperser for R&D and testing',
    fullDescription: 'Integrates mixing, sanding and dispersing functions into one unit. Ideal experimental equipment for laboratory personnel.',
    image: '/images/products/lab-disperser.jpg',
    specifications: {
      'Capacity': '15 to 25 (LTR)',
      'Motor power': '4kw approx',
      'Functions': 'Mixing,dispersing',
      'Frame': 'Adjustable',
      'Speed': 'Variable',
    },
    features: [
      'Multi-functional: mixing, dispersing',
      'Compact laboratory design',
      'Multiple tank size options',
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

  // ==================== MIXERS ====================
 

  {
    id: 'mixer-floor-standing',
    name: 'Floor Standing Mixer',
    category: 'mixers',
    slug: 'floor-standing-planetary-mixer',
    shortDescription: 'Floor standing planetary mixer suitable for multiple industrial production',
    fullDescription: 'Floor standing planetary mixer suitable for multiple industrial production.',
    image: '/images/products/wall-mounted-mixer.jpg',
    specifications: {
      'Capacity': '200 to 1000 LTR',
      'Motor Power': 'As per capacity',
      'Speed Range': 'Variable',
      'Material': 'Frame (iron,shatft and impeller(ss))',
      'Safety Features': 'Emergency stop',
      'Lift System': 'Manual lift',
      'Frame Fitting': 'Floor Bolted',
      
    },
    features: [
      'Heavy-duty mixer',
      'Small to large batches'
    ],
    applications: [
      'Small to Large scale mixing'
    ]
  },

  // ==================== VESSELS & TANKS ====================
  {
    id: 'movable-tank',
    name: 'Movable Tank',
    category: 'vessels-tanks',
    slug: 'movable-tank',
    shortDescription: 'Versatile stainless steel movable tank for storage, mixing, and transfer',
    fullDescription: 'High-quality movable tank designed for storage, temporary holding, and material transfer in industrial production. Features robust construction with mobility and easy cleaning.',
    image: '/images/products/single-layer-tank.jpg',
    specifications: {
      'Capacity Range': '50L - 1500L',
      'Material': 'SS',
      'Surface Finish': 'Mirror polished inside and outside',
      'Bottom Design': 'Inclined bottom for complete discharge',
      'Mobility': 'Equipped with brake wheels',
      'Discharge System': 'Bottom discharge valve'
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

  {
    id: 'storage-tank',
    name: 'Storage Tank',
    category: 'vessels-tanks',
    slug: 'storage-tank',
    shortDescription: 'Heavy-duty stationary storage tank for large-scale industrial storage',
    fullDescription: 'Heavy-duty stationary storage tank designed for large-scale industrial storage applications. Available in stainless steel and mild steel construction.',
    image: '/images/products/storage-tank.jpg',
    specifications: {
      'Capacity Range': '10,000L to 50,000L',
      'Material Options': 'SS and MS (Mild Steel)',
      'Type': 'Stationary (Non-movable)',
      'Construction': 'Heavy-duty industrial grade'
    },
    features: [
      'Large capacity storage',
      'Stainless steel and mild steel options',
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

// Get subcategories for a parent category
export function getSubcategories(parentCategorySlug: string): ProductCategory[] {
  return productCategories.filter(cat => cat.parentCategory === parentCategorySlug);
}

// Get main categories (non-subcategories)
export function getMainCategories(): ProductCategory[] {
  return productCategories.filter(cat => !cat.isSubcategory);
}

// Get main product categories with their products count
export function getMainCategoriesWithCount() {
  return getMainCategories().map(category => {
    const categoryProducts = getProductsByCategory(category.slug);
    const subcategories = getSubcategories(category.slug);
    
    // Count products in subcategories too
    let totalProducts = categoryProducts.length;
    subcategories.forEach(subcat => {
      totalProducts += getProductsByCategory(subcat.slug).length;
    });
    
    return {
      ...category,
      productCount: totalProducts,
      directProductCount: categoryProducts.length,
      subcategoryCount: subcategories.length,
      hasSubcategories: subcategories.length > 0,
      isMultiProduct: totalProducts > 1,
      thumbnailImage: categoryProducts[0]?.image || '/images/products/placeholder.jpg'
    };
  });
}

// Check if category has multiple products
export function hasMultipleProducts(categorySlug: string): boolean {
  return getProductsByCategory(categorySlug).length > 1;
}

// data/customersData.ts
export interface CustomerType {
  id: number;
  name: string;
  slug: string;
  logo: string;
  website: string;
  color: string;
  companyDescription: string;
  industry: string;
  location: string;
  partnership: {
    startYear: string;
    duration: string;
    status: string;
  };
  servicesProvided: string[];
  projectDetails: Array<{
    title: string;
    description: string;
    quantity?: string;
    timeline?: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  results: string[];
  images?: string[];
}

export const customersData: CustomerType[] = [
  {
    id: 1,
    name: "Diamond Paints",
    slug: "diamond-paints",
    logo: "/images/Our Customers/diamondpaints.avif",
    website: "https://www.diamondpaints.com/",
    color: "#135fa8",
    companyDescription: "Diamond Paints is one of Pakistan's leading paint manufacturers, known for producing high-quality paints and coatings for residential, commercial, and industrial applications. With decades of experience in the industry, they have established themselves as a trusted brand throughout Pakistan.",
    industry: "Paint Manufacturing",
    location: "Lahore, Pakistan",
    partnership: {
      startYear: "2018",
      duration: "6+ years",
      status: "Active Partner"
    },
    servicesProvided: [
      "High-Speed Dispersers Installation",
      "Bead Mills Supply and Setup",
      "Industrial Mixers",
      "Production Line Optimization",
      "Equipment Maintenance and Support",
      "Technical Consultation"
    ],
    projectDetails: [
      {
        title: "Production Line Upgrade 2020",
        description: "Successfully installed and commissioned 3 high-speed dispersers to enhance their paint production capacity. The project included complete electrical integration, operator training, and performance optimization.",
        quantity: "3 High-Speed Disperser Units",
        timeline: "6 months"
      },
      {
        title: "Grinding System Enhancement 2021",
        description: "Supplied and installed advanced bead mill systems for superior pigment dispersion and particle size reduction, resulting in improved paint quality and consistency.",
        quantity: "2 Bead Mill Systems",
        timeline: "4 months"
      },
      {
        title: "Ongoing Maintenance Services",
        description: "Providing continuous technical support, preventive maintenance, and spare parts supply to ensure optimal equipment performance and minimize downtime.",
        timeline: "Ongoing since 2018"
      }
    ],
    testimonial: {
      quote: "HAMZA ENGINEERING has been instrumental in modernizing our production facilities. Their expertise in paint manufacturing equipment and commitment to quality has helped us maintain our position as a market leader. The equipment they supplied has exceeded our expectations in terms of performance and reliability.",
      author: "Muhammad Asif",
      position: "Production Manager, Diamond Paints"
    },
    results: [
      "40% increase in production efficiency",
      "Reduced equipment downtime by 30%",
      "Improved product quality consistency",
      "Enhanced worker safety with modern equipment",
      "Reduced energy consumption by 25%",
      "Faster batch processing times"
    ],
    images: [
      "/images/customers/diamond-paints-facility.jpg",
      "/images/customers/diamond-paints-equipment.jpg"
    ]
  },
  {
    id: 2,
    name: "Champion Paints",
    slug: "champion-paints",
    logo: "/images/Our Customers/championpaints.jpg",
    website: "https://championpaints.com/",
    color: "#b91c1c",
    companyDescription: "Champion Paints is a renowned paint manufacturing company in Pakistan, delivering premium quality paints and coatings for various applications. They are committed to innovation and excellence in the coatings industry.",
    industry: "Paint Manufacturing",
    location: "Karachi, Pakistan",
    partnership: {
      startYear: "2019",
      duration: "5+ years",
      status: "Active Partner"
    },
    servicesProvided: [
      "Complete Dispersing Systems",
      "Grinding Mill Installation",
      "Storage Tank Solutions",
      "Process Automation",
      "Quality Control Equipment",
      "After-sales Technical Support"
    ],
    projectDetails: [
      {
        title: "New Production Facility Setup 2019",
        description: "Provided complete turnkey solution for their new paint manufacturing facility, including all dispersion, grinding, and mixing equipment. The project was completed on time and within budget.",
        quantity: "Complete Production Line",
        timeline: "10 months"
      },
      {
        title: "Capacity Expansion 2022",
        description: "Supplied additional high-speed dispersers and bead mills to meet growing market demand. The expansion doubled their production capacity while maintaining product quality.",
        quantity: "5 Disperser Units + 3 Bead Mills",
        timeline: "5 months"
      }
    ],
    testimonial: {
      quote: "Working with HAMZA ENGINEERING has been a game-changer for our business. Their technical knowledge and professional approach made our facility setup smooth and efficient. The equipment quality is outstanding, and their after-sales support is exceptional.",
      author: "Ahmed Khan",
      position: "Operations Director, Champion Paints"
    },
    results: [
      "100% production capacity increase",
      "Superior product quality achieved",
      "Reduced production costs by 20%",
      "Improved operational efficiency",
      "Zero major equipment failures",
      "Enhanced production flexibility"
    ],
    images: [
      "/images/customers/champion-paints-facility.jpg",
      "/images/customers/champion-paints-production.jpg"
    ]
  },
  {
    id: 3,
    name: "Nelson Paints",
    slug: "nelson-paints",
    logo: "/images/Our Customers/nelsonpaints.png",
    website: "https://nelsonpaints.com/",
    color: "#6d28d9",
    companyDescription: "Nelson Paints is a well-established paint manufacturer in Pakistan with a strong focus on quality and customer satisfaction. They produce a wide range of decorative and industrial paints for diverse market segments.",
    industry: "Paint Manufacturing",
    location: "Faisalabad, Pakistan",
    partnership: {
      startYear: "2020",
      duration: "4+ years",
      status: "Active Partner"
    },
    servicesProvided: [
      "Industrial Mixing Equipment",
      "High-Speed Disperser Systems",
      "Filtration Systems",
      "Material Handling Solutions",
      "Equipment Modernization",
      "Technical Training Programs"
    ],
    projectDetails: [
      {
        title: "Equipment Modernization Project 2020",
        description: "Replaced outdated mixing and dispersion equipment with modern, energy-efficient systems. The upgrade significantly improved their production capabilities and product quality.",
        quantity: "4 Disperser Systems + 2 Mixers",
        timeline: "7 months"
      },
      {
        title: "Quality Enhancement Initiative 2023",
        description: "Installed advanced filtration and quality control equipment to meet international standards. This enabled Nelson Paints to enter export markets successfully.",
        quantity: "Complete Filtration System",
        timeline: "3 months"
      }
    ],
    testimonial: {
      quote: "HAMZA ENGINEERING transformed our production facility with state-of-the-art equipment. Their team's professionalism and technical expertise made the entire process seamless. We've seen remarkable improvements in both quality and efficiency.",
      author: "Imran Malik",
      position: "Plant Manager, Nelson Paints"
    },
    results: [
      "50% improvement in batch consistency",
      "Reduced production time by 35%",
      "Successfully entered export markets",
      "Lower energy costs",
      "Enhanced product quality",
      "Improved workplace safety standards"
    ],
    images: [
      "/images/customers/nelson-paints-facility.jpg",
      "/images/customers/nelson-paints-equipment.jpg"
    ]
  },
  {
    id: 4,
    name: "Corona Paints",
    slug: "corona-paints",
    logo: "/images/Our Customers/coronapaints.png",
    website: "https://coronapaints.com.pk/",
    color: "#059669",
    companyDescription: "Corona Paints is a prominent paint manufacturer in Pakistan, recognized for producing eco-friendly and sustainable coating solutions. They are committed to environmental responsibility while maintaining superior product quality.",
    industry: "Paint Manufacturing",
    location: "Lahore, Pakistan",
    partnership: {
      startYear: "2021",
      duration: "3+ years",
      status: "Active Partner"
    },
    servicesProvided: [
      "Eco-Friendly Production Equipment",
      "Energy-Efficient Dispersers",
      "Waste Reduction Systems",
      "Process Optimization",
      "Environmental Compliance Support",
      "Continuous Technical Assistance"
    ],
    projectDetails: [
      {
        title: "Green Production Initiative 2021",
        description: "Supplied energy-efficient equipment designed to minimize environmental impact while maximizing production efficiency. The initiative aligned with Corona Paints' sustainability goals.",
        quantity: "Complete Eco-Friendly Production Line",
        timeline: "8 months"
      },
      {
        title: "Waste Reduction Program 2023",
        description: "Implemented advanced filtration and recycling systems to reduce waste and improve resource utilization, contributing to their environmental objectives.",
        quantity: "Filtration & Recycling Systems",
        timeline: "4 months"
      }
    ],
    testimonial: {
      quote: "HAMZA ENGINEERING shares our vision for sustainable manufacturing. They provided equipment that not only improved our efficiency but also reduced our environmental footprint. Their commitment to quality and sustainability matches ours perfectly.",
      author: "Saira Qureshi",
      position: "Sustainability Manager, Corona Paints"
    },
    results: [
      "45% reduction in energy consumption",
      "30% decrease in waste generation",
      "Improved environmental compliance",
      "Enhanced production efficiency",
      "Cost savings through resource optimization",
      "Stronger market position in eco-friendly segment"
    ],
    images: [
      "/images/customers/corona-paints-facility.jpg",
      "/images/customers/corona-paints-green.jpg"
    ]
  },
  {
    id: 5,
    name: "Master Paints",
    slug: "master-paints",
    logo: "/images/Our Customers/theme-logo_25k1-9a.png",
    website: "https://masterpaints.com/",
    color: "#960583",
    companyDescription: "Master Paints is one of Pakistan's most respected paint manufacturers, with a legacy of quality and innovation spanning several decades. They offer comprehensive coating solutions for residential, commercial, and industrial applications.",
    industry: "Paint Manufacturing",
    location: "Islamabad, Pakistan",
    partnership: {
      startYear: "2017",
      duration: "7+ years",
      status: "Active Partner"
    },
    servicesProvided: [
      "Complete Production Line Solutions",
      "Advanced Grinding Systems",
      "Automated Tinting Equipment",
      "Storage and Handling Systems",
      "Process Control Systems",
      "Comprehensive Maintenance Services"
    ],
    projectDetails: [
      {
        title: "Facility Expansion 2017-2018",
        description: "Supplied complete production line equipment for their major facility expansion, including dispersers, bead mills, mixers, and automated systems. This project significantly increased their market capacity.",
        quantity: "Complete Turnkey Production Line",
        timeline: "14 months"
      },
      {
        title: "Automation Upgrade 2021",
        description: "Installed advanced automation systems for improved process control and consistency. The upgrade reduced manual intervention and improved product uniformity.",
        quantity: "Complete Automation Package",
        timeline: "6 months"
      },
      {
        title: "Continuous Partnership Services",
        description: "Providing ongoing equipment maintenance, upgrades, and technical support to ensure optimal performance and reliability of all installed equipment.",
        timeline: "Ongoing since 2017"
      }
    ],
    testimonial: {
      quote: "Our partnership with HAMZA ENGINEERING has been exceptional. They've been with us through our growth journey, providing reliable equipment and outstanding support. Their technical expertise and commitment to customer satisfaction are unmatched in the industry.",
      author: "Tariq Mahmood",
      position: "Chief Operating Officer, Master Paints"
    },
    results: [
      "200% increase in production capacity",
      "Improved product consistency across all lines",
      "Reduced operational costs by 28%",
      "Enhanced automation and control",
      "Minimal equipment downtime",
      "Strengthened market leadership position"
    ],
    images: [
      "/images/customers/master-paints-facility.jpg",
      "/images/customers/master-paints-production.jpg",
      "/images/customers/master-paints-automation.jpg"
    ]
  }
];

// Helper functions
export function getCustomerBySlug(slug: string): CustomerType | undefined {
  return customersData.find(customer => customer.slug === slug);
}

export function getAllCustomers(): CustomerType[] {
  return customersData;
}
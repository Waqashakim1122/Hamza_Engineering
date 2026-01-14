// data/industriesData.ts
export interface IndustryType {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  categories: Array<{
    title: string;
    items: string[];
  }>;
  content: {
    introduction: string;
    expertise: string;
    equipment: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const industriesData: IndustryType[] = [
  {
    id: 1,
    name: "Paint Manufacturing",
    slug: "paint-manufacturing",
    image: "/images/Industries/Paint Manufacturing.webp",
    description: "Complete paint manufacturing equipment and turnkey production lines",
    categories: [
      {
        title: "Production Methods",
        items: [
          "Batch processing",
          "Continuous processing",
          "Semi-continuous processing"
        ]
      },
      {
        title: "Quality Control",
        items: [
          "Viscosity control",
          "Color matching",
          "Particle size analysis",
          "Drying time testing"
        ]
      }
    ],
    content: {
      introduction: "Paint manufacturing requires precise formulation and processing to achieve optimal color, viscosity, drying characteristics, and long-term durability.",
      expertise: "HAMZA ENGINEERING delivers comprehensive turnkey solutions for paint production, encompassing raw material handling, high-efficiency dispersion, fine grinding, mixing, automated tinting, and advanced packaging systems.",
      equipment: [
        {
          title: "High-Speed Disperser",
          description: "Engineered for superior pigment dispersion with variable speed control and multiple blade options to accommodate a wide range of viscosities."
        },
        {
          title: "Automated Tinting System",
          description: "Computer-controlled color dispensing technology ensuring exceptional accuracy, repeatability, and batch-to-batch color consistency."
        }
      ]
    }
  },
  {
    id: 2,
    name: "Powder Coating",
    slug: "powder-coating",
    image: "/images/Industries/Powder Coating.webp",
    description: "Advanced powder coating formulation and production equipment",
    categories: [
      {
        title: "Powder Types",
        items: [
          "Thermoplastic powders",
          "Thermosetting powders",
          "Hybrid powders"
        ]
      },
      {
        title: "Application Methods",
        items: [
          "Electrostatic spray",
          "Fluidized bed",
          "Electrostatic fluidized bed"
        ]
      }
    ],
    content: {
      introduction: "Powder coating is an environmentally responsible dry finishing process in which finely ground pigment and resin particles are electrostatically charged and applied to grounded substrates.",
      expertise: "HAMZA ENGINEERING offers complete powder coating production lines, including premixing, melt extrusion, ultra-fine grinding, air classification, and automated packaging systems tailored to diverse powder formulations.",
      equipment: [
        {
          title: "Powder Coating Extruder",
          description: "High-performance extruders designed for powder coating production, featuring precise temperature zoning and optimized mixing efficiency."
        },
        {
          title: "Powder Grinding System",
          description: "Advanced jet mills and high-precision classifiers delivering controlled particle size distribution for superior application performance and finish quality."
        }
      ]
    }
  },
  {
    id: 3,
    name: "Chemical Resins",
    slug: "chemical-resins",
    image: "/images/Industries/Chemical Resins.webp",
    description: "Specialized equipment and turnkey solutions for resin manufacturing",
    categories: [
      {
        title: "According to source",
        items: [
          "Natural resin",
          "Synthetic resin"
        ]
      },
      {
        title: "According to synthetic reaction",
        items: [
          "Addition polymer (polyethylene, polystyrene, teflon)",
          "Condensation polymer (phenolic resin, polyester resin, polyamide resin)"
        ]
      },
      {
        title: "According to molecular main chain",
        items: [
          "Carbon chain polymers",
          "Heterochain polymers",
          "Element organic polymer"
        ]
      }
    ],
    content: {
      introduction: "Resins are organic polymers that, under normal conditions, exist as solids, semi-solids, or liquids. They exhibit a defined softening or melting range and flow under external force when heated.",
      expertise: "HAMZA ENGINEERING provides advanced production equipment and complete turnkey projects for resin manufacturing, including unsaturated polyester resin, phenolic resin, epoxy resin, ABS resin, and emulsions. Our services cover full plant delivery, detailed engineering design, factory upgrades, capacity expansion, project management, and customized consulting solutions.",
      equipment: [
        {
          title: "Reaction Kettle",
          description: "Pressure and atmospheric vessels engineered for critical processes including polymerization, condensation, alkylation, hydrogenation, nitration, and sulfuration. Configurable with various agitation systems, sealing technologies, and heating/cooling methods."
        },
        {
          title: "Resin Complete Production Line",
          description: "Integrated systems comprising supporting tanks, main reaction kettles, vertical distillation columns, vertical & horizontal condensers, water collectors, spill pots, interconnecting pipelines, and dilution vessels."
        }
      ]
    }
  },
  {
    id: 4,
    name: "Polymers",
    slug: "polymers",
    image: "/images/Industries/Polymers.webp",
    description: "Advanced polymer processing and manufacturing solutions",
    categories: [
      {
        title: "By Structure",
        items: [
          "Linear polymers",
          "Branched polymers",
          "Cross-linked polymers"
        ]
      },
      {
        title: "By Application",
        items: [
          "Plastics",
          "Elastomers",
          "Fibers",
          "Coatings"
        ]
      }
    ],
    content: {
      introduction: "Polymers are high-molecular-weight compounds composed of repeating structural units, serving as foundational materials across industries from packaging to high-performance composites.",
      expertise: "HAMZA ENGINEERING delivers specialized equipment and integrated solutions for polymer processing, including advanced polymerization reactors, high-capacity extrusion systems, precision compounding lines, and custom mixing technologies for diverse polymer applications.",
      equipment: [
        {
          title: "Polymerization Reactor",
          description: "High-precision reactors designed for bulk, solution, suspension, and emulsion polymerization, offering accurate control of temperature, pressure, and reaction conditions."
        },
        {
          title: "Twin Screw Extruder",
          description: "Versatile twin-screw extrusion systems optimized for polymer compounding, devolatilization, and reactive extrusion, featuring modular screw designs and precise temperature management."
        }
      ]
    }
  }
];

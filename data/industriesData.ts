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
    name: "Paints & Coatings",
    slug: "paints-and-coatings",
    image: "/images/Industries/Paints & Coatings.webp",
    description: "Complete paint manufacturing solutions for various applications",
    categories: [
      {
        title: "According to position",
        items: [
          "Wall paint (exterior wall paint, interior wall paint, top paint)",
          "Wood coatings (nitro-lacquer paint, polyurethane paint)",
          "Metallic paint (mainly enamel)"
        ]
      },
      {
        title: "According to state",
        items: [
          "Water-based paint (emulsion paint)",
          "Oil-based paint (nitro-lacquer paint, polyurethane paint)"
        ]
      },
      {
        title: "According to function",
        items: [
          "Waterproof paint",
          "Fire-proof paint",
          "Mildew resistant paint",
          "Anti-mosquito paint",
          "Multi-functional paint"
        ]
      }
    ],
    content: {
      introduction: "Paint is a generic term of materials applied on the object surface and forming a tough protective film. It exists in the form of liquid. After drying, it forms continuous paint film which decorates and protects the covered subject.",
      expertise: "SIEHE Group has a long history of providing coating production equipment, and has supplied equipment and turnkey project for a number of well-known printing ink companies. We have rich experience in coating production and mastered the technology of powder and liquid automatic feeding system, color paste tinting system, automatic filling system and automatic control system.",
      equipment: [
        {
          title: "Disperser",
          description: "For pre-dispersing paint and making paste for the emulsion paint. Various kinds and specification are optional including Disperser with scraper, Vacuum type Disperser, Dual-shaft Disperser with Butterfly agitator, Platform type Disperser etc. to meet various dispersing, mixing requirements."
        },
        {
          title: "Basket Mill",
          description: "A kind of wet milling equipment, it integrates dispersing and grinding two processes into one machine. It reduces production process and also without pump nor valve, so it improves production efficiency and reduces material waste."
        },
        {
          title: "Horizontal Beads Mill",
          description: "A wet milling machine used for grinding materials with higher final fineness requirements. It is with excellent grinding result and high efficiency."
        },
        {
          title: "Paint Production Line",
          description: "Ranging from 500T/year to 50000T/year, it can be customized based on the paint category and production requirements. The whole line can be the combination of all single machines or automatic product line with advanced production technology."
        }
      ]
    }
  },
  {
    id: 2,
    name: "Chemical Resins",
    slug: "chemical-resins",
    image: "/images/Industries/Chemical Resins.webp",
    description: "Specialized resin production equipment and solutions",
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
      introduction: "Resin normally refers to an organic polymer (Under normal temperature, it is solid or semi-solid state, some time, also liquid state), having soften or melt range after heated. When it is softened, it with flowing tendency under the external force.",
      expertise: "SIEHE Group provides production equipment, and turnkey project for resin factories. The products includes unsaturated polyester resin, phenolic resin, epoxy resin, ABS resin, emulsion etc. We not only provide equipment, but also the whole plant delivery, engineering design, service, factory renovation, production expansion, project management consulting services.",
      equipment: [
        {
          title: "Reaction Kettle",
          description: "Normal pressure or pressurized vessel for sulfuration, nitration, hydrogenation, alkylation, polymerization, condensation processes. It consists of kettle body, kettle cover, jacket, agitator, driving device, shaft sealing device, bearing and other parts."
        },
        {
          title: "Resin Complete Production Line",
          description: "Consists of supporting tanks, main reaction kettle, vertical distillation column, vertical condenser, horizontal condenser, water collector, spill pot, pipeline and dilution vessels etc."
        }
      ]
    }
  },
  {
    id: 3,
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
      introduction: "Polymers are large molecules composed of repeating structural units. They play a crucial role in modern industry with applications ranging from packaging materials to advanced composites.",
      expertise: "We provide specialized equipment for polymer processing including polymerization reactors, extrusion lines, compounding systems, and specialized mixing equipment for various polymer types.",
      equipment: [
        {
          title: "Polymerization Reactor",
          description: "Specialized reactors for bulk, solution, suspension, and emulsion polymerization processes with precise temperature and pressure control."
        },
        {
          title: "Twin Screw Extruder",
          description: "For polymer compounding, devolatilization, and reactive extrusion with precise temperature control and modular screw configurations."
        }
      ]
    }
  },
  {
    id: 4,
    name: "Paint Manufacturing",
    slug: "paint-manufacturing",
    image: "/images/Industries/Paint Manufacturing.webp",
    description: "Complete paint manufacturing equipment and production lines",
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
      introduction: "Paint manufacturing involves precise formulation and processing to achieve desired properties including color, viscosity, drying time, and durability.",
      expertise: "We provide complete turnkey solutions for paint manufacturing including raw material handling, dispersion, grinding, mixing, tinting, and packaging systems.",
      equipment: [
        {
          title: "High-Speed Disperser",
          description: "For efficient pigment dispersion with variable speed control and multiple blade configurations for different viscosity ranges."
        },
        {
          title: "Automated Tinting System",
          description: "Computer-controlled color dispensing systems for precise color matching and batch-to-batch consistency."
        }
      ]
    }
  },
  {
    id: 5,
    name: "Powder Coating",
    slug: "powder-coating",
    image: "/images/Industries/Powder Coating.webp",
    description: "Powder coating formulation and application equipment",
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
      introduction: "Powder coating is a dry finishing process where finely ground particles of pigment and resin are electrostatically charged and sprayed onto electrically grounded parts.",
      expertise: "We provide complete powder coating production lines including premixing, extrusion, grinding, classification, and packaging systems for various powder types.",
      equipment: [
        {
          title: "Powder Coating Extruder",
          description: "Specialized extruders for powder coating formulation with precise temperature control and mixing efficiency."
        },
        {
          title: "Powder Grinding System",
          description: "Jet mills and classifiers for producing fine powder with controlled particle size distribution for optimal application properties."
        }
      ]
    }
  }
];
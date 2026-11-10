export type Product = {
  slug: string;
  name: string;
  category: string;
  format: string;
  orderBasis: string;
  summary: string;
  useCases: string[];
  specNote: string;
  art: "rings" | "layers" | "fan" | "fold";
  image: string;
  imageAlt: string;
  packSizes?: string[];
  packImages?: Record<string, { src: string; alt: string; caption: string }>;
};

export const PRODUCTS: Product[] = [
  {
    slug: "toilet-tissue",
    name: "Toilet Tissue",
    category: "Washroom",
    format: "2-ply rolls in four pack formats",
    orderBasis: "Standing order or one-off case order",
    summary:
      "Sefora Tissues for offices, institutions, retail and homes, in four formats: Jumbo Roll, Double Pack, 4 Pack and 10 Pack.",
    useCases: ["Office washrooms", "Hospitality", "Institutional facilities", "Retail resale"],
    specNote:
      "Sheet size and packaging configuration are confirmed at quotation stage to match your requirement.",
    art: "rings",
    image: "/products/sefora-jumbo-wide.jpg",
    imageAlt: "Sefora Tissues jumbo roll, 2-ply tissue",
    packSizes: ["Jumbo Roll", "Double Pack", "4 Pack", "10 Pack"],
    packImages: {
      "Jumbo Roll": {
        src: "/products/sefora-jumbo-wide.jpg",
        alt: "Sefora Tissues jumbo roll, 2-ply tissue",
        caption: "High-capacity single roll for busy washrooms and dispensers.",
      },
      "Double Pack": {
        src: "/products/sefora-double.jpg",
        alt: "Sefora Tissues double pack, 2 rolls, 2-ply toilet tissue",
        caption: "Two-roll retail pack, compact and easy to stock.",
      },
      "4 Pack": {
        src: "/products/sefora-4pack-wide.jpg",
        alt: "Sefora Tissues 4 roll pack, 2-ply toilet tissue",
        caption: "Convenient four-roll pack for retail and office use.",
      },
      "10 Pack": {
        src: "/products/sefora-10pack-wide.jpg",
        alt: "Sefora Tissues 10 roll pack, 2-ply toilet tissue",
        caption: "Ten-roll multipack for families, institutions and bulk buyers.",
      },
    },
  },
];

/** Categories planned for the range. Not yet on sale, so shown as "coming soon" with no product imagery. */
export const UPCOMING_CATEGORIES = [
  {
    slug: "kitchen-towels",
    name: "Kitchen Towels",
    blurb: "Absorbent towels for kitchens, food service and production areas.",
  },
  {
    slug: "wet-wipes",
    name: "Wet Wipes",
    blurb: "Wet wipes for personal care and surface cleaning.",
  },
  {
    slug: "serviettes",
    name: "Serviettes",
    blurb: "Folded serviettes for hospitality, food service and institutional dining.",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

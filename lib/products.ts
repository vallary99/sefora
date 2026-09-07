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
  packImages?: Record<string, { src: string; alt: string }>;
};

export const PRODUCTS: Product[] = [
  {
    slug: "toilet-tissue",
    name: "Toilet Tissue",
    category: "Washroom",
    format: "2-ply rolls, multiple pack sizes",
    orderBasis: "Standing order or one-off case order",
    summary:
      "Core washroom tissue for offices, institutions and retail, supplied across five pack configurations.",
    useCases: ["Office washrooms", "Hospitality", "Institutional facilities", "Retail resale"],
    specNote:
      "Sheet size and packaging configuration are confirmed at quotation stage to match your requirement.",
    art: "rings",
    image: "/products/toilet-tissue.jpg",
    imageAlt: "Rolled toilet tissue, illustrative",
    packSizes: ["Single Roll", "Twin Pack (2 Rolls)", "4 Pack", "10 Pack", "Jumbo 4-in-1"],
    packImages: {
      "Jumbo 4-in-1": {
        src: "/products/toilet-tissue-jumbo.jpg",
        alt: "Jumbo 4-in-1 toilet tissue rolls, illustrative",
      },
    },
  },
  {
    slug: "kitchen-towel",
    name: "Kitchen Towel",
    category: "Household & food service",
    format: "2-ply rolls, supplied by the case",
    orderBasis: "Standing order or one-off case order",
    summary: "Absorbent towel for kitchens, food service environments and production areas.",
    useCases: ["Food service", "Production environments", "Staff kitchens", "Retail resale"],
    specNote: "Roll size and absorbency specification available on request, ahead of a first order.",
    art: "layers",
    image: "/products/kitchen-towel.jpg",
    imageAlt: "Rolled paper towels, illustrative",
  },
  {
    slug: "serviette",
    name: "Serviette",
    category: "Hospitality & food service",
    format: "Folded sheets, supplied by the pack",
    orderBasis: "Standing order or one-off pack order",
    summary: "Folded serviettes for hospitality, food service and institutional dining.",
    useCases: ["Hospitality", "Food service", "Institutional dining", "Retail resale"],
    specNote: "Fold style and sheet count confirmed at quotation stage.",
    art: "fan",
    image: "/products/serviette.jpg",
    imageAlt: "Folded tissue sheet, illustrative",
  },
  {
    slug: "wet-wipes",
    name: "Wet Wipes",
    category: "Personal & surface care",
    format: "100-wipe packs",
    orderBasis: "Standing order or one-off pack order",
    summary: "Wet wipes for personal care and surface cleaning, supplied in 100-wipe packs.",
    useCases: ["Personal care resale", "Offices & reception areas", "Hospitality"],
    specNote: "Formulation and sheet size (110mm x 100mm) confirmed at quotation stage.",
    art: "fold",
    image: "/products/wet-wipes.jpg",
    imageAlt: "Wet wipes pack, illustrative",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

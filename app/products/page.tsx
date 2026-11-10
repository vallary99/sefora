import CTASection from "@/components/CTASection";
import ProductDetail from "@/components/ProductDetail";
import ComingSoon from "@/components/ComingSoon";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PRODUCTS } from "@/lib/products";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Sefora Tissues toilet tissue in Jumbo Roll, Double Pack, 4 Pack and 10 Pack formats, manufactured in Kenya for distributors and businesses. Kitchen towels, wet wipes and serviettes coming soon.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />

      <PageHero
        title="Our Products"
        description="Toilet tissue in four formats: Jumbo Roll, Double Pack, 4 Pack and 10 Pack, manufactured in Kenya for distributors and businesses."
      />

      {PRODUCTS.map((p) => (
        <ProductDetail key={p.slug} product={p} />
      ))}

      <ComingSoon />

      <CTASection
        heading="Don't see what you need?"
        body="Tell us your product requirement and expected volumes, and we'll confirm what we can supply and how quickly."
        primary={{ label: "Make a Business Enquiry", href: "/contact" }}
      />
    </>
  );
}

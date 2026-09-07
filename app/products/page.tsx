import CTASection from "@/components/CTASection";
import ProductDetail from "@/components/ProductDetail";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PRODUCTS } from "@/lib/products";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Toilet tissue, kitchen towel, serviettes and wet wipes supplied in commercial quantities to distributors and businesses across Kenya.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />

      <PageHero
        title="Products"
        description="Core tissue categories for commercial and institutional use, supplied in commercial quantities across Kisumu and Western Kenya."
      />

      {PRODUCTS.map((p, i) => (
        <ProductDetail key={p.slug} product={p} tinted={i % 2 === 1} reverse={i % 2 === 1} />
      ))}

      <CTASection
        heading="Don't see what you need?"
        body="Tell us your product requirement and expected volumes, and we'll confirm what we can supply and how quickly."
        primary={{ label: "Make a Business Enquiry", href: "/contact" }}
      />
    </>
  );
}

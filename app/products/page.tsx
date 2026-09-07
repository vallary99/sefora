import CTASection from "@/components/CTASection";
import ProductDetail from "@/components/ProductDetail";
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

      <section className="bg-forest-dark">
        <div className="mx-auto max-w-content px-6 py-12 lg:px-10 lg:py-16">
          <h1 className="font-display text-3xl font-bold text-white lg:text-4xl">Products</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
            Core tissue categories for commercial and institutional use, supplied in commercial
            quantities across Kisumu and Western Kenya.
          </p>
        </div>
      </section>

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

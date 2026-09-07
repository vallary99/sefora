import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE, BD_STAGES } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import AudienceHero from "@/components/AudienceHero";
import PillarRow from "@/components/PillarRow";
import AudienceSplit from "@/components/AudienceSplit";
import ProcessStepper from "@/components/ProcessStepper";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";

export const metadata = buildMetadata({
  title: `${SITE.name}: Commercial Tissue Supply for Manufacturers & Distributors`,
  description:
    "Sefora Limited supplies tissue and paper hygiene products to distributors and manufacturers in Kisumu and Western Kenya. Request a quote, sample, or distribution partnership.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#e7eae7]">
        <div className="mx-auto grid max-w-content items-center gap-10 px-6 py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-6 lg:px-10 lg:py-20">
          <div className="group relative flex items-center justify-center overflow-hidden">
            <Image
              src="/products/toilet-tissue.jpg"
              alt="Rolled toilet tissue, illustrative"
              width={700}
              height={700}
              priority
              className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 65% 65% at center, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 65% 65% at center, black 55%, transparent 100%)",
              }}
            />
          </div>
          <div className="min-w-0 lg:pl-6">
            <AudienceHero />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-20">
        <PillarRow />
      </section>

      {/* Who we serve */}
      <section>
        <div className="mx-auto max-w-content px-6 pb-6 pt-4 lg:px-10">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">
              Who we serve
            </h2>
          </RevealOnScroll>
        </div>
        <AudienceSplit />
      </section>

      {/* Products */}
      <section className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
        <RevealOnScroll>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src="/products/collage.jpg"
                alt="Range of rolled and folded tissue formats, illustrative"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">Products</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-stone">
                Core tissue categories for commercial and institutional use, supplied in
                commercial quantities.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products#${p.slug}`}
                    className="text-lg font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-forest hover:decoration-forest"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/products"
                className="mt-8 inline-flex items-center justify-center bg-forest px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-dark"
              >
                View all products
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-content px-6 lg:px-10">
        <RevealOnScroll>
          <h2 className="mb-6 font-display text-3xl font-bold text-ink lg:text-4xl">
            How a supply relationship starts
          </h2>
        </RevealOnScroll>
      </section>
      <section className="mx-auto max-w-content px-0 pb-16 lg:px-10 lg:pb-24">
        <ProcessStepper stages={BD_STAGES} />
      </section>

      <CTASection
        heading="Talk to the commercial team"
        body="Whether you're evaluating us as a distributor, sourcing tissue for your business, or just want to see specifications and pricing, we'll respond within one business day."
        primary={{ label: "Request a Quote", href: "/contact?intent=quote" }}
        secondary={{ label: "Request a Sample", href: "/contact?intent=sample" }}
      />
    </>
  );
}

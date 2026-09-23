import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { COUNTIES, EXPANSION_MARKETS, SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Coverage Areas",
  description:
    "Sefora is built from Kisumu with active plans to grow across Kenya's key commercial regions.",
  path: "/distribution",
});

export default function DistributionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Coverage", path: "/distribution" }])}
      />

      <PageHero
        title="Coverage areas"
        description="Kisumu is our commercial hub today, with active plans to grow our footprint across Kenya's key regions."
      />

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="border border-line bg-sand p-8">
            <p className="font-display text-base italic text-forest">
              Primary market
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">
              {SITE.hub}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
              Kisumu is our commercial hub, the base from which we’re building
              distributor and business relationships across Kenya.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-ink/80">
              {COUNTIES.map((c) => (
                <li key={c.name} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"
                    aria-hidden="true"
                  />
                  {c.name}
                  {c.name === "Kisumu" && (
                    <span className="text-xs text-stone">(hub)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line p-8">
            <p className="font-display text-base italic text-leaf/90">
              Active growth markets
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">
              Where we’re headed next
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">
              We’re actively building toward a presence in these markets as
              part of our national growth plan, moving in step with demand,
              strong distributor partners and the logistics to serve them
              properly.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
              {EXPANSION_MARKETS.map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-stone/50"
                    aria-hidden="true"
                  />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        heading="Elsewhere in Kenya?"
        body="If you're a distributor or business anywhere in Kenya with genuine commercial demand, we want to hear from you."
        primary={{ label: "Make a Business Enquiry", href: "/contact" }}
      />
    </>
  );
}

import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { COUNTIES, EXPANSION_MARKETS, SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Coverage Areas",
  description:
    "Sefora's current coverage is Kisumu and Western Kenya, expanding into further Kenyan markets as commercial traction is proven.",
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
        description="We're building deep coverage in one region before expanding, rather than spreading thin across the whole country from day one."
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
              Kisumu is our commercial hub, the base from which we build
              relationships with distributors and businesses across the wider
              Western Kenya region.
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
              Expansion markets
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">
              Where we’re headed next
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">
              These are opportunity markets, not immediate priorities. We’ll
              move into them as qualified demand, distributor interest and
              logistics make commercial sense, not simply for the sake of a
              wider footprint.
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
        heading="Outside Western Kenya?"
        body="If you're a distributor or business elsewhere in Kenya with genuine commercial demand, we still want to hear from you."
        primary={{ label: "Make a Business Enquiry", href: "/contact" }}
      />
    </>
  );
}

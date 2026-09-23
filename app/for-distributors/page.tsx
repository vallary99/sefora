import CTASection from "@/components/CTASection";
import Accordion from "@/components/Accordion";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { COUNTIES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "For Distributors",
  description:
    "Sefora is looking for FMCG, tissue & paper, and hygiene product distributors across Kenya to carry a new tissue brand into the market.",
  path: "/for-distributors",
});

const EVALUATION_POINTS = [
  {
    title: "Existing product portfolio",
    body: "What you already carry, and how a tissue line fits alongside it.",
  },
  {
    title: "Geographic coverage",
    body: "The areas and customer types your sales network already reaches.",
  },
  {
    title: "Distribution capacity",
    body: "Warehousing, logistics and route to market for a recurring FMCG product.",
  },
  {
    title: "Willingness to introduce a new brand",
    body: "Whether your team has room and appetite to build a new line properly.",
  },
];

const NEXT_STEPS = [
  {
    title: "1. A short commercial conversation",
    body: "About your current portfolio, coverage and capacity, so we understand if it's a fit before either side invests more time.",
  },
  {
    title: "2. Product introduction and sampling",
    body: "Your team evaluates the product directly against what you already stock.",
  },
  {
    title: "3. Terms and first order",
    body: "Pricing, minimum order quantities and delivery terms confirmed in writing, then a first order sized to how you want to trial the relationship.",
  },
];

export default function ForDistributorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "For Distributors", path: "/for-distributors" },
        ])}
      />

      <PageHero
        title="Distribution opportunities with Sefora"
        description="We're looking for distributors who can give Sefora real market access: geographic coverage, an existing customer base and the sales capacity to carry a new tissue brand."
      />

      <section className="mx-auto max-w-content px-6 py-10 lg:px-10 lg:py-14">
        <div className="border border-line bg-sand p-8 lg:p-14">
          <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
            What we look for in a distributor
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-stone">
            We evaluate distributor fit on more than willingness to stock the
            product. These are the main things we consider.
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {EVALUATION_POINTS.map((point, i) => (
              <div key={point.title} className="border-t border-ink/15 pt-5">
                <span className="font-display text-2xl italic text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Priority areas
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              We’re prioritising distributors already active in Kisumu and
              Western Kenya, while actively building relationships with
              national distributors as we grow our footprint across Kenya.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-ink">
              {COUNTIES.map((c, i) => (
                <span key={c.name} className="flex items-center gap-2">
                  {c.name}
                  {i < COUNTIES.length - 1 && (
                    <span className="text-gold-dark" aria-hidden="true">
                      &bull;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              What happens after you enquire
            </h2>
            <div className="mt-4">
              <Accordion
                items={NEXT_STEPS.map((s) => ({
                  title: s.title,
                  body: s.body,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to talk distribution?"
        body="Tell us about your current coverage and customer base, and we'll follow up to see if it's a fit."
        primary={{
          label: "Become a Distributor",
          href: "/contact?intent=distributor",
        }}
      />
    </>
  );
}

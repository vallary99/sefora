import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About Sefora",
  description:
    "Sefora Limited is a Kenyan tissue and hygiene products manufacturer, focused on building direct B2B relationships with distributors and businesses across the country.",
  path: "/about",
});

const SECTIONS = [
  {
    title: "Where we're starting",
    body: "Kisumu is our commercial hub \u2014 the base from which we're building distributor and business relationships across Kenya. It gives us a strong operational foundation as we grow our presence nationally.",
  },
  {
    title: "How we work",
    body: "We compete in an established category alongside well-known brands. Our approach as a new entrant is to be straightforward about it: we're not going to claim decades of history we don't have. Instead, we focus on being easy to reach, clear on specification and pricing, and reliable once an order is placed.",
  },
  {
    title: "What we're building toward",
    body: "A structured, repeatable way of connecting market intelligence, the right accounts and the right decision-makers with a genuine commercial conversation, leading to a first order, and then a supply relationship worth keeping.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />

      <PageHero
        title="A Kenyan tissue manufacturer, built deliberately."
        description="Sefora is a Kenyan tissue and hygiene products manufacturer, focused on direct B2B relationships with distributors and businesses."
      />

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-lg leading-relaxed text-stone">
            We&rsquo;re building the business the way most serious B2B manufacturers do: not
            through broad consumer advertising, but through direct relationships with the
            distributors and businesses who make a market work.
          </p>
        </RevealOnScroll>

        {/* Quick facts */}
        <div className="mt-10 grid grid-cols-2 gap-8 border border-line bg-sand p-8 sm:grid-cols-4 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">Base</p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">{SITE.hub}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">Categories</p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">4 product lines</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">Serving</p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">Distributors &amp; businesses</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">Reach</p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">Growing across Kenya</p>
          </div>
        </div>
      </section>

      {/* Alternating title / description cards */}
      {SECTIONS.map((s, i) => {
        const tinted = i % 2 === 1;
        const reverse = i % 2 === 1;
        return (
          <section key={s.title} className={tinted ? "bg-sand" : "bg-white"}>
            <div className="mx-auto max-w-content px-6 py-12 lg:px-10 lg:py-16">
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <div className={reverse ? "lg:order-2" : ""}>
                  <span className="font-display text-3xl italic text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold text-ink lg:text-3xl">
                    {s.title}
                  </h2>
                </div>
                <div className={reverse ? "lg:order-1" : ""}>
                  <p className="max-w-2xl text-base leading-relaxed text-stone">{s.body}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        tone="light"
        heading="Want to know more before you buy?"
        body="Ask us anything: product specification, pricing structure, delivery into your area, or how we work with distributors."
        primary={{ label: "Make a Business Enquiry", href: "/contact" }}
        secondary={{ label: "See our coverage areas", href: "/distribution" }}
      />
    </>
  );
}

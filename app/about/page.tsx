import CTASection from "@/components/CTASection";
import RevealOnScroll from "@/components/RevealOnScroll";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About Sefora",
  description:
    "Sefora Limited is a new tissue brand entering the Kenyan market, focused on building direct B2B relationships with distributors and manufacturers in Western Kenya.",
  path: "/about",
});

const SECTIONS = [
  {
    title: "Where we're starting",
    body: "Our initial focus is Kisumu and Western Kenya. We've chosen to go deep in one region first, proving the product, the service and the relationships, rather than spreading thin across the whole country from day one. Kisumu serves as our commercial hub for the wider region, with additional Kenyan markets pursued as commercial traction is proven.",
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

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <RevealOnScroll className="max-w-2xl">
          <p className="font-display text-base italic text-leaf/90">About Sefora</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-ink lg:text-5xl">
            A new tissue supplier, built deliberately.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Sefora is a new tissue and paper hygiene brand entering the Kenyan market.
            We&rsquo;re building the business the way most serious B2B suppliers do: not through
            broad consumer advertising, but through direct relationships with the distributors
            and manufacturers who make a market work.
          </p>
        </RevealOnScroll>

        {/* Quick facts */}
        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-line py-8 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">Coverage</p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">{SITE.region}</p>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-stone">Hub</p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">{SITE.hub}</p>
          </div>
        </div>

        {/* Numbered sections */}
        <div className="mt-4 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="border-t border-ink/15 pt-5">
              <span className="font-display text-2xl italic text-gold-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-display text-xl font-bold text-ink">{s.title}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-stone">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

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

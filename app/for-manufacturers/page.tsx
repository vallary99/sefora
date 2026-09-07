import CTASection from "@/components/CTASection";
import Accordion from "@/components/Accordion";
import UseCaseGrid from "@/components/UseCaseGrid";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "For Manufacturers & Businesses",
  description:
    "Recurring commercial tissue supply for manufacturers and businesses in Western Kenya: washrooms, staff welfare, production environments and hospitality.",
  path: "/for-manufacturers",
});

const QUESTIONS = [
  {
    title: "Why a standing supplier instead of repeat one-off orders?",
    body: "A standing arrangement means consistent stock, a known point of contact, and pricing that reflects an ongoing relationship rather than a single transaction.",
  },
  {
    title: "What will Sefora ask us before quoting?",
    body: "A short conversation about your current requirement, approximate volumes, delivery frequency and current supplier, so we can put together a relevant quotation rather than a generic price list.",
  },
  {
    title: "Can we start with a sample before committing?",
    body: "Yes. We offer samples to prospective business customers as a standard part of the process, so you can evaluate the product before any order is placed.",
  },
];

export default function ForManufacturersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "For Manufacturers & Businesses",
            path: "/for-manufacturers",
          },
        ])}
      />

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-ink lg:text-5xl">
            One supplier for a recurring requirement
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            If your organisation buys tissue products repeatedly, for washrooms,
            staff welfare, production areas or hospitality, Sefora can supply it
            as a standing arrangement rather than a series of one-off purchases.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-10 lg:px-10 lg:py-14">
        <div className="border border-line bg-sand p-8 lg:p-14">
          <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
            Where this typically fits
          </h2>
          <div className="mt-8">
            <UseCaseGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
          Common questions
        </h2>
        <div className="mt-6 max-w-2xl">
          <Accordion items={QUESTIONS} />
        </div>
      </section>

      <CTASection
        heading="Set up a standing supply arrangement"
        body="Tell us your current tissue requirement and where you're based, and we'll follow up with a quotation."
        primary={{ label: "Request a Quote", href: "/contact?intent=quote" }}
        secondary={{ label: "Make a Business Enquiry", href: "/contact" }}
      />
    </>
  );
}

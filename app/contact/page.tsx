import { Mail, Phone, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import EnquiryForm from "@/components/EnquiryForm";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contact & Business Enquiries",
  description:
    "Request a quote, request a sample, or start a distribution conversation with Sefora's commercial team.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;
  const defaultIntent = ["quote", "sample", "distributor", "general"].includes(intent ?? "")
    ? (intent as string)
    : "general";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />

      <section className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-ink lg:text-5xl">
            Talk to the commercial team
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Whether you&rsquo;re requesting a quote, a sample, or exploring a distribution
            partnership, tell us a bit about your business and we&rsquo;ll respond within one
            business day.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              Send a business enquiry
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-stone">
              Pick what you need below, tell us about your business, and we&rsquo;ll follow up
              directly. No account, no sign-up, no waiting in a queue.
            </p>
            <div className="mt-6 space-y-4 border-l-2 border-gold pl-5">
              <p className="text-sm leading-relaxed text-ink/80">
                Distributors: tell us your current coverage and portfolio.
              </p>
              <p className="text-sm leading-relaxed text-ink/80">
                Businesses: tell us your product and estimated volumes.
              </p>
              <p className="text-sm leading-relaxed text-ink/80">
                Everyone else: just tell us what you&rsquo;re after.
              </p>
            </div>

            <div className="mt-10 space-y-5 border-t border-line pt-8">
              <a href={`mailto:${SITE.email}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                  <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-stone">
                    Email
                  </span>
                  <span className="block text-[15px] font-medium text-ink">{SITE.email}</span>
                </span>
              </a>
              <a href={`tel:${SITE.phone}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                  <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-stone">
                    Phone
                  </span>
                  <span className="block text-[15px] font-medium text-ink">{SITE.phone}</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <MapPin size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-stone">
                    Commercial hub
                  </span>
                  <span className="block text-[15px] font-medium text-ink">{SITE.hub}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="border border-line bg-white p-7 shadow-xl shadow-ink/5 lg:p-10">
            <EnquiryForm defaultIntent={defaultIntent} />
          </div>
        </div>
      </section>
    </>
  );
}

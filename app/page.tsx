import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE, BD_STAGES } from "@/lib/constants";
import AudienceHero from "@/components/AudienceHero";
import AudienceSplit from "@/components/AudienceSplit";
import ProcessStepper from "@/components/ProcessStepper";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";
import Eyebrow from "@/components/Eyebrow";
import GoldWave from "@/components/GoldWave";
import FeatureStrip from "@/components/FeatureStrip";
import RangeTiles from "@/components/RangeTiles";
import WhySefora from "@/components/WhySefora";

export const metadata = buildMetadata({
  title: `${SITE.name}: Quality Tissue & Hygiene Products, Made in Kenya`,
  description:
    "Sefora Limited manufactures tissue and hygiene products for distributors and businesses across Kenya, based in Kisumu. Request a quote, sample, or distribution partnership.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(60% 80% at 88% 0%, rgba(139,195,74,0.18), transparent 62%), radial-gradient(50% 60% at 0% 100%, rgba(232,185,35,0.12), transparent 60%), #fbf8f1",
        }}
      >
        <GoldWave className="absolute inset-x-0 bottom-0 z-[5] h-20 w-full lg:h-32" />
        <div className="relative z-10 grid items-center lg:grid-cols-[1fr_1.3fr]">
          <div className="relative z-20 order-2 min-w-0 px-6 pb-20 pt-2 lg:order-none lg:py-20 lg:pl-[max(2.5rem,calc((100vw-75rem)/2+2.5rem))] lg:pr-0">
            <AudienceHero />
          </div>
          <div className="relative order-1 lg:order-none lg:-ml-24">
            <Image
              src="/products/sefora-hero.jpg"
              alt="The Sefora Tissues range on marble: 10 pack, jumbo roll, 4 pack and double pack, all 2-ply"
              width={1672}
              height={941}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="hero-blend h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-content px-6 py-8 lg:px-10 lg:py-16">
        <RevealOnScroll>
          <FeatureStrip />
        </RevealOnScroll>
      </section>

      {/* Range */}
      <section className="mx-auto max-w-content px-6 pb-12 lg:px-10 lg:pb-24">
        <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
          <RevealOnScroll>
            <Eyebrow>Our products</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-forest-dark lg:mt-5 lg:text-[2.6rem]">
              A Complete Range for Your Needs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              From jumbo rolls to convenient multipacks, Sefora Tissues cover the formats your
              customers and facilities actually buy, with more categories on the way.
            </p>
            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-forest-dark px-6 py-3 text-sm font-semibold text-forest-dark transition-colors hover:bg-forest-dark hover:text-white"
            >
              View All Products <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <RangeTiles />
            <p className="mt-5 text-sm text-stone">
              <span className="font-semibold text-forest-dark">Next in the range: </span>
              Kitchen Towels, Wet Wipes and Serviettes.{" "}
              <Link
                href="/products#coming-soon"
                className="font-medium text-forest-dark underline decoration-gold decoration-2 underline-offset-4 hover:text-forest"
              >
                Find out more
              </Link>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Sefora */}
      <section className="mx-auto max-w-content px-6 pb-12 lg:px-10 lg:pb-24">
        <RevealOnScroll>
          <WhySefora />
        </RevealOnScroll>
      </section>

      {/* Who we serve */}
      <section className="pb-2 lg:pb-6">
        <div className="mx-auto max-w-content px-6 pb-5 lg:px-10 lg:pb-8">
          <RevealOnScroll>
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="mt-4 text-3xl text-forest-dark lg:mt-5 lg:text-5xl">Built for B2B buyers</h2>
          </RevealOnScroll>
        </div>
        <AudienceSplit />
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-content px-6 pt-10 lg:px-10 lg:pt-20">
        <RevealOnScroll>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mb-4 mt-4 text-3xl text-forest-dark lg:mb-6 lg:mt-5 lg:text-5xl">
            How a supply relationship starts
          </h2>
        </RevealOnScroll>
      </section>
      <section className="mx-auto max-w-content px-6 pb-12 lg:px-10 lg:pb-24">
        <ProcessStepper stages={BD_STAGES} />
      </section>

      <CTASection
        heading="Experience the Sefora difference"
        body="Whether you're evaluating us as a distributor, sourcing tissue for your business, or just want to see specifications and pricing, we'll respond within one business day."
        primary={{ label: "Request a Quote", href: "/contact?intent=quote" }}
        secondary={{ label: "Request a Sample", href: "/contact?intent=sample" }}
      />
    </>
  );
}

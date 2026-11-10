import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

export default function AudienceHero() {
  return (
    <div>
      <Eyebrow>Premium tissue solutions</Eyebrow>
      <h1 className="mt-6 text-[3.1rem] leading-[1.02] text-forest-dark sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
        <span className="block">Quality You</span>
        <span className="block">Can Feel</span>
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 lg:text-lg">
        Soft, reliable tissue and hygiene products, manufactured in Kenya for distributors and
        businesses, and delivered from our base in Kisumu.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Link
          href="/contact?intent=quote"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark"
        >
          Request a Quote
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-forest-dark px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-forest"
        >
          Explore Our Products <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

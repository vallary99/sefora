import Link from "next/link";

export default function AudienceHero() {
  return (
    <div>
      <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] text-ink sm:text-6xl lg:text-[4.25rem]">
        <em className="italic text-forest">Reliable tissue supply</em> for Western Kenya.
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#5a625d]">
        Toilet tissue, kitchen towel, serviettes and wet wipes, supplied from Kisumu to
        businesses and distributors across Western Kenya.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link
          href="/contact?intent=quote"
          className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[15px] font-semibold text-ink transition-transform duration-200 hover:scale-[1.03] hover:bg-gold-dark"
        >
          Request a Quote
        </Link>
        <Link
          href="/products"
          className="border-b border-ink/25 pb-1 text-[15px] font-medium text-ink transition-colors hover:border-forest hover:text-forest"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}

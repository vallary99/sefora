import Link from "next/link";

export default function AudienceSplit() {
  return (
    <div className="mx-auto grid max-w-content gap-4 px-6 sm:grid-cols-2 lg:gap-6 lg:px-10">
      <Link
        href="/for-distributors"
        className="group relative flex min-h-[20rem] flex-col justify-end overflow-hidden bg-forest-dark p-8 transition-colors duration-300 hover:bg-ink lg:p-10"
      >
        <span className="font-display text-2xl italic text-gold-dark/70">
          01
        </span>
        <h3 className="mt-3 font-display text-3xl font-bold text-white transition-colors duration-300 group-hover:text-gold lg:text-4xl">
          Distributors
        </h3>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
          FMCG, tissue and hygiene distributors adding a new line. We evaluate
          fit on coverage and distribution capacity, not just shelf space.
        </p>
        <span className="mt-6 inline-block w-fit border-b border-white/30 pb-1 text-sm font-medium text-white transition-colors group-hover:border-gold group-hover:text-gold">
          Distribution opportunities
        </span>
      </Link>

      <Link
        href="/for-manufacturers"
        className="group relative flex min-h-[20rem] flex-col justify-end overflow-hidden bg-sand p-8 transition-colors duration-300 hover:bg-gold/15 lg:p-10"
      >
        <span className="font-display text-2xl italic text-forest/50">02</span>
        <h3 className="mt-3 font-display text-3xl font-bold text-ink transition-colors duration-300 group-hover:text-forest lg:text-4xl">
          Manufacturers &amp; businesses
        </h3>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-stone">
          Standing tissue requirements for washrooms, welfare and production, on
          one reliable supply arrangement rather than repeat one-off buying.
        </p>
        <span className="mt-6 inline-block w-fit border-b border-ink/25 pb-1 text-sm font-medium text-ink transition-colors group-hover:border-forest group-hover:text-forest">
          Recurring B2B supply
        </span>
      </Link>
    </div>
  );
}

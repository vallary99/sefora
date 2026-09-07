import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-display text-lg italic text-forest">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink lg:text-4xl">
        We couldn’t find that page
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-stone">
        The page may have moved or the link may be out of date. Try the
        homepage, or go straight to products or contact.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-dark"
        >
          Go to homepage
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center justify-center border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-forest hover:text-forest"
        >
          View products
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-forest hover:text-forest"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}

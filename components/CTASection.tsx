import Link from "next/link";

export default function CTASection({
  heading,
  body,
  primary,
  secondary,
  tone = "dark",
}: {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <section className="mx-auto max-w-content px-6 py-10 lg:px-10 lg:py-14">
      <div
        className={`p-8 lg:p-14 ${
          isLight ? "border border-line bg-sand" : "bg-forest"
        }`}
      >
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2
              className={`font-display text-3xl font-bold lg:text-4xl ${
                isLight ? "text-ink" : "text-white"
              }`}
            >
              {heading}
            </h2>
            <p className={`mt-4 text-base leading-relaxed ${isLight ? "text-stone" : "text-white/75"}`}>
              {body}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center bg-gold px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-dark"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className={
                  isLight
                    ? "inline-flex items-center justify-center border border-ink/25 px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-forest hover:text-forest"
                    : "inline-flex items-center justify-center border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                }
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

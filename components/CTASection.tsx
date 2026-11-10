import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GoldWave from "./GoldWave";

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
        className={`relative overflow-hidden rounded-[2rem] p-8 lg:p-14 ${
          isLight ? "border border-line bg-sand" : "bg-forest-dark"
        }`}
      >
        {!isLight && (
          <GoldWave className="absolute inset-x-0 top-0 h-14 w-full -scale-y-100 opacity-90 lg:h-20" />
        )}
        <div className="relative flex flex-col items-start justify-between gap-8 pt-6 lg:flex-row lg:items-end lg:pt-10">
          <div className="max-w-xl">
            <h2
              className={`text-3xl leading-tight lg:text-4xl ${isLight ? "text-forest-dark" : "text-white"}`}
            >
              {heading}
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${isLight ? "text-stone" : "text-white/75"}`}
            >
              {body}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-dark"
            >
              {primary.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className={`inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-[15px] font-semibold transition-colors ${
                  isLight
                    ? "border-forest-dark/30 text-forest-dark hover:border-forest hover:text-forest"
                    : "border-white/35 text-white hover:bg-white/10"
                }`}
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

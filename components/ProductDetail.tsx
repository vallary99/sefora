"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductDetail({
  product,
  tinted,
  reverse,
}: {
  product: Product;
  tinted?: boolean;
  reverse?: boolean;
}) {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const current =
    selectedPack && product.packImages?.[selectedPack]
      ? product.packImages[selectedPack]
      : { src: product.image, alt: product.imageAlt };

  const imageColClass = reverse ? "lg:order-2 lg:col-start-2" : "lg:col-start-1";
  const textColClass = reverse ? "lg:col-start-1" : "lg:col-start-2";

  return (
    <section id={product.slug} className={`scroll-mt-32 ${tinted ? "bg-sand" : "bg-white"}`}>
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div
            className={`order-1 aspect-[4/3] overflow-hidden lg:row-span-2 lg:aspect-auto ${imageColClass}`}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Quick actions: pack sizes + CTAs — right after the image on mobile */}
          <div className={`order-2 lg:order-2 lg:row-start-2 ${textColClass}`}>
            {product.packSizes && (
              <div>
                <p className="text-sm font-semibold text-ink">Pack sizes</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.packSizes.map((p) => {
                    const isActive =
                      selectedPack === p || (!selectedPack && p === product.packSizes![0]);
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelectedPack(p)}
                        aria-pressed={isActive}
                        className={`px-3.5 py-1.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "border border-gold-dark bg-gold/15 text-ink"
                            : "border border-line bg-white text-ink hover:border-gold-dark"
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div
              className={`flex flex-wrap items-center gap-x-8 gap-y-3 ${
                product.packSizes ? "mt-6" : ""
              }`}
            >
              <Link
                href="/contact?intent=quote"
                className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-dark"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact?intent=sample"
                className="border-b border-line pb-1 text-sm font-medium text-ink transition-colors hover:border-forest hover:text-forest"
              >
                Request a Sample
              </Link>
            </div>
          </div>

          {/* Details: category / name / summary / spec / ideal usage */}
          <div className={`order-3 flex flex-col justify-center lg:order-1 lg:row-start-1 ${textColClass}`}>
            <p className="font-display text-base italic text-leaf/90">{product.category}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink lg:text-4xl">
              {product.name}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-stone">{product.summary}</p>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/70">
              Supplied as <span className="font-medium text-ink">{product.format}</span>, ordered
              as a <span className="font-medium text-ink">{product.orderBasis.toLowerCase()}</span>.{" "}
              {product.specNote}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone">
              <span className="font-semibold text-ink">Ideal usage: </span>
              {product.useCases.join(", ")}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

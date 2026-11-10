"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import Eyebrow from "./Eyebrow";

export default function ProductDetail({ product }: { product: Product }) {
  const packs = product.packSizes ?? [];
  const [selectedPack, setSelectedPack] = useState<string>(packs[0] ?? "");

  const selected = product.packImages?.[selectedPack];
  const current = selected ?? { src: product.image, alt: product.imageAlt, caption: "" };

  return (
    <section id={product.slug} className="scroll-mt-32">
      <div className="mx-auto max-w-content px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          {/* Image: shown whole, never cropped */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-sand shadow-[0_30px_70px_-35px_rgba(10,33,22,0.5)]">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain"
            />
          </div>

          <div>
            <Eyebrow>{product.category}</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight text-forest-dark lg:text-5xl">
              {product.name}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-stone">{product.summary}</p>

            {packs.length > 0 && (
              <div className="mt-7">
                <p className="text-sm font-semibold text-ink">Choose a format</p>
                <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Pack formats">
                  {packs.map((p) => {
                    const isActive = selectedPack === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelectedPack(p)}
                        aria-pressed={isActive}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-forest-dark text-white"
                            : "border border-line bg-white text-ink hover:border-forest"
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
                {current.caption && (
                  <p className="mt-3 text-sm italic text-stone" aria-live="polite">
                    {current.caption}
                  </p>
                )}
              </div>
            )}

            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-ink/70">
              Supplied as <span className="font-medium text-ink">{product.format}</span>, ordered
              as a <span className="font-medium text-ink">{product.orderBasis.toLowerCase()}</span>.{" "}
              {product.specNote}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone">
              <span className="font-semibold text-ink">Ideal usage: </span>
              {product.useCases.join(", ")}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?intent=quote"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-dark"
              >
                Request a Quote <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/contact?intent=sample"
                className="inline-flex items-center rounded-full border border-forest-dark/30 px-7 py-3.5 text-sm font-semibold text-forest-dark transition-colors hover:border-forest hover:bg-white"
              >
                Request a Sample
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

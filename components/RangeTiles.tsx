import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const TILE_NOTES: Record<string, string> = {
  "Jumbo Roll": "High-capacity roll",
  "Double Pack": "Compact & easy to stock",
  "4 Pack": "Convenient & practical",
  "10 Pack": "Great for families",
};

export default function RangeTiles() {
  const product = PRODUCTS[0];
  const packs = product.packSizes ?? [];
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
      {packs.map((name) => {
        const img = product.packImages![name];
        return (
          <li key={name}>
            <Link
              href="/products#toilet-tissue"
              className="group block h-full rounded-2xl bg-sand p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(10,33,22,0.35)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-1 pb-2 pt-4 text-center">
                <p className="font-display text-lg text-forest-dark">{name}</p>
                <p className="mt-0.5 text-sm text-stone">{TILE_NOTES[name]}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Repeat, MapPin, ClipboardCheck } from "lucide-react";
import Eyebrow from "./Eyebrow";

const POINTS = [
  { icon: Handshake, label: "Direct from the manufacturer" },
  { icon: Repeat, label: "Consistent, standing supply" },
  { icon: MapPin, label: "Based in Kisumu, built for Kenya" },
  { icon: ClipboardCheck, label: "Clear specification and pricing" },
];

export default function WhySefora() {
  return (
    <div className="grid overflow-hidden rounded-[2rem] bg-sand lg:grid-cols-[1fr_1.05fr]">
      <div className="flex items-center p-6 lg:p-10">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-28px_rgba(10,33,22,0.5)]">
          <Image
            src="/products/sefora-label-closeup-wide.jpg"
            alt="Sefora Tissues double pack label detail with the Soft & Gentle, Super Absorbent and Natural Comfort promises"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center px-6 pb-10 pt-2 lg:px-12 lg:py-14">
        <Eyebrow>Why Sefora</Eyebrow>
        <h2 className="mt-5 text-4xl leading-tight text-forest-dark lg:text-5xl">
          More Than Just Tissues
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-stone">
          Sefora is a Kenyan tissue and hygiene products manufacturer, committed to quality,
          comfort and a straightforward commercial relationship with every distributor and
          business we work with.
        </p>
        <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/60 text-forest">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium leading-snug text-ink">{label}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-forest-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest"
        >
          Discover the Sefora Difference <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

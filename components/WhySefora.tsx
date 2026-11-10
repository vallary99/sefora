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
    <div className="grid overflow-hidden rounded-[2rem] bg-sand lg:grid-cols-[1.1fr_1fr]">
      <div className="relative flex items-center justify-center">
        <Image
          src="/products/sefora-tissue-soft.jpg"
          alt="Soft white tissue rolls with a sheet drawn from the centre"
          width={736}
          height={946}
          sizes="(min-width: 1024px) 600px, 100vw"
          className="soft-blend h-auto w-full max-w-md lg:max-w-none"
        />
      </div>
      <div className="flex flex-col justify-center px-5 pb-7 pt-2 lg:px-12 lg:py-14">
        <Eyebrow>Why Sefora</Eyebrow>
        <h2 className="mt-4 text-3xl leading-tight text-forest-dark lg:mt-5 lg:text-5xl">
          More Than Just Tissues
        </h2>
        <p className="mt-4 hidden max-w-lg text-base sm:block lg:mt-5 leading-relaxed text-stone">
          Sefora is a Kenyan tissue and hygiene products manufacturer, committed to quality,
          comfort and a straightforward commercial relationship with every distributor and
          business we work with.
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2.5 lg:mt-8 lg:gap-x-6 lg:gap-y-5">
          {POINTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-start gap-2.5 rounded-2xl bg-white p-3.5 lg:flex-row lg:items-center lg:gap-3 lg:rounded-none lg:bg-transparent lg:p-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/60 text-forest">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-snug text-ink lg:text-[15px]">{label}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-6 inline-flex w-full justify-center lg:mt-9 lg:w-fit items-center gap-2 rounded-full bg-forest-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest"
        >
          Discover the Sefora Difference <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

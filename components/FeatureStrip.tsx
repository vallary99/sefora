import { Leaf, Droplets, ShieldCheck, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Leaf, title: "Soft & Gentle", body: "2-ply tissue made for comfort" },
  { icon: Droplets, title: "Super Absorbent", body: "Designed for everyday use" },
  { icon: ShieldCheck, title: "Natural Comfort", body: "For homes and washrooms alike" },
  { icon: MapPin, title: "Made in Kenya", body: "By Sefora Co. Kenya Ltd" },
];

export default function FeatureStrip() {
  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-0">
      {FEATURES.map(({ icon: Icon, title, body }, i) => (
        <li
          key={title}
          className={`flex flex-col items-center rounded-2xl bg-sand px-3 py-5 text-center lg:rounded-none lg:bg-transparent lg:px-6 lg:py-0 ${
            i > 0 ? "lg:border-l lg:border-gold/50" : ""
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-dark text-gold lg:h-16 lg:w-16 lg:border lg:border-forest lg:bg-transparent lg:text-forest">
            <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <h3 className="mt-3 font-display text-base lg:mt-4 lg:text-xl text-forest-dark lg:text-xl">{title}</h3>
          <p className="mt-1 text-[13px] leading-snug text-stone lg:text-sm">{body}</p>
        </li>
      ))}
    </ul>
  );
}

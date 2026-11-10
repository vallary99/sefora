import { Leaf, Droplets, ShieldCheck, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Leaf, title: "Soft & Gentle", body: "2-ply tissue made for comfort" },
  { icon: Droplets, title: "Super Absorbent", body: "Designed for everyday use" },
  { icon: ShieldCheck, title: "Natural Comfort", body: "For homes and washrooms alike" },
  { icon: MapPin, title: "Made in Kenya", body: "By Sefora Co. Kenya Ltd" },
];

export default function FeatureStrip() {
  return (
    <ul className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
      {FEATURES.map(({ icon: Icon, title, body }, i) => (
        <li
          key={title}
          className={`flex flex-col items-center px-3 text-center lg:px-6 ${
            i > 0 ? "lg:border-l lg:border-gold/50" : ""
          }`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-forest text-forest">
            <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-lg text-forest-dark lg:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-stone">{body}</p>
        </li>
      ))}
    </ul>
  );
}

import {
  Droplets,
  Coffee,
  Factory,
  Building2,
  Hotel,
  Landmark,
  type LucideIcon,
} from "lucide-react";

type UseCase = {
  icon: LucideIcon;
  title: string;
  body: string;
  featured?: boolean;
};

const USE_CASES: UseCase[] = [
  {
    icon: Droplets,
    title: "Employee washrooms",
    body: "The steady, unavoidable baseline of any facility. Getting the standing order right here means it never becomes a Monday morning problem.",
    featured: true,
  },
  {
    icon: Coffee,
    title: "Staff welfare & break rooms",
    body: "Kitchen towel and tissue for shared spaces, usually ordered alongside washroom supply rather than separately.",
  },
  {
    icon: Factory,
    title: "Production environments",
    body: "Wipe-down and hygiene needs on the floor, where consistency of supply matters more than brand recognition.",
  },
  {
    icon: Building2,
    title: "Offices & reception areas",
    body: "Wet wipes and washroom tissue where visitors and staff meet, often the first thing noticed about a facilities supplier.",
  },
  {
    icon: Hotel,
    title: "Hospitality & guest facilities",
    body: "Guest-facing volumes with less tolerance for stockouts, where a reliable delivery schedule matters as much as the product.",
  },
  {
    icon: Landmark,
    title: "Institutional requirements",
    body: "Schools, health facilities and other institutions with a recurring, budget-conscious tissue requirement.",
  },
];

export default function UseCaseGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {USE_CASES.map(({ icon: Icon, title, body, featured }) => (
        <div
          key={title}
          className={`border-t border-ink/15 pt-6 ${featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
            <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
        </div>
      ))}
    </div>
  );
}

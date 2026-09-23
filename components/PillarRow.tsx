const PILLARS = [
  {
    n: "01",
    title: "Direct",
    body: "Straight to distributors and businesses, not through layers of resellers.",
  },
  {
    n: "02",
    title: "Consistent",
    body: "A standing commercial relationship, not repeat one-off orders.",
  },
  {
    n: "03",
    title: "Kisumu-based",
    body: "Our operational base, and the launchpad for growth across Kenya.",
  },
  {
    n: "04",
    title: "Straightforward",
    body: "Clear specification and pricing, confirmed before you commit.",
  },
];

export default function PillarRow() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {PILLARS.map(({ n, title, body }) => (
        <div key={title} className="group border-t border-line pt-5 transition-colors hover:border-gold-dark">
          <span className="font-display text-3xl italic text-gold-dark transition-transform duration-200 group-hover:translate-x-1">
            {n}
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-ink">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
        </div>
      ))}
    </div>
  );
}

export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-forest-dark">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-10 lg:py-16">
        <h1 className="font-display text-3xl font-bold text-white lg:text-4xl">{title}</h1>
        {description && (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}

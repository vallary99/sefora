import Eyebrow from "./Eyebrow";
import GoldWave from "./GoldWave";

export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(55% 90% at 90% 0%, rgba(139,195,74,0.16), transparent 62%), radial-gradient(45% 70% at 0% 100%, rgba(232,185,35,0.10), transparent 60%), #fbf8f1",
      }}
    >
      <div className="relative z-10 mx-auto max-w-content px-6 pb-16 pt-12 lg:px-10 lg:pb-20 lg:pt-16">
        <Eyebrow>Sefora Tissues</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-forest-dark sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone lg:text-lg">
            {description}
          </p>
        )}
      </div>
      <GoldWave className="absolute inset-x-0 bottom-0 z-0 h-16 w-full lg:h-24" />
    </section>
  );
}

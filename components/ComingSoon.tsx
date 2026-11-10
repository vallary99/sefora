import Link from "next/link";
import { ArrowRight, Scroll, Sparkles, Utensils } from "lucide-react";
import { UPCOMING_CATEGORIES } from "@/lib/products";
import Eyebrow from "./Eyebrow";

const ICONS: Record<string, typeof Scroll> = {
  "kitchen-towels": Scroll,
  "wet-wipes": Sparkles,
  serviettes: Utensils,
};

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="scroll-mt-32 mx-auto max-w-content px-6 pb-16 lg:px-10 lg:pb-24">
      <div className="rounded-[2rem] border border-line bg-ivory p-8 lg:p-14">
        <div className="max-w-xl">
          <Eyebrow>Coming soon</Eyebrow>
          <h2 className="mt-5 text-3xl text-forest-dark lg:text-4xl">The range is growing</h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            Toilet tissue is the first of several Sefora categories. Tell us what your business
            will need and we&rsquo;ll keep you first in line as each one is launched.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {UPCOMING_CATEGORIES.map((c) => {
            const Icon = ICONS[c.slug] ?? Sparkles;
            return (
              <li key={c.slug} className="rounded-2xl bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/60 text-forest">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl text-forest-dark">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{c.blurb}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  Coming soon
                </p>
              </li>
            );
          })}
        </ul>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-dark underline decoration-gold decoration-2 underline-offset-[6px] transition-colors hover:text-forest"
        >
          Enquire about availability <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

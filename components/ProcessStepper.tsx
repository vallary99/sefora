"use client";

import { useState } from "react";

type Stage = { title: string; body: string };

export default function ProcessStepper({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-forest-dark p-8 text-white lg:p-14">
      <div className="flex flex-wrap gap-2 sm:flex-nowrap">
        {stages.map((stage, i) => (
          <button
            key={stage.title}
            type="button"
            onClick={() => setActive(i)}
            aria-current={active === i}
            className="group flex-1 text-left"
          >
            <span
              className={`block h-0.5 w-full transition-colors ${
                i <= active ? "bg-gold" : "bg-white/15"
              }`}
              aria-hidden="true"
            />
            <span
              className={`mt-3 block text-sm font-medium transition-colors ${
                active === i
                  ? "text-gold"
                  : "text-white/45 group-hover:text-white/80"
              }`}
            >
              {stage.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-12">
        <span className="font-display text-8xl italic leading-none text-white/10 lg:text-9xl">
          {String(active + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-3xl font-bold lg:text-4xl">
            {stages[active].title}
          </h3>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/65">
            {stages[active].body}
          </p>
          <div className="mt-7 flex gap-6">
            <button
              type="button"
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="border-b border-white/30 pb-1 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold disabled:opacity-20"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() =>
                setActive((a) => Math.min(stages.length - 1, a + 1))
              }
              disabled={active === stages.length - 1}
              className="border-b border-white/30 pb-1 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold disabled:opacity-20"
            >
              Next step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Decorative gold swoosh, echoing the curved stripe on the Sefora packaging. */
export default function GoldWave({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id="goldwave" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#e8b923" stopOpacity="0" />
          <stop offset="0.25" stopColor="#e8b923" stopOpacity="0.95" />
          <stop offset="0.7" stopColor="#b8900f" stopOpacity="0.7" />
          <stop offset="1" stopColor="#e8b923" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 100 C 260 30, 520 130, 820 70 S 1260 20, 1440 70"
        fill="none"
        stroke="url(#goldwave)"
        strokeWidth="2.5"
      />
      <path
        d="M0 118 C 280 52, 540 146, 840 90 S 1280 44, 1440 92"
        fill="none"
        stroke="url(#goldwave)"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

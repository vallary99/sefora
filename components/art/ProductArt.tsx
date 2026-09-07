export function RingArt({ className = "" }: { className?: string }) {
  // Concentric rings, suggesting a rolled paper product in cross-section.
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ringBg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8F5F0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#ringBg)" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#1A4D2E" strokeOpacity="0.08" strokeWidth="28" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#1A4D2E" strokeWidth="1" />
      <circle cx="200" cy="200" r="112" fill="none" stroke="#1A4D2E" strokeOpacity="0.14" strokeWidth="20" />
      <circle cx="200" cy="200" r="112" fill="none" stroke="#1A4D2E" strokeWidth="1" />
      <circle cx="200" cy="200" r="78" fill="none" stroke="#8BC34A" strokeOpacity="0.25" strokeWidth="14" />
      <circle cx="200" cy="200" r="78" fill="none" stroke="#1A4D2E" strokeWidth="1" />
      <circle cx="200" cy="200" r="46" fill="#FFFFFF" stroke="#E8B923" strokeWidth="2.5" />
      <circle cx="200" cy="200" r="16" fill="#1A4D2E" />
    </svg>
  );
}

export function LayerArt({ className = "" }: { className?: string }) {
  // Softly curved stacked sheets, suggesting folded/layered paper.
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <rect width="400" height="400" fill="#F8F5F0" />
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 110 + i * 42;
        const shade = i % 2 === 0 ? "#FFFFFF" : "#FBFAF7";
        return (
          <g key={i}>
            <path
              d={`M40 ${y} Q200 ${y - 20} 360 ${y} L360 ${y + 30} Q200 ${y + 10} 40 ${y + 30} Z`}
              fill={shade}
              stroke="#1A4D2E"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
          </g>
        );
      })}
      <path
        d="M40 96 Q200 76 360 96 L360 126 Q200 106 40 126 Z"
        fill="#FFFFFF"
        stroke="#E8B923"
        strokeWidth="2"
      />
    </svg>
  );
}

export function FanArt({ className = "" }: { className?: string }) {
  // Fanned, overlapping sheets radiating from a base point, suggesting folded napkins/serviettes.
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <rect width="400" height="400" fill="#FFFFFF" />
      {[-24, -12, 0, 12, 24].map((angle, i) => (
        <rect
          key={angle}
          x="185"
          y="90"
          width="30"
          height="170"
          rx="6"
          fill={i === 2 ? "#FFFFFF" : "#F8F5F0"}
          stroke="#1A4D2E"
          strokeOpacity="0.2"
          strokeWidth="1"
          transform={`rotate(${angle} 200 270)`}
        />
      ))}
      <circle cx="200" cy="270" r="6" fill="#E8B923" />
    </svg>
  );
}

export function FoldArt({ className = "" }: { className?: string }) {
  // Abstract soft rounded form with a fold crease, evoking a compact pack without depicting real packaging.
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <rect width="400" height="400" fill="#FFFFFF" />
      <rect
        x="90"
        y="130"
        width="220"
        height="140"
        rx="24"
        fill="#F8F5F0"
        stroke="#1A4D2E"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <path
        d="M90 190 Q200 165 310 190"
        fill="none"
        stroke="#1A4D2E"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      <rect x="170" y="118" width="60" height="28" rx="14" fill="#E8B923" />
      <circle cx="200" cy="200" r="10" fill="#8BC34A" />
    </svg>
  );
}

export function HeroArt({ className = "" }: { className?: string }) {
  // Editorial abstract composition for the dark hero: layered sheets behind concentric rings.
  return (
    <svg viewBox="0 0 480 480" className={className} aria-hidden="true">
      <g opacity="0.5">
        <rect
          x="60"
          y="150"
          width="260"
          height="46"
          rx="10"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="1"
          transform="rotate(-6 190 173)"
        />
        <rect
          x="90"
          y="270"
          width="260"
          height="46"
          rx="10"
          fill="none"
          stroke="#8BC34A"
          strokeOpacity="0.4"
          strokeWidth="1"
          transform="rotate(4 220 293)"
        />
      </g>
      <circle cx="300" cy="230" r="150" fill="none" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="300" cy="230" r="112" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="300" cy="230" r="78" fill="none" stroke="#E8B923" strokeOpacity="0.55" strokeWidth="1.5" />
      <circle cx="300" cy="230" r="46" fill="none" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="300" cy="230" r="14" fill="#E8B923" />
    </svg>
  );
}

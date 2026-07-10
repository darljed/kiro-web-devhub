"use client";

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Terminal window */}
      <rect
        x="50"
        y="30"
        width="300"
        height="200"
        rx="12"
        className="fill-zinc-100 stroke-zinc-300 dark:fill-zinc-800 dark:stroke-zinc-700"
        strokeWidth="2"
      >
        <animate
          attributeName="opacity"
          values="0;1"
          dur="0.6s"
          fill="freeze"
        />
      </rect>

      {/* Title bar */}
      <rect
        x="50"
        y="30"
        width="300"
        height="32"
        rx="12"
        className="fill-zinc-200 dark:fill-zinc-700"
      />
      <rect
        x="50"
        y="50"
        width="300"
        height="12"
        className="fill-zinc-200 dark:fill-zinc-700"
      />

      {/* Window dots */}
      <circle cx="72" cy="46" r="5" className="fill-red-400" />
      <circle cx="90" cy="46" r="5" className="fill-yellow-400" />
      <circle cx="108" cy="46" r="5" className="fill-green-400" />

      {/* Code lines with staggered animation */}
      <rect x="75" y="80" width="80" height="8" rx="4" className="fill-purple-400/80">
        <animate
          attributeName="width"
          values="0;80"
          dur="0.5s"
          begin="0.3s"
          fill="freeze"
        />
      </rect>
      <rect x="165" y="80" width="50" height="8" rx="4" className="fill-sky-400/80">
        <animate
          attributeName="width"
          values="0;50"
          dur="0.4s"
          begin="0.5s"
          fill="freeze"
        />
      </rect>

      <rect x="90" y="100" width="120" height="8" rx="4" className="fill-emerald-400/80">
        <animate
          attributeName="width"
          values="0;120"
          dur="0.6s"
          begin="0.6s"
          fill="freeze"
        />
      </rect>
      <rect x="220" y="100" width="60" height="8" rx="4" className="fill-zinc-400/60 dark:fill-zinc-500/60">
        <animate
          attributeName="width"
          values="0;60"
          dur="0.4s"
          begin="0.8s"
          fill="freeze"
        />
      </rect>

      <rect x="90" y="120" width="70" height="8" rx="4" className="fill-amber-400/80">
        <animate
          attributeName="width"
          values="0;70"
          dur="0.4s"
          begin="0.9s"
          fill="freeze"
        />
      </rect>
      <rect x="170" y="120" width="100" height="8" rx="4" className="fill-sky-400/60">
        <animate
          attributeName="width"
          values="0;100"
          dur="0.5s"
          begin="1.0s"
          fill="freeze"
        />
      </rect>

      <rect x="90" y="140" width="150" height="8" rx="4" className="fill-rose-400/70">
        <animate
          attributeName="width"
          values="0;150"
          dur="0.6s"
          begin="1.1s"
          fill="freeze"
        />
      </rect>

      <rect x="75" y="160" width="60" height="8" rx="4" className="fill-purple-400/80">
        <animate
          attributeName="width"
          values="0;60"
          dur="0.4s"
          begin="1.3s"
          fill="freeze"
        />
      </rect>

      <rect x="75" y="180" width="40" height="8" rx="4" className="fill-zinc-400/60 dark:fill-zinc-500/60">
        <animate
          attributeName="width"
          values="0;40"
          dur="0.3s"
          begin="1.5s"
          fill="freeze"
        />
      </rect>

      {/* Cursor blink */}
      <rect x="125" y="180" width="2" height="12" className="fill-zinc-900 dark:fill-zinc-100">
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="1s"
          repeatCount="indefinite"
          begin="1.6s"
        />
      </rect>

      {/* Floating snippets around terminal */}
      <g>
        <rect
          x="10"
          y="140"
          width="35"
          height="35"
          rx="8"
          className="fill-purple-100 stroke-purple-300 dark:fill-purple-900/40 dark:stroke-purple-600"
          strokeWidth="1.5"
        />
        <text
          x="27"
          y="163"
          textAnchor="middle"
          className="fill-purple-600 dark:fill-purple-300"
          fontSize="14"
          fontFamily="monospace"
        >
          {"</>"}
        </text>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,-6;0,0"
          dur="3s"
          repeatCount="indefinite"
        />
      </g>

      <g>
        <rect
          x="360"
          y="80"
          width="30"
          height="30"
          rx="6"
          className="fill-sky-100 stroke-sky-300 dark:fill-sky-900/40 dark:stroke-sky-600"
          strokeWidth="1.5"
        />
        <text
          x="375"
          y="100"
          textAnchor="middle"
          className="fill-sky-600 dark:fill-sky-300"
          fontSize="12"
          fontFamily="monospace"
        >
          {"{ }"}
        </text>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,5;0,0"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </g>

      <g>
        <rect
          x="355"
          y="180"
          width="32"
          height="32"
          rx="7"
          className="fill-emerald-100 stroke-emerald-300 dark:fill-emerald-900/40 dark:stroke-emerald-600"
          strokeWidth="1.5"
        />
        <text
          x="371"
          y="201"
          textAnchor="middle"
          className="fill-emerald-600 dark:fill-emerald-300"
          fontSize="11"
          fontFamily="monospace"
        >
          fn()
        </text>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,-4;0,0"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Copy indicator with pulse */}
      <g>
        <circle cx="320" cy="250" r="14" className="fill-emerald-400/20 dark:fill-emerald-400/10">
          <animate
            attributeName="r"
            values="14;18;14"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="320" cy="250" r="10" className="fill-emerald-500 dark:fill-emerald-400" />
        <path
          d="M315 250 L318 253 L326 246"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

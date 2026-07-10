"use client";

export function SearchIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      aria-hidden="true"
    >
      <circle
        cx="52"
        cy="52"
        r="30"
        className="stroke-purple-500 dark:stroke-purple-400"
        strokeWidth="4"
      >
        <animate
          attributeName="r"
          values="28;30;28"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <line
        x1="74"
        y1="74"
        x2="100"
        y2="100"
        className="stroke-purple-500 dark:stroke-purple-400"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Search dots */}
      <circle cx="40" cy="48" r="3" className="fill-purple-400/60">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="52" cy="48" r="3" className="fill-purple-400/60">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="64" cy="48" r="3" className="fill-purple-400/60">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function OrganizeIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      aria-hidden="true"
    >
      {/* Folder structure */}
      <rect x="20" y="25" width="80" height="15" rx="4" className="fill-sky-200 dark:fill-sky-800/60">
        <animate attributeName="opacity" values="0;1" dur="0.4s" fill="freeze" />
      </rect>
      <rect x="30" y="48" width="70" height="12" rx="3" className="fill-sky-300/60 dark:fill-sky-700/60">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.2s" fill="freeze" />
      </rect>
      <rect x="30" y="66" width="70" height="12" rx="3" className="fill-sky-300/60 dark:fill-sky-700/60">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.4s" fill="freeze" />
      </rect>
      <rect x="30" y="84" width="70" height="12" rx="3" className="fill-sky-300/60 dark:fill-sky-700/60">
        <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.6s" fill="freeze" />
      </rect>
      {/* Tag label */}
      <rect x="55" y="45" width="28" height="10" rx="5" className="fill-sky-500 dark:fill-sky-400">
        <animate attributeName="x" values="55;57;55" dur="2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

export function ShareIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      aria-hidden="true"
    >
      {/* Central node */}
      <circle cx="60" cy="60" r="12" className="fill-emerald-500 dark:fill-emerald-400" />
      {/* Connected nodes */}
      <circle cx="30" cy="30" r="8" className="fill-emerald-300 dark:fill-emerald-600" />
      <circle cx="90" cy="30" r="8" className="fill-emerald-300 dark:fill-emerald-600" />
      <circle cx="30" cy="90" r="8" className="fill-emerald-300 dark:fill-emerald-600" />
      <circle cx="90" cy="90" r="8" className="fill-emerald-300 dark:fill-emerald-600" />
      {/* Lines */}
      <line x1="50" y1="52" x2="36" y2="36" className="stroke-emerald-400 dark:stroke-emerald-500" strokeWidth="2">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="52" x2="84" y2="36" className="stroke-emerald-400 dark:stroke-emerald-500" strokeWidth="2">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </line>
      <line x1="50" y1="68" x2="36" y2="84" className="stroke-emerald-400 dark:stroke-emerald-500" strokeWidth="2">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="68" x2="84" y2="84" className="stroke-emerald-400 dark:stroke-emerald-500" strokeWidth="2">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </line>
      {/* Pulse on center */}
      <circle cx="60" cy="60" r="12" className="stroke-emerald-400 dark:stroke-emerald-300" strokeWidth="2" fill="none">
        <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function CopyIllustration() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      aria-hidden="true"
    >
      {/* Back document */}
      <rect x="35" y="20" width="55" height="70" rx="6" className="fill-amber-200/60 stroke-amber-400 dark:fill-amber-800/30 dark:stroke-amber-600" strokeWidth="2" />
      {/* Front document */}
      <rect x="25" y="30" width="55" height="70" rx="6" className="fill-amber-100 stroke-amber-400 dark:fill-amber-900/40 dark:stroke-amber-500" strokeWidth="2">
        <animate attributeName="x" values="25;28;25" dur="2s" repeatCount="indefinite" />
      </rect>
      {/* Lines on front doc */}
      <rect x="35" y="45" width="30" height="4" rx="2" className="fill-amber-400 dark:fill-amber-500" />
      <rect x="35" y="55" width="25" height="4" rx="2" className="fill-amber-300 dark:fill-amber-600" />
      <rect x="35" y="65" width="35" height="4" rx="2" className="fill-amber-300 dark:fill-amber-600" />
      {/* Checkmark */}
      <circle cx="85" cy="85" r="14" className="fill-emerald-500 dark:fill-emerald-400">
        <animate attributeName="r" values="12;14;12" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <path d="M79 85 L83 89 L92 80" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

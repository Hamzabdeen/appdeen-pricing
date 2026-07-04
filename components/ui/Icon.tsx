import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = (className?: string) =>
  cn("h-5 w-5 shrink-0", className);

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ArrowRight({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Sparkle({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M12 3v4M12 17v4M5 12H1M23 12h-4M6.3 6.3 3.5 3.5M20.5 20.5l-2.8-2.8M6.3 17.7l-2.8 2.8M20.5 3.5l-2.8 2.8" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function Bolt({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export function Clock({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function Seat({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M6 19v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="12" cy="8" r="3.4" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function Users({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
      <circle cx="10" cy="7.5" r="3" />
      <path d="M20 19v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.5 4.7a3 3 0 0 1 0 5.6" />
    </svg>
  );
}

export function Cube({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2Z" />
      <path d="M4 7l8 4.2L20 7M12 11.2V21" />
    </svg>
  );
}

export function Play({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M7 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function Shield({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.4 7 9 4-1.6 7-4.7 7-9V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function Plus({ className, strokeWidth = 1.9 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Pause({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M9 5v14M15 5v14" />
    </svg>
  );
}

export function Eye({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function Chart({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />
    </svg>
  );
}

export function Globe({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" />
    </svg>
  );
}

export function Wrench({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 0-5.3 4.9l-6 6 2.4 2.4 6-6a4 4 0 0 0 4.9-5.3l-2.6 2.6-2.3-.3-.3-2.3 2.5-2.7Z" />
    </svg>
  );
}

export function Mail({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 5 8-5" />
    </svg>
  );
}

export function Target({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Doc({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 13h6M9 17h6" />
    </svg>
  );
}

export function Search({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function Refresh({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M20 11a8 8 0 0 0-14-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14 4.5L20 16M20 20v-4h-4" />
    </svg>
  );
}

export function Send({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

export function ChevronDown({ className, strokeWidth = 1.9 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Gauge({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
      <circle cx="12" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Upload({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M12 15V4M8 8l4-4 4 4M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function Star({ className, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg {...common} strokeWidth={strokeWidth} className={base(className)} aria-hidden>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
    </svg>
  );
}

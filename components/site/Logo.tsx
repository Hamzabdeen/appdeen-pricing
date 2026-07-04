import Link from "next/link";
import { cn } from "@/lib/utils";

/** AppDeen AI mark — glowing rounded triangle with a punched hole. */
export function AppDeenMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-full w-full", className)}
      aria-hidden
      style={{ filter: "drop-shadow(0 2px 10px rgb(60 142 255 / 0.55))" }}
    >
      <defs>
        <linearGradient id="appdeen-mark" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="rgb(var(--brand-bright))" />
          <stop offset="1" stopColor="rgb(var(--brand-deep))" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#appdeen-mark)"
        d="M12 3.6c.75 0 1.43.4 1.8 1.05l6.7 12.55c.72 1.35-.13 3-1.66 3H5.16c-1.53 0-2.38-1.65-1.66-3l6.7-12.55A2.05 2.05 0 0 1 12 3.6Zm0 6.7a2.55 2.55 0 1 0 0 5.1 2.55 2.55 0 0 0 0-5.1Z"
      />
    </svg>
  );
}

export function Logo({
  className,
  onInk = true,
}: {
  className?: string;
  onInk?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="AppDeen AI — home"
    >
      <span className="relative h-8 w-8">
        <AppDeenMark />
      </span>
      <span
        className={cn(
          "text-[1.15rem] font-semibold tracking-tight",
          onInk ? "text-white" : "text-heading"
        )}
      >
        AppDeen <span className="text-gradient">AI</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onInk = false,
}: {
  className?: string;
  onInk?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Appdeen AI — home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-[0.7rem] bg-brand text-white shadow-[0_8px_22px_-8px_rgb(var(--brand)/0.8)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M12 3.2 5 7v10l7 3.8L19 17V7l-7-3.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 14.5 12 8.5l3 6M10.1 12.7h3.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-hours ring-2 ring-brand" />
      </span>
      <span
        className={cn(
          "text-[1.15rem] font-semibold tracking-tight",
          onInk ? "text-white" : "text-heading"
        )}
      >
        Appdeen<span className="text-brand">.</span>
        <span className={onInk ? "text-white/60" : "text-muted"}>ai</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onInk" | "onInkGhost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-10px_rgb(var(--brand)/0.7)] hover:brightness-[1.06] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-heading border border-line hover:border-brand/40 hover:bg-brand-soft/40 hover:-translate-y-0.5",
  ghost:
    "text-heading hover:bg-ink/5",
  onInk:
    "bg-white text-ink hover:bg-white/90 hover:-translate-y-0.5",
  onInkGhost:
    "text-white/90 border border-white/15 hover:bg-white/10 hover:border-white/30",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5 rounded-full",
  md: "h-11 px-5 text-[0.95rem] gap-2 rounded-full",
  lg: "h-[3.25rem] px-7 text-base gap-2 rounded-full",
};

const baseClass =
  "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
}: ButtonProps) {
  const classes = cn(baseClass, sizes[size], variants[variant], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (external ? "_blank" : undefined)}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}

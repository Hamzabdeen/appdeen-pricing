import { cn } from "@/lib/utils";

type AvatarProps = {
  name: string;
  /** hex accent, e.g. "#5C48F6" */
  accent: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  ring?: boolean;
};

const sizes = {
  sm: "h-10 w-10 rounded-xl text-sm",
  md: "h-14 w-14 rounded-2xl text-lg",
  lg: "h-20 w-20 rounded-2xl text-2xl",
  xl: "h-28 w-28 rounded-3xl text-4xl",
};

/** Deterministic monogram avatar — no external images required. */
export function Avatar({ name, accent, size = "md", className, ring }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative grid place-items-center font-semibold tracking-tight",
        sizes[size],
        ring && "ring-4 ring-white",
        className
      )}
      style={{
        backgroundColor: `${accent}1a`,
        color: accent,
        boxShadow: `inset 0 0 0 1px ${accent}26`,
      }}
    >
      <span
        className="absolute inset-0 rounded-[inherit] opacity-[0.09]"
        style={{
          background: `radial-gradient(120% 100% at 30% 0%, ${accent}, transparent 70%)`,
        }}
      />
      <span className="relative">{initials}</span>
    </div>
  );
}

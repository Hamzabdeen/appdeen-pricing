import { cn } from "@/lib/utils";

/**
 * Signature AppDeen corner-bracket frame — four L-shaped marks,
 * one per corner. Place inside a `relative` container.
 */
export function Corners({
  className,
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  const common = "absolute h-[var(--c)] w-[var(--c)] border-brand/40";
  return (
    <div
      className={cn("pointer-events-none absolute inset-2.5 z-10", className)}
      style={{ ["--c" as string]: `${size}px` }}
      aria-hidden
    >
      <span className={cn(common, "left-0 top-0 border-l border-t rounded-tl-[3px]")} />
      <span className={cn(common, "right-0 top-0 border-r border-t rounded-tr-[3px]")} />
      <span className={cn(common, "bottom-0 left-0 border-b border-l rounded-bl-[3px]")} />
      <span className={cn(common, "bottom-0 right-0 border-b border-r rounded-br-[3px]")} />
    </div>
  );
}

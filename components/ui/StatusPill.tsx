import { type EmployeeStatus } from "@/lib/employees";
import { cn } from "@/lib/utils";

const styles: Record<EmployeeStatus, string> = {
  "Ready to Hire": "bg-active-soft text-active",
  Popular: "bg-brand-soft text-brand-ink",
  New: "bg-hours-soft text-hours",
  Beta: "bg-canvas text-muted border border-line",
};

export function StatusPill({
  status,
  accent,
  className,
}: {
  status: EmployeeStatus;
  accent?: string;
  className?: string;
}) {
  const dot =
    status === "Ready to Hire"
      ? "bg-active"
      : status === "Popular"
      ? "bg-brand"
      : status === "New"
      ? "bg-hours"
      : "bg-muted";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        styles[status],
        className
      )}
    >
      <span className={cn("relative flex h-1.5 w-1.5")}>
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            dot,
            status === "Ready to Hire" && "animate-pulse-ring"
          )}
        />
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dot)} />
      </span>
      {status}
    </span>
  );
}

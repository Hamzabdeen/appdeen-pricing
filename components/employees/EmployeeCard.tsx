import Link from "next/link";
import { type Employee } from "@/lib/employees";
import { Avatar } from "@/components/ui/Avatar";
import { ArrowRight, Star, Clock } from "@/components/ui/Icon";
import { StatusPill } from "@/components/ui/StatusPill";
import { Corners } from "@/components/ui/Corners";
import { cn } from "@/lib/utils";

/** Reusable AI-employee card for the marketplace and related sections. */
export function EmployeeCard({
  employee,
  className,
}: {
  employee: Employee;
  className?: string;
}) {
  return (
    <Link
      href={`/employees/${employee.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.5]" />
      <Corners className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* accent wash */}
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: employee.accent }}
      />

      <div className="relative flex items-start justify-between">
        <Avatar name={employee.name} accent={employee.accent} size="md" />
        <StatusPill status={employee.status} accent={employee.accent} />
      </div>

      <div className="relative mt-5">
        <h3 className="text-lg font-semibold text-heading">{employee.name}</h3>
        <p className="text-sm font-medium" style={{ color: employee.accent }}>
          {employee.role}
        </p>
      </div>

      <p className="relative mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
        {employee.shortDescription}
      </p>

      {/* skills preview */}
      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {employee.skills.slice(0, 3).map((s) => (
          <span
            key={s.title}
            className="rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-body"
          >
            {s.title}
          </span>
        ))}
        <span className="rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-faint">
          +{employee.skills.length - 3} more
        </span>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-line pt-4">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1 font-medium text-heading">
            <Star className="h-3.5 w-3.5 fill-hours text-hours" strokeWidth={0} />
            {employee.rating}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            24/7
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform group-hover:translate-x-0.5">
          View profile
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

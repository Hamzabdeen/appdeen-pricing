import { CURRENCY, type CapacityPlan } from "@/lib/pricing";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { cn } from "@/lib/utils";

/** Reusable working-capacity plan card. */
export function CapacityCard({ plan }: { plan: CapacityPlan }) {
  const featured = plan.featured;
  const sub =
    plan.hoursPerDay != null
      ? `${plan.hoursPerDay} hour${plan.hoursPerDay === 1 ? "" : "s"} / day`
      : "only what you use";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border p-5 text-center transition-all duration-300",
        featured
          ? "border-brand bg-surface shadow-glow ring-1 ring-brand/30"
          : "border-line bg-surface shadow-soft hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-brand px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white shadow-glow-sm">
          {plan.badge}
        </span>
      )}

      <div className="pt-1">
        <h3 className="text-base font-semibold text-heading">{plan.name}</h3>
        <p className="mt-0.5 text-xs text-muted">{sub}</p>
      </div>

      <span
        className={cn(
          "mx-auto mt-5 grid h-11 w-11 place-items-center rounded-xl",
          featured ? "bg-gradient-brand text-white" : "bg-brand-soft text-brand"
        )}
      >
        <DynamicIcon name={plan.icon} className="h-5 w-5" />
      </span>

      <div className="mt-3 text-4xl font-semibold tracking-tight text-brand">
        {plan.hoursLabel}
      </div>

      <div className="mt-2">
        {plan.price != null ? (
          <p className="text-sm font-semibold text-heading">
            {CURRENCY}
            {plan.price}
            <span className="font-normal text-muted"> {plan.priceUnit}</span>
          </p>
        ) : (
          <p className="text-sm font-semibold text-heading">
            {plan.priceLabel}
            <span className="block text-xs font-normal text-faint">
              {plan.priceUnit}
            </span>
          </p>
        )}
      </div>

      <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-muted">
        {plan.tagline}
      </p>
    </div>
  );
}

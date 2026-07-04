import { CURRENCY, type HourPackage } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";
import { Check, Clock, ArrowRight } from "@/components/ui/Icon";
import { Corners } from "@/components/ui/Corners";
import { cn } from "@/lib/utils";

/** Reusable work-hour package card. Data-driven from lib/pricing.ts. */
export function PricingCard({ pkg }: { pkg: HourPackage }) {
  const featured = pkg.featured;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-7",
        featured
          ? "border-brand/50 bg-elevated text-white shadow-glow ring-1 ring-brand/20"
          : "border-line bg-surface shadow-soft hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
      )}
    >
      {featured && (
        <>
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-blueprint opacity-60" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 rounded-t-3xl bg-[radial-gradient(80%_100%_at_50%_0%,rgb(var(--brand)/0.22),transparent)]" />
          <Corners size={16} />
        </>
      )}

      {pkg.badge && (
        <span
          className={cn(
            "absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-semibold",
            featured ? "bg-hours text-ink" : "bg-brand-soft text-brand-ink"
          )}
        >
          {pkg.badge}
        </span>
      )}

      <div className="relative">
        <div
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
            featured ? "bg-white/10 text-white/80" : "bg-canvas text-muted"
          )}
        >
          <Clock className="h-3.5 w-3.5" />
          {pkg.hoursPerDay ? `${pkg.hoursPerDay} hr / day` : "Flexible"}
        </div>

        <h3
          className={cn(
            "mt-4 text-xl font-semibold",
            featured ? "text-white" : "text-heading"
          )}
        >
          {pkg.name}
        </h3>
        <p
          className={cn(
            "mt-1 text-sm",
            featured ? "text-white/60" : "text-muted"
          )}
        >
          {pkg.description}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-end gap-1.5">
          {pkg.price !== null ? (
            <>
              <span
                className={cn(
                  "text-4xl font-semibold tracking-tight",
                  featured ? "text-white" : "text-heading"
                )}
              >
                {CURRENCY}
                {pkg.price}
              </span>
              <span
                className={cn(
                  "mb-1 text-sm",
                  featured ? "text-white/55" : "text-muted"
                )}
              >
                {pkg.period}
              </span>
            </>
          ) : (
            <span
              className={cn(
                "text-3xl font-semibold tracking-tight",
                featured ? "text-white" : "text-heading"
              )}
            >
              {pkg.priceLabel}
            </span>
          )}
        </div>
        <p
          className={cn(
            "mt-1.5 text-xs font-medium",
            featured ? "text-hours" : "text-brand"
          )}
        >
          {pkg.headline}
        </p>
      </div>

      {/* Features */}
      <ul className="relative mt-6 space-y-3 border-t pt-6 border-current/10">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={cn(
                "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                featured ? "bg-hours/20 text-hours" : "bg-brand-soft text-brand"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span className={featured ? "text-white/75" : "text-body"}>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="relative mt-7 pt-1">
        <Button
          href={pkg.ctaHref}
          variant={featured ? "onInk" : "secondary"}
          className="w-full"
        >
          {pkg.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <p
          className={cn(
            "mt-3 text-center text-xs",
            featured ? "text-white/45" : "text-faint"
          )}
        >
          + {CURRENCY}10/mo per employee slot
        </p>
      </div>
    </div>
  );
}

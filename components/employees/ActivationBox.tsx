import { type Employee } from "@/lib/employees";
import { EMPLOYEE_SLOT, CURRENCY } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Seat, Cube, Clock, Check } from "@/components/ui/Icon";

/** The "what you need to hire X" activation box. */
export function ActivationBox({ employee }: { employee: Employee }) {
  const rows = [
    {
      icon: <Seat className="h-5 w-5" />,
      title: "1 employee slot",
      sub: "Holds their place on your team",
      value: `${CURRENCY}${EMPLOYEE_SLOT.price}`,
      valueSub: "/mo",
      tint: "brand",
    },
    {
      icon: <Cube className="h-5 w-5" />,
      title: `${employee.name} access`,
      sub: "Unlock this ready-made employee",
      value: "TBD",
      valueSub: "",
      tint: "hours",
      note: employee.accessPriceLabel,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Active work-hours package",
      sub: "Shared across your whole team",
      value: "Any plan",
      valueSub: "",
      tint: "active",
    },
  ] as const;

  const tintClass = (t: string) =>
    t === "brand"
      ? "bg-brand-soft text-brand"
      : t === "hours"
      ? "bg-hours-soft text-[rgb(200,120,10)]"
      : "bg-active-soft text-active";

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
      <div className="border-b border-line bg-canvas/60 px-6 py-5">
        <p className="text-sm font-semibold text-heading">
          To hire {employee.name}, you’ll need:
        </p>
        <p className="mt-0.5 text-xs text-muted">
          Three simple pieces — assembled in minutes.
        </p>
      </div>

      <div className="divide-y divide-line px-6">
        {rows.map((r) => (
          <div key={r.title} className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tintClass(
                  r.tint
                )}`}
              >
                {r.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-heading">{r.title}</p>
                <p className="text-xs text-muted">{r.sub}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-heading">
                {r.value}
                <span className="font-normal text-faint">{r.valueSub}</span>
              </p>
              {"note" in r && r.note && (
                <p className="text-[0.7rem] font-medium text-[rgb(200,120,10)]">
                  {r.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-6 pt-2">
        <Button href="/pricing" className="w-full" size="lg">
          Hire {employee.name}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted">
          <Check className="h-3.5 w-3.5 text-active" strokeWidth={2.5} />
          Cancel, pause, or swap employees anytime
        </div>
      </div>
    </div>
  );
}

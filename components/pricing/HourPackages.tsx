import { HOUR_PACKAGES, EMPLOYEE_SLOT, CURRENCY } from "@/lib/pricing";
import { PricingCard } from "./PricingCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Seat, Clock, Refresh } from "@/components/ui/Icon";

const notes = [
  {
    icon: <Seat className="h-4 w-4" />,
    text: `Every plan is + ${CURRENCY}${EMPLOYEE_SLOT.price}/mo per employee slot`,
  },
  {
    icon: <Clock className="h-4 w-4" />,
    text: "Hours are shared across your whole AI team",
  },
  {
    icon: <Refresh className="h-4 w-4" />,
    text: "Unused hours roll over — nothing wasted",
  },
];

export function HourPackages() {
  return (
    <section id="work-hours" className="container-x scroll-mt-24 py-20 sm:py-28">
      <SectionHeader
        eyebrow="Work-hour packages"
        title="Buy the hours. Share them across your team."
        description="Pick how many hours a day your AI workforce can work. One shared pool powers every employee you hire or build."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {HOUR_PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.id} as="div" delay={i * 80} className="h-full">
            <PricingCard pkg={pkg} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-soft">
          {notes.map((n) => (
            <span
              key={n.text}
              className="inline-flex items-center gap-2 text-sm font-medium text-body"
            >
              <span className="text-brand">{n.icon}</span>
              {n.text}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

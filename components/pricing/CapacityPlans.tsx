import { CAPACITY_PLANS, CAPACITY_PERKS, EMPLOYEE_SLOT, CURRENCY } from "@/lib/pricing";
import { CapacityCard } from "./CapacityCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

export function CapacityPlans() {
  return (
    <section id="work-hours" className="container-x scroll-mt-24 py-20 sm:py-24">
      <SectionHeader
        eyebrow="Working capacity"
        title={
          <>
            Only pay <span className="text-gradient">for work.</span>
          </>
        }
        description="Choose the daily capacity that fits your workload — one shared pool of hours for your whole AI team. Pause, upgrade, or downgrade anytime."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {CAPACITY_PLANS.map((plan, i) => (
          <Reveal key={plan.id} as="div" delay={(i % 5) * 70} className="h-full">
            <CapacityCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-surface px-6 py-4 shadow-soft">
          {CAPACITY_PERKS.map((perk) => (
            <span
              key={perk.label}
              className="inline-flex items-center gap-2 text-sm font-medium text-body"
            >
              <DynamicIcon name={perk.icon} className="h-4 w-4 text-brand" />
              {perk.label}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-5 text-center text-sm text-muted">
          Every plan adds{" "}
          <span className="font-semibold text-heading">
            {CURRENCY}
            {EMPLOYEE_SLOT.price}/mo per active employee slot
          </span>
          . Hours are shared across your whole workforce.
        </p>
      </Reveal>
    </section>
  );
}

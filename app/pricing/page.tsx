import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { TrialShowcase } from "@/components/pricing/TrialShowcase";
import { ModelLayers } from "@/components/pricing/ModelLayers";
import { StepsFlow } from "@/components/pricing/StepsFlow";
import { CapacityPlans } from "@/components/pricing/CapacityPlans";
import { WorkedExample } from "@/components/pricing/WorkedExample";
import { BuildOne } from "@/components/pricing/BuildOne";
import { MrAppdeenBand } from "@/components/pricing/MrAppdeen";
import { EnterpriseBand } from "@/components/pricing/EnterpriseBand";
import { FinalCta } from "@/components/pricing/FinalCta";
import { FaqGrid } from "@/components/pricing/FaqGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRICING_FAQS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing — Start free, pay for real work hours",
  description:
    "Hire or build AI employees, start with a 14-day free workforce, then pay for the daily work hours your team needs. A $10 slot per employee, shared hours, no tokens.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <TrialShowcase />
      <ModelLayers />
      <StepsFlow />
      <CapacityPlans />
      <WorkedExample />
      <BuildOne />
      <EnterpriseBand />
      <MrAppdeenBand />

      <section id="faq" className="container-x py-20 sm:py-24">
        <SectionHeader
          eyebrow="Frequently asked questions"
          title="Everything you need to know"
          description="New pricing model? No problem. Here’s how the trial, slots, and shared work hours fit together."
        />
        <div className="mt-12">
          <FaqGrid items={PRICING_FAQS} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}

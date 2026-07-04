import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { ModelLayers } from "@/components/pricing/ModelLayers";
import { StepsFlow } from "@/components/pricing/StepsFlow";
import { HourPackages } from "@/components/pricing/HourPackages";
import { WorkedExample } from "@/components/pricing/WorkedExample";
import { EnterpriseBand } from "@/components/pricing/EnterpriseBand";
import { Faq } from "@/components/pricing/Faq";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRICING_FAQS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing — Slots, Access & Work Hours",
  description:
    "Give each AI employee a slot for $10/month, unlock or build their access, and buy shared work hours for your whole AI workforce. No tokens, no credits.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <ModelLayers />
      <StepsFlow />
      <HourPackages />
      <WorkedExample />
      <EnterpriseBand />

      <section id="faq" className="container-x py-20 sm:py-28">
        <SectionHeader
          eyebrow="Questions, answered"
          title="Everything you need to know"
          description="New pricing model? No problem. Here’s how slots, access, and work hours fit together."
        />
        <div className="mt-14">
          <Faq items={PRICING_FAQS} />
        </div>
      </section>
    </>
  );
}

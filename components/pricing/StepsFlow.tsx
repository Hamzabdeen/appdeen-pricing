import { HOW_IT_WORKS } from "@/lib/pricing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icon";

export function StepsFlow() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-ink py-20 sm:py-28"
    >
      <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-hours/10 blur-[120px]" />

      <div className="container-x relative">
        <SectionHeader
          onInk
          eyebrow="How it works"
          title="From zero to a working AI team in four steps"
          description="Each step is deliberately simple. No setup headaches, no usage math — just add, pick, and let them work."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 90}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
            >
              {/* connector line */}
              {i < HOW_IT_WORKS.length - 1 && (
                <span className="absolute -right-3 top-11 z-10 hidden h-px w-6 bg-gradient-to-r from-white/30 to-transparent lg:block" />
              )}

              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-brand-soft">
                  <DynamicIcon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="text-4xl font-semibold text-white/10">
                  0{step.step}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <Button href="/employees" variant="onInk" size="lg">
            Start Building
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

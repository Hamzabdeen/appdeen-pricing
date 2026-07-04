import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Bolt } from "@/components/ui/Icon";
import { TRIAL } from "@/lib/pricing";

export function FinalCta() {
  return (
    <section className="container-x py-12 sm:py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-8 shadow-card sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow-sm sm:grid">
                <Bolt className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-heading sm:text-3xl">
                  Start free. Build your{" "}
                  <span className="text-gradient">AI workforce</span> today.
                </h2>
                <p className="mt-2 text-muted">
                  All AI employees. All features. Free for {TRIAL.days} days — no
                  card required.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/employees" size="lg">
                Start for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing#enterprise" variant="secondary" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

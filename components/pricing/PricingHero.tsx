import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MrAppdeenAvatar } from "./MrAppdeen";
import { ArrowRight, Check } from "@/components/ui/Icon";
import { TRIAL, MR_APPDEEN } from "@/lib/pricing";

const trust = ["Build your own or hire ours", "Pay for work hours, not tokens", "Pause or cancel anytime"];

export function PricingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[40rem] bg-[radial-gradient(50%_60%_at_60%_0%,rgb(var(--brand)/0.12),transparent_70%)]" />
      <div className="bg-blueprint mask-fade-b pointer-events-none absolute inset-0 opacity-50" />

      <div className="container-x relative grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Hire an AI workforce</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="display-1 mt-5 text-balance">
              Hire your
              <br /> AI workforce.
              <br />
              <span className="text-gradient">Start free.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted text-pretty">
              Build your own AI employees or hire ours. Everyone starts with a{" "}
              <span className="font-semibold text-heading">
                {TRIAL.label}
              </span>{" "}
              — try the whole team before you commit to anyone.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/employees" size="lg">
                Start for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing#build" variant="secondary" size="lg">
                <ChatIcon />
                {MR_APPDEEN.cta}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trust.map((t) => (
                <li key={t} className="inline-flex items-center gap-2 text-sm font-medium text-body">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-active-soft text-active">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Mr. AppDeen */}
        <Reveal delay={160} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full animate-float">
            <MrAppdeenAvatar />
          </div>
          <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-line bg-surface px-5 py-3 text-center shadow-card">
            <p className="text-sm font-semibold text-heading">{MR_APPDEEN.name}</p>
            <p className="text-xs text-muted">
              {MR_APPDEEN.role.replace("Your ", "")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5h16v11H9l-4 3v-3H4z" />
    </svg>
  );
}

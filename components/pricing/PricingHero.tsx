import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import {
  ArrowRight,
  Play,
  Seat,
  Cube,
  Clock,
  Check,
  Bolt,
} from "@/components/ui/Icon";
import { EMPLOYEE_SLOT, CURRENCY } from "@/lib/pricing";

const trust = [
  "No tokens. No credits.",
  "Shared hours across your team",
  "Pause or cancel anytime",
];

export function PricingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft brand aura */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgb(var(--brand)/0.10),transparent_70%)]" />
      <div className="bg-dotgrid-ink pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="chip">
              <span className="flex h-1.5 w-1.5 rounded-full bg-active" />
              Simple, human pricing for your AI workforce
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="display-1 mt-6 text-balance">
              Hire AI Employees.
              <br />
              Pay for{" "}
              <span className="relative whitespace-nowrap text-brand">
                Real Work Hours
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand/30"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C60 3 240 3 298 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              Build your own AI employee or unlock a ready-to-use one, then give
              your AI workforce the hours they need to get work done. No tokens,
              no credits — just work hours, like real staff.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/employees" size="lg">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/employees" variant="secondary" size="lg">
                <Play className="h-4 w-4 text-brand" />
                View AI Employees
              </Button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trust.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 text-sm font-medium text-body"
                >
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-active-soft text-active">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual: the cost builder */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-md">
            {/* floating avatar cluster */}
            <div className="absolute -right-2 -top-6 z-10 flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-card backdrop-blur animate-float">
              <div className="flex -space-x-2">
                <Avatar name="Sarah" accent="#5C48F6" size="sm" ring className="!h-8 !w-8 !rounded-lg !text-[0.7rem]" />
                <Avatar name="Omar" accent="#0EA5A5" size="sm" ring className="!h-8 !w-8 !rounded-lg !text-[0.7rem]" />
                <Avatar name="Layla" accent="#E4478D" size="sm" ring className="!h-8 !w-8 !rounded-lg !text-[0.7rem]" />
              </div>
              <span className="text-xs font-semibold text-heading">
                Your AI team
              </span>
            </div>

            <div className="card overflow-hidden p-6 shadow-lift">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                How your bill is built
              </p>

              {/* Layer rows */}
              <BuildRow
                icon={<Seat className="h-5 w-5" />}
                tint="brand"
                title="Employee slot"
                sub="Per AI employee"
                value={`${CURRENCY}${EMPLOYEE_SLOT.price}`}
                valueSub="/mo"
              />
              <BuildRow
                icon={<Cube className="h-5 w-5" />}
                tint="hours"
                title="Employee access"
                sub="Build your own or unlock"
                value="From $X"
                valueSub="/mo"
                muted
              />
              <BuildRow
                icon={<Clock className="h-5 w-5" />}
                tint="active"
                title="Work hours"
                sub="Shared across the team"
                value="Pick a plan"
                valueSub=""
                muted
                last
              />

              {/* Total */}
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-hours">
                    <Bolt className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Your AI workforce
                    </p>
                    <p className="text-xs text-white/55">Ready when you are</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/80">
                  Live in minutes
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BuildRow({
  icon,
  tint,
  title,
  sub,
  value,
  valueSub,
  muted,
  last,
}: {
  icon: React.ReactNode;
  tint: "brand" | "hours" | "active";
  title: string;
  sub: string;
  value: string;
  valueSub: string;
  muted?: boolean;
  last?: boolean;
}) {
  const tintClass =
    tint === "brand"
      ? "bg-brand-soft text-brand"
      : tint === "hours"
      ? "bg-hours-soft text-[rgb(200,120,10)]"
      : "bg-active-soft text-active";

  return (
    <div
      className={`flex items-center justify-between py-4 ${
        last ? "" : "border-b border-line"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-xl ${tintClass}`}>
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-heading">{title}</p>
          <p className="text-xs text-muted">{sub}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-semibold ${muted ? "text-muted" : "text-heading"}`}>
          {value}
          <span className="font-normal text-faint">{valueSub}</span>
        </p>
      </div>
    </div>
  );
}

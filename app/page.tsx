import Link from "next/link";
import { EMPLOYEES } from "@/lib/employees";
import { PRICING_LAYERS } from "@/lib/pricing";
import { EmployeeCard } from "@/components/employees/EmployeeCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import {
  ArrowRight,
  Play,
  Check,
  Seat,
  Cube,
  Clock,
  Bolt,
} from "@/components/ui/Icon";

const featured = EMPLOYEES.filter((e) => e.featured).slice(0, 3);

const heroTrust = [
  "Ready-to-hire AI employees",
  "Build your own in minutes",
  "Pay for work hours, not tokens",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[38rem] bg-[radial-gradient(55%_55%_at_50%_0%,rgb(var(--brand)/0.12),transparent_70%)]" />
        <div className="bg-blueprint mask-fade-b pointer-events-none absolute inset-0 opacity-60" />

        <div className="container-x relative py-16 text-center sm:py-24">
          <Reveal className="flex flex-col items-center">
            <span className="chip">
              <span className="flex h-1.5 w-1.5 rounded-full bg-active" />
              The AI workforce platform
            </span>
            <h1 className="display-1 mt-6 max-w-4xl text-balance">
              Hire AI employees.
              <br className="hidden sm:block" /> Pay for{" "}
              <span className="text-brand">real work hours</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              AppDeen lets companies hire ready-to-use AI employees or build
              their own — then give their AI workforce the hours they need to get
              real work done. No tokens. No credits. Just work hours, like real
              staff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/employees" size="lg">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                <Play className="h-4 w-4 text-brand" />
                See how pricing works
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {heroTrust.map((t) => (
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

          {/* floating team preview */}
          <Reveal delay={160} className="relative mx-auto mt-14 max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {featured.map((emp, i) => (
                <Link
                  key={emp.slug}
                  href={`/employees/${emp.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-surface/80 p-4 text-left shadow-soft backdrop-blur transition-all hover:-translate-y-1 hover:shadow-card"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Avatar name={emp.name} accent={emp.accent} size="md" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-heading">
                      {emp.name}
                    </p>
                    <p className="truncate text-sm text-muted">{emp.category}</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MODEL TEASER ── */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeader
          eyebrow="How it works"
          title="A workforce priced like a real team"
          description="Three simple layers replace confusing usage math. Give each employee a seat, choose who they are, and buy the hours they’ll work."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PRICING_LAYERS.map((layer, i) => (
            <Reveal
              key={layer.id}
              as="div"
              delay={i * 90}
              className="rounded-3xl border border-line bg-surface p-7 shadow-soft"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  layer.accent === "brand"
                    ? "bg-brand-soft text-brand"
                    : layer.accent === "hours"
                    ? "bg-hours-soft text-hours"
                    : "bg-active-soft text-active"
                }`}
              >
                <DynamicIcon name={layer.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-heading">
                {layer.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {layer.description}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160} className="mt-10 flex justify-center">
          <Button href="/pricing" variant="secondary" size="lg">
            Explore full pricing
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>

      {/* ── FEATURED EMPLOYEES ── */}
      <section className="border-y border-line bg-surface">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeader
              align="left"
              eyebrow="Meet the team"
              title="Ready-to-hire AI employees"
              description="Unlock a proven employee today — or build your own from scratch."
              className="sm:max-w-xl"
            />
            <Button href="/employees" variant="ghost" className="shrink-0">
              View all employees
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EMPLOYEES.slice(0, 3).map((emp, i) => (
              <Reveal key={emp.slug} as="div" delay={i * 80} className="h-full">
                <EmployeeCard employee={emp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ── */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Seat className="h-6 w-6" />,
              title: "Simple, honest pricing",
              desc: "A flat slot fee, clear access, and shared hours. No surprise overages, ever.",
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Hours, not tokens",
              desc: "Buy work time the way you’d think about a real employee — no technical math.",
            },
            {
              icon: <Bolt className="h-6 w-6" />,
              title: "Live in minutes",
              desc: "Unlock or build an employee, add a slot, and they start working today.",
            },
          ].map((v, i) => (
            <Reveal
              key={v.title}
              as="div"
              delay={i * 80}
              className="rounded-3xl border border-line bg-surface p-7 shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                {v.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-heading">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

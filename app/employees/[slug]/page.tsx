import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EMPLOYEES, getEmployee } from "@/lib/employees";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StatusPill } from "@/components/ui/StatusPill";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ActivationBox } from "@/components/employees/ActivationBox";
import { RelatedEmployees } from "@/components/employees/RelatedEmployees";
import {
  ArrowRight,
  Play,
  Plus,
  Check,
  Clock,
  Globe,
  Seat,
  Users,
  Wrench,
  Bolt,
  Eye,
  Pause,
  Shield,
  Chart,
  Target,
} from "@/components/ui/Icon";

export function generateStaticParams() {
  return EMPLOYEES.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const employee = getEmployee(params.slug);
  if (!employee) return { title: "AI Employee" };
  return {
    title: `${employee.name} — ${employee.role}`,
    description: employee.shortDescription,
  };
}

export default function EmployeeProfile({
  params,
}: {
  params: { slug: string };
}) {
  const employee = getEmployee(params.slug);
  if (!employee) notFound();

  const details = [
    { icon: <Target className="h-4 w-4" />, label: "Role", value: employee.role },
    { icon: <Users className="h-4 w-4" />, label: "Department", value: employee.department },
    { icon: <Check className="h-4 w-4" />, label: "Best for", value: employee.bestFor },
    { icon: <Seat className="h-4 w-4" />, label: "Required", value: "1 employee slot · $10/mo" },
    { icon: <Clock className="h-4 w-4" />, label: "Work hours usage", value: employee.estHours },
    { icon: <Bolt className="h-4 w-4" />, label: "Setup time", value: employee.setupTime },
    { icon: <Globe className="h-4 w-4" />, label: "Languages", value: employee.languages.join(", ") },
    { icon: <Clock className="h-4 w-4" />, label: "Availability", value: employee.availability },
  ];

  const trust = [
    { icon: <Eye className="h-5 w-5" />, title: "You review the work", desc: "Every output is yours to check, approve, or refine before it goes anywhere." },
    { icon: <Pause className="h-5 w-5" />, title: "Pause or remove anytime", desc: "Put an employee on hold or take them off the team with one click." },
    { icon: <Clock className="h-5 w-5" />, title: "You manage the hours", desc: "Set how much work time your team can use — you’re always in control of spend." },
    { icon: <Chart className="h-5 w-5" />, title: "See every activity", desc: "A clear log of what each employee did, when, and how many hours it took." },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-96"
          style={{
            background: `radial-gradient(50% 60% at 30% 0%, ${employee.accent}1f, transparent 70%)`,
          }}
        />
        <div className="container-x relative py-10 sm:py-14">
          {/* breadcrumb */}
          <Reveal className="flex items-center gap-2 text-sm text-muted">
            <Link href="/employees" className="hover:text-heading">
              AI Employees
            </Link>
            <span className="text-faint">/</span>
            <span className="text-heading">{employee.category}</span>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            {/* identity */}
            <Reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Avatar name={employee.name} accent={employee.accent} size="xl" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <StatusPill status={employee.status} accent={employee.accent} />
                    <span className="chip">{employee.category}</span>
                  </div>
                  <h1 className="display-2 mt-4">{employee.name}</h1>
                  <p
                    className="mt-1 text-lg font-semibold"
                    style={{ color: employee.accent }}
                  >
                    {employee.role}
                  </p>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                    {employee.shortDescription}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/pricing" size="lg">
                      Hire {employee.name}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href="#how" variant="secondary" size="lg">
                      <Play className="h-4 w-4 text-brand" />
                      View demo
                    </Button>
                    <Button href="/employees" variant="ghost" size="lg">
                      <Plus className="h-4 w-4" />
                      Add to my workforce
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* quick facts card */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  At a glance
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
                  <Fact label="Availability" value="24/7" accent={employee.accent} />
                  <Fact label="Setup time" value={employee.setupTime} />
                  <Fact label="Department" value={employee.department} />
                  <Fact label="Rating" value={`★ ${employee.rating}`} />
                  <Fact label="Languages" value={`${employee.languages.length} supported`} />
                  <Fact label="Hires" value={employee.hires} />
                </dl>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {employee.tools.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-canvas px-2.5 py-1 text-xs font-medium text-body"
                    >
                      <Wrench className="h-3 w-3 text-faint" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DETAILS STRIP ── */}
      <section className="border-b border-line bg-surface">
        <div className="container-x py-10">
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-canvas text-muted">
                  {d.icon}
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-faint">
                    {d.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-heading">
                    {d.value}
                  </dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN: content + sticky activation ── */}
      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div className="min-w-0">
            {/* Skills */}
            <SectionHeader
              align="left"
              eyebrow="What they do"
              title={`${employee.name}’s skills`}
              description={`${employee.name} comes ready with the day-to-day skills of a real ${employee.category.toLowerCase()} pro.`}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {employee.skills.map((s, i) => (
                <Reveal
                  key={s.title}
                  as="div"
                  delay={(i % 2) * 60}
                  className="group flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${employee.accent}14`,
                      color: employee.accent,
                    }}
                  >
                    <DynamicIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-heading">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* How they work */}
            <div id="how" className="mt-16 scroll-mt-24">
              <SectionHeader
                align="left"
                eyebrow="Behind the scenes"
                title={`How ${employee.name} works`}
                description="Every task follows the same reliable path — from request to result."
              />
              <div className="mt-8 space-y-3">
                {employee.workflow.map((step, i) => (
                  <Reveal
                    key={step.title}
                    delay={i * 60}
                    className="relative flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft"
                  >
                    <div className="relative flex flex-col items-center">
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl text-white"
                        style={{ backgroundColor: employee.accent }}
                      >
                        <DynamicIcon name={step.icon} className="h-5 w-5" />
                      </span>
                      {i < employee.workflow.length - 1 && (
                        <span className="absolute top-12 h-[calc(100%-0.5rem)] w-px bg-line" />
                      )}
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-faint">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-0.5 text-base font-semibold text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Usage example */}
            <div className="mt-16">
              <SectionHeader
                align="left"
                eyebrow="Try it like this"
                title="A task you could hand over today"
              />
              <Reveal delay={80} className="mt-8">
                <div className="overflow-hidden rounded-3xl border border-line bg-ink p-7 text-white shadow-card sm:p-8">
                  <div className="flex items-start gap-3">
                    <Avatar name="You" accent="#ffffff" size="sm" className="!bg-white/10 !text-white" />
                    <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] px-5 py-4">
                      <p className="text-base leading-relaxed text-white/90">
                        “{employee.usageExample}”
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <Avatar name={employee.name} accent={employee.accent} size="sm" ring className="!ring-white/10" />
                    <div className="flex-1 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.03] px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-hours">
                        {employee.name} gets to work
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {employee.usageBullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-white/80">
                            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-active/20 text-active">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Trust / control */}
            <div className="mt-16">
              <SectionHeader
                align="left"
                eyebrow="You’re in control"
                title="Powerful, but always on your terms"
                description="AI employees do the work — you keep the oversight. Nothing happens without your say."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {trust.map((t, i) => (
                  <Reveal
                    key={t.title}
                    as="div"
                    delay={(i % 2) * 60}
                    className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      {t.icon}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-heading">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {t.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky activation sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ActivationBox employee={employee} />
            <div className="mt-4 rounded-3xl border border-line bg-canvas p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-heading">
                <Shield className="h-4 w-4 text-active" />
                Backed by the Appdeen guarantee
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Not the right fit? Pause or swap {employee.name} anytime. Your
                shared work hours are never tied to a single employee.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ── */}
      <div className="border-t border-line bg-surface">
        <RelatedEmployees slug={employee.slug} />
      </div>
    </>
  );
}

function Fact({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-faint">
        {label}
      </dt>
      <dd
        className="mt-0.5 text-sm font-semibold text-heading"
        style={accent ? { color: undefined } : undefined}
      >
        {value}
      </dd>
    </div>
  );
}

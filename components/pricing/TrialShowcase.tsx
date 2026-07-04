import Link from "next/link";
import { EMPLOYEES } from "@/lib/employees";
import { TRIAL } from "@/lib/pricing";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { Corners } from "@/components/ui/Corners";
import { ArrowRight, Plus } from "@/components/ui/Icon";

const show = EMPLOYEES.slice(0, 3);

export function TrialShowcase() {
  return (
    <section className="container-x py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-10 sm:py-14">
        <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/25 blur-[110px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-center">
          <Reveal>
            <span className="eyebrow text-brand-bright">Start free</span>
            <h2 className="display-2 mt-4 text-white text-balance">
              Every AI employee.
              <br />
              <span className="text-gradient">One trial.</span>
            </h2>
            <p className="mt-4 max-w-xs text-white/60">
              Try every official AppDeen employee before hiring anyone — free for{" "}
              {TRIAL.days} days.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {show.map((emp, i) => (
              <Reveal
                key={emp.slug}
                as="div"
                delay={i * 80}
                className="group relative"
              >
                <Link
                  href={`/employees/${emp.slug}`}
                  className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.06]"
                >
                  <Corners className="opacity-40" />
                  <Avatar name={emp.name} accent={emp.accent} size="md" />
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {emp.name}
                  </h3>
                  <p className="text-sm text-white/50">{emp.role}</p>
                  <span
                    className="mt-3 inline-flex w-max items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ backgroundColor: `${emp.accent}22`, color: emp.accent }}
                  >
                    {emp.category}
                  </span>
                  <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-white/55">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-active" />
                    Available in {TRIAL.short}
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal as="div" delay={240}>
              <Link
                href="/employees"
                className="group flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-5 text-center transition-colors hover:border-brand/50 hover:bg-white/[0.03]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-brand-bright transition-transform group-hover:scale-110">
                  <Plus className="h-5 w-5" />
                </span>
                <p className="mt-4 font-semibold text-white">Explore more employees</p>
                <p className="mt-1 text-sm text-white/50">
                  More experts for{" "}
                  <span className="text-brand-bright">every function.</span>
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-bright">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

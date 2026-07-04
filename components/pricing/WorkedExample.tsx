import { WORKED_EXAMPLE } from "@/lib/pricing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { Clock, Plus, Bolt } from "@/components/ui/Icon";

const DAILY_POOL = 8; // matches Full-Time plan for the illustration

export function WorkedExample() {
  const { employees, total } = WORKED_EXAMPLE;
  const remaining = DAILY_POOL - total;

  return (
    <section id="example" className="container-x py-20 sm:py-28">
      <SectionHeader
        eyebrow="A real example"
        title="See exactly how work hours add up"
        description="Work hours are shared. Every employee draws from the same pool — and only while they’re actually working."
      />

      <Reveal delay={80} className="mt-14">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card">
          <div className="grid gap-px bg-line md:grid-cols-[1fr_auto_1fr_auto_1.1fr]">
            {/* Employee 1 */}
            <ExampleEmployee {...employees[0]} />

            {/* plus */}
            <div className="flex items-center justify-center bg-surface px-4 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-canvas text-faint">
                <Plus className="h-5 w-5" />
              </span>
            </div>

            {/* Employee 2 */}
            <ExampleEmployee {...employees[1]} />

            {/* equals */}
            <div className="flex items-center justify-center bg-surface px-4 py-4">
              <span className="text-2xl font-semibold text-faint">=</span>
            </div>

            {/* total */}
            <div className="flex flex-col justify-center gap-4 bg-ink p-7 text-white">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-hours/20 text-hours">
                  <Bolt className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-white/70">
                  Total used today
                </p>
              </div>
              <p className="text-5xl font-semibold tracking-tight text-white">
                {total}
                <span className="ml-1 text-lg font-normal text-white/50">
                  work hours
                </span>
              </p>

              {/* pool bar */}
              <div>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <span
                    className="h-full rounded-l-full bg-hours"
                    style={{ width: `${(employees[0].hours / DAILY_POOL) * 100}%` }}
                  />
                  <span
                    className="h-full bg-brand"
                    style={{ width: `${(employees[1].hours / DAILY_POOL) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-white/50">
                  {remaining} of {DAILY_POOL} daily hours still available for the
                  rest of your team
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted">
          <span className="font-semibold text-heading">
            {employees[0].name}
          </span>{" "}
          works {employees[0].hours} hours today.{" "}
          <span className="font-semibold text-heading">
            {employees[1].name}
          </span>{" "}
          works {employees[1].hours} hours. Your company uses{" "}
          <span className="font-semibold text-brand">{total} work hours</span>{" "}
          total — from one shared package.
        </p>
      </Reveal>
    </section>
  );
}

function ExampleEmployee({
  name,
  role,
  hours,
  accent,
}: {
  name: string;
  role: string;
  hours: number;
  accent: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 bg-surface p-7 text-center">
      <Avatar name={name} accent={accent} size="lg" />
      <div>
        <p className="text-lg font-semibold text-heading">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </div>
      <div
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold"
        style={{ backgroundColor: `${accent}14`, color: accent }}
      >
        <Clock className="h-4 w-4" />
        {hours} {hours === 1 ? "hour" : "hours"} today
      </div>
    </div>
  );
}

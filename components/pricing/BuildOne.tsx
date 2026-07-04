import { BUILDER } from "@/lib/pricing";
import { AppDeenMark } from "@/components/site/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowRight,
  Upload,
  Check,
  Users,
  Target,
  Sparkle,
  Shield,
  Doc,
} from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const stepIcons = [Upload, Users, Target, Sparkle, Shield, Check];
const sourceColors: Record<string, string> = {
  "Google Drive": "#1A73E8",
  Dropbox: "#0061FF",
  Notion: "#111111",
  Confluence: "#2684FF",
};

export function BuildOne() {
  return (
    <section id="build" className="container-x scroll-mt-24 py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_2.2fr] lg:items-center">
        {/* Intro */}
        <Reveal>
          <span className="eyebrow">Build</span>
          <h2 className="display-2 mt-4 text-balance">
            Can’t find one?
            <br />
            <span className="text-gradient">Build one.</span>
          </h2>
          <p className="mt-4 max-w-sm text-lg text-muted">
            Create a custom AI employee trained on your data, processes, and
            goals — in minutes. It joins the same shared work-hour pool as
            everyone else.
          </p>
          <div className="mt-7">
            <Button href="/employees" size="lg">
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        {/* Builder mockup */}
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
            <div className="grid gap-px bg-line md:grid-cols-[minmax(150px,0.8fr)_1.6fr_minmax(190px,1fr)]">
              {/* Step nav */}
              <div className="bg-surface p-5">
                <ul className="space-y-1">
                  {BUILDER.steps.map((step, i) => {
                    const Icon = stepIcons[i] ?? Doc;
                    const active = i === 0;
                    return (
                      <li
                        key={step}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm",
                          active
                            ? "bg-brand-soft font-semibold text-brand-ink"
                            : "text-muted"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {step}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Create form */}
              <div className="bg-surface p-5 sm:p-6">
                <p className="text-sm font-semibold text-heading">
                  Create new employee
                </p>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-faint">
                  Upload knowledge
                </p>
                <div className="mt-2 grid place-items-center rounded-xl border border-dashed border-line bg-canvas px-4 py-6 text-center">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-soft text-brand">
                    <Upload className="h-4 w-4" />
                  </span>
                  <p className="mt-2 text-sm text-muted">
                    Drag and drop files here
                    <br />
                    or <span className="font-semibold text-brand">browse</span>
                  </p>
                </div>

                <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">
                  Connect sources
                </p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {BUILDER.sources.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-body"
                    >
                      <span
                        className="grid h-5 w-5 shrink-0 place-items-center rounded text-[0.6rem] font-bold text-white"
                        style={{ backgroundColor: sourceColors[s.name] ?? "#3C8EFF" }}
                      >
                        {s.name[0]}
                      </span>
                      <span className="truncate">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="flex flex-col bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-faint">
                  Your new employee
                </p>
                <div className="relative mx-auto mt-4 h-16 w-16">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgb(var(--brand)/0.35),transparent_70%)] blur-md" />
                  <div className="relative h-full w-full">
                    <AppDeenMark />
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {BUILDER.checklist.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 text-xs font-medium text-body"
                    >
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-active-soft text-active">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
                <Button href="/employees" size="sm" className="mt-5 w-full">
                  Create Employee
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

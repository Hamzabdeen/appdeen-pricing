import type { Metadata } from "next";
import Link from "next/link";
import { MarketplaceGrid } from "@/components/employees/MarketplaceGrid";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Plus, Bolt, Clock, Users } from "@/components/ui/Icon";
import { EMPLOYEES } from "@/lib/employees";

export const metadata: Metadata = {
  title: "AI Employees — Hire or Build Your Workforce",
  description:
    "Browse ready-to-use AppDeen AI employees for sales, support, marketing, HR and more — or build your own. Each one needs a slot and shares your work-hour pool.",
};

const stats = [
  { icon: <Users className="h-4 w-4" />, label: `${EMPLOYEES.length} ready-to-hire roles` },
  { icon: <Clock className="h-4 w-4" />, label: "Available 24/7" },
  { icon: <Bolt className="h-4 w-4" />, label: "Live in minutes" },
];

export default function EmployeesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-[30rem] bg-[radial-gradient(55%_55%_at_50%_0%,rgb(var(--brand)/0.10),transparent_70%)]" />
        <div className="container-x relative py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="chip mx-auto">
              <span className="flex h-1.5 w-1.5 rounded-full bg-active" />
              The AppDeen AI workforce
            </span>
            <h1 className="display-1 mt-6 text-balance">
              Meet your next <span className="text-brand">AI employees</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              Unlock a ready-to-use employee or build your own. Give them a slot,
              share your work hours, and they get to work — no tokens, no
              credits, no fuss.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#roster" size="lg">
                Browse employees
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                See pricing
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-body"
                >
                  <span className="text-brand">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roster */}
      <section id="roster" className="container-x scroll-mt-20 pb-10">
        <MarketplaceGrid />
      </section>

      {/* Build your own band */}
      <section className="container-x py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-8 text-white shadow-lift sm:p-12">
            <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-50" />
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand/25 blur-[100px]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="eyebrow text-hours">Build your own</span>
                <h2 className="display-2 mt-4 max-w-xl text-white text-balance">
                  Can’t find the right role? Build a custom AI employee.
                </h2>
                <p className="mt-4 max-w-lg text-lg text-white/60">
                  Shape an AI employee around your business — its role, skills,
                  tone, and the tools it can use. Add a slot and it joins the same
                  shared work-hour pool as everyone else.
                </p>
                <div className="mt-7">
                  <Button href="/pricing#how-it-works" variant="onInk" size="lg">
                    Start building
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/20 text-brand-soft">
                    <Plus className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">New AI employee</p>
                    <p className="text-sm text-white/50">Custom · your rules</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {[
                    "Pick a role & department",
                    "Choose skills and tone of voice",
                    "Connect the tools it can use",
                    "Add a slot — and it’s working",
                  ].map((t, i) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white">
                        {i + 1}
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

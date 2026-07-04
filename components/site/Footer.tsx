import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowRight } from "@/components/ui/Icon";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "AI Employees", href: "/employees" },
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/pricing#how-it-works" },
      { label: "Work hours", href: "/pricing#work-hours" },
    ],
  },
  {
    title: "AI Workforce",
    links: [
      { label: "Sales — Sarah", href: "/employees/sarah" },
      { label: "Support — Omar", href: "/employees/omar" },
      { label: "Marketing — Layla", href: "/employees/layla" },
      { label: "Build your own", href: "/pricing#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Security", href: "/" },
      { label: "Contact sales", href: "/pricing#enterprise" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-60" />
      <div className="container-x relative py-16">
        {/* CTA band */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Build your AI workforce today.
            </h3>
            <p className="mt-2 max-w-md text-white/60">
              Add a slot, pick an employee, buy the hours they need. Cancel or
              pause anytime.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/employees"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition-colors hover:bg-white/10"
            >
              View AI Employees
            </Link>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo onInk />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Hire ready-to-use AI employees or build your own. Pay for a slot,
              unlock access, and buy the work hours your team needs — just like
              real employees.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row">
          <p>© {2026} AppDeen AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white/80">Privacy</Link>
            <Link href="/" className="hover:text-white/80">Terms</Link>
            <Link href="/" className="hover:text-white/80">Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

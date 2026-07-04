"use client";

import { useMemo, useState } from "react";
import { EMPLOYEES, CATEGORIES } from "@/lib/employees";
import { EmployeeCard } from "./EmployeeCard";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function MarketplaceGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? EMPLOYEES
        : EMPLOYEES.filter((e) => e.category === active),
    [active]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-16 z-30 -mx-5 mb-10 border-y border-line bg-canvas/80 px-5 py-4 backdrop-blur-lg sm:mx-0 sm:rounded-2xl sm:border sm:px-4">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === cat
                  ? "bg-ink text-white shadow-soft"
                  : "text-body hover:bg-ink/5 hover:text-heading"
              )}
            >
              {cat}
              {cat !== "All" && (
                <span
                  className={cn(
                    "ml-1.5 text-xs",
                    active === cat ? "text-white/50" : "text-faint"
                  )}
                >
                  {EMPLOYEES.filter((e) => e.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((emp, i) => (
          <Reveal key={emp.slug} as="div" delay={(i % 3) * 70} className="h-full">
            <EmployeeCard employee={emp} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">
          No employees in this category yet — more are on the way.
        </p>
      )}
    </div>
  );
}

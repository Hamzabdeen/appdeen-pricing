"use client";

import { useState } from "react";
import { type Faq as FaqItem } from "@/lib/pricing";
import { Plus } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

function FaqRow({ item, defaultOpen }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="rounded-2xl border border-line bg-surface shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-heading">{item.q}</span>
        <span
          className={cn(
            "grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-all duration-300",
            open ? "rotate-45 border-brand bg-brand text-white" : "border-line text-muted"
          )}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/** 3-column FAQ grid, distributing items column-first. */
export function FaqGrid({ items }: { items: FaqItem[] }) {
  const cols: FaqItem[][] = [[], [], []];
  items.forEach((item, i) => cols[i % 3].push(item));

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-4">
          {col.map((item, ri) => (
            <FaqRow key={item.q} item={item} defaultOpen={ci === 0 && ri === 0} />
          ))}
        </div>
      ))}
    </div>
  );
}

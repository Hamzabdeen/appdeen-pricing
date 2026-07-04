"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const links = [
  { label: "AI Employees", href: "/employees" },
  { label: "How it works", href: "/pricing#how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      <div className="container-x">
        <div
          className={cn(
            "pointer-events-auto mx-auto flex h-14 items-center justify-between gap-4 rounded-full border px-3 pl-4 transition-all duration-300 sm:h-16 sm:pl-6",
            scrolled
              ? "border-white/10 bg-ink-soft/80 shadow-lift backdrop-blur-xl"
              : "border-white/[0.07] bg-ink-soft/50 backdrop-blur-xl"
          )}
        >
          <Logo />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-body transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/employees"
              className="rounded-full px-3 py-2 text-sm font-medium text-body transition-colors hover:text-white"
            >
              Sign in
            </Link>
            <Button href="/pricing" size="sm">
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={cn("absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all", open && "top-1.5 rotate-45")} />
              <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white transition-all", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-3 h-0.5 w-5 rounded-full bg-white transition-all", open && "top-1.5 -rotate-45")} />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={cn(
            "pointer-events-auto mx-auto mt-2 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/95 backdrop-blur-xl transition-all duration-300 md:hidden",
            open ? "max-h-[80vh] opacity-100" : "max-h-0 border-transparent opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-white hover:bg-white/[0.06]"
              >
                {l.label}
                <ChevronDown className="h-4 w-4 -rotate-90 text-faint" />
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href="/pricing" size="lg" className="w-full">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/employees" variant="secondary" size="lg" className="w-full">
                View AI Employees
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

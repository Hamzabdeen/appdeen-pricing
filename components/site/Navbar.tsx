"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const links = [
  { label: "AI Employees", href: "/employees" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/pricing#how-it-works" },
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
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/80 bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-body transition-colors hover:bg-ink/5 hover:text-heading"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/employees"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-body transition-colors hover:text-heading"
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
          className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-heading transition-all",
                open && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-heading transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 rounded-full bg-heading transition-all",
                open && "top-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-line bg-canvas transition-all duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-heading hover:bg-ink/5"
            >
              {l.label}
              <ChevronDown className="h-4 w-4 -rotate-90 text-faint" />
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button href="/pricing" size="lg" className="w-full" >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/employees" variant="secondary" size="lg" className="w-full">
              View AI Employees
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * ─────────────────────────────────────────────────────────────
 *  APPDEEN AI — PRICING CONFIG  (edit everything here)
 * ─────────────────────────────────────────────────────────────
 *  This file is the single source of truth for pricing. Change a
 *  number or a label here and it updates everywhere on the site.
 *
 *  Prices are intentionally flexible:
 *   - `price: 10`          → renders "$10"
 *   - `price: null`        → renders `priceLabel` instead (e.g. "Custom")
 * ─────────────────────────────────────────────────────────────
 */

export const CURRENCY = "$";

/** The employee slot — required for every AI employee. */
export const EMPLOYEE_SLOT = {
  price: 10,
  period: "/month",
  unit: "per employee",
  name: "Employee Slot",
  tagline: "Required for every AI employee",
};

export type HourPackage = {
  id: string;
  name: string;
  hoursPerDay: number | null;
  /** monthly price in currency units, or null to show `priceLabel` */
  price: number | null;
  priceLabel?: string;
  period: string;
  headline: string;
  description: string;
  bestFor: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
};

/** The 3 shared work-hour packages + Enterprise. */
export const HOUR_PACKAGES: HourPackage[] = [
  {
    id: "starter",
    name: "Starter",
    hoursPerDay: 1,
    price: null,
    priceLabel: "Coming soon",
    period: "/month",
    headline: "1 work hour / day",
    description: "A focused hour of AI work every day, shared across your team.",
    bestFor: "Solo founders & first AI hire",
    features: [
      "≈ 30 shared work hours / month",
      "Shared across all AI employees",
      "Rollover of unused hours",
      "Email + chat support",
    ],
    ctaLabel: "Choose Starter",
    ctaHref: "/employees",
  },
  {
    id: "growth",
    name: "Growth",
    hoursPerDay: 3,
    price: null,
    priceLabel: "Coming soon",
    period: "/month",
    headline: "3 work hours / day",
    description: "Enough hours to keep a small AI team busy on real work daily.",
    bestFor: "Growing teams running 2–4 employees",
    features: [
      "≈ 90 shared work hours / month",
      "Shared across all AI employees",
      "Rollover of unused hours",
      "Priority task queue",
      "Usage insights dashboard",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "/employees",
    featured: true,
    badge: "Most popular",
  },
  {
    id: "full-time",
    name: "Full-Time",
    hoursPerDay: 8,
    price: null,
    priceLabel: "Coming soon",
    period: "/month",
    headline: "8 work hours / day",
    description: "A full working day of AI effort — like a full-time hire, shared.",
    bestFor: "Busy departments & scaling companies",
    features: [
      "≈ 240 shared work hours / month",
      "Shared across all AI employees",
      "Rollover of unused hours",
      "Priority task queue",
      "Usage insights dashboard",
      "Dedicated onboarding",
    ],
    ctaLabel: "Choose Full-Time",
    ctaHref: "/employees",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    hoursPerDay: null,
    price: null,
    priceLabel: "Custom",
    period: "",
    headline: "Custom hours",
    description: "Unlimited scale, custom hour pools, and security for large teams.",
    bestFor: "Companies with many AI employees",
    features: [
      "Custom shared hour pools",
      "Unlimited AI employees",
      "SSO, SAML & audit logs",
      "Custom integrations & tools",
      "Dedicated success manager",
      "SLA & premium support",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "/pricing#enterprise",
  },
];

/** The 3-layer pricing model shown in the explainer. */
export const PRICING_LAYERS = [
  {
    id: "slot",
    step: "Layer 1",
    icon: "seat",
    accent: "brand" as const,
    title: "Employee Slot",
    price: `${CURRENCY}${EMPLOYEE_SLOT.price}`,
    priceSuffix: "/mo per employee",
    description:
      "Every AI employee needs a seat on your team. One flat monthly slot fee holds their place — no slot, no employee.",
  },
  {
    id: "access",
    step: "Layer 2",
    icon: "cube",
    accent: "hours" as const,
    title: "Employee Access",
    price: "Build or Unlock",
    priceSuffix: "your choice",
    description:
      "Build your own custom AI employee from scratch, or unlock a ready-to-use AppDeen employee. Ready-made access starts from a fixed monthly price.",
  },
  {
    id: "hours",
    step: "Layer 3",
    icon: "clock",
    accent: "active" as const,
    title: "Work Hours",
    price: "Shared hours",
    priceSuffix: "for the whole team",
    description:
      "Instead of tokens, you buy work hours — just like real staff. One shared pool powers every AI employee, and hours are only used when they actually work.",
  },
];

/** The 4-step "how it works" flow. */
export const HOW_IT_WORKS = [
  {
    step: 1,
    icon: "cube",
    title: "Choose or build your AI employee",
    description:
      "Unlock a ready-to-use AppDeen employee like Sarah from Sales, or build your own from scratch — tailored to how your company works.",
  },
  {
    step: 2,
    icon: "seat",
    title: "Add an employee slot",
    description: `Give each AI employee a seat on your team for ${CURRENCY}${EMPLOYEE_SLOT.price}/month. The slot activates the employee and holds their place.`,
  },
  {
    step: 3,
    icon: "clock",
    title: "Buy work hours for your workforce",
    description:
      "Pick a shared hour package — Starter, Growth, or Full-Time. Every AI employee draws from the same pool of hours.",
  },
  {
    step: 4,
    icon: "bolt",
    title: "They work — hours are used only for real tasks",
    description:
      "Assign a task and your employees get to work. Hours are deducted only while they’re actually performing work — never while idle.",
  },
];

/** The worked example: two employees, five hours. */
export const WORKED_EXAMPLE = {
  employees: [
    { name: "Sarah", role: "AI Sales Employee", hours: 3, accent: "#3C8EFF" },
    { name: "Omar", role: "AI Support Employee", hours: 2, accent: "#22D3EE" },
  ],
  get total() {
    return this.employees.reduce((sum, e) => sum + e.hours, 0);
  },
};

export type Faq = { q: string; a: string };

export const PRICING_FAQS: Faq[] = [
  {
    q: "What is an employee slot?",
    a: `An employee slot is the seat that holds an AI employee on your team. It costs ${CURRENCY}${EMPLOYEE_SLOT.price}/month per employee. Without an available slot, you can’t build or activate an AI employee — think of it as their spot on the payroll.`,
  },
  {
    q: "Do I pay for every AI employee?",
    a: `Yes — each active AI employee needs its own ${CURRENCY}${EMPLOYEE_SLOT.price}/month slot, plus access (either built by you or an unlocked ready-made employee). Work hours, however, are shared across your whole workforce from a single package.`,
  },
  {
    q: "Are work hours shared between all employees?",
    a: "Completely. You buy one shared pool of hours for your company. Whether you have 1 or 20 AI employees, they all draw from the same pool — so you only ever manage one balance.",
  },
  {
    q: "What happens if I run out of work hours?",
    a: "Your AI employees simply pause until you top up or your monthly hours renew. Nothing is lost — assign more hours anytime and they pick up right where they left off. No surprise overages.",
  },
  {
    q: "Can I build my own employee?",
    a: "Yes. Add a slot and build a fully custom AI employee shaped around your business — its role, skills, tone, and the tools it can use. It draws from the same shared work hours as everyone else.",
  },
  {
    q: "Can I unlock ready-made employees?",
    a: "Absolutely. AppDeen ships with ready-to-use employees like Sarah (Sales) and Omar (Support). Unlock one, give it a slot, and it’s working the same day. Ready-made access is priced from a fixed monthly amount.",
  },
  {
    q: "Is this the same as tokens?",
    a: "No. AppDeen sells work hours, not tokens. You never think about tokens, credits, or usage math. You buy hours — the same way you’d think about a real employee’s time — and hours are only used when work actually gets done.",
  },
];

/**
 * ─────────────────────────────────────────────────────────────
 *  APPDEEN AI — PRICING CONFIG  (edit everything here)
 * ─────────────────────────────────────────────────────────────
 *  Single source of truth for pricing. Change a number or a label
 *  here and it updates everywhere on the site.
 *
 *  Prices are intentionally flexible:
 *   - `price: 49`     → renders "$49"
 *   - `price: null`   → renders `priceLabel` instead (e.g. "Coming soon")
 *
 *  To ship real prices, drop numbers into `price` below. Reference
 *  values you might use: Starter 49 · Growth 119 · Business 249 ·
 *  Scale 449 · Pay-as-you-go per-minute.
 * ─────────────────────────────────────────────────────────────
 */

export const CURRENCY = "$";

/** Free-trial framing shown across the site. */
export const TRIAL = {
  days: 14,
  label: "14-day free workforce",
  short: "14-day trial",
};

/** The employee slot — required for every active AI employee. */
export const EMPLOYEE_SLOT = {
  price: 10,
  period: "/month",
  unit: "per employee",
  name: "Employee Slot",
  tagline: "Required for every AI employee",
};

/** Mr. AppDeen — the AI workforce manager persona. */
export const MR_APPDEEN = {
  name: "Mr. AppDeen",
  role: "Your AI workforce manager",
  blurb:
    "Need help building your workforce? Mr. AppDeen will design the right team for you.",
  cta: "Talk to Mr. AppDeen",
};

export type CapacityPlan = {
  id: string;
  name: string;
  /** big hero number, e.g. "1h" or "PAYG" */
  hoursLabel: string;
  hoursPerDay: number | null;
  icon: string;
  price: number | null;
  priceLabel?: string;
  priceUnit: string;
  tagline: string;
  featured?: boolean;
  badge?: string;
};

/** The "Only pay for work" working-capacity table. */
export const CAPACITY_PLANS: CapacityPlan[] = [
  {
    id: "starter",
    name: "Starter",
    hoursLabel: "1h",
    hoursPerDay: 1,
    icon: "clock",
    price: null,
    priceLabel: "Coming soon",
    priceUnit: "/ month",
    tagline: "Perfect for trying out and small tasks.",
  },
  {
    id: "growth",
    name: "Growth",
    hoursLabel: "3h",
    hoursPerDay: 3,
    icon: "clock",
    price: null,
    priceLabel: "Coming soon",
    priceUnit: "/ month",
    tagline: "Great for startups and growing teams.",
  },
  {
    id: "business",
    name: "Business",
    hoursLabel: "8h",
    hoursPerDay: 8,
    icon: "clock",
    price: null,
    priceLabel: "Coming soon",
    priceUnit: "/ month",
    tagline: "Like hiring one full-time AI employee.",
    featured: true,
    badge: "Most popular",
  },
  {
    id: "scale",
    name: "Scale",
    hoursLabel: "16h",
    hoursPerDay: 16,
    icon: "clock",
    price: null,
    priceLabel: "Coming soon",
    priceUnit: "/ month",
    tagline: "Power multiple employees and projects.",
  },
  {
    id: "payg",
    name: "Pay as you go",
    hoursLabel: "PAYG",
    hoursPerDay: null,
    icon: "gauge",
    price: null,
    priceLabel: "Usage-based",
    priceUnit: "no commitment",
    tagline: "Use only what you need — perfect for unpredictable work.",
  },
];

/** Reassurance row under the capacity table. */
export const CAPACITY_PERKS = [
  { icon: "pause", label: "Pause or upgrade anytime" },
  { icon: "refresh", label: "Unused hours roll over" },
  { icon: "shield", label: "Secure & private" },
  { icon: "cube", label: "Isolated workspaces" },
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
      "Pick a shared daily capacity — 1, 3, 8 or 16 hours a day. Every AI employee draws from the same pool of hours.",
  },
  {
    step: 4,
    icon: "bolt",
    title: "They work — hours are used only for real tasks",
    description:
      "Assign a task and your employees get to work. Hours are deducted only while they’re actually performing work — never while idle.",
  },
];

/** The custom-employee builder mockup content. */
export const BUILDER = {
  steps: ["Knowledge", "Role & Skills", "Goals", "Personality", "Permissions", "Review"],
  sources: [
    { name: "Google Drive", icon: "drive" },
    { name: "Dropbox", icon: "dropbox" },
    { name: "Notion", icon: "notion" },
    { name: "Confluence", icon: "confluence" },
  ],
  checklist: ["Knowledge uploaded", "Role defined", "Skills set", "Ready to work"],
};

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
    q: `What’s included in the ${TRIAL.short}?`,
    a: `Every official AppDeen employee is available to try during your ${TRIAL.label}. Add them to your workforce, hand over real tasks, and see the work before you commit to anyone. No charge for the first ${TRIAL.days} days.`,
  },
  {
    q: "What is an employee slot?",
    a: `An employee slot is the seat that holds an AI employee on your team. It costs ${CURRENCY}${EMPLOYEE_SLOT.price}/month per employee. Without an available slot, you can’t activate an AI employee — think of it as their spot on the payroll.`,
  },
  {
    q: "Can multiple employees share capacity?",
    a: "Yes — that’s the whole idea. You buy one shared pool of daily work hours and every AI employee draws from it. Whether you run 1 or 20 employees, you only manage a single balance.",
  },
  {
    q: "What happens if I run out of capacity?",
    a: "Your AI employees simply pause until your hours renew or you upgrade. Nothing is lost — bump up your plan anytime and they pick up right where they left off. No surprise overages.",
  },
  {
    q: "Do unused hours roll over?",
    a: "Yes. Any hours you don’t use roll over so nothing goes to waste. You’re always paying for real work, not idle time.",
  },
  {
    q: "Can my employees work 24/7?",
    a: "Absolutely. AI employees are available around the clock. Your daily capacity controls how many hours of actual work they perform — but they never clock out.",
  },
  {
    q: "Can I build my own AI employee?",
    a: "Yes. Add a slot and build a fully custom employee shaped around your business — upload your knowledge, define its role, skills, and personality, and connect the tools it can use.",
  },
  {
    q: "Can I pay only for usage?",
    a: "Yes — choose Pay as you go and you’re only billed for the work your employees actually do. Perfect for occasional or unpredictable workloads, with no monthly commitment.",
  },
  {
    q: "Can I pause or downgrade anytime?",
    a: "Anytime. Pause, upgrade, or downgrade your capacity whenever you like — changes apply immediately and there are no long contracts.",
  },
];

# AppDeen AI — Pricing, Marketplace & Employee Profiles

Production-quality marketing pages for **AppDeen AI**, the platform where
companies hire ready-to-use AI employees or build their own — and pay for
**work hours**, not tokens.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Landing page that connects the whole flow |
| `/pricing` | Full pricing story: Start-free hero + Mr. AppDeen, "One trial" showcase, 3-layer model, 4-step flow, working-capacity table, worked example, custom-employee builder, enterprise, 3-column FAQ, final CTA |
| `/employees` | AI employee marketplace with category filter |
| `/employees/[slug]` | Full AI employee profile (e.g. `/employees/sarah`) |

## The business model (in the UI)

Every AI employee is assembled from three simple layers:

1. **Employee Slot** — `$10/month` per employee. No slot, no employee.
2. **Employee Access** — build your own, or unlock a ready-made employee
   (shown as _“Price varies by employee”_, decided later).
3. **Work Hours** — one **shared** pool of hours for the whole workforce.
   Hours are only used while employees actually work — never tokens or credits.

## Everything is easy to edit

- **Prices, packages, steps & FAQs** → [`lib/pricing.ts`](lib/pricing.ts)
  Change a number or a label in one place and it updates across the site.
  Prices support real values (`price: 49` → `$49`) or placeholders
  (`price: null` + `priceLabel: "Coming soon" / "Custom"`). Capacity tiers,
  the 14-day trial, the Mr. AppDeen persona, and the builder steps all live
  here too.
- **AI employees (mock data)** → [`lib/employees.ts`](lib/employees.ts)
  Add or edit employees; the marketplace, profiles, and related sections
  update automatically. Swap for a real API later.

## Re-skinning to the exact AppDeen brand

The entire palette is driven by CSS variables in **one place**:
[`app/globals.css`](app/globals.css) (`:root`). Replace the RGB channel values
(brand color, surfaces, text, accents) and the whole site re-skins — no
component edits required. Radii, shadows, and fonts live in
[`tailwind.config.ts`](tailwind.config.ts).

> The theme is light with deep-navy feature bands and an electric-blue
> gradient accent (`--brand`), matching the AppDeen AI identity. Adjust the
> `--brand-*` channels to fine-tune the exact blue, or flip the surface/text
> channels to go fully dark.

## Reusable components

- `components/pricing/CapacityCard.tsx` — working-capacity plan card
- `components/pricing/CapacityPlans.tsx` — the capacity pricing table
- `components/pricing/FaqGrid.tsx` — 3-column FAQ accordion
- `components/pricing/MrAppdeen.tsx` — Mr. AppDeen avatar + help band
- `components/employees/EmployeeCard.tsx` — AI employee card
- `components/ui/*` — Button, Avatar, StatusPill, SectionHeader, Reveal,
  Corners (bracket frames), icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

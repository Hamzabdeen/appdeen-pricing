# AppDeen AI — Pricing, Marketplace & Employee Profiles

Production-quality marketing pages for **AppDeen AI**, the platform where
companies hire ready-to-use AI employees or build their own — and pay for
**work hours**, not tokens.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Landing page that connects the whole flow |
| `/pricing` | The pricing story: 3-layer model, 4-step flow, work-hour packages, worked example, FAQ |
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
  Prices support real values (`price: 10` → `$10`) or placeholders
  (`price: null` + `priceLabel: "Coming soon" / "Custom"`).
- **AI employees (mock data)** → [`lib/employees.ts`](lib/employees.ts)
  Add or edit employees; the marketplace, profiles, and related sections
  update automatically. Swap for a real API later.

## Re-skinning to the exact AppDeen brand

The entire palette is driven by CSS variables in **one place**:
[`app/globals.css`](app/globals.css) (`:root`). Replace the RGB channel values
(brand color, surfaces, text, accents) and the whole site re-skins — no
component edits required. Radii, shadows, and fonts live in
[`tailwind.config.ts`](tailwind.config.ts).

> The palette is tuned to the live AppDeen AI identity: a deep navy-black
> canvas with an electric-blue gradient accent (`--brand`), the floating pill
> navbar, corner-bracket card frames, and glow. Adjust the `--brand-*` channels
> to fine-tune the exact blue.

## Reusable components

- `components/pricing/PricingCard.tsx` — work-hour package card
- `components/employees/EmployeeCard.tsx` — AI employee card
- `components/pricing/Faq.tsx` — accordion FAQ
- `components/ui/*` — Button, Avatar, StatusPill, SectionHeader, Reveal, icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

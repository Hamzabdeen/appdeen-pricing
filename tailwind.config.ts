import type { Config } from "tailwindcss";

/**
 * ─────────────────────────────────────────────────────────────
 *  APPDEEN AI — DESIGN TOKENS
 * ─────────────────────────────────────────────────────────────
 *  The entire brand is driven by CSS variables defined in
 *  app/globals.css (`:root`). To re-skin the site to the exact
 *  AppDeen AI palette, change the HEX values there — nothing in
 *  the components needs to be touched.
 * ─────────────────────────────────────────────────────────────
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",

        // Text
        heading: "rgb(var(--heading) / <alpha-value>)",
        body: "rgb(var(--body) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",

        // Brand
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          bright: "rgb(var(--brand-bright) / <alpha-value>)",
          deep: "rgb(var(--brand-deep) / <alpha-value>)",
          soft: "rgb(var(--brand-soft) / <alpha-value>)",
          ink: "rgb(var(--brand-ink) / <alpha-value>)",
        },
        // Work-hours / energy accent
        hours: {
          DEFAULT: "rgb(var(--hours) / <alpha-value>)",
          soft: "rgb(var(--hours-soft) / <alpha-value>)",
        },
        // Status / success
        active: {
          DEFAULT: "rgb(var(--active) / <alpha-value>)",
          soft: "rgb(var(--active-soft) / <alpha-value>)",
        },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,0.04), 0 4px 14px -4px rgba(16,24,40,0.06)",
        card: "0 1px 3px rgba(16,24,40,0.05), 0 14px 38px -14px rgba(16,24,40,0.16)",
        lift: "0 2px 6px rgba(16,24,40,0.06), 0 30px 64px -22px rgba(16,24,40,0.26)",
        glow: "0 16px 44px -14px rgb(var(--brand) / 0.5)",
        "glow-sm": "0 8px 22px -8px rgb(var(--brand) / 0.55)",
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

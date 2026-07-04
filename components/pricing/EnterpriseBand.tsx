import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Shield, Users, Globe } from "@/components/ui/Icon";

const points = [
  { icon: <Users className="h-5 w-5" />, label: "Unlimited AI employees" },
  { icon: <Shield className="h-5 w-5" />, label: "SSO, SAML & audit logs" },
  { icon: <Globe className="h-5 w-5" />, label: "Custom hour pools & SLAs" },
];

export function EnterpriseBand() {
  return (
    <section id="enterprise" className="container-x scroll-mt-24 pb-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-8 shadow-card sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="eyebrow">Enterprise</span>
              <h2 className="display-2 mt-4 max-w-xl text-balance">
                Scaling a large AI workforce? Let’s build your plan.
              </h2>
              <p className="mt-4 max-w-lg text-lg text-muted">
                Custom hour pools, unlimited employees, advanced security, and a
                dedicated success manager — priced around how your teams
                actually work.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/pricing#enterprise" size="lg">
                  Contact sales
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/employees" variant="secondary" size="lg">
                  Explore AI employees
                </Button>
              </div>
            </div>

            <ul className="space-y-3">
              {points.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-canvas px-5 py-4"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand">
                    {p.icon}
                  </span>
                  <span className="font-medium text-heading">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

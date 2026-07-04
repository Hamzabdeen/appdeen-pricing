import { PRICING_LAYERS } from "@/lib/pricing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Plus } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const tintMap: Record<string, { chip: string; icon: string; ring: string }> = {
  brand: {
    chip: "text-brand",
    icon: "bg-brand-soft text-brand",
    ring: "group-hover:border-brand/40",
  },
  hours: {
    chip: "text-[rgb(200,120,10)]",
    icon: "bg-hours-soft text-[rgb(200,120,10)]",
    ring: "group-hover:border-hours/50",
  },
  active: {
    chip: "text-active",
    icon: "bg-active-soft text-active",
    ring: "group-hover:border-active/40",
  },
};

export function ModelLayers() {
  return (
    <section id="model" className="container-x py-20 sm:py-28">
      <SectionHeader
        eyebrow="The pricing model"
        title="Three simple layers. One clear bill."
        description="Appdeen pricing works like building a real team — give each employee a seat, choose who they are, and buy the hours they’ll work. That’s it."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {PRICING_LAYERS.map((layer, i) => {
          const tint = tintMap[layer.accent];
          return (
            <div key={layer.id} className="contents">
              <Reveal
                as="div"
                delay={i * 90}
                className={cn(
                  "group relative flex flex-col rounded-3xl border border-line bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
                  tint.ring
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-2xl",
                      tint.icon
                    )}
                  >
                    <DynamicIcon name={layer.icon} className="h-6 w-6" />
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.14em]",
                      tint.chip
                    )}
                  >
                    {layer.step}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-heading">
                  {layer.title}
                </h3>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-lg font-semibold text-heading">
                    {layer.price}
                  </span>
                  <span className="text-sm text-muted">{layer.priceSuffix}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {layer.description}
                </p>
              </Reveal>

              {i < PRICING_LAYERS.length - 1 && (
                <div className="hidden items-center justify-center lg:flex">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-canvas text-faint">
                    <Plus className="h-4 w-4" />
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

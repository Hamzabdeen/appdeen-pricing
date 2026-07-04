import { AppDeenMark } from "@/components/site/Logo";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icon";
import { MR_APPDEEN } from "@/lib/pricing";
import { cn } from "@/lib/utils";

/** Stylized "Mr. AppDeen" workforce-manager avatar (abstract, no photo needed). */
export function MrAppdeenAvatar({
  size = "lg",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const dim = size === "lg" ? "h-full w-full" : "h-16 w-16";
  return (
    <div className={cn("relative", dim, className)}>
      {/* glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_35%,rgb(var(--brand)/0.55),transparent_70%)] blur-xl" />
      <div className="relative flex h-full w-full flex-col items-center justify-end overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#10182e] to-[#05070f]">
        <div className="bg-dotgrid absolute inset-0 opacity-40" />
        {/* head */}
        <div className="relative mt-[16%] grid h-[42%] w-[42%] place-items-center rounded-full border border-white/10 bg-[#0b1020] shadow-[0_0_40px_-6px_rgb(var(--brand)/0.6)]">
          <AppDeenMark className="!h-1/2 !w-1/2" />
          <span className="absolute right-[14%] top-[14%] h-2.5 w-2.5 rounded-full bg-active ring-2 ring-[#0b1020]" />
        </div>
        {/* shoulders / suit */}
        <div className="relative mt-auto h-[34%] w-full">
          <div className="absolute inset-x-[12%] bottom-0 top-[20%] rounded-t-[3rem] bg-gradient-to-b from-[#131c33] to-[#0a1122]" />
          <div className="absolute inset-x-[42%] bottom-0 top-[18%] w-[16%] bg-[#0a1122]" />
        </div>
      </div>
    </div>
  );
}

/** "Talk to Mr. AppDeen" help band. */
export function MrAppdeenBand() {
  return (
    <section className="container-x py-6">
      <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-6 shadow-soft sm:flex-row sm:p-7">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 shrink-0 sm:h-20 sm:w-20">
            <MrAppdeenAvatar />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-heading">
              {MR_APPDEEN.cta}
            </h3>
            <p className="mt-1 max-w-md text-sm text-muted">{MR_APPDEEN.blurb}</p>
          </div>
        </div>
        <Button href="/pricing#enterprise" variant="secondary" size="lg" className="shrink-0">
          {MR_APPDEEN.cta}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

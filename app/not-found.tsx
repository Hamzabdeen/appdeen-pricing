import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="chip">404 — Not found</span>
      <h1 className="display-2 mt-6">This page clocked out.</h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        The page you’re looking for isn’t on the team. Let’s get you back to your
        AI workforce.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href="/employees" variant="secondary" size="lg">
          Browse AI employees
        </Button>
      </div>
    </section>
  );
}

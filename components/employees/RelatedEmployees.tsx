import { getRelated } from "@/lib/employees";
import { EmployeeCard } from "./EmployeeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function RelatedEmployees({ slug }: { slug: string }) {
  const related = getRelated(slug, 4);

  return (
    <section className="container-x py-20 sm:py-24">
      <SectionHeader
        align="left"
        eyebrow="Grow your team"
        title="Related AI employees"
        description="Build out a full AI workforce — they all share the same work-hour pool."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((emp, i) => (
          <Reveal key={emp.slug} as="div" delay={i * 70} className="h-full">
            <EmployeeCard employee={emp} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

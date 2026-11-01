import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-muted-foreground">
              {category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

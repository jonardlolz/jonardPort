import { Code2, Smartphone, Wrench } from "lucide-react";

import { skills } from "@/lib/data";

const categoryIcons = {
  "Full Stack": Code2,
  iOS: Smartphone,
  Tools: Wrench,
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-left text-2xl font-semibold tracking-tight">Skills</h2>

      <div className="mt-8 space-y-5">
        {Object.entries(skills).map(([category, items]) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons] ?? Code2;
          const repeatedItems = [...items, ...items];

          return (
            <div
              key={category}
              className="overflow-hidden rounded-2xl border border-border/70 bg-card/50"
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/60">
                  <Icon className="size-4 text-foreground" />
                </div>
                <h3 className="text-left text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {category}
                </h3>
              </div>

              <div className="relative overflow-hidden border-t border-border/70">
                <div className="marquee-track flex w-max items-center gap-3 px-4 py-4">
                  {repeatedItems.map((item, index) => (
                    <div
                      key={`${category}-${item}-${index}`}
                      className="shrink-0 rounded-full border border-border bg-background/60 px-3 py-2 text-sm text-foreground shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

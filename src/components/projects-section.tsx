import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-left text-2xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-left text-muted-foreground">
        A mix of full stack and iOS work.
      </p>

      {projects.length === 0 ? (
        <div className="mt-8 text-left text-lg font-medium text-muted-foreground">
          No projects... YET!
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

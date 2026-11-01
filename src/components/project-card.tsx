import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { ExternalLink, Code2 } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{project.title}</CardTitle>
          <Badge variant="secondary">{project.platform}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(project.link || project.repo) && (
        <CardFooter className="gap-2">
          {project.link && (
            <Button
              size="sm"
              variant="secondary"
              nativeButton={false}
              render={
                <a href={project.link} target="_blank" rel="noopener noreferrer" />
              }
            >
              <ExternalLink className="h-4 w-4" /> Live
            </Button>
          )}
          {project.repo && (
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={
                <a href={project.repo} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Code2 className="h-4 w-4" /> Code
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}

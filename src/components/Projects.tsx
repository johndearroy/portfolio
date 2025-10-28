import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.projects.map((project, idx) => {
            const isExpanded = expandedProjects.has(project.id);
            
            return (
              <Card
                key={project.id}
                className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-slide-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Project Name */}
                  <h3 className="text-2xl font-bold text-primary group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Expandable Highlights */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-border animate-fade-in">
                      <h4 className="font-semibold text-primary mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-primary mt-1">▹</span>
                            <span className="text-foreground/90 text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Toggle Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full hover:bg-primary/10"
                    onClick={() => toggleProject(project.id)}
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

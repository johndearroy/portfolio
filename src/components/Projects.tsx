import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Terminal, Folder, ChevronRight } from "lucide-react";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="sticky top-0 z-20 bg-background/60 backdrop-blur-xl py-8 -mt-8 border-b border-primary/10 mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="code-text text-primary text-sm">$ ls -la projects/</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="code-text text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            // Notable implementations and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.projects.map((project, idx) => (
            <Card
              key={project.id}
              className="terminal-card terminal-card-hover p-6 animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <Folder className="h-4 w-4 text-primary" />
                <span className="code-text text-xs text-muted-foreground">
                  {project.name.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="code-text text-xl font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Project Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-border">
                    <div className="text-center">
                      <div className="code-text text-lg font-bold text-primary">{project.metrics.users}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="code-text text-lg font-bold text-primary">{project.metrics.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="code-text text-xs bg-secondary border border-border hover:border-primary/40"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="secondary" className="code-text text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Duration & Role */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <span className="code-text">{project.duration}</span>
                  <span>•</span>
                  <span className="code-text">{project.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="terminal-card max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="code-text text-xs text-primary">
                    $ cat {selectedProject.name.toLowerCase().replace(/\s+/g, '-')}/README.md
                  </span>
                </div>
                <DialogTitle className="code-text text-2xl">
                  {selectedProject.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="code-text text-sm text-primary mb-3">// Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="code-text text-xs bg-secondary border border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="code-text text-sm text-primary mb-3">// Key Achievements</h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((highlight: string, i: number) => (
                      <div key={i} className="flex gap-2 items-start">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {selectedProject.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10 code-text"
                      asChild
                    >
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10 code-text"
                      asChild
                    >
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, User, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData.projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 px-4 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="sticky top-0 z-20 text-center mb-20 animate-fade-in glass-card py-8 -mt-8 border-b border-primary/20">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-2 text-sm font-semibold">
              Portfolio Showcase
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Innovative solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.projects.map((project, idx) => (
            <Card
              key={project.id}
              className="glass-card glass-card-hover p-8 cursor-pointer animate-slide-up group relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                {/* Project header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-display font-bold group-hover:text-gradient transition-all duration-300 flex-1">
                    {project.name}
                  </h3>
                  <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/80 hover:bg-primary/20 border border-primary/20 transition-colors px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 px-3 py-1"
                    >
                      +{project.techStack.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* View details hint */}
                <div className="pt-4 border-t border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Click to view full details
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-primary/30">
          {selectedProject && (
            <div className="animate-scale-in">
              <DialogHeader>
                <DialogTitle className="text-4xl font-display font-bold text-gradient mb-4">
                  {selectedProject.name}
                </DialogTitle>
                <DialogDescription className="text-lg text-foreground/80 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-8">
                {/* Project Image with gradient overlay */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50 group-hover:opacity-30 transition-opacity" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Duration and Role cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-secondary/50 border-primary/20 hover:border-primary/40 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1 font-medium">Duration</p>
                        <p className="text-lg font-display font-bold">{selectedProject.duration}</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-secondary/50 border-accent/20 hover:border-accent/40 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl group-hover:scale-110 transition-transform">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1 font-medium">Role</p>
                        <p className="text-lg font-display font-bold">{selectedProject.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Tech Stack with enhanced styling */}
                <div>
                  <h4 className="font-display text-2xl font-bold mb-4 text-gradient">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, idx) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/80 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all hover:scale-110 text-base px-4 py-2 font-medium"
                        style={{ 
                          animationDelay: `${idx * 0.05}s`,
                          animation: 'slideUp 0.5s ease-out forwards'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights with better styling */}
                <div>
                  <h4 className="font-display text-2xl font-bold mb-6 text-gradient">Key Highlights</h4>
                  <div className="space-y-4">
                    {selectedProject.highlights.map((highlight, i) => (
                      <div 
                        key={i} 
                        className="flex gap-4 items-start p-4 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all hover:translate-x-2 duration-300"
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          animation: 'slideLeft 0.6s ease-out forwards'
                        }}
                      >
                        <span className="text-primary text-2xl flex-shrink-0">→</span>
                        <span className="text-foreground/90 leading-relaxed flex-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons with enhanced styling */}
                {selectedProject.links && (
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-primary/20">
                    {selectedProject.links.live && (
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-glow transition-all hover:scale-105"
                      >
                        <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5 mr-2" />
                          View Live Site
                        </a>
                      </Button>
                    )}
                    {selectedProject.links.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 border-primary/40 hover:border-primary bg-secondary/50 hover:bg-primary/10 font-semibold transition-all hover:scale-105"
                      >
                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 mr-2" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

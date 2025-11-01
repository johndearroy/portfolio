import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Terminal, Folder, ChevronRight, ChevronLeft, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const showProjectMetrix = false; // Toggle to show/hide project metrics
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400; // adjust scroll distance per click
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const totalProjects = projectsData.projects.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projectsData.projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);
    
    // Fake loading for 500ms
    setTimeout(() => {
      setIsLoading(false);
      // Scroll to top of projects section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  };

  const handleItemsPerPageChange = (value: string) => {
    setIsLoading(true);
    const newItemsPerPage = parseInt(value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
    
    // Fake loading for 500ms
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="sticky top-10 z-20 bg-background/60 backdrop-blur-xl py-8 -mt-8 border-b border-primary/10 mb-20">
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

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="code-text text-sm text-muted-foreground">Items per page:</span>
            <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
              <SelectTrigger className="w-20 border-primary/30 code-text">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="12">12</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="code-text text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, totalProjects)} of {totalProjects} projects
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: itemsPerPage }).map((_, idx) => (
              <Card key={idx} className="terminal-card p-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-16 w-full" />
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-border">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {currentProjects.map((project, idx) => (
              <Card
                key={project.id}
                className="terminal-card terminal-card-hover p-6 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Terminal Header */}
                <div className="w-full flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-primary" />
                    <span className="code-text text-xs text-muted-foreground">
                      {project.name.toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  </div>
                  <span className="flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    See details
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </span>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="code-text text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  {showProjectMetrix && project.metrics && (
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
                  <div className="flex flex-wrap gap-2 border-y border-border py-3">
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
        )}

        {/* Pagination */}
        {totalPages > 1 && !isLoading && (
          <div className="mt-12 flex justify-center code-text">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer border-primary/30 hover:bg-primary/10"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer border-primary/30 hover:bg-primary/10"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer border-primary/30 hover:bg-primary/10"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
        
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="terminal-card max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
          {selectedProject && (
            <>
              <DialogHeader className="flex-shrink-0">
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

              <div className="space-y-6 pt-4 overflow-y-auto flex-1 pr-2 scrollbar-hide">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Project Screenshots/Images */}
                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div className="relative">
                    <h4 className="code-text text-sm text-primary mb-3">// Screenshots</h4>

                    {/* Scroll Buttons */}
                    <button
                      onClick={() => scroll("left")}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary/20 text-primary p-2 rounded-full shadow transition z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => scroll("right")}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary/20 text-primary p-2 rounded-full shadow transition z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                      ref={scrollRef}
                      className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    >
                      {selectedProject.screenshots.map((screenshot: any, idx: number) => (
                        <div
                          key={idx}
                          className="terminal-card p-2 group cursor-pointer hover:border-primary/40 transition-colors flex-shrink-0 w-[400px]"
                        >
                          <div className="relative aspect-video bg-secondary/20 rounded overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              {screenshot.url ? (
                                <a
                                  href={screenshot.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src={screenshot.url}
                                    alt={screenshot.caption || `Screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  />
                                </a>
                              ) : (
                                <div className="text-center space-y-2">
                                  <Terminal className="h-8 w-8 text-primary/40 mx-auto" />
                                  <p className="code-text text-xs text-muted-foreground">
                                    {screenshot.caption || `Screenshot ${idx + 1}`}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                          {screenshot.caption && (
                            <p className="code-text text-xs text-muted-foreground mt-2">
                              // {screenshot.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code Snippet */}
                {selectedProject.codeSnippet && (
                  <div>
                    <h4 className="code-text text-sm text-primary mb-3">// Implementation Highlight</h4>
                    <div className="terminal-card p-4 bg-secondary/20">
                      <pre className="code-text text-xs overflow-x-auto">
                        <code className="text-primary/80">
                          {selectedProject.codeSnippet}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Architecture ASCII */}
                {selectedProject.architecture && (
                  <div>
                    <h4 className="code-text text-sm text-primary mb-3">// System Architecture</h4>
                    <div className="terminal-card p-4 bg-secondary/20">
                      <pre className="code-text text-xs text-primary/60 whitespace-pre">
                        {selectedProject.architecture}
                      </pre>
                    </div>
                  </div>
                )}

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

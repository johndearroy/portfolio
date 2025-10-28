import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl opacity-50 animate-pulse" />
            <img
              src={profileData.photo}
              alt={profileData.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/30"
            />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">{profileData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {profileData.title}
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {profileData.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/50 transition-all"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href={`mailto:${profileData.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

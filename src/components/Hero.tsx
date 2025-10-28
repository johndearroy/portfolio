import { Mail, Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Profile Image with enhanced effects */}
          <div className="relative w-40 h-40 mx-auto mb-10 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] blur-2xl opacity-60 animate-shimmer" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 animate-glow" />
            <img
              src={profileData.photo}
              alt={profileData.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/40 group-hover:scale-105 transition-transform duration-500 shadow-2xl"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent p-2 rounded-full animate-bounce">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Title with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight">
              <span className="text-gradient inline-block hover:scale-105 transition-transform duration-300">
                {profileData.name}
              </span>
            </h1>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
              <p className="relative text-2xl md:text-3xl font-display font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {profileData.title}
              </p>
            </div>
          </div>

          {/* Summary with better styling */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light">
            {profileData.summary}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="relative group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-lg px-8 py-6 shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden"
              onClick={() => scrollToSection("projects")}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-primary/40 hover:border-primary bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 h-12 w-12 hover-lift"
                asChild
              >
                <a href={`mailto:${profileData.email}`} aria-label="Email">
                  <Mail className="h-5 w-5 text-primary" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-primary/40 hover:border-primary bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 h-12 w-12 hover-lift"
                asChild
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-primary" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="border-2 border-primary/40 hover:border-primary bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110 h-12 w-12 hover-lift"
                asChild
              >
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

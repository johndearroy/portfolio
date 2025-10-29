import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Terminal, Code2, ChevronDown } from "lucide-react";
import profileData from "@/data/profile.json";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Terminal Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 code-text text-primary/20 text-xs">
          const developer = &#123;
        </div>
        <div className="absolute top-20 right-20 code-text text-primary/20 text-xs">
          skills: ["React", "Node.js", "AWS"]
        </div>
        <div className="absolute bottom-40 left-1/4 code-text text-primary/20 text-xs">
          &#125;;
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Terminal Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <Terminal className="h-16 w-16 text-primary relative animate-pulse" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="code-text text-sm text-muted-foreground">System.status: <span className="text-primary">online</span></span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="code-text text-foreground">{profileData.name}</span>
            </h1>

            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl">
              <Code2 className="h-6 w-6 text-primary" />
              <p className="code-text text-gradient font-semibold">{profileData.title}</p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {profileData.summary}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="terminal-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 group"
            >
              <span className="code-text">$ view_projects</span>
              <Terminal className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/30 hover:bg-primary/10 font-semibold px-8 group"
            >
              <span className="code-text">$ contact_me</span>
              <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
              asChild
            >
              <a href={`mailto:${profileData.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
              asChild
            >
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
              asChild
            >
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

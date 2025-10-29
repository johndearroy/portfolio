import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import profileData from "@/data/profile.json";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="sticky top-0 z-20 text-center mb-16 animate-fade-in glass-card py-8 -mt-8 border-b border-primary/20">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 px-6 py-2 text-sm font-semibold">
              Get In Touch
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <Card className="glass-card p-12 animate-slide-up relative overflow-hidden group">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 space-y-12">
            {/* Email CTA */}
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-pulse" />
                <Mail className="relative h-16 w-16 text-primary mx-auto mb-4" />
              </div>
              <div>
                <p className="text-muted-foreground mb-4 text-lg">Drop me an email at</p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-3xl md:text-4xl font-display font-bold text-gradient hover:scale-105 inline-block transition-transform duration-300"
                >
                  {profileData.email}
                </a>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-lg px-8 py-6 shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href={`mailto:${profileData.email}`}>
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-card text-muted-foreground font-medium">OR CONNECT VIA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/40 hover:border-primary bg-secondary/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-110 h-16 w-16 hover-lift group"
                asChild
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-7 w-7 text-primary group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/40 hover:border-primary bg-secondary/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-110 h-16 w-16 hover-lift group"
                asChild
              >
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7 text-primary group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

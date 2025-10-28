import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileData from "@/data/profile.json";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <Card className="glass-card p-12 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/50 transition-all"
              asChild
            >
              <a href={`mailto:${profileData.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>

            <div className="flex gap-3">
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

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {profileData.email}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

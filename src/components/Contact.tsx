import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Terminal, Send } from "lucide-react";
import profileData from "@/data/profile.json";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="sticky top-0 z-20 bg-background/60 backdrop-blur-xl py-8 -mt-8 border-b border-primary/10 mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="code-text text-primary text-sm">$ contact --init</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="code-text text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            // Open to discussing new opportunities and collaborations
          </p>
        </div>

        <Card className="terminal-card p-8 md:p-12 animate-slide-up">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <span className="code-text text-xs text-muted-foreground ml-2">
              ~/contact
            </span>
          </div>

          <div className="space-y-8">
            {/* Email Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="code-text text-sm text-primary">emailAddress:</span>
              </div>
              <a
                href={`mailto:${profileData.email}`}
                className="code-text text-2xl md:text-3xl font-bold text-gradient hover:opacity-80 transition-opacity block"
              >
                {profileData.email}
              </a>
              <Button
                size="lg"
                className="terminal-border bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 group mt-4"
                asChild
              >
                <a href={`mailto:${profileData.email}`}>
                  <span className="code-text">$ send_message</span>
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="code-text px-4 bg-card text-xs text-muted-foreground">
                  OR CONNECT VIA
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 justify-start border-border hover:border-primary/50 hover:bg-primary/10 group"
                asChild
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <span className="code-text">GitHub</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="flex-1 justify-start border-border hover:border-primary/50 hover:bg-primary/10 group"
                asChild
              >
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <span className="code-text">LinkedIn</span>
                </a>
              </Button>
            </div>

            {/* Footer Note */}
            <div className="pt-6 border-t border-border">
              <p className="code-text text-xs text-muted-foreground text-center">
                <span className="text-primary">{">"}</span> Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

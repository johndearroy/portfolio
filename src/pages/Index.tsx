import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { BootSequence } from "@/components/BootSequence";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { Terminal, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";

const Index = () => {
  const [showBoot, setShowBoot] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenBoot = localStorage.getItem("hasSeenBoot");
    if (!hasSeenBoot) {
      setShowBoot(true);
      localStorage.setItem("hasSeenBoot", "true");
    } else {
      setShowContent(true);
    }
  }, []);

  const handleBootComplete = () => {
    setShowBoot(false);
    setShowContent(true);
  };

  if (showBoot) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  if (!showContent) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="relative py-16 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="font-mono text-sm space-y-4">
            <div className="flex items-center gap-2 text-primary mb-6">
              <Terminal className="h-5 w-5" />
              <span className="code-text">$ system_info</span>
            </div>
            
            <div className="space-y-2 text-muted-foreground">
              <div className="flex gap-2">
                <span className="text-primary/60">$</span>
                <span className="code-text">whoami</span>
              </div>
              <div className="ml-4 text-foreground">{profileData.title}</div>
              
              <div className="flex gap-2 mt-4">
                <span className="text-primary/60">$</span>
                <span className="code-text">uptime</span>
              </div>
              <div className="ml-4">
                Portfolio v2.0 | Last updated: {new Date().getFullYear()}
              </div>
              
              <div className="flex gap-2 mt-4">
                <span className="text-primary/60">$</span>
                <span className="code-text">echo $TECH_STACK</span>
              </div>
              <div className="ml-4">Built with React, TypeScript, Tailwind CSS & Vite</div>
            </div>

            <div className="pt-6 border-t border-border mt-6 flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Senior Software Engineer. All rights reserved.
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="code-text hover:bg-primary/10 hover:text-primary"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <PerformanceMetrics />
    </div>
  );
};

export default Index;

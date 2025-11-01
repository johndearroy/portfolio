import { Card } from "@/components/ui/card";
import { Terminal, Calendar, MapPin, ChevronRight, TrendingUp } from "lucide-react";
import experienceData from "@/data/experience.json";

export const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="sticky top-10 z-20 bg-background/60 backdrop-blur-xl py-8 -mt-8 border-b border-primary/10 mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="code-text text-primary text-sm">$ git log --work-experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="code-text text-gradient">Career Timeline</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            // 8+ years of building scalable solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experienceData.positions.map((position, idx) => (
            <Card
              key={idx}
              className="terminal-card terminal-card-hover p-8 animate-slide-up relative overflow-hidden group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <span className="code-text text-xs text-muted-foreground ml-2">
                  ~/career/{position.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                </span>
              </div>

              <div className="space-y-6">
                {/* Position Info */}
                <div className="space-y-3">
                  <h3 className="code-text text-2xl font-bold text-primary">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-primary" />
                      <span className="code-text">{position.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="code-text">{position.startDate}</span>
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="code-text">{position.endDate}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 pt-2">
                  <div className="code-text text-xs text-primary/70 mb-2">// Key achievements:</div>
                  {position.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3 items-start group/item">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-foreground/90 leading-relaxed text-xs">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

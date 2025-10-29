import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import experienceData from "@/data/experience.json";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="sticky top-0 z-20 text-center mb-20 animate-fade-in glass-card py-8 -mt-8 border-b border-primary/20">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 px-6 py-2 text-sm font-semibold">
              Career Journey
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            8+ years of building impactful software solutions
          </p>
        </div>

        {/* Horizontal Scrollable Timeline */}
        <div className="relative">
          {/* Scroll hint indicator */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="bg-gradient-to-l from-background via-background to-transparent w-32 h-full flex items-center justify-end pr-4">
              <div className="text-primary animate-pulse">→</div>
            </div>
          </div>

          {/* Horizontal timeline line */}
          <div className="absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          {/* Scrollable container */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8 min-w-max px-4">
              {experienceData.positions.map((position, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-[400px] animate-slide-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl animate-pulse" />
                      <div className="relative w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background flex items-center justify-center shadow-glow">
                        <Briefcase className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <Card className="glass-card glass-card-hover p-8 mt-48 group relative overflow-hidden h-full">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center font-display font-bold text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>

                    <div className="relative z-10 space-y-5">
                      {/* Date badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{position.startDate} - {position.endDate}</span>
                      </div>

                      {/* Position and company */}
                      <div>
                        <h3 className="text-2xl font-display font-bold group-hover:text-gradient transition-all duration-300 mb-3 leading-tight">
                          {position.title}
                        </h3>
                        <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {position.company}
                        </p>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3 pt-3">
                        {position.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 items-start group/item">
                            <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-125 transition-transform">→</span>
                            <span className="text-foreground/80 leading-relaxed text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

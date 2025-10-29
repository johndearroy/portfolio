import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import experienceData from "@/data/experience.json";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="sticky top-0 z-20 text-center mb-20 animate-fade-in bg-background/80 backdrop-blur-xl py-8 -mt-8 border-b border-primary/10">
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          <div className="space-y-16">
            {experienceData.positions.map((position, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-slide-up`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg animate-pulse" />
                    <div className="relative w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background flex items-center justify-center">
                      <Briefcase className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${idx % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"}`}>
                  <Card className="glass-card glass-card-hover p-8 group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 space-y-4">
                      {/* Date badge */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{position.startDate} - {position.endDate}</span>
                      </div>

                      {/* Position and company */}
                      <div>
                        <h3 className="text-2xl font-display font-bold group-hover:text-gradient transition-all duration-300 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {position.company}
                        </p>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3 pt-2">
                        {position.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span className="text-primary text-xl mt-0.5 flex-shrink-0">→</span>
                            <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

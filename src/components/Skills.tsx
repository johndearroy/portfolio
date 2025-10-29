import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import skillsData from "@/data/skills.json";
import * as Icons from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="sticky top-0 z-20 text-center mb-20 animate-fade-in glass-card py-8 -mt-8 border-b border-primary/20">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-2 text-sm font-semibold">
              Technical Expertise
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((category, idx) => (
              <Card
                key={category.name}
                className="glass-card glass-card-hover p-8 animate-slide-up group relative overflow-hidden"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-6 relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-primary to-accent p-4 rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className="h-8 w-8 bg-white/20 rounded" />
                    </div>
                  </div>

                  {/* Category title */}
                  <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-gradient transition-all duration-300">
                    {category.name}
                  </h3>

                  {/* Skills with enhanced badges */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-secondary/80 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 px-4 py-2 text-sm font-medium hover:shadow-lg cursor-default"
                        style={{ 
                          animationDelay: `${(idx * 0.15) + (skillIdx * 0.05)}s`,
                          animation: 'slideUp 0.6s ease-out forwards'
                        }}
                      >
                        {skill.name}
                      </Badge>
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

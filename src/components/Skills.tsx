import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import skillsData from "@/data/skills.json";
import { Terminal, Code2, Server, Cloud } from "lucide-react";

const categoryIcons = {
  "Backend": Server,
  "Frontend": Code2,
  "DevOps & Cloud": Cloud,
  "Frameworks & Libraries": Terminal
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="sticky top-0 z-20 bg-background/60 backdrop-blur-xl py-8 -mt-8 border-b border-primary/10 mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="code-text text-primary text-sm">$ cat skills.json</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="code-text text-gradient">Technical Stack</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            // Core technologies and frameworks I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.categories.map((category, idx) => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Terminal;
            
            return (
              <Card
                key={category.name}
                className="terminal-card terminal-card-hover p-6 animate-slide-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 border border-primary/30 rounded">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="code-text text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 py-2 px-3 bg-secondary/50 border border-border hover:border-primary/40 rounded transition-all hover:translate-x-1 group/item"
                      style={{ 
                        animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s`,
                        animation: 'slideLeft 0.6s ease-out forwards'
                      }}
                    >
                      <span className="code-text text-primary text-xs">{">"}</span>
                      <span className="code-text text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

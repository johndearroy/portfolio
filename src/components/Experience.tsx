import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import experienceData from "@/data/experience.json";

export const Experience = () => {
  const formatDate = (dateStr: string) => {
    if (dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            8+ years of professional software engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-8">
            {experienceData.positions.map((position, idx) => (
              <Card
                key={idx}
                className="glass-card p-6 md:ml-20 hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {position.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(position.startDate)} - {formatDate(position.endDate)}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {position.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary mt-1.5">▹</span>
                        <span className="text-foreground/90 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

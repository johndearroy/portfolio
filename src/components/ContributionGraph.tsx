import { useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export const ContributionGraph = () => {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  // Generate contribution data for the past year
  const generateContributions = (): ContributionDay[] => {
    const contributions: ContributionDay[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      // More activity on weekdays
      const baseCount = isWeekend ? Math.random() * 3 : Math.random() * 8;
      const count = Math.floor(baseCount);
      const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4;

      contributions.push({
        date: date.toISOString().split('T')[0],
        count,
        level,
      });
    }

    return contributions;
  };

  const contributions = generateContributions();

  const getLevelColor = (level: number) => {
    const colors = [
      'bg-muted/20',
      'bg-terminal/30',
      'bg-terminal/50',
      'bg-terminal/70',
      'bg-terminal',
    ];
    return colors[level];
  };

  // Group contributions by week
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  return (
    <div className="relative">
      <div className="flex items-start gap-1 overflow-x-auto scrollbar-hide pb-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} transition-all duration-200 hover:ring-2 hover:ring-terminal hover:scale-125 cursor-pointer`}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
              />
            ))}
          </div>
        ))}
      </div>
      {hoveredDay && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 border border-terminal/30 px-3 py-2 rounded text-xs font-mono whitespace-nowrap z-10">
          <div className="text-terminal">{hoveredDay.count} contributions</div>
          <div className="text-terminal/60">{hoveredDay.date}</div>
        </div>
      )}
      <div className="flex items-center gap-2 mt-3 text-xs font-mono text-terminal/60">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

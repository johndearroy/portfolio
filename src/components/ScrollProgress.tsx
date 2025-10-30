import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const { progress, currentSection } = useScrollProgress();

  const getSectionLabel = (section: string) => {
    const labels: Record<string, string> = {
      hero: "INIT",
      skills: "SKILLS",
      experience: "WORK",
      projects: "PROJ",
      contact: "CONTACT",
    };
    return labels[section] || section.toUpperCase();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-terminal/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-terminal/60">$</span>
          <span className="text-terminal">scroll_progress</span>
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-muted/20 rounded-full overflow-hidden max-w-md">
              <div
                className="h-full bg-terminal transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-terminal/80 min-w-[3rem] text-right">{Math.round(progress)}%</span>
          </div>
          <span className="text-terminal/60">@</span>
          <span className="text-terminal min-w-[4rem]">{getSectionLabel(currentSection)}</span>
        </div>
      </div>
    </div>
  );
};

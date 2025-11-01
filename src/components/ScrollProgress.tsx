import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const { progress, currentSection } = useScrollProgress();

  const getSectionLabel = (section: string) => {
    const labels: Record<string, string> = {
      hero: "...INIT",
      skills: "...SKILLS",
      experience: "...EXPERIENCE",
      projects: "...PROJECTS",
      contact: "...CONTACT",
    };
    return labels[section] || section.toUpperCase();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md border-b border-terminal/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-terminal/60">$</span>
          <span className="text-terminal">scroll_progress</span>
          
          <div className="flex-1 flex items-center">
            <div className="relative flex-1 mx-2">
              <div className="h-1 bg-muted/20 rounded-full overflow-hidden w-full">
                <div
                  className="h-full bg-terminal transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-terminal/80 pointer-events-none bg-black/90 backdrop-blur-md border-b border-terminal/20 px-1 text-xs rounded w-12 text-center mt-1">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <span className="text-terminal/60">@</span>
          <span className="text-terminal min-w-[4rem]">{getSectionLabel(currentSection)}</span>
        </div>
      </div>
    </div>
  );
};

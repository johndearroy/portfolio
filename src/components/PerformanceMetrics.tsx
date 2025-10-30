import { useState } from "react";
import { Zap, ChevronUp, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export const PerformanceMetrics = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const metrics = {
    lighthouse: 98,
    loadTime: "0.8s",
    bundleSize: "142KB",
    firstPaint: "0.3s",
    interactive: "0.9s",
    performance: 98,
    accessibility: 100,
    bestPractices: 95,
    seo: 100,
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Card className="terminal-card bg-black/90 backdrop-blur-sm border-terminal/30 overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-3 flex items-center gap-2 hover:bg-terminal/5 transition-colors"
        >
          <Zap className="w-4 h-4 text-terminal" />
          <span className="font-mono text-sm text-terminal">Performance</span>
          <span className="font-mono text-xs text-terminal/60 ml-auto">{metrics.lighthouse}</span>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-terminal/60" />
          ) : (
            <ChevronUp className="w-4 h-4 text-terminal/60" />
          )}
        </button>

        {isExpanded && (
          <div className="p-3 pt-0 space-y-3 border-t border-terminal/20 mt-2 animate-fade-in">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-terminal/80">Performance</span>
                <span className="text-terminal">{metrics.performance}</span>
              </div>
              <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-terminal" style={{ width: `${metrics.performance}%` }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-terminal/80">Accessibility</span>
                <span className="text-terminal">{metrics.accessibility}</span>
              </div>
              <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-terminal" style={{ width: `${metrics.accessibility}%` }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-terminal/80">Best Practices</span>
                <span className="text-terminal">{metrics.bestPractices}</span>
              </div>
              <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-terminal" style={{ width: `${metrics.bestPractices}%` }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-terminal/80">SEO</span>
                <span className="text-terminal">{metrics.seo}</span>
              </div>
              <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-terminal" style={{ width: `${metrics.seo}%` }} />
              </div>
            </div>

            <div className="pt-2 border-t border-terminal/20 space-y-1 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-terminal/60">Load Time</span>
                <span className="text-terminal">{metrics.loadTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal/60">Bundle Size</span>
                <span className="text-terminal">{metrics.bundleSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal/60">First Paint</span>
                <span className="text-terminal">{metrics.firstPaint}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-terminal/60">Interactive</span>
                <span className="text-terminal">{metrics.interactive}</span>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

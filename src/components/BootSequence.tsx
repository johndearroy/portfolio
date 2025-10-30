import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface BootStep {
  text: string;
  delay: number;
}

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps: BootStep[] = [
    { text: "Initializing portfolio system...", delay: 300 },
    { text: "Loading profile data...", delay: 400 },
    { text: "Compiling project components...", delay: 350 },
    { text: "Establishing connections...", delay: 300 },
    { text: "System ready.", delay: 400 },
  ];

  useEffect(() => {
    if (currentStep >= steps.length) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setProgress(((currentStep + 1) / steps.length) * 100);
    }, steps[currentStep].delay);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        <div className="space-y-4 font-mono">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                index <= currentStep ? "opacity-100" : "opacity-0"
              }`}
            >
              {index < currentStep ? (
                <Check className="w-4 h-4 text-terminal flex-shrink-0" />
              ) : index === currentStep ? (
                <div className="w-4 h-4 border-2 border-terminal border-t-transparent rounded-full animate-spin flex-shrink-0" />
              ) : (
                <div className="w-4 h-4 flex-shrink-0" />
              )}
              <span className={index <= currentStep ? "text-terminal" : "text-terminal/40"}>
                {index < currentStep ? "[OK]" : "[..]"} {step.text}
              </span>
            </div>
          ))}

          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-xs text-terminal/60">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-muted/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-terminal transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

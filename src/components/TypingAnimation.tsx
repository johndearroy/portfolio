import { useTypingEffect } from "@/hooks/useTypingEffect";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export const TypingAnimation = ({ texts, className = "" }: TypingAnimationProps) => {
  const displayText = useTypingEffect(texts, 80, 40, 2000);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-terminal">{displayText}</span>
      <span className="animate-pulse text-terminal">|</span>
    </div>
  );
};

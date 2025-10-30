import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface Command {
  input: string;
  output: string[];
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: [
        "Welcome to my interactive portfolio terminal!",
        "Type 'help' to see available commands.",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  about      - Learn more about me",
      "  skills     - View my technical skills",
      "  projects   - Navigate to projects section",
      "  experience - View my work history",
      "  contact    - Get in touch",
      "  resume     - Download my resume",
      "  clear      - Clear terminal",
      "  help       - Show this help message",
    ],
    about: [
      "Senior Software Engineer with 8+ years of experience",
      "Specialized in full-stack development and cloud architecture",
      "Passionate about building scalable, high-performance applications",
    ],
    skills: [
      "Frontend: React, TypeScript, Next.js, Tailwind CSS",
      "Backend: Node.js, Python, Java, Go",
      "Database: PostgreSQL, MongoDB, Redis",
      "Cloud: AWS, Docker, Kubernetes",
      "Navigating to skills section...",
    ],
    projects: [
      "Navigating to projects section...",
      "Check out my featured work below!",
    ],
    experience: [
      "Navigating to experience section...",
      "View my career timeline!",
    ],
    contact: [
      "Navigating to contact section...",
      "Let's connect!",
    ],
    resume: [
      "Resume download would be available here.",
      "Contact me for the latest version!",
    ],
    clear: [""],
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "") return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[trimmedCmd] || [`Command not found: ${cmd}`, "Type 'help' for available commands."];

    setHistory((prev) => [...prev, { input: cmd, output }]);

    // Navigate to sections
    if (trimmedCmd === "skills") {
      setTimeout(() => scrollToSection("skills"), 500);
    } else if (trimmedCmd === "projects") {
      setTimeout(() => scrollToSection("projects"), 500);
    } else if (trimmedCmd === "experience") {
      setTimeout(() => scrollToSection("experience"), 500);
    } else if (trimmedCmd === "contact") {
      setTimeout(() => scrollToSection("contact"), 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matchingCommands = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }
  };

  return (
    <Card className="terminal-card bg-black/40 backdrop-blur-sm border-terminal/30 p-0 overflow-hidden max-w-3xl mx-auto">
      <div className="terminal-border p-3 border-b border-terminal/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-terminal/60 font-mono ml-2">~/portfolio/terminal</span>
        </div>
      </div>
      <div
        ref={outputRef}
        className="p-4 h-64 overflow-y-auto scrollbar-hide font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((cmd, i) => (
          <div key={i} className="mb-3">
            <div className="flex items-center gap-2 text-terminal">
              <span className="text-terminal/60">$</span>
              <span>{cmd.input}</span>
            </div>
            {cmd.output.map((line, j) => (
              <div key={j} className="text-terminal/80 ml-4 mt-1">
                {line}
              </div>
            ))}
          </div>
        ))}
        <div className="flex items-center gap-2 text-terminal">
          <span className="text-terminal/60">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none caret-terminal"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </Card>
  );
};

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "skills", id: "skills" },
    { label: "experience", id: "experience" },
    { label: "projects", id: "projects" },
    { label: "contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-8 left-0 right-0 z-[90] transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <Terminal className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
            <span className="code-text text-xl font-bold">
              <span className="text-primary">$</span> roy.portfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="code-text hover:bg-primary/10 hover:text-primary transition-all"
              >
                <span className="text-primary/50">./</span>{item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start code-text hover:bg-primary/10 hover:text-primary"
              >
                <span className="text-primary/50">$ cd </span>{item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

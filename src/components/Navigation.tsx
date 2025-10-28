import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-card shadow-2xl border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with gradient */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-2xl font-display font-bold transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <Sparkles className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
            </div>
            <span className="text-gradient">Portfolio</span>
          </button>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center gap-2 bg-secondary/50 backdrop-blur-sm rounded-full p-2 border border-primary/20">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="rounded-full hover:text-primary hover:bg-primary/10 font-medium transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button with enhanced styling */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative group border-2 border-primary/40 hover:border-primary bg-secondary/50 backdrop-blur-sm hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation with enhanced animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-3 bg-secondary/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20">
              {navItems.map((item, idx) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start hover:text-primary hover:bg-primary/10 rounded-xl font-medium transition-all duration-300 hover:translate-x-2"
                  onClick={() => scrollToSection(item.id)}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

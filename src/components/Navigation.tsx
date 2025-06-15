
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "./LanguageProvider";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#showcase", label: "Showcase" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/20 dark:bg-black/20 bg-white/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={scrollToTop}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <span className="text-white dark:text-white text-gray-900 font-bold text-lg">Serhan Demirel</span>
          </button>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white dark:text-white text-gray-900 hover:text-purple-300 dark:hover:text-purple-300 hover:text-purple-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-auto bg-transparent border-white/20 dark:border-white/20 border-gray-400/30 text-white dark:text-white text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-100/50">
                <SelectValue>
                  <div className="flex items-center space-x-2">
                    <Globe size={16} />
                    <span className="hidden sm:inline">{currentLang?.flag}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    <div className="flex items-center space-x-2">
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={toggleTheme}
              className={`hidden md:flex items-center border transition-all duration-200 p-2 rounded-lg
                ${
                  isDarkMode
                    ? "bg-black/80 border-white/20 text-yellow-400 hover:bg-black/70"
                    : "bg-white border-gray-300 text-purple-700 hover:bg-gray-100"
                }
              `}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="transition-all" />
              ) : (
                <Moon size={20} className="transition-all" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white dark:text-white text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black/90 dark:bg-black/90 bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-white dark:text-white text-gray-900 hover:text-purple-300 dark:hover:text-purple-300 hover:text-purple-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

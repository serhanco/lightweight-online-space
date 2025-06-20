
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Showcase } from "@/components/Showcase";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/components/LanguageProvider";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Showcase />
        <Clients />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;

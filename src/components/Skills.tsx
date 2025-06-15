
import { useLanguage } from "./LanguageProvider";

const translations = {
  en: { expertise: "My Expertise", subtitle: "Comprehensive skills across digital marketing, development, and business automation" },
  tr: { expertise: "Uzmanlık Alanlarım", subtitle: "Dijital pazarlama, yazılım geliştirme ve iş otomasyonunda kapsamlı yetkinlikler" },
  fr: { expertise: "Mon Expertise", subtitle: "Compétences complètes en marketing digital, développement et automatisation d'entreprise" },
  it: { expertise: "Le Mie Competenze", subtitle: "Competenze complete in marketing digitale, sviluppo e automazione dei processi" },
  nl: { expertise: "Mijn Expertise", subtitle: "Uitgebreide vaardigheden in digitale marketing, ontwikkeling en bedrijfsautomatisering" }
};

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const skillCategories = [
    {
      title: "Digital Marketing",
      icon: "🎯",
      skills: [
        "SEO Optimization",
        "Google Ads",
        "UX Design",
        "User Journey Design",
        "Funnel Design",
        "Lead Generation",
        "Conversion Optimization",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Development",
      icon: "💻",
      skills: [
        "Website Development",
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "API Development",
        "Responsive Design",
        "Performance Optimization",
        "E-commerce Solutions"
      ]
    },
    {
      title: "Integration & Automation",
      icon: "🔗",
      skills: [
        "Platform Integrations",
        "CRM Systems",
        "Business Automation",
        "Workflow Design",
        "API Integrations",
        "Data Migration",
        "Third-party Connectors",
        "Process Optimization"
      ]
    },
    {
      title: "AI & Innovation",
      icon: "🤖",
      skills: [
        "AI Generation",
        "AI Integration",
        "Machine Learning",
        "Automation Tools",
        "ChatBot Development",
        "Data Analysis",
        "Predictive Analytics",
        "Process Intelligence"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.expertise.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.expertise.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg px-3 py-2 text-center hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-200"
                  >
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

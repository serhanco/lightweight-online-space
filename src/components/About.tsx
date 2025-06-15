
import { Code, Palette, Zap } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const translations = {
  en: {
    title: "About Me",
    desc: "I'm a digital marketing expert and full stack developer with extensive experience in helping businesses grow through strategic marketing and technology solutions.",
    p1: "My expertise spans across digital marketing strategies, web development, and business automation. I specialize in creating comprehensive solutions that bridge the gap between marketing goals and technical implementation.",
    p2: "From SEO optimization and Google Ads campaigns to custom web applications and CRM integrations, I help businesses streamline their operations and maximize their digital presence.",
    dm: "Digital Marketing",
    dev: "Development",
    auto: "Automation",
    dm_short: "SEO, Google Ads, UX & funnel design",
    dev_short: "Full stack web development & integrations",
    auto_short: "Business workflows & CRM solutions",
    exp: "Years Experience"
  },
  tr: {
    title: "Hakkımda",
    desc: "Stratejik pazarlama ve teknoloji çözümleri ile işletmelerin büyümesine yardımcı olan deneyimli bir dijital pazarlama uzmanı ve tam yığın geliştiriciyim.",
    p1: "Uzmanlığım dijital pazarlama stratejileri, web geliştirme ve iş otomasyonu alanlarını kapsar. Pazarlama hedefleri ile teknik uygulama arasındaki köprüyü kuran bütüncül çözümler geliştiriyorum.",
    p2: "SEO optimizasyonundan Google Ads kampanyalarına, özel web uygulamalarından CRM entegrasyonlarına kadar işletmelerin operasyonlarını kolaylaştırıyor ve dijital varlıklarını maksimize ediyorum.",
    dm: "Dijital Pazarlama",
    dev: "Yazılım Geliştirme",
    auto: "Otomasyon",
    dm_short: "SEO, Google Ads, UX & funnel tasarımı",
    dev_short: "Tam kapsamlı web geliştirme & entegrasyonlar",
    auto_short: "İş akışları & CRM çözümleri",
    exp: "Yıllık Deneyim"
  },
  fr: {
    title: "À propos de moi",
    desc: "Expert en marketing digital et développeur full stack, j'aide les entreprises à croître grâce à la stratégie et à la technologie.",
    p1: "Mon expertise couvre le marketing digital, le développement web et l'automatisation d'entreprise. Je crée des solutions globales pour relier vos objectifs marketing et la technique.",
    p2: "Du SEO et des campagnes Google Ads aux applications web sur mesure et intégrations CRM, j'optimise vos opérations et votre présence digitale.",
    dm: "Marketing Digital",
    dev: "Développement",
    auto: "Automatisation",
    dm_short: "SEO, Google Ads, UX & conception de tunnels",
    dev_short: "Développement web full stack & intégrations",
    auto_short: "Flux de travail & solutions CRM",
    exp: "Ans d'Expérience"
  },
  it: {
    title: "Chi Sono",
    desc: "Sono un esperto di marketing digitale e sviluppatore full stack, con esperienza nell'aiutare le aziende a crescere con strategie e soluzioni tecnologiche.",
    p1: "La mia esperienza abbraccia strategie di marketing digitale, sviluppo web e automazione aziendale. Creo soluzioni complete che collegano gli obiettivi di marketing all'implementazione tecnica.",
    p2: "Dall'ottimizzazione SEO alle campagne Google Ads, dalle web app personalizzate alle integrazioni CRM, aiuto le aziende a ottimizzare le operazioni e la presenza digitale.",
    dm: "Marketing Digitale",
    dev: "Sviluppo",
    auto: "Automazione",
    dm_short: "SEO, Google Ads, UX & funnel design",
    dev_short: "Sviluppo web full stack & integrazioni",
    auto_short: "Workflow aziendali & soluzioni CRM",
    exp: "Anni di Esperienza"
  },
  nl: {
    title: "Over Mij",
    desc: "Ik ben een digital marketing expert en full stack developer met ruime ervaring in het helpen groeien van bedrijven via strategie en technologie.",
    p1: "Mijn expertise omvat digitale marketing, webontwikkeling en zakelijke automatisering. Ik specialiseer me in totaaloplossingen die marketingdoelen verbinden met technische uitvoering.",
    p2: "Van SEO optimalisatie en Google Ads tot maatwerk webapplicaties en CRM-integraties: ik help bedrijven hun processen te stroomlijnen en hun digitale aanwezigheid te vergroten.",
    dm: "Digitale Marketing",
    dev: "Ontwikkeling",
    auto: "Automatisering",
    dm_short: "SEO, Google Ads, UX & funnel ontwerp",
    dev_short: "Full stack webontwikkeling & integraties",
    auto_short: "Bedrijfsworkflows & CRM oplossingen",
    exp: "Jaar Ervaring"
  }
};

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
            {t.title.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
              {t.p1}
            </p>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
              {t.p2}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 dark:bg-white/5 bg-gray-100/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-200/80 transition-all duration-300">
                <Palette className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="text-white dark:text-white text-gray-900 font-semibold mb-2">{t.dm}</h3>
                <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">{t.dm_short}</p>
              </div>
              <div className="bg-white/5 dark:bg-white/5 bg-gray-100/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-200/80 transition-all duration-300">
                <Code className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="text-white dark:text-white text-gray-900 font-semibold mb-2">{t.dev}</h3>
                <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">{t.dev_short}</p>
              </div>
              <div className="bg-white/5 dark:bg-white/5 bg-gray-100/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 dark:hover:bg-white/10 hover:bg-gray-200/80 transition-all duration-300">
                <Zap className="mx-auto mb-4 text-yellow-400" size={32} />
                <h3 className="text-white dark:text-white text-gray-900 font-semibold mb-2">{t.auto}</h3>
                <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">{t.auto_short}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <div className="text-2xl font-bold">7+</div>
              <div className="text-sm opacity-90">{t.exp}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

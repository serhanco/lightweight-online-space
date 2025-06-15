
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Secure contact methods to prevent spam
  const handleEmailClick = () => {
    const user = 'hello';
    const domain = 'serhandemirel.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/serhandemirel', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905555555555', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl animate-fade-in"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Serhan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Demirel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-300">
          Digital Transformation Architect
        </p>
        
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          Architecting digital futures through strategic marketing, cutting-edge development, and intelligent automation. 
          I transform businesses with data-driven solutions and innovative technology integration.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-700">
          <button 
            onClick={() => window.open('https://github.com/serhandemirel', '_blank', 'noopener,noreferrer')}
            className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </button>
          <button 
            onClick={() => window.open('https://linkedin.com/in/serhandemirel', '_blank', 'noopener,noreferrer')}
            className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </button>
          <button 
            onClick={handleTelegramClick}
            className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Telegram Contact"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            aria-label="WhatsApp Contact"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>
          <button 
            onClick={handleEmailClick}
            className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Email Contact"
          >
            <Mail size={28} />
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in animation-delay-1000"
        >
          Explore My Work
          <ArrowDown className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
};

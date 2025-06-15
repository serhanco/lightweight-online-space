
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

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
    // Replace 'yourusername' with your actual Telegram username
    window.open('https://t.me/yourusername', '_blank', 'noopener,noreferrer');
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
          Digital Marketing Expert & Full Stack Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          Specializing in digital marketing, web development, and business automation. 
          I help businesses grow through strategic marketing and cutting-edge technology solutions.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-700">
          <button 
            onClick={() => window.open('https://github.com/yourusername', '_blank', 'noopener,noreferrer')}
            className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </button>
          <button 
            onClick={() => window.open('https://linkedin.com/in/yourusername', '_blank', 'noopener,noreferrer')}
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
            <MessageCircle size={28} />
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

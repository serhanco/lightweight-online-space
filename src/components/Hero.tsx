
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
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
          John <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Doe</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-300">
          Full Stack Developer & UI/UX Designer
        </p>
        
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          Passionate about creating beautiful, functional web experiences that make a difference. 
          I blend creativity with technology to build amazing digital solutions.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-700">
          <a href="https://github.com" className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={28} />
          </a>
          <a href="mailto:hello@example.com" className="text-white hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform">
            <Mail size={28} />
          </a>
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

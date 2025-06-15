
import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital experiences that combine beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech started with curiosity and evolved into a passion for solving complex problems through elegant code. 
              I specialize in modern web technologies and love bringing ideas to life through intuitive user interfaces.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
              or sharing my knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Code className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Palette className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="text-white font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-400 text-sm">Creating beautiful user experiences</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Zap className="mx-auto mb-4 text-yellow-400" size={32} />
                <h3 className="text-white font-semibold mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Optimized, lightning-fast applications</p>
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
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

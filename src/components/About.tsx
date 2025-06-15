
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
            I'm a digital marketing expert and full stack developer with extensive experience in helping businesses grow through strategic marketing and technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across digital marketing strategies, web development, and business automation. 
              I specialize in creating comprehensive solutions that bridge the gap between marketing goals and technical implementation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From SEO optimization and Google Ads campaigns to custom web applications and CRM integrations, 
              I help businesses streamline their operations and maximize their digital presence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Palette className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="text-white font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-400 text-sm">SEO, Google Ads, UX & funnel design</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Code className="mx-auto mb-4 text-pink-400" size={32} />
                <h3 className="text-white font-semibold mb-2">Development</h3>
                <p className="text-gray-400 text-sm">Full stack web development & integrations</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Zap className="mx-auto mb-4 text-yellow-400" size={32} />
                <h3 className="text-white font-semibold mb-2">Automation</h3>
                <p className="text-gray-400 text-sm">Business workflows & CRM solutions</p>
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
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

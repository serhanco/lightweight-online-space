
import { Calendar, ArrowRight, Eye, MessageSquare, Heart } from "lucide-react";
import { useState } from "react";

export const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const showcaseItems = [
    {
      title: "Digital Marketing ROI: 300% Growth Case Study",
      description: "How I transformed a struggling e-commerce brand into a market leader through strategic SEO, conversion optimization, and automation workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Case Study",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      views: "2.1k",
      likes: 127
    },
    {
      title: "The Future of Business Automation",
      description: "Exploring how AI-driven automation is reshaping business operations and what it means for digital transformation strategies.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      category: "Industry Insights",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      views: "3.5k",
      likes: 189
    },
    {
      title: "Building High-Converting Sales Funnels",
      description: "A comprehensive guide to designing, implementing, and optimizing sales funnels that drive consistent revenue growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Tutorial",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      views: "4.2k",
      likes: 234
    },
    {
      title: "Client Success: Healthcare Platform Redesign",
      description: "Complete digital transformation of a healthcare platform, resulting in 85% improved user engagement and streamlined patient workflows.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Case Study",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      views: "1.8k",
      likes: 95
    },
    {
      title: "Advanced Google Ads Strategies for 2025",
      description: "Latest techniques and best practices for maximizing Google Ads performance, including AI-powered bidding strategies and audience targeting.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      category: "Strategy",
      date: "Nov 20, 2024",
      readTime: "11 min read",
      views: "5.1k",
      likes: 312
    },
    {
      title: "Integration Success: CRM & Marketing Automation",
      description: "Real-world implementation of seamless CRM and marketing automation integration that increased lead conversion by 150%.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      category: "Case Study",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      views: "2.7k",
      likes: 156
    }
  ];

  const categories = ["All", "Case Study", "Industry Insights", "Tutorial", "Strategy"];

  const filteredItems = activeFilter === "All" 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeFilter);

  return (
    <section id="showcase" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Insights, case studies, and thought leadership in digital transformation and strategic marketing
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-purple-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-xs mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {item.date}
                  </div>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 text-xs">
                    <div className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {item.views}
                    </div>
                    <div className="flex items-center">
                      <Heart size={12} className="mr-1" />
                      {item.likes}
                    </div>
                  </div>
                  
                  <button className="flex items-center text-purple-300 hover:text-purple-200 transition-colors text-sm">
                    Read More
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

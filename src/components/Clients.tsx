
import { useState } from "react";
import { Flag } from "lucide-react";

export const Clients = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");

  // Sample client data - you can replace with your actual clients
  const clients = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop",
      type: "Web Development",
      country: "US",
      countryFlag: "🇺🇸"
    },
    {
      name: "DesignStudio",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop",
      type: "UI/UX Design",
      country: "UK",
      countryFlag: "🇬🇧"
    },
    {
      name: "StartupLab",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop",
      type: "Full Stack",
      country: "CA",
      countryFlag: "🇨🇦"
    },
    {
      name: "EcommercePlus",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop",
      type: "E-commerce",
      country: "US",
      countryFlag: "🇺🇸"
    },
    {
      name: "MobileFirst",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop",
      type: "Mobile App",
      country: "DE",
      countryFlag: "🇩🇪"
    },
    {
      name: "DataViz Co",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop",
      type: "Web Development",
      country: "FR",
      countryFlag: "🇫🇷"
    }
  ];

  const projectTypes = ["all", ...new Set(clients.map(client => client.type))];
  const countries = ["all", ...new Set(clients.map(client => client.country))];

  const filteredClients = clients.filter(client => {
    const typeMatch = selectedType === "all" || client.type === selectedType;
    const countryMatch = selectedCountry === "all" || client.country === selectedCountry;
    return typeMatch && countryMatch;
  });

  return (
    <section id="clients" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            I've had the privilege of partnering with amazing companies across the globe to bring their visions to life
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 text-sm">Filter by type:</span>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                    selectedType === type
                      ? "bg-purple-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {type === "all" ? "All Projects" : type}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 text-sm">Filter by region:</span>
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-3 py-1 rounded-full text-xs transition-all duration-200 flex items-center gap-1 ${
                    selectedCountry === country
                      ? "bg-purple-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {country === "all" ? (
                    <>
                      <Flag size={12} />
                      All Regions
                    </>
                  ) : (
                    <>
                      <span>{clients.find(c => c.country === country)?.countryFlag}</span>
                      {country}
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredClients.map((client, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="aspect-video bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                  style={{ filter: undefined /* fallback for unsupported Tailwind grayscale class */ }}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white text-center">{client.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-purple-300 text-xs">{client.type}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm">{client.countryFlag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No clients match the selected filters</p>
          </div>
        )}
      </div>
    </section>
  );
};



import { BookOpen, Heart, Users, Globe, Flower2, Sun } from "lucide-react";

const Skills = () => {
  const teachings = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Bhagavad Gita",
      description: "The eternal dialogue between Krishna and Arjuna",
      gradient: "from-coral to-sunset"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bhakti Yoga",
      description: "The path of devotional service to Krishna",
      gradient: "from-ocean to-coral"
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: "Srimad Bhagavatam",
      description: "The beautiful pastimes of Krishna",
      gradient: "from-sunset to-golden"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Daily Sadhana",
      description: "Spiritual practices for inner transformation",
      gradient: "from-golden to-ocean"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Satsang",
      description: "Association with like-minded devotees",
      gradient: "from-ocean to-sunset"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Mission",
      description: "Spreading Krishna consciousness worldwide",
      gradient: "from-coral to-ocean"
    }
  ];

  return (
    <section id="teachings" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-coral rounded-full"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-ocean rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-sunset rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-golden rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
            Core Teachings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            Eternal wisdom for
            <br />
            <span className="bg-main-gradient bg-clip-text text-transparent">
              spiritual awakening
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teachings.map((teaching, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${teaching.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {teaching.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-space">
                {teaching.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {teaching.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

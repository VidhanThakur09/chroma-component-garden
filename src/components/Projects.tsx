
import { ExternalLink, BookOpen } from "lucide-react";

const Projects = () => {
  const resources = [
    {
      title: "Bhagavad Gita As It Is",
      description: "Complete translation and commentary by Srila Prabhupada, the foundational text for understanding Krishna consciousness.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=300&fit=crop",
      tags: ["Scripture", "Philosophy", "Wisdom", "Translation"],
      gradient: "from-coral to-sunset"
    },
    {
      title: "Srimad Bhagavatam",
      description: "The beautiful pastimes and teachings of Krishna, presented in 18 volumes with detailed purports and explanations.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      tags: ["Stories", "Pastimes", "Krishna", "Vedic Literature"],
      gradient: "from-ocean to-coral"
    },
    {
      title: "Chaitanya Charitamrita",
      description: "The biography and teachings of Sri Chaitanya Mahaprabhu, the golden avatar who spread the holy names of Krishna.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      tags: ["Biography", "Devotion", "Sankirtana", "Love of God"],
      gradient: "from-sunset to-golden"
    },
    {
      title: "Daily Spiritual Practices",
      description: "Guidance on japa meditation, temple worship, prasadam, and other essential practices for spiritual development.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      tags: ["Meditation", "Japa", "Worship", "Prasadam"],
      gradient: "from-golden to-ocean"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-coral/5 to-sunset/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-ocean/5 to-golden/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
            Spiritual Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            Sacred texts and
            <br />
            <span className="bg-main-gradient bg-clip-text text-transparent">
              spiritual guidance
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 font-space">
                  {resource.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {resource.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors duration-300">
                    <BookOpen size={16} />
                    Read Online
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-full font-medium hover:border-slate-400 transition-colors duration-300">
                    <ExternalLink size={16} />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

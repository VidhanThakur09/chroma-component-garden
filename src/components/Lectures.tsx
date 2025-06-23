
import { Play, Headphones, Quote, Users } from "lucide-react";

const Lectures = () => {
  const mediaTypes = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Lectures",
      description: "Watch inspiring discourses on Bhagavad Gita, Srimad Bhagavatam, and spiritual topics by renowned ISKCON teachers.",
      count: "500+ Videos",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Lectures",
      description: "Listen to enlightening talks, kirtans, and philosophical discussions while traveling or during daily activities.",
      count: "1000+ Audios",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Quote className="w-8 h-8" />,
      title: "Spiritual Quotes",
      description: "Daily inspiration from Srila Prabhupada's teachings and timeless wisdom from Vedic scriptures.",
      count: "Daily Updates",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Satsang",
      description: "Join our online community for live discussions, Q&A sessions, and group chanting sessions.",
      count: "Weekly Events",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  const featuredLectures = [
    {
      title: "Understanding the Eternal Soul",
      speaker: "HH Radhanath Swami",
      duration: "45 min",
      views: "125K views",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      title: "The Science of Self-Realization",
      speaker: "HG Amogh Lila Prabhu",
      duration: "38 min",
      views: "89K views",
      thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=250&fit=crop"
    },
    {
      title: "Bhakti Yoga in Daily Life",
      speaker: "HG Gauranga Prabhu",
      duration: "52 min",
      views: "156K views",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="lectures" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
            Spiritual Media
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            Lectures, Videos &
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Divine Inspiration
            </span>
          </h2>
        </div>
        
        {/* Media Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mediaTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {type.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-space">
                {type.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                {type.description}
              </p>
              <div className="text-orange-600 font-medium text-sm">
                {type.count}
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Lectures */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center font-space">
            Featured Spiritual Lectures
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLectures.map((lecture, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={lecture.thumbnail}
                    alt={lecture.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-orange-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {lecture.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-slate-800 mb-2 line-clamp-2">
                    {lecture.title}
                  </h4>
                  <p className="text-orange-600 font-medium text-sm mb-2">
                    {lecture.speaker}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {lecture.views}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Explore All Lectures
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lectures;

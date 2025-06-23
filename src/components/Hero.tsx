
import { ArrowDown, BookOpen, Heart, Star, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Krishna imagery feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-ocean/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-sunset/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="pt-20 pb-8">
            {/* Welcome badge positioned above the main heading */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm md:text-base font-medium shadow-lg">
                🕉️ Hare Krishna - Welcome to Divine Wisdom
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-space mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                HARE KRISHNA
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              WELCOME TO OFFICIAL WEBSITE
              <br />
              <span className="text-orange-600">ISKCON UPDESH</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the eternal teachings of Lord Krishna through authentic Vedic wisdom. 
              Journey into divine consciousness with guidance from our spiritual masters.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <BookOpen size={20} />
                Explore Sacred Texts
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <Play size={20} />
                Watch Lectures
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Sacred Scriptures</h3>
                <p className="text-slate-600 text-sm">Bhagavad Gita, Srimad Bhagavatam & more</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Devotional Practices</h3>
                <p className="text-slate-600 text-sm">Japa, Kirtan, Temple worship & service</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Spiritual Guidance</h3>
                <p className="text-slate-600 text-sm">Personal development & Krishna consciousness</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

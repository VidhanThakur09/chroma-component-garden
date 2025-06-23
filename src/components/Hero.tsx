
import { ArrowDown, BookOpen, Heart, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-main-gradient opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-ocean/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-sunset/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-slate-600 mb-6">
              🕉️ ISKCON - International Society for Krishna Consciousness
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 leading-tight">
            <span className="bg-main-gradient bg-clip-text text-transparent">
              ISKCON
            </span>
            <br />
            <span className="text-slate-800">
              Updesh
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Spreading Krishna Consciousness through divine teachings and instructions. 
            Journey into the timeless wisdom of Bhagavad Gita and Vedic knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="bg-main-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 animate-glow">
              Explore Teachings
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              Join Satsang
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-300 hover:scale-110">
              <BookOpen size={24} className="text-slate-700" />
            </a>
            <a href="#" className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-300 hover:scale-110">
              <Heart size={24} className="text-slate-700" />
            </a>
            <a href="#" className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white/80 transition-all duration-300 hover:scale-110">
              <Star size={24} className="text-slate-700" />
            </a>
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


const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-coral/10 to-sunset/10 rounded-full blur-3xl transform -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-ocean/10 to-golden/10 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
              Passionate about creating
              <br />
              <span className="bg-main-gradient bg-clip-text text-transparent">
                meaningful experiences
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Hi! I'm Sarah, a digital creator and developer with a passion for building 
                innovative solutions that make a difference. I specialize in creating 
                user-centered designs and robust applications.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With years of experience in both design and development, I bridge the gap 
                between creativity and functionality, ensuring every project delivers 
                exceptional user experiences.
              </p>
              <div className="pt-4">
                <button className="bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                  Download Resume
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card-gradient backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-2">5+</div>
                    <div className="text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-2">50+</div>
                    <div className="text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-2">100%</div>
                    <div className="text-slate-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800 mb-2">24/7</div>
                    <div className="text-slate-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-main-gradient opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-coral/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-ocean/10 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            Let's create something
            <br />
            <span className="bg-main-gradient bg-clip-text text-transparent">
              amazing together
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-main-gradient text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-space">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral to-sunset rounded-lg flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Email</div>
                    <div className="text-slate-600">hello@sarahguo.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean to-coral rounded-lg flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Phone</div>
                    <div className="text-slate-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sunset to-golden rounded-lg flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">Location</div>
                    <div className="text-slate-600">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-space">
                Let's Connect
              </h3>
              <p className="text-slate-600 mb-6">
                Follow my journey and connect with me on social platforms for the latest updates and insights.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-300">
                  <span className="text-slate-600 font-bold">Tw</span>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-300">
                  <span className="text-slate-600 font-bold">In</span>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-300">
                  <span className="text-slate-600 font-bold">Gh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

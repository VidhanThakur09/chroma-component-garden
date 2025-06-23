
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered SaaS Platform",
      description: "A comprehensive platform that leverages artificial intelligence to streamline business operations and boost productivity.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      gradient: "from-coral to-sunset"
    },
    {
      title: "Future of Work Dashboard",
      description: "An intuitive dashboard for remote teams to collaborate effectively and track productivity metrics in real-time.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Python", "WebRTC", "MongoDB"],
      gradient: "from-ocean to-coral"
    },
    {
      title: "Accessible Finance App",
      description: "A mobile-first financial application designed with accessibility in mind, making banking services available to everyone.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tags: ["React Native", "TypeScript", "Blockchain", "Firebase"],
      gradient: "from-sunset to-golden"
    },
    {
      title: "Builder's Toolkit",
      description: "An open-source collection of tools and resources for developers and creators to build better applications faster.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      tags: ["Open Source", "JavaScript", "Docker", "API"],
      gradient: "from-golden to-ocean"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-coral/5 to-sunset/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-ocean/5 to-golden/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            Bringing ideas to
            <br />
            <span className="bg-main-gradient bg-clip-text text-transparent">
              digital reality
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 font-space">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
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
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-full font-medium hover:border-slate-400 transition-colors duration-300">
                    <ExternalLink size={16} />
                    Live Demo
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

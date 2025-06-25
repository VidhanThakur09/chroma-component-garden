
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, BookOpen, Heart, Globe, Lightbulb, Target } from "lucide-react";

const Teachings = () => {
  const initiatives = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "GitaGeeta: Making Bhagavad Gita For Everyone",
      description: "Interactive platform for studying the eternal dialogue between Krishna and Arjuna",
      features: [
        "Daily verse study programs",
        "Interactive commentary sessions",
        "Community discussions",
        "Multilingual translations"
      ],
      gradient: "from-coral to-sunset"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "E-Gurukul: Where Character comes with Competence",
      description: "Holistic education combining spiritual wisdom with modern knowledge",
      features: [
        "Character development programs",
        "Competency-based learning",
        "Spiritual value integration",
        "Personal mentorship"
      ],
      gradient: "from-ocean to-coral"
    }
  ];

  const projects = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Cultivating a sense of selflessness",
      description: "Community service programs to develop compassion and service attitude",
      image: "/lovable-uploads/4d9d5a54-18f4-4cd8-81b9-f8f83b372a4d.png",
      activities: [
        "Food distribution drives",
        "Educational support programs",
        "Environmental conservation",
        "Elder care initiatives"
      ]
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Reviving mind for efficiency",
      description: "Mental wellness and productivity enhancement through spiritual practices",
      activities: [
        "Meditation workshops",
        "Stress management sessions",
        "Mindfulness training",
        "Work-life balance guidance"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Literacy in the focus",
      description: "Educational outreach programs for underprivileged communities",
      activities: [
        "Basic literacy programs",
        "Digital literacy training",
        "Vocational skill development",
        "Scholarship programs"
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Navigating Ups and Downs",
      description: "Life coaching and guidance based on spiritual principles",
      activities: [
        "Personal counseling sessions",
        "Group therapy workshops",
        "Crisis intervention support",
        "Spiritual mentorship"
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Healthier body, happier lives",
      description: "Holistic health programs combining physical and spiritual wellness",
      activities: [
        "Yoga and meditation classes",
        "Ayurvedic health consultations",
        "Nutrition guidance",
        "Fitness programs"
      ]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Self-branding for higher self-esteem",
      description: "Personal development programs for building confidence and character",
      activities: [
        "Leadership training",
        "Communication skills",
        "Personality development",
        "Professional growth guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-main-gradient opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-space text-slate-800 mb-6">
              Our <span className="bg-main-gradient bg-clip-text text-transparent">Initiatives</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We have launched many online initiatives to spread the teachings of scriptures, 
              cultivate character of people all over the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Initiatives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space text-slate-800 mb-4">
              Our <span className="bg-main-gradient bg-clip-text text-transparent">Initiatives</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${initiative.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 font-space">
                  {initiative.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                <ul className="space-y-2">
                  {initiative.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-space text-slate-800 mb-4">
              Our <span className="bg-main-gradient bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We undertake a variety of activities to fulfill our vision for serving the society. 
              We have something for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white mb-4 mx-auto">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 font-space text-center">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-center">
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Objectives, Mission Section */}
      <section className="py-20 bg-main-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-space mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To create a world where spiritual wisdom guides every aspect of life, 
                fostering peace, harmony, and genuine happiness for all beings.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold font-space mb-4">Our Objectives</h3>
              <p className="text-white/90 leading-relaxed">
                To systematically present the science of Krishna consciousness through 
                education, community service, and spiritual practice.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold font-space mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To bring people closer to Krishna through authentic spiritual teachings, 
                practical application, and compassionate service to humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachings;

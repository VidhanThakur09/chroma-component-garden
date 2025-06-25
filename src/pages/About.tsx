
import { ArrowLeft, BookOpen, Heart, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Navigation Header */}
      <div className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Link to="/" className="text-2xl font-bold font-space bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              ISKCON Updesh
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-ocean/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm md:text-base font-medium shadow-lg">
              🕉️ About Our Spiritual Mission
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-space mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Spreading Divine
            </span>
            <br />
            <span className="text-slate-800">Consciousness</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn about our spiritual leaders, mission, and the timeless teachings 
            that guide millions towards Krishna consciousness worldwide.
          </p>
        </div>
      </section>

      {/* Spiritual Leader Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Leader Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 shadow-xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-full h-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center">
                      <Users size={64} className="text-slate-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-4">
                    Spiritual Leadership
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      SRILA PRABHUPADA DISCIPLE
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      ISKCON INITIATING GURU
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                      SPIRITUAL LEADER & PREACHER
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      AUTHOR
                    </span>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Our spiritual leaders are revered teachers and Gurus in ISKCON (International Society of 
                  Krishna Consciousness). As direct disciples of A.C. Bhaktivedanta Swami Srila Prabhupada, 
                  they have dedicated over 46 years to spreading the teachings of Lord Chaitanya across 
                  India, Europe, America, Canada, and beyond.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Their life's mission has been preaching and guiding others on the path of spiritual growth, 
                  a journey they began nearly 50 years ago after meeting their spiritual master. They are 
                  also prolific authors, having written over 24 books aimed at uplifting and inspiring 
                  readers in their spiritual lives.
                </p>

                <div className="pt-4">
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <BookOpen size={20} />
                    Books Authored by Our Leaders
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Biography Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-slate-800 mb-8">
                About Our Spiritual Mission
              </h3>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our spiritual leaders, born into aristocratic Gujarati Gaudiya Vaishnava families, 
                  are distinguished spiritual leaders within the International Society for Krishna 
                  Consciousness (ISKCON). Raised in spiritually enriched environments with devotional 
                  practices including daily chanting of the Hare Krishna mahamantra.
                </p>

                <p>
                  Pursuing higher education, our leaders earned bachelor's degrees in engineering and 
                  later obtained master's degrees from prestigious universities. Their initial encounter 
                  with ISKCON occurred in the 1970s, leading to full-time involvement in the movement 
                  and formal initiation by Srila Prabhupada in Toronto, Canada.
                </p>

                <p>
                  Throughout their spiritual journey, they have held various significant positions within 
                  ISKCON, serving as congregational preachers, conducting numerous house programs and 
                  temple festivals. They have served as temple presidents, engaging in college and 
                  school preaching and initiating innovative programs using various means to reach 
                  every community.
                </p>

                <p>
                  As initiating spiritual masters, they have been vigorously traveling and preaching 
                  worldwide. Their outreach extends to various regions, inspiring numerous individuals 
                  on their spiritual paths. They are also in charge of major temples and spiritual 
                  centers in Vrindavan and other holy places.
                </p>

                <p>
                  Their life is a testament to unwavering devotion and service within ISKCON. Their 
                  relentless efforts in preaching, leadership, and authorship have significantly 
                  contributed to the global spread of Krishna consciousness, inspiring countless 
                  individuals to embark on their spiritual journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-slate-800 mb-6">
                Our Global Impact
              </h3>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Decades of dedicated service spreading Krishna consciousness worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-800 mb-2">50+</div>
                <div className="text-slate-600">Years of Service</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
                <div className="text-slate-600">Temples Worldwide</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-800 mb-2">100M+</div>
                <div className="text-slate-600">Books Distributed</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-800 mb-2">∞</div>
                <div className="text-slate-600">Divine Blessings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold font-space text-slate-800 mb-6">
              Need Help with Spiritual Guidance?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Have a question about Krishna consciousness or need spiritual guidance? 
              We're here to help you on your spiritual journey.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Heart size={20} />
              Connect with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

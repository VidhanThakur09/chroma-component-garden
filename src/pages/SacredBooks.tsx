
import { BookOpen, Download, Eye, Heart, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SacredBooks = () => {
  const books = [
    {
      title: "Bhagavad Gita As It Is",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "The most widely read edition of the Gita in the world with authentic translation and detailed commentary.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      chapters: "18 Chapters",
      pages: "928 Pages",
      rating: 4.9,
      downloads: "2M+",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Srimad Bhagavatam",
      author: "Srila Vyasadeva & Srila Prabhupada",
      description: "The beautiful pastimes of Lord Krishna and the science of God realization in 12 cantos.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      chapters: "12 Cantos",
      pages: "5000+ Pages",
      rating: 4.8,
      downloads: "1.5M+",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Chaitanya Charitamrita",
      author: "Krishnadasa Kaviraja Goswami",
      description: "The biography and teachings of Sri Chaitanya Mahaprabhu, the golden avatar of Krishna.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      chapters: "17 Chapters",
      pages: "2000+ Pages",
      rating: 4.7,
      downloads: "800K+",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Nectar of Devotion",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "The complete science of bhakti-yoga, based on the Bhakti-rasamrta-sindhu of Rupa Goswami.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      chapters: "50 Chapters",
      pages: "600 Pages",
      rating: 4.6,
      downloads: "600K+",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Nectar of Instruction",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "Essential teachings for spiritual advancement based on the Upadesamrta of Rupa Goswami.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      chapters: "11 Instructions",
      pages: "200 Pages",
      rating: 4.8,
      downloads: "400K+",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Krishna Book",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "The summary study of the Tenth Canto of Srimad-Bhagavatam, describing Krishna's pastimes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      chapters: "90 Chapters",
      pages: "700 Pages",
      rating: 4.9,
      downloads: "1M+",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Isopanisad",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "The knowledge that brings one nearer to Krishna, based on the Isa Upanishad.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      chapters: "18 Mantras",
      pages: "150 Pages",
      rating: 4.7,
      downloads: "300K+",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Easy Journey to Other Planets",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "Scientific exploration of the spiritual dimensions and higher planetary systems.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      chapters: "4 Chapters",
      pages: "100 Pages",
      rating: 4.5,
      downloads: "200K+",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Perfect Questions, Perfect Answers",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "Conversations between Srila Prabhupada and Bob Cohen, providing perfect spiritual guidance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      chapters: "8 Conversations",
      pages: "120 Pages",
      rating: 4.6,
      downloads: "250K+",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6">
            🕉️ Divine Literature
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-space text-slate-800 mb-6">
            Sacred Books &
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Spiritual Wisdom
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Discover the timeless wisdom of Vedic literature through authentic translations 
            and commentaries by our beloved spiritual masters. Each book is a gateway to divine knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-orange-500" />
              <span>18+ Sacred Texts</span>
            </div>
            <div className="flex items-center gap-2">
              <Download size={16} className="text-orange-500" />
              <span>10M+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-orange-500" />
              <span>Available in 50+ Languages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {books.map((book, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${book.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{book.rating}</span>
                  </div>
                  
                  {/* Downloads Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-slate-700">
                    {book.downloads}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 font-space line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3 text-sm line-clamp-1">
                    by {book.author}
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span>{book.chapters}</span>
                    <span>{book.pages}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <Eye size={16} />
                      Read Online
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-orange-300 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-all duration-300">
                      <Download size={16} />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg">
              View All Sacred Texts
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start reading these sacred texts and transform your understanding of life, 
            spirituality, and your relationship with the divine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Download Our App
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SacredBooks;

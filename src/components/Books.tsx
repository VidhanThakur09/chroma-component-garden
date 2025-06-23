
import { BookOpen, Download, Eye } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "Bhagavad Gita As It Is",
      author: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada",
      description: "The most widely read edition of the Gita in the world with authentic translation and detailed commentary.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      chapters: "18 Chapters",
      pages: "928 Pages",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Srimad Bhagavatam",
      author: "Srila Vyasadeva & Srila Prabhupada",
      description: "The beautiful pastimes of Lord Krishna and the science of God realization in 12 cantos.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      chapters: "12 Cantos",
      pages: "5000+ Pages",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Chaitanya Charitamrita",
      author: "Krishnadasa Kaviraja Goswami",
      description: "The biography and teachings of Sri Chaitanya Mahaprabhu, the golden avatar of Krishna.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      chapters: "17 Chapters",
      pages: "2000+ Pages",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="books" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6">
            Sacred Literature
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            Divine Scriptures &
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Spiritual Wisdom
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the timeless wisdom of Vedic literature through authentic translations 
            and commentaries by our spiritual masters.
          </p>
        </div>
        
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-slate-700">
                  {book.chapters}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-space">
                  {book.title}
                </h3>
                <p className="text-orange-600 font-medium mb-3 text-sm">
                  by {book.author}
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                  <span>{book.pages}</span>
                  <span>Sanskrit & English</span>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
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
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Sacred Texts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Books;

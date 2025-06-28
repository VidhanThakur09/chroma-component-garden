
import { useState } from "react";
import { X, Download, Heart } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      alt: "Spiritual gathering and discourse",
      category: "Events"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      alt: "Sacred scripture reading",
      category: "Study"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      alt: "Temple worship and devotion",
      category: "Worship"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      alt: "Community kirtan session",
      category: "Kirtan"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Morning meditation practice",
      category: "Meditation"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1515036551137-5e24eea4a103?w=400&h=300&fit=crop",
      alt: "Festival celebration",
      category: "Festivals"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=300&fit=crop",
      alt: "Spiritual discourse",
      category: "Events"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
      alt: "Youth engagement program",
      category: "Youth"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1574264867128-06139ba8a9cd?w=400&h=300&fit=crop",
      alt: "Book distribution",
      category: "Service"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop",
      alt: "Community prasadam service",
      category: "Service"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      alt: "Spiritual gathering portrait",
      category: "Events"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      alt: "Sacred text study",
      category: "Study"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-coral/5 to-sunset/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-ocean/5 to-golden/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-main-gradient text-white rounded-full text-sm font-medium mb-6">
            Photo Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-slate-800 mb-6">
            HD Pictures
            <br />
            <span className="bg-main-gradient bg-clip-text text-transparent text-2xl md:text-3xl">
              of Spiritual Moments
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Please feel free to download and use as per requirement. More pictures coming soon. 
            If you want to contribute pictures please contact.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                image.id % 7 === 0 || image.id % 11 === 0 ? 'md:row-span-2' : ''
              }`}
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
                <span className="inline-block px-2 py-1 bg-orange-600 text-xs rounded-full mt-1">
                  {image.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <Heart size={16} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Years Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Previous Year Event Pictures</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto">
            {[2015, 2017, 2018, 2021, 2023, 2016, 2019, 2020, 2022].map((year) => (
              <button
                key={year}
                className="bg-gradient-to-r from-coral to-sunset text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-sm">{year}</div>
                <div className="text-xs opacity-90">EVENTS</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Add download functionality here
              }}
              className="absolute -top-12 right-12 text-white hover:text-orange-400 transition-colors"
            >
              <Download size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

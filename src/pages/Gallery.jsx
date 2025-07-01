
import Navigation from "@/components/Navigation.jsx";
import Gallery from "@/components/Gallery.tsx";
import Footer from "@/components/Footer.jsx";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;

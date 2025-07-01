
import Navigation from "@/components/Navigation.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";
import Books from "@/components/Books.jsx";
import Lectures from "@/components/Lectures.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Books />
      <Lectures />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

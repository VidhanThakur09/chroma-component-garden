
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Books from "@/components/Books";
import Lectures from "@/components/Lectures";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

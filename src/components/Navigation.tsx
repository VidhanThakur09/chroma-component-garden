
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", isExternal: true },
    { href: "/about", label: "About", isExternal: false },
    { href: "#teachings", label: "Teachings", isExternal: true },
    { href: "/books", label: "Sacred Books", isExternal: false },
    { href: "#resources", label: "Resources", isExternal: true },
    { href: "#lectures", label: "Lectures", isExternal: true },
    { href: "#contact", label: "Connect", isExternal: true }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-space bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            ISKCON Updesh
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-slate-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-orange-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-orange-600 transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-orange-600 transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

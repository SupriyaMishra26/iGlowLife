import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">iGlowLife</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-dark hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('trainers')}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                Trainers
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-dark hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('trainers')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary"
            >
              Trainers
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary"
            >
              Contact
            </button>
            <button className="w-full text-left bg-gray-900 text-white px-3 py-2 rounded-lg mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

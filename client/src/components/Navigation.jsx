import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

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
              <Link href="/" >
                <img src="https://res.cloudinary.com/dbmjqp2dz/image/upload/v1753531698/logo_ijhc0j.png" alt="iGlowLife Logo" className="h-14 w-auto" />
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className={location === '/' ? "text-primary font-medium" : "text-gray-600 hover:text-primary transition-colors duration-200 font-medium"}
              >
                Home
              </Link>
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
                What We Offer
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
              <Link 
                href="/"
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link href="/interest" >
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Express Your Interest
            </button>
            </Link>
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

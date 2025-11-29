
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onNavigate: (pageId: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav 
      className={`fixed top-0 w-full transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-cinematic-900/95 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-2xl font-display font-bold tracking-wider text-white focus:outline-none hover:opacity-80 transition-opacity cursor-pointer"
        >
          CINEMATIC <span className="text-cinematic-accent">AI</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            item.isButton ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="px-6 py-2 bg-cinematic-accent hover:bg-red-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-red-900/50 cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-300 text-sm tracking-wide font-light cursor-pointer ${currentPage === item.id ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="md:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cinematic-900 absolute w-full top-full left-0 border-t border-gray-800 shadow-xl" style={{ zIndex: 9998 }}>
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-center cursor-pointer ${item.isButton ? 'bg-cinematic-accent py-2 rounded-md text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/use-theme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        isScrolled ? 'py-3 backdrop-blur-lg bg-bg/70' : 'py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="font-inter-tight font-bold text-xl">JournAI</a>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">FAQ</a>
          </nav>
          
          <button 
            onClick={toggleTheme} 
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          
          <a 
            href="#get-started" 
            className="hidden md:flex px-5 py-2 bg-accent text-white rounded-full font-medium text-sm hover:bg-accent/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

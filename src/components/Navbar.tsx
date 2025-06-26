import React, { useState, useEffect } from 'react';
import { Menu, X, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Collections', id: 'collection' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-luxury shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12 shadow-lg group-hover:shadow-luxury-gold/50">
              <Gem className="w-6 h-6 text-dark-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-dark-100 transition-colors duration-300 group-hover:text-luxury-gold">
                Elegance
              </span>
              <span className="text-xs text-dark-300 font-medium tracking-wider uppercase">
                Since 2014
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-dark-200 hover:text-luxury-gold font-medium transition-all duration-300 group py-2 px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-[calc(100%-2rem)] rounded-full"></span>
                <span className="absolute inset-0 bg-luxury-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-dark-200 hover:text-luxury-gold transition-all duration-300 rounded-lg hover:bg-dark-700/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-luxury-light border-t border-dark-600/30 rounded-b-2xl shadow-2xl mt-2">
                <div className="py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-6 py-4 text-dark-200 hover:text-luxury-gold hover:bg-dark-600/30 transition-all duration-300 rounded-lg mx-2 font-medium"
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
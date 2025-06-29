import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    collectionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "94769392773";
    const whatsappMessage = "Hello! I'm interested in your jewelry collection.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen bg-luxury-gradient overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://res.cloudinary.com/devpq4myi/image/upload/v1751186714/IMG_3153_i3b43h.webp" 
          alt="Western Jewelers Store"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/80 to-dark-700/70"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-24 h-24 border-2 border-luxury-accent/40 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-luxury-gold/40 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            <Sparkles className="w-4 h-4 text-luxury-gold" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        {/* Left side - Hero content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="block text-dark-100 mb-2">Western</span>
                <span className="block bg-gold-gradient bg-clip-text text-transparent animate-glow">
                  Jewelers
                </span>
              </h1>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <motion.p 
              className="text-2xl md:text-3xl text-luxury-gold mb-6 font-medium tracking-wide"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Jewellery & Timepieces Since 2014
            </motion.p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <motion.p 
              className="text-xl text-dark-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Discover our exquisite collection of handcrafted jewelry and luxury timepieces, where timeless elegance meets contemporary design in perfect harmony.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                onClick={scrollToCollection}
                className="btn-luxury text-lg px-10 py-5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.button>
              
              <motion.button 
                onClick={handleWhatsAppClick}
                className="btn-luxury-outline text-lg px-10 py-5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </motion.button>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Right side - Contact Info */}
        <div className="flex-1 max-w-md w-full lg:max-w-lg">
          <ScrollReveal delay={300}>
            <motion.div 
              className="glass-luxury rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-dark-100 mb-2">Visit Our Store</h3>
                <div className="w-16 h-1 bg-gold-gradient rounded-full mx-auto"></div>
              </div>
              
              {/* Interactive Map Placeholder */}
              <motion.div 
                className="glass-luxury-light rounded-2xl mb-8 h-52 flex items-center justify-center border border-dark-500/30 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center text-dark-200 group-hover:text-luxury-gold transition-colors duration-300">
                  <MapPin className="w-16 h-16 mx-auto mb-3 opacity-80 group-hover:opacity-100" />
                  <p className="text-lg font-semibold mb-1">Interactive Map</p>
                  <p className="text-sm opacity-80">123 Jewelry Street, Luxury District</p>
                  <p className="text-xs opacity-60 mt-2">Click to view directions</p>
                </div>
              </motion.div>

              {/* Contact Buttons */}
              <div className="space-y-4 mb-8">
                <motion.a 
                  href="tel:+94769392773" 
                  className="flex items-center justify-center w-full glass-luxury-light hover:bg-luxury-gold/20 text-dark-100 py-4 px-6 rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5 mr-3 text-luxury-gold group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Call: +94 76 939 2773</span>
                </motion.a>
                
                <motion.a 
                  href="mailto:info@jewelrystore.com" 
                  className="flex items-center justify-center w-full glass-luxury-light hover:bg-luxury-accent/20 text-dark-100 py-4 px-6 rounded-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5 mr-3 text-luxury-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Email Us</span>
                </motion.a>
              </div>

              {/* Store Hours */}
              <div className="text-center glass-luxury-light rounded-xl p-6">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-luxury-gold mr-2" />
                  <h4 className="text-lg font-semibold text-dark-100">Store Hours</h4>
                </div>
                <div className="space-y-1 text-dark-200">
                  <p className="flex justify-between">
                    <span>Mon - Sat:</span>
                    <span className="text-luxury-gold font-medium">10AM - 8PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-luxury-gold font-medium">12PM - 6PM</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
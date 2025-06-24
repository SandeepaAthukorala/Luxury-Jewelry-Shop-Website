import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    collectionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "1234567890";
    const whatsappMessage = "Hello! I'm interested in your jewelry collection.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-royal-blue via-blue-grey to-royal-blue overflow-hidden pt-16">
      {/* Full-width banner background */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?random=hero" 
          alt="Jewelry Collection Banner"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/80 via-royal-blue/60 to-chili-red/40"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-chili-red rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 max-w-7xl mx-auto">
        {/* Left side - Hero content */}
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="block">Elegance</span>
              <span className="block text-chili-red">Redefined</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
              Jewellery & Timepieces Since 2014
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover our exquisite collection of handcrafted jewelry and luxury timepieces, where timeless elegance meets contemporary design
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <button 
              onClick={scrollToCollection}
              className="bg-chili-red hover:bg-chili-red/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Collection
            </button>
          </ScrollReveal>
        </div>

        {/* Right side - Contact Info */}
        <div className="flex-1 max-w-md w-full lg:max-w-lg">
          <ScrollReveal delay={300}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Visit Our Store</h3>
              
              {/* Google Map placeholder */}
              <div className="bg-white/20 rounded-xl mb-6 h-48 flex items-center justify-center border border-white/30">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-80" />
                  <p className="text-sm opacity-90">Interactive Map</p>
                  <p className="text-xs opacity-70">123 Jewelry Street, City</p>
                </div>
              </div>

              {/* Contact buttons */}
              <div className="space-y-3">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center w-full bg-chili-red/80 hover:bg-chili-red text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Call Now: +123 456 7890</span>
                </a>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center w-full bg-green-600/80 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  <span className="font-semibold">WhatsApp Us</span>
                </button>
                
                <a 
                  href="mailto:info@jewelrystore.com" 
                  className="flex items-center justify-center w-full bg-blue-grey/80 hover:bg-blue-grey text-white py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Email Us</span>
                </a>
              </div>

              {/* Store hours */}
              <div className="mt-6 text-center text-white/80 text-sm">
                <p className="font-semibold mb-1">Store Hours</p>
                <p>Mon-Sat: 10AM - 8PM</p>
                <p>Sunday: 12PM - 6PM</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
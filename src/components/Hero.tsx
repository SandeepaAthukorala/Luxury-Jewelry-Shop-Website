import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    collectionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDF6F0] to-[#FFF4CC] overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#D4AF37] rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#A67C52] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#D4AF37] rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Hero Image */}
        <ScrollReveal className="mb-8 relative">
          <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-[#D4AF37] relative group">
            <img 
              src="https://picsum.photos/400/400?random=hero" 
              alt="Elegant Jewelry Collection"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full animate-bounce"></div>
          <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#A67C52] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </ScrollReveal>

        {/* Hero Text */}
        <ScrollReveal delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E1E1E] mb-6 leading-tight">
            <span className="inline-block animate-fade-in-up">Elegance</span>
            <span className="block text-[#D4AF37] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Redefined</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-lg md:text-xl text-[#1E1E1E]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of handcrafted jewelry, where timeless elegance meets contemporary design
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={600}>
          <button 
            onClick={scrollToCollection}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 hover:from-[#B8941F] hover:to-[#A67C52]"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
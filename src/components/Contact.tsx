import React, { useEffect, useState } from 'react';
import { MessageCircle, Instagram, Facebook, Twitter, MapPin, Clock, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [isWhatsAppBouncing, setIsWhatsAppBouncing] = useState(false);
  const whatsappNumber = "94769392773";
  const whatsappMessage = "Hello! I'm interested in your jewelry collection.";
  
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Follow us on Instagram", color: "hover:bg-pink-500" },
    { icon: Facebook, href: "#", label: "Like us on Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Follow us on Twitter", color: "hover:bg-blue-400" },
  ];

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  // WhatsApp bounce animation every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhatsAppBouncing(true);
      setTimeout(() => setIsWhatsAppBouncing(false), 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-[#D4AF37] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#A67C52] rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to find your perfect piece? We're here to help you every step of the way
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <ScrollReveal className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Get in Touch</h3>
              
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Visit Our Showroom', desc: '123 Luxury Lane, Diamond District, NY 10001' },
                  { icon: Clock, title: 'Opening Hours', desc: 'Mon-Fri: 10AM-7PM\nSat-Sun: 10AM-6PM' },
                  { icon: Phone, title: 'Call Us', desc: '+94 76 939 2773' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-white/80 whitespace-pre-line">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className={`w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] p-6 rounded-2xl flex items-center justify-center gap-4 hover:from-[#20BD5A] hover:to-[#0F7569] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 ${
                isWhatsAppBouncing ? 'animate-bounce' : ''
              }`}
            >
              <MessageCircle className="w-8 h-8" />
              <div className="text-left">
                <h3 className="text-xl font-bold">Chat with us on WhatsApp</h3>
                <p className="text-white/90">Get instant responses to your queries</p>
              </div>
            </button>
          </ScrollReveal>

          {/* Social & Additional Info */}
          <ScrollReveal delay={200} className="space-y-8">
            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Follow Our Journey</h3>
              <p className="text-white/80 mb-6">
                Stay updated with our latest collections, behind-the-scenes content, and customer stories
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 ${social.color} hover:text-white`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Our Services</h3>
              <div className="space-y-4">
                {[
                  'Custom Design Consultation',
                  'Jewelry Repair & Restoration',
                  'Ring Sizing & Adjustments',
                  'Appraisal Services',
                  'Complimentary Cleaning'
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full transition-all duration-300 group-hover:scale-150"></div>
                    <span className="group-hover:text-[#D4AF37] transition-colors duration-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#A67C52]/20 p-6 rounded-2xl border border-[#D4AF37]/30 hover:from-[#D4AF37]/30 hover:to-[#A67C52]/30 transition-all duration-300 hover:-translate-y-1">
              <h4 className="text-xl font-bold mb-2 text-[#D4AF37]">Our Promise</h4>
              <p className="text-white/90">
                30-day satisfaction guarantee on all purchases. If you're not completely satisfied, we'll make it right.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
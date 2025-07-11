import React from 'react';
import { motion } from 'framer-motion';
import { Gem, MessageCircle, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappNumber = "94769392773";
  const whatsappMessage = "Hello! I'm interested in your jewelry collection.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };



  const contactInfo = [
    { icon: Phone, text: "+94 76 939 2773", href: "tel:+94769392773" },
    { icon: MapPin, text: "Western Jewellers, Kumbukgate Road, Hiripitiya, Nikadhalupotha", href: "https://maps.google.com/?q=Western+Jewellers+Kumbukgate+Road+Hiripitiya+Nikadhalupotha" },
    { icon: Mail, text: "Custom Jewellery Consultations Available", href: "#" },
  ];

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Home', id: 'hero-section' },
    { label: 'Collections', id: 'collection' },
    { label: 'Services', id: 'services' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-luxury-gradient-reverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 bg-luxury-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo & Brand */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-3 mb-4 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-royal-gradient rounded-full flex items-center justify-center shadow-lg shadow-luxury-primary/20"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 12,
                  transition: { duration: 0.3 }
                }}
              >
                <Gem className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-dark-100 group-hover:text-luxury-gold transition-colors duration-300">
                  Western Jewellers
                </h3>
                <p className="text-sm text-luxury-gold font-medium">Hiripitiya, Sri Lanka</p>
              </div>
            </motion.div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white">
              <Sparkles className="w-4 h-4 text-luxury-primary" />
              <p className="text-sm">
                Custom Jewellery Designers - Serving Hiripitiya & Sri Lanka Since 2019
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-luxury-primary" />
              <h4 className="text-lg font-semibold text-luxury-primary">Quick Links</h4>
              <Sparkles className="w-5 h-5 text-luxury-primary" />
            </div>
            <div className="flex flex-col items-center space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-luxury-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-end gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-luxury-primary" />
              <h4 className="text-lg font-semibold text-luxury-primary">Contact Us</h4>
              <Sparkles className="w-5 h-5 text-luxury-primary" />
            </div>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center justify-center md:justify-end text-white hover:text-luxury-primary transition-colors duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-luxury-primary/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-luxury-primary" />
            <p className="text-white text-sm">
              © 2024 Western Jewellers. All rights reserved.
            </p>
            <Sparkles className="w-4 h-4 text-luxury-primary" />
          </div>
          <p className="text-luxury-accent text-xs">
            Premier custom jewellery store in Hiripitiya, Sri Lanka - Engagement rings, gold necklaces & luxury timepieces
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
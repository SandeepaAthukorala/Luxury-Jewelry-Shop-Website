import React from 'react';
import { motion } from 'framer-motion';
import { Gem, MessageCircle, Instagram, Facebook, Twitter, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappNumber = "1234567890";
  const whatsappMessage = "Hello! I'm interested in your jewelry collection.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400 hover:bg-pink-400/20" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400 hover:bg-blue-400/20" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400 hover:bg-sky-400/20" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+123 456 7890", href: "tel:+1234567890" },
    { icon: Mail, text: "info@jewelrystore.com", href: "mailto:info@jewelrystore.com" },
    { icon: MapPin, text: "123 Jewelry Street, City", href: "#" },
  ];

  return (
    <footer className="bg-luxury-gradient-reverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-luxury-accent rounded-full blur-3xl"></div>
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
                className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg shadow-luxury-gold/20"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 12,
                  transition: { duration: 0.3 }
                }}
              >
                <Gem className="w-7 h-7 text-dark-900" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-dark-100 group-hover:text-luxury-gold transition-colors duration-300">
                  Elegance
                </h3>
                <p className="text-sm text-luxury-gold font-medium">Redefined</p>
              </div>
            </motion.div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-dark-200">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <p className="text-sm">
                Luxury Jewellery & Timepieces Since 2014
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-luxury-gold" />
              <h4 className="text-lg font-semibold text-luxury-gold">Follow Us</h4>
              <Sparkles className="w-5 h-5 text-luxury-gold" />
            </div>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 glass-luxury rounded-full flex items-center justify-center text-dark-100 border border-luxury-gold/20 transition-all duration-300 ${social.color}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="mt-6 btn-luxury inline-flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </motion.button>
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
              <Sparkles className="w-5 h-5 text-luxury-gold" />
              <h4 className="text-lg font-semibold text-luxury-gold">Contact Us</h4>
              <Sparkles className="w-5 h-5 text-luxury-gold" />
            </div>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center justify-center md:justify-end gap-3 text-dark-200 hover:text-luxury-gold transition-colors duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-4 h-4 text-luxury-gold group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-luxury-gold/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-luxury-gold" />
            <p className="text-dark-300 text-sm">
              © 2024 Elegance Jewelry & Timepieces. All rights reserved.
            </p>
            <Sparkles className="w-4 h-4 text-luxury-gold" />
          </div>
          <p className="text-dark-400 text-xs">
            Crafting luxury experiences since 2014
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
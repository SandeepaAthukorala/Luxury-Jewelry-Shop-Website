import React from 'react';
import { Gem, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappNumber = "1234567890";
  const whatsappMessage = "Hello! I'm interested in your jewelry collection.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500 hover:bg-pink-500/20" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600 hover:bg-blue-600/20" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400 hover:bg-blue-400/20" },
  ];

  return (
    <footer className="bg-royal-blue text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 group">
              <div className="w-10 h-10 bg-chili-red rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold group-hover:text-chili-red transition-colors duration-300">Elegance</h3>
                <p className="text-sm text-white/70">Redefined</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Jewellery & Timepieces Since 2014
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-chili-red">Follow Us</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-chili-red">Quick Links</h4>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">📞 +123 456 7890</p>
              <p className="text-white/80 text-sm">📧 info@jewelrystore.com</p>
              <p className="text-white/80 text-sm">📍 123 Jewelry Street, City</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Elegance Jewelry & Timepieces. All rights reserved. | Serving customers since 2014
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
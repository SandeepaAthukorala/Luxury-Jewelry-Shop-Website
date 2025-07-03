import React from 'react';
import { Wrench, Watch, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Gold & Silver Repairs',
      description: 'Expert restoration and repair services for your precious jewelry with meticulous attention to detail',
      color: 'luxury-primary'
    },
    {
      icon: Watch,
      title: 'Watch Repairs',
      description: 'Professional timepiece maintenance and repair by certified technicians using premium tools',
      color: 'luxury-accent'
    },
    {
      icon: Sparkles,
      title: 'Custom Jewellery Orders',
      description: 'Bespoke jewelry design and creation tailored to your unique vision and personal style',
      color: 'luxury-primary'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Your happiness is our commitment with guaranteed quality service and lifetime support',
      color: 'luxury-accent'
    }
  ];

  const handleContactClick = () => {
    const whatsappNumber = "94769392773";
    const whatsappMessage = "Hello! I'm interested in your jewelry services.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-luxury-gradient-reverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4169E1 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #FFFFFF 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-luxury-primary/10 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-luxury-primary" />
              <span className="text-luxury-primary font-medium tracking-wide">Premium Services</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-royal-gradient bg-clip-text text-transparent">Services</span>
            </h2>
            
            <div className="w-24 h-1 bg-royal-gradient rounded-full mx-auto mb-6"></div>
            
            <p className="text-2xl text-luxury-primary mb-4 font-medium">
              Excellence Since 2019
            </p>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Professional jewelry and timepiece services delivered with unmatched expertise and precision
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <motion.div 
                  className="group glass-luxury rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}
                    style={{
                      background: service.color === 'luxury-primary' 
                        ? 'linear-gradient(135deg, #4169E1 0%, #6495ED 50%, #1E3A8A 100%)'
                        : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #E2E8F0 100%)'
                    }}
                  >
                    <IconComponent className={`w-10 h-10 ${service.color === 'luxury-primary' ? 'text-white' : 'text-luxury-primary'}`} />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-luxury-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white leading-relaxed mb-6">
                    {service.description}
                  </p>
                  

                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={600}>
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="glass-luxury rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Experience Premium Service?
              </h3>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Contact us today for a personalized consultation and discover how we can bring your jewelry vision to life
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  onClick={handleContactClick}
                  className="btn-luxury text-lg px-10 py-5"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
                
                <motion.a 
                  href="tel:+94769392773"
                  className="btn-luxury-outline text-lg px-10 py-5"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
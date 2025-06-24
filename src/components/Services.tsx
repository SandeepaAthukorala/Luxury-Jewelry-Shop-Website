import React from 'react';
import { Wrench, Watch, Sparkles, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Gold & Silver Repairs',
      description: 'Expert restoration and repair services for your precious jewelry'
    },
    {
      icon: Watch,
      title: 'Watch Repairs',
      description: 'Professional timepiece maintenance and repair by certified technicians'
    },
    {
      icon: Sparkles,
      title: 'Custom Jewellery Orders',
      description: 'Bespoke jewelry design and creation tailored to your vision'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction Priority',
      description: 'Your happiness is our commitment - guaranteed quality service'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-royal-blue to-blue-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Since 2014
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Professional jewelry and timepiece services with years of expertise
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center">
                  {/* Icon */}
                  <div className="bg-chili-red/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-chili-red" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <p className="text-white/90 text-lg mb-6">
              Need our services? Contact us today for a consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                className="bg-chili-red hover:bg-chili-red/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call for Service
              </a>
              <a 
                href="mailto:info@jewelrystore.com" 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
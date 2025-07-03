import React from 'react';
import { Award, RefreshCw, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Experienced Staff Since 2019',
      description: 'Our team brings years of expertise in jewelry and timepiece craftsmanship'
    },
    {
      icon: RefreshCw,
      title: 'Certified Resale Options',
      description: 'We offer authenticated resale services with transparent valuations'
    },
    {
      icon: Users,
      title: 'Loyal, Happy Customer Base',
      description: 'Join our community of satisfied customers who trust our quality and service'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-blue-grey max-w-2xl mx-auto">
              Discover the difference that makes us your trusted jewelry partner
            </p>
          </div>
        </ScrollReveal>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-royal-blue/10">
                  {/* Icon */}
                  <div className="bg-royal-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-royal-blue" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-royal-blue mb-4">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-grey text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Customer Satisfaction */}
        <ScrollReveal delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-royal-blue/10 rounded-full px-6 py-3 mb-6">
              <p className="text-royal-blue font-semibold">
                Trusted by customers since 2019
              </p>
            </div>
            <p className="text-blue-grey text-lg mb-8 max-w-3xl mx-auto">
              "We've been loyal customers for years. The quality, service and attention to detail is unmatched. Highly recommended for all your jewelry needs!"
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
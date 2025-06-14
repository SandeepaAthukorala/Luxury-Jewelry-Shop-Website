import React from 'react';
import { Award, Users, Gem, Heart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '25+' },
    { icon: Users, label: 'Happy Customers', value: '10K+' },
    { icon: Gem, label: 'Unique Pieces', value: '500+' },
    { icon: Heart, label: 'Satisfied Reviews', value: '99%' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#FFF4CC] to-[#FDF6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <ScrollReveal className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Crafting Dreams Into
                <span className="block text-[#D4AF37]">Timeless Beauty</span>
              </h2>
              <p className="text-lg text-[#1E1E1E]/80 leading-relaxed mb-6">
                For over two decades, we have been dedicated to creating extraordinary jewelry pieces that tell your unique story. Each piece is meticulously handcrafted by our master artisans using the finest materials and time-honored techniques.
              </p>
              <p className="text-lg text-[#1E1E1E]/80 leading-relaxed">
                From engagement rings that mark life's most precious moments to statement pieces that express your individual style, we believe that jewelry should be as unique as the person wearing it.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4AF37]/10 rounded-full mb-4 group-hover:bg-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div className="text-2xl font-bold text-[#1E1E1E] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#1E1E1E]/70">
                        {stat.label}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right Content - Images */}
          <ScrollReveal delay={200} className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://picsum.photos/600/700?random=about1"
                alt="Master craftsman at work"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Gem className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1E1E]">Master Crafted</h4>
                  <p className="text-sm text-[#1E1E1E]/70">Hand-selected materials</p>
                </div>
              </div>
              <p className="text-sm text-[#1E1E1E]/80">
                Every piece undergoes rigorous quality checks to ensure perfection
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#D4AF37] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#A67C52] rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
          </ScrollReveal>
        </div>

        {/* Brand Values */}
        <ScrollReveal delay={400} className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#1E1E1E] mb-8">Our Promise to You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Only the finest materials and gemstones make it into our collection' },
              { icon: Heart, title: 'Lifetime Care', desc: 'Complimentary cleaning and maintenance for all our pieces' },
              { icon: Gem, title: 'Custom Design', desc: 'Bring your vision to life with our bespoke design services' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group hover:-translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37]/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#1E1E1E] mb-2">{item.title}</h4>
                    <p className="text-[#1E1E1E]/70">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
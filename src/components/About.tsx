import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Gem, Heart, Sparkles, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '10+' },
    { icon: Users, label: 'Happy Customers', value: '5K+' },
    { icon: Gem, label: 'Unique Pieces', value: '300+' },
    { icon: Heart, label: 'Satisfied Reviews', value: '99%' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-luxury-gradient-reverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-luxury-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <ScrollReveal className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-luxury-gold" />
                <span className="text-luxury-gold font-medium text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
                Crafting Dreams Into
                <span className="block bg-gold-gradient bg-clip-text text-transparent">Timeless Beauty</span>
              </h2>
              <p className="text-lg text-dark-200 leading-relaxed mb-6">
                Since 2014, we have been dedicated to creating extraordinary jewelry pieces and timepieces that tell your unique story. Each piece is meticulously handcrafted by our master artisans using the finest materials and time-honored techniques.
              </p>
              <p className="text-lg text-dark-200 leading-relaxed">
                From engagement rings that mark life's most precious moments to luxury watches and statement pieces that express your individual style, we believe that jewelry should be as unique as the person wearing it.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="glass-luxury p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-luxury-gold/20 text-center group border border-luxury-gold/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-gold-gradient rounded-full mb-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-dark-900" />
                    </motion.div>
                    <div className="text-2xl font-bold text-luxury-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-dark-200">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </ScrollReveal>

          {/* Right Content - Images */}
          <ScrollReveal delay={200} className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl group border border-luxury-gold/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://picsum.photos/600/700?random=about1"
                  alt="Master craftsman at work"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-luxury-gold/5 group-hover:bg-luxury-gold/10 transition-colors duration-300"></div>
              </motion.div>

              {/* Floating Card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 glass-luxury p-6 rounded-2xl shadow-xl max-w-xs border border-luxury-gold/30"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 12,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Gem className="w-6 h-6 text-dark-900" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-luxury-gold">Master Crafted</h4>
                    <p className="text-sm text-dark-200">Hand-selected materials</p>
                  </div>
                </div>
                <p className="text-sm text-dark-200">
                  Every piece undergoes rigorous quality checks to ensure perfection
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 border-4 border-luxury-gold/30 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 -right-4 w-8 h-8 bg-luxury-accent rounded-full"
                animate={{ 
                  y: [-10, 10, -10],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              <motion.div
                className="absolute top-20 -left-4 w-6 h-6 bg-luxury-gold rounded-full"
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Brand Values */}
        <ScrollReveal delay={300} className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-luxury-gold" />
              <h3 className="text-3xl font-bold text-dark-100">Our Brand Values</h3>
              <Sparkles className="w-6 h-6 text-luxury-gold" />
            </div>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-4 rounded-full"></div>
            <p className="text-dark-200 max-w-2xl mx-auto">
              Three core promises that define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Every piece is crafted with the finest materials and attention to detail"
              },
              {
                icon: Heart,
                title: "Lifetime Care",
                description: "We provide ongoing support and maintenance for all our jewelry pieces"
              },
              {
                icon: Gem,
                title: "Custom Design",
                description: "Personalized creations tailored to your unique style and preferences"
              }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center group glass-luxury p-8 rounded-2xl border border-luxury-gold/20 shadow-lg hover:shadow-luxury-gold/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 12,
                    transition: { duration: 0.2 }
                  }}
                >
                  <value.icon className="w-8 h-8 text-dark-900" />
                </motion.div>
                <h4 className="text-xl font-bold text-luxury-gold mb-3">{value.title}</h4>
                <p className="text-dark-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Gem, Heart, Sparkles, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ImageSlideshow from './ImageSlideshow';
import ImageModal from './ImageModal';

const About: React.FC = () => {
  // Calculate years since 2019
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2019;
  
  // Modal state for full-screen image viewing
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    name: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    name: ''
  });
  
  // Modal handlers
  const openModal = (src: string, alt: string = 'About Us Image', name: string = 'Western Jewellers') => {
    setModalImage({
      isOpen: true,
      src,
      alt,
      name
    });
  };
  
  const closeModal = () => {
    setModalImage({
      isOpen: false,
      src: '',
      alt: '',
      name: ''
    });
  };
  
  const aboutImages = [
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186695/IMG_3160_iaeln9.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186695/IMG_3157_kkkdx8.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186693/IMG_3154_rn5nxe.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186693/IMG_3149_hjhana.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186693/IMG_3158_redogv.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186693/IMG_3156_draqm7.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186689/IMG_3155_guyk2x.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186688/IMG_3151_mmbbuh.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186688/IMG_3176_gtbnrw.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186688/IMG_3174_z5qdr1.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186686/IMG_3150_c2xlkm.webp'
  ];

  const stats = [
    { icon: Award, label: 'Years of Excellence', value: `${yearsInBusiness}+` },
    { icon: Users, label: 'Happy Customers', value: '1K+' },
    { icon: Gem, label: 'Unique Pieces', value: '300+' },
    { icon: Heart, label: 'Satisfied Reviews', value: '99%' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-luxury-gradient-reverse relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-luxury-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
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
                <Sparkles className="w-6 h-6 text-luxury-primary" />
                <span className="text-luxury-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Premier Custom Jewellery Store in
                <span className="block bg-royal-gradient bg-clip-text text-transparent">Hiripitiya, Sri Lanka</span>
              </h2>
              <p className="text-lg text-white leading-relaxed mb-6">
                Located in the heart of Hiripitiya, Sri Lanka, Western Jewellers has been the trusted destination for custom jewellery design since 2019. Our skilled artisans specialize in creating bespoke engagement rings, handcrafted necklaces, and luxury timepieces using traditional Sri Lankan craftsmanship combined with modern techniques.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Visit our showroom on Kumbukgate Road to explore our extensive collection of gold jewellery, diamond rings, and custom-designed pieces. We serve customers throughout Hiripitiya and surrounding areas with personalized jewelry services, repairs, and consultations.
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
                    className="glass-luxury p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-luxury-primary/20 text-center group border border-luxury-primary/20"
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
                      className="inline-flex items-center justify-center w-12 h-12 bg-royal-gradient rounded-full mb-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-luxury-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white">
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
              {/* Main Image Slideshow */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl group border border-luxury-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageSlideshow 
                  images={aboutImages}
                  autoPlay={true}
                  interval={4000}
                  showControls={true}
                  showDots={false}
                  className="w-full h-[500px]"
                  imageClassName="transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                  overlay={false}
                  onImageClick={openModal}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-luxury-primary/5 group-hover:bg-luxury-primary/10 transition-colors duration-300 pointer-events-none"></div>
              </motion.div>

              {/* Floating Card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 glass-luxury p-6 rounded-2xl shadow-xl max-w-xs border border-luxury-primary/30 z-20"
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
                    className="w-12 h-12 bg-royal-gradient rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 12,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Gem className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-luxury-primary">Master Crafted in Sri Lanka</h3>
                    <p className="text-sm text-white">Locally sourced premium materials</p>
                  </div>
                </div>
                <p className="text-sm text-white">
                  Each custom jewellery piece is quality-tested in our Hiripitiya workshop to meet international standards
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 border-4 border-luxury-primary/30 rounded-full"
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
                className="absolute top-20 -left-4 w-6 h-6 bg-luxury-primary rounded-full"
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
              <Sparkles className="w-6 h-6 text-luxury-primary" />
              <h3 className="text-3xl font-bold text-white">Western Jewellers Brand Values</h3>
              <Sparkles className="w-6 h-6 text-luxury-primary" />
            </div>
            <div className="w-24 h-1 bg-royal-gradient mx-auto mb-4 rounded-full"></div>
            <p className="text-white max-w-2xl mx-auto">
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
                className="text-center group glass-luxury p-8 rounded-2xl border border-luxury-primary/20 shadow-lg hover:shadow-luxury-primary/20"
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
                  className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 12,
                    transition: { duration: 0.2 }
                  }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-luxury-primary mb-3">{value.title}</h4>
                <p className="text-white">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
        name={modalImage.name}
      />
    </section>
  );
};

export default About;
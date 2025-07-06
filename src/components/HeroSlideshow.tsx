import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImageModal from './ImageModal';

const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; name: string; clickPosition?: { x: number; y: number } } | null>(null);
  
  const heroImages = [
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186714/IMG_3153_i3b43h.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186713/IMG_3146_yxa5vn.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186711/IMG_3152_bmnho0.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186711/IMG_3161_mybxsd.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186708/IMG_3164_he8rzy.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186707/IMG_3139_k5hr9s.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186706/IMG_3163_lkjsml.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751188238/IMG_3169_xal1hx.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186702/IMG_3162_oiurdl.webp',
    'https://res.cloudinary.com/devpq4myi/image/upload/v1751186698/IMG_3159_wlpwbo.webp'
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (event: React.MouseEvent) => {
    const clickPosition = { x: event.clientX, y: event.clientY };
    setModalImage({ 
      src: heroImages[currentIndex], 
      alt: `Jewelry Image ${currentIndex + 1}`, 
      name: 'Western Jewellers',
      clickPosition 
    });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Image Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onClick={handleImageClick}
          >
            <OptimizedImage
              src={heroImages[currentIndex]}
              alt={`Jewelry showcase ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Minimal and elegant */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Dot Indicators - Clean and minimal */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white/80 z-10"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: 5, 
            ease: "linear",
            repeat: Infinity
          }}
          key={currentIndex}
        />
      </section>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={true}
          onClose={closeModal}
          src={modalImage.src}
          alt={modalImage.alt}
          name={modalImage.name}
          clickPosition={modalImage.clickPosition}
        />
      )}
    </>
  );
};

export default HeroSlideshow;
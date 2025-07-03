import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ImageSlideshowProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
  imageClassName?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  autoPlay = true,
  interval = 4000,
  showControls = true,
  showDots = true,
  className = '',
  imageClassName = '',
  overlay = false,
  overlayOpacity = 0.3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    if (autoPlay) setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) setIsPlaying(true);
  };

  if (images.length === 0) return null;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <OptimizedImage
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`w-full h-full ${imageClassName}`}
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </motion.div>
      </AnimatePresence>

      {overlay && (
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          <motion.button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-primary/80 hover:bg-luxury-primary text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 z-10 shadow-2xl border border-white/20"
            whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(65, 105, 225, 0.6)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-primary/80 hover:bg-luxury-primary text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 z-10 shadow-2xl border border-white/20"
            whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(65, 105, 225, 0.6)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && images.length > 1 && (
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                index === currentIndex 
                  ? 'bg-luxury-primary border-white scale-125 shadow-lg' 
                  : 'bg-white/30 border-white/50 hover:bg-white/60 hover:border-white'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      )}

      {/* Progress Bar */}
      {autoPlay && isPlaying && images.length > 1 && (
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-luxury-primary z-10"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: interval / 1000, 
            ease: "linear",
            repeat: Infinity
          }}
          key={currentIndex}
        />
      )}
    </div>
  );
};

export default ImageSlideshow;
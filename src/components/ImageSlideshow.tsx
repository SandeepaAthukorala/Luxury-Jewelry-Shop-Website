import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSlideshowProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
  imageClassName?: string;
  overlay?: boolean;
  onImageClick?: (src: string) => void;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showDots = true,
  className = '',
  imageClassName = '',
  overlay = false,
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, images.length]);

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(images[currentIndex]);
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full h-full object-cover aspect-[4/3] ${imageClassName}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          onClick={handleImageClick}
        />
      </AnimatePresence>

      {overlay && <div className="absolute inset-0 bg-black bg-opacity-30"></div>}

      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;
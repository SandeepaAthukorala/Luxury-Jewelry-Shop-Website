import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  name: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  name 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative z-10 max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="relative">
          <OptimizedImage
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority={true}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
          />
          
          {/* No product name overlay anymore */}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  name: string;
  clickPosition?: { x: number; y: number };
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  name,
  clickPosition 
}) => {
  useEffect(() => {
    if (isOpen) {
      // Scroll to top of page when modal opens
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Add keyboard event listener for ESC key
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Add custom styles to document head
      const styleId = 'image-modal-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .image-modal-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,40,0.98)) !important;
            backdrop-filter: blur(10px) !important;
            z-index: 999999 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            animation: modalFadeIn 0.3s ease-out !important;
            padding: 20px !important;
            box-sizing: border-box !important;
          }
          @keyframes modalFadeIn {
            from { opacity: 0; backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(10px); }
          }
          @keyframes imageZoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes imageZoomFromClick {
            from { 
              transform: scale(0.1); 
              opacity: 0;
            }
            to { 
              transform: scale(1); 
              opacity: 1;
            }
          }
          .image-modal-container {
            position: relative !important;
            max-width: 90vw !important;
            max-height: 90vh !important;
            animation: imageZoomIn 0.4s ease-out !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            margin: auto !important;
          }
          .image-modal-container.from-click {
            animation: imageZoomFromClick 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
          }
          .image-modal-close {
            position: absolute !important;
            top: -50px !important;
            right: -10px !important;
            background: linear-gradient(135deg, #d4af37, #f4e4bc) !important;
            color: #1a1a1a !important;
            border: 2px solid rgba(255,255,255,0.3) !important;
            border-radius: 50% !important;
            width: 44px !important;
            height: 44px !important;
            cursor: pointer !important;
            font-size: 20px !important;
            font-weight: bold !important;
            box-shadow: 0 4px 20px rgba(212,175,55,0.4) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 1000000 !important;
            transition: all 0.3s ease !important;
          }
          .image-modal-close:hover {
            background: linear-gradient(135deg, #f4e4bc, #d4af37) !important;
            transform: scale(1.1) rotate(90deg) !important;
            box-shadow: 0 6px 25px rgba(212,175,55,0.6) !important;
          }
          .image-modal-image {
            width: auto !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: 80vh !important;
            border-radius: 12px !important;
            display: block !important;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1) !important;
            transition: transform 0.3s ease !important;
            object-fit: contain !important;
          }
          .image-modal-image:hover {
            transform: scale(1.02) !important;
          }
          .image-modal-title {
            position: absolute !important;
            bottom: -60px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            background: linear-gradient(135deg, rgba(212,175,55,0.9), rgba(244,228,188,0.9)) !important;
            color: #1a1a1a !important;
            padding: 12px 24px !important;
            border-radius: 25px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            text-align: center !important;
            box-shadow: 0 4px 20px rgba(212,175,55,0.3) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            white-space: nowrap !important;
            max-width: 90vw !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
        `;
        document.head.appendChild(style);
      }
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
    
    return () => {
      // Cleanup styles when component unmounts
      const style = document.getElementById('image-modal-styles');
      if (style) {
        style.remove();
      }
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const containerStyle = clickPosition ? {
    transformOrigin: 'center center'
  } : {};

  return (
    <div 
      className="image-modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className={`image-modal-container ${clickPosition ? 'from-click' : ''}`}
style={{
  ...containerStyle,
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 0,
  minHeight: 0,
  flexShrink: 1,
}}

        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="image-modal-close" onClick={onClose} aria-label="Close image modal">
          ×
        </button>
        
        {/* Image */}
        <img
          className="image-modal-image"
          src={src}
          alt={alt}
          onLoad={() => {
            // Image loaded successfully
          }}
          onError={(e) => {
            // Try fallback: decode the URL and try again
            const fallbackSrc = decodeURIComponent(src);
            
            if (e.currentTarget.src !== fallbackSrc) {
              e.currentTarget.src = fallbackSrc;
            }
          }}
        />
        
        {/* Image Title */}
        <div className="image-modal-title">
          {name}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;